```text
You are helping me create and later maintain a professional academic website.

CONTEXT
I am YOUR-NAME, [role] at [institution]. My audience includes researchers,
potential collaborators, and hiring committees. I am a beginner at web
development. Use the attached content worksheet, verified publications, public
CV, and headshot as the source of facts. Flag missing information. Do not invent
publications, affiliations, awards, media coverage, quotations, or links.

PAGES AND FIELDS
1. Home: name, credentials, current role and institution, one-sentence research
   focus, short biography, headshot with alt text, publications and CV links,
   email, Google Scholar, and optional ORCID, GitHub, or LinkedIn links.
2. Research: 2–4 themes. For each, show a question, why it matters, what I study,
   and topic keywords that link to the matching publication filter.
3. Publications: one chronological list with verified author order,
   exact title, journal, year, DOI link, topic tags, and optional paper/code/data
   links only when provided and appropriate to share. Put records in one JSON
   file with fields id, authors, title, journal, year, doi, topics.
   Explain the ordering rule. Bold my author name consistently if requested.
4. Media: outlet or program, coverage title, date, link, descriptive action text,
   and an optional logo with alt text. Omit this page if I supply no coverage.
5. CV: store the PDF at public/YOUR-NAME-CV.pdf and link to /YOUR-NAME-CV.pdf
   in the navigation. Include an optional page with view and download buttons.
   Explain how to replace the PDF.
Optional teaching, software, datasets, or news sections should appear only when
I supply content and ask for them.

DESIGN
Use an ivory background #FFFBF5, charcoal text #292524, terracotta accents
#9A3412, and warm gray borders #D6D3D1. Use sans-serif headings and body text.
Place navigation in a left sidebar on desktop and a top menu on mobile.
Use a wide reading column, generous spacing, and simple text links.
Avoid decorative animations. Include visible keyboard focus,
descriptive link labels, a skip link, labeled form controls, and image alt text.

BEHAVIOR
Include navigation with a working mobile menu. Publication filtering must
support an All topics option, a clear-filter action, a result count, and an
empty state. Store the topic in a ?topic= URL parameter so research links can
open it directly. Browser Back must restore the preceding filter.
Keep topic spellings consistent across files.
Include accurate page titles, descriptions, and a social-sharing image.

IMPLEMENTATION AND OWNERSHIP
Inspect the existing project before changing its framework. For a new project,
propose a simple static-compatible approach and explain the maintenance tradeoff.
Use editable page files in app/, assets in public/, and a static build that
generates docs/ for GitHub Pages. Document any differences in the final file map.
The published site must work without a Node server.
Use one repository that I own. Keep content separate from layout where practical.
Do not embed passwords, tokens, private data, or paid services I did not request.

DELIVERABLES
Create the working files in my project folder. If you cannot edit files, return
complete named files and instructions for saving them. Provide:
- a source-file map, installation steps, and exact preview/build commands;
- a documented build that produces static pages in docs/ and preserves a
  .nojekyll file and, only when configured, the custom-domain CNAME file;
- GitHub Pages setup for my USERNAME.github.io repository using main /docs;
- instructions to add a publication, change a topic, replace the CV, update my
  affiliation, and change a color without AI;
- a clear commit/push routine for publishing content updates.

ACCEPTANCE CHECKS
Check the build, every page and CV link, DOI destinations, phone-width layout,
keyboard navigation, filter clear/empty states, research-to-publication links,
and browser Back. Verify all visible content against the supplied material.
Show the draft and report unresolved placeholders. Finish the handover only
after I can locate the file for one publication edit and one CV replacement.
```
