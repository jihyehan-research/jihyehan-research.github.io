"use client";
import { useState } from 'react';
import publications from '../publications.json';
const topics = ['first-in-class drug', 'accelerated approval', 'rare disease treatment', 'claim data analysis', 'pharmacy benefit design', 'pharmacoepidemiology', 'pharmacoeconomics', 'health decision modeling', 'cost-effectiveness analysis'];
type Paper = typeof publications[number];
function PaperContent({paper}: {paper: Paper}) { return <><p className="journal">{paper.journal}</p><h3><a className="paper-title" href={'https://doi.org/'+paper.doi}>{paper.title}</a></h3><p className="authors">{paper.authors.split(/(Han J)/).map((s,i)=>s==='Han J'?<strong key={i}>{s}</strong>:s)}.</p>{paper.topics.length>0 && <ul className="paper-topics" aria-label="Topics">{paper.topics.map(topic=><li key={topic}>{topic}</li>)}</ul>}</>; }
export default function PublicationBrowser() {
 const [topic,setTopic]=useState('all');
 const filtered=publications.filter(p=>topic==='all'||p.topics.includes(topic));
 const highlighted=publications.filter(p=>p.highlighted);
 return <>
 {highlighted.length>0 && <div className="highlights" aria-labelledby="highlight-heading"><p className="eyebrow">Selected work</p><h2 id="highlight-heading">Highlighted publications</h2><div className="highlight-grid">{highlighted.map(p=><article className="highlight-card" key={p.doi}><span className="paper-year">{p.year}</span><PaperContent paper={p}/></article>)}</div></div>}
 <div className="publication-toolbar"><div><label htmlFor="topic-filter">Filter by research topic</label><select id="topic-filter" value={topic} onChange={e=>setTopic(e.target.value)}><option value="all">All topics</option>{topics.map(t=><option key={t} value={t}>{t}</option>)}</select></div>{topic!=='all' && <button className="reset-filter" onClick={()=>setTopic('all')}>Clear filter</button>}<p role="status" aria-live="polite">{filtered.length} {filtered.length===1?'article':'articles'}{topic!=='all'?' in this topic':''}</p></div>
 {filtered.length>0 ? <ol className="papers publication-list">{filtered.map(p=><li key={p.doi}><span className="paper-year">{p.year}</span><div><PaperContent paper={p}/></div></li>)}</ol> : <div className="empty-publications"><h2>No articles in this topic yet</h2><p>Explore another research topic or return to all publications.</p><button className="button" onClick={()=>setTopic('all')}>Show all publications</button></div>}
 </>;
}
