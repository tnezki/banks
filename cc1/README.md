# CC1 Chapter 1 Problem Catalog POC

This proof-of-concept converts the Chapter 1 extraction preview files into a small static catalog app.

## What is included

- `index.html` — catalog, filters, preview, and checkboxes.
- `data/catalog_index.js` — lightweight index for filtering/search.
- `data/lesson_*.js` and `data/chapter_1_closure.js` — one data file per lesson/closure.
- `assets/<lesson_slug>/` — copied figures for each lesson.
- `css/styles.css` and `js/app.js` — UI styles and behavior.

## Data shape

Each problem includes the required source fields: `id`, `number`, `chapter`, `section`, `source_type`, `html`, `assets`, and `resources`.
It also includes blank teacher-editable future fields: `topic`, `standards`, `tags`, `dok`, `teacher_notes`, and `worksheet_defaults`.

## Current scope

This first build is browse/filter/preview/select only. Worksheet generation, editing, bulk import, and workspace tools are intentionally left for the next phase.

## Counts

Total indexed cards: 106

Update notes:
- Added layout controls above the catalog: hide filters, hide list, focus preview, reset layout.
- Made the filter panel internally scrollable so lower buttons remain reachable.
- Changed source type checkboxes to compact one-line rows.
- Fixed problem list rows so single-click preview and selection checkboxes are separate controls.
- Added disabled placeholder action buttons for future new-question and export workflows.

## Edit workflow added

- The CPM problem number is locked and acts as the permanent source ID.
- Use the Edit button in a preview card to open the edit modal.
- Apply to preview updates the in-browser copy only.
- Download updated lesson JS saves the entire affected lesson file, such as lesson_1_2_4.js.
- Replace the matching file in data/ on GitHub to make edits permanent.
- Worksheet/assessment numbering should be handled later during export and can start at 1, 2, 3, etc.


## Chapter 2 Added

This build includes Chapter 1 and Chapter 2 lesson-based JS files, assets, and catalog entries. Chapter 2 was converted from verified extraction previews into lesson files.
