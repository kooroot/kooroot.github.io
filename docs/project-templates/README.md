# Project entry templates

Scaffolding for `src/content/projects/*.md`. Copy one out, rename it, fill it in.

These live here rather than in the content directory because the collection's
glob is `**/*.md` and `src/pages/projects/[...slug].astro` builds a page for
every entry it returns — `show_tile: false` only hides the card on `/projects`,
it does not stop the detail page from being generated. While these files sat in
the collection, `/projects/template-development/`, `/projects/template-research/`
and `/projects/template-node-operation/` were publicly reachable pages titled
"Project Title", each linking to `https://github.com/kooroot/repo-name`.

`category` must be one of the names in `src/lib/categories.ts`.
