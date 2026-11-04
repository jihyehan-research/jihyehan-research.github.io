# Website maintenance checklist

## Before an update
- [ ] Work in the correct repository and check for unfinished changes.
- [ ] Pull current changes only after the working tree is clean.
- [ ] Identify the source files to edit and verify the new facts.

## After editing
- [ ] Check bio, affiliation, citations, author order, dates, and links.
- [ ] Validate publication JSON if it changed.
- [ ] Test highlights, topic links, clear filter, result counts, and browser Back.
- [ ] Open the current CV from Home, navigation, and the CV page.
- [ ] Check phone width and keyboard navigation.
- [ ] Update the footer date if appropriate.
- [ ] Run the project's checks and a successful build.
- [ ] Review and commit source changes together with generated docs/.
- [ ] Push, check the Pages deployment, and test the live URLs.

## Periodically
- [ ] Check publication highlights, research descriptions, and profile links.
- [ ] Update the public CV and affiliation.
- [ ] Review dependency updates separately from content edits.
- [ ] Check domain renewal date, payment details, and recovery email.
- [ ] Keep DNS verification and source CNAME records intact.

If an update fails, keep the last working deployment and diagnose the first error.
Use the guide's revert workflow for a published mistake.
