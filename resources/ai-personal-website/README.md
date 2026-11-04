# Tips for building a personal website using AI

A **15-minute department seminar**, followed by up to **10 minutes of Q&A**, for PhD students and early career researchers. Part 1 covers creation with AI. Part 2 covers maintenance without AI. The detailed coding guide follows the main talk as an appendix and is also available as a continuous reading document.

**Share this folder:** https://github.com/jihyehan-research/jihyehan-research.github.io/tree/main/resources/ai-personal-website

**Case study:** [Jihye Han's website](https://jihyehan.com). The source at commit `a4f9b2a` informed the examples. This resource documents the site's actual React/TypeScript, vinext, and GitHub Pages workflow. It is not a claim that this framework is the best choice for every new researcher website.

## Open the materials

Use GitHub's **Code > Download ZIP** at the repository root. Extract it and open `resources/ai-personal-website/`.

- Open **seminar.html** in a browser to present. The first 14 slides, including the title, are the timed talk. The remaining slides form the reference appendix.
- Open **guide.html** for a searchable, continuous guide with copyable code.
- Keep both HTML files in the same folder for their cross-links. GitHub's file viewer shows HTML source rather than running the presentation.
- For speaker view, use `quarto preview seminar.qmd`, then press **S**. Use **Esc** for slide overview. The notes include a 15-minute pacing plan.

## Reuse the resources

| File | Purpose |
|---|---|
| `content-worksheet.md` | Gather accurate content before prompting |
| `prompts/create-website.md` | Full creation prompt with design, fields, behavior, and handover |
| `prompts/refine-and-handover.md` | Focused fixes and maintenance documentation prompts |
| `maintenance-checklist.md` | Repeatable review and upkeep checklist |
| `examples/publication-record.json` | Existing case-study record for syntax practice |
| `scripts/check-publications.mjs` | Check JSON structure, fields, and duplicate identifiers |
| `seminar.qmd` | Editable Quarto presentation |
| `_guide.qmd` | Shared guide included at the end of the deck and in the handout |
| `guide.qmd` | Continuous HTML guide wrapper |

The example record is real and already appears in the case-study site. Do not add it again. Replace teaching placeholders with your own verified content. The presentation does not require attendees to copy the presenter's biography, CV, photo, or domain.

## Render the Quarto materials

Install [Quarto](https://quarto.org/docs/download/). From this resource directory:

```bash
quarto render
quarto preview seminar.qmd
```

Rendering produces `seminar.html` and `guide.html`. No R or Python computation is required. Code examples are displayed, not executed. The HTML embeds styles and slide assets for offline reading. Speaker view works best through a local preview server. External websites still require internet.

These seminar resources live outside generated `docs/`. The website build replaces `docs/`, so do not place the only copy of seminar materials there. Sharing this GitHub folder does not require changing the website's navigation or build configuration.

## Validate publication data

From the **website repository root**:

```bash
node resources/ai-personal-website/scripts/check-publications.mjs
```

For another file, pass its path as an argument. This checks syntax and schema, not bibliographic truth, allowed-topic membership, or DOI availability. Use the guide's manual review steps as well.

## Attribution and scope

Prepared by Jihye Han for a department seminar. Attendees are welcome to adapt the newly written seminar text, prompts, worksheet, checklist, and validator with attribution. Website screenshots, personal images, publication content, and third-party marks remain subject to their respective rights. This permission does not grant reuse rights to the entire website repository.

Official technical references appear near the relevant guide steps. Domain and hosting interfaces can change. Verify current provider instructions before changing DNS.
