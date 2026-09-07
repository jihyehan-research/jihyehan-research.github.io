# Jihye Han — personal website

Live site: https://jihyehan.com

This repository contains both the editable website source and the generated site published by GitHub Pages.

## Your working folder

`/Users/hanj24/Documents/GitHub/jihyehan-research.github.io`

Use this folder for all future edits. The old ChatGPT project folder is a backup, not the active project.

## Files to edit

| Content | Editable file |
| --- | --- |
| Homepage and About me | `app/page.tsx` |
| Research | `app/research/page.tsx` |
| Publication titles, authors, journals, years, DOIs | `app/publications.json` |
| Publication page heading | `app/publications/page.tsx` |
| Media coverage | `app/media/page.tsx` |
| Navigation menu | `app/site-header.tsx` |
| Footer and browser title | `app/layout.tsx` |
| Fonts, spacing, colors | `app/globals.css` |
| PDF shown by the CV menu and download links | `public/Jihye-Han-CV.pdf` |
| Headshot | `public/jihye-han.jpg` |

`docs/` is generated automatically. Do not edit it by hand. The hidden `.git` folder stores Git history; do not edit its contents.

## Update with GitHub Desktop

1. Select this repository in GitHub Desktop. Click **Fetch origin**, then **Pull origin** if offered, before editing.
2. Edit a source file listed above and save it.
3. In Terminal, run:

   ```sh
   cd "/Users/hanj24/Documents/GitHub/jihyehan-research.github.io"
   npm run build
   ```

4. Continue only when the build succeeds. It updates `docs/` automatically.
5. In GitHub Desktop, review the changes. Both your source edits and generated `docs/` changes should be selected.
6. Enter a summary such as `Update About me`, then click **Commit to main**.
7. Click **Push origin**.
8. Wait for the newest deployment in the repository's **Actions** tab to succeed, then refresh https://jihyehan.com.

Saving a source file alone does not publish it. The steps are **save → build → commit → push**.

## The same workflow in Terminal

Run these in the working folder, pulling before you edit:

```sh
git pull --ff-only
```

After saving your edits:

```sh
npm run build
git status --short
git diff --stat
git add .
git commit -m "Update About me"
git push
```

Stop and resolve any error before continuing. Change the commit message to describe your update. Review the listed files before committing; do not add personal notes or credentials.

## Preview before publishing

```sh
npm run dev
```

Open the local address printed in Terminal. Save source edits to refresh the preview. Press Control+C to stop the preview. Previewing does not publish.

## New computer or missing dependencies

Install a current supported Node.js version (22.13 or newer; Node 24 LTS is suitable), clone this repository, and run `npm ci` in the clone. Then use the same workflow above.

## Text and paragraph examples

```tsx
<p>First paragraph.</p>
<p>Second paragraph.</p>
```

Use `<br />` for a line break without a paragraph gap. A newline in the source alone does not create a visible break. Preserve JSX tags and JSON quotation marks/commas when editing text.

## Replace your CV

Replace `public/Jihye-Han-CV.pdf`, keeping the exact filename. Build, commit, and push. The same PDF is used by every CV link. Publication titles on the website are maintained separately in `app/publications.json`.

## Hosting settings

GitHub Pages publishes from **main → /docs**. Keep `public/CNAME` set to `jihyehan.com` and retain `public/.nojekyll`. The build copies them into `docs/`. HTTPS is enabled.

Editing source directly on GitHub without rebuilding will not update the site. This setup uses a local build, not an automatic source-build workflow.

## Undo a mistake

Restore the previous wording in the source, build again, and commit/push the correction. Git retains previous versions. Avoid force pushes and do not delete the repository to undo an edit.
