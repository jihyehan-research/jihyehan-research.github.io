#!/usr/bin/env node
// Run from the website root. Optional argument: another publication JSON path.
import { readFileSync } from 'node:fs';

const file = process.argv[2] ?? 'app/publications.json';
let papers;
try {
  papers = JSON.parse(readFileSync(file, 'utf8'));
} catch (error) {
  console.error(`Cannot read valid JSON from ${file}: ${error.message}`);
  process.exit(1);
}
if (!Array.isArray(papers)) {
  console.error('The top level must be an array: [ ... ].');
  process.exit(1);
}
const errors = [];
const ids = new Set();
const dois = new Set();
for (const [index, paper] of papers.entries()) {
  const label = `Record ${index + 1}`;
  if (!paper || typeof paper !== 'object' || Array.isArray(paper)) {
    errors.push(`${label}: expected an object.`);
    continue;
  }
  if (!Number.isInteger(paper.id) || paper.id < 1) errors.push(`${label}: id must be a positive integer.`);
  if (ids.has(paper.id)) errors.push(`${label}: duplicate id ${paper.id}.`);
  ids.add(paper.id);
  for (const key of ['authors', 'title', 'journal', 'year', 'doi']) {
    if (typeof paper[key] !== 'string' || !paper[key].trim()) errors.push(`${label}: ${key} must be nonempty text.`);
  }
  if (typeof paper.year !== 'string' || !/^\d{4}$/.test(paper.year)) errors.push(`${label}: year must be a four-digit string, such as "2026".`);
  if (typeof paper.doi !== 'string' || !/^10\.\d{4,9}\/\S+$/i.test(paper.doi)) errors.push(`${label}: use a DOI identifier such as 10.1234/example, without a URL prefix.`);
  const doi = typeof paper.doi === 'string' ? paper.doi.toLowerCase().trim() : '';
  if (doi && dois.has(doi)) errors.push(`${label}: duplicate DOI ${paper.doi}.`);
  dois.add(doi);
  if (!Array.isArray(paper.topics) || paper.topics.some(t => typeof t !== 'string' || !t.trim())) errors.push(`${label}: topics must be an array of nonempty strings, or [].`);
  if (typeof paper.highlighted !== 'boolean') errors.push(`${label}: highlighted must be true or false, without quotes.`);
}
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Checked ${papers.length} publication records in ${file}. Structure and unique IDs/DOIs are valid.`);
console.log('Still check citation accuracy, DOI destinations, topic spelling against the filter list, and display order manually.');
