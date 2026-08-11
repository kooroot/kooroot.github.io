# Writing backlog

Ideas that are not on the public roadmap.

`/writing` renders every entry in the `writing` collection with `draft: true` under
a **Planned / In progress** heading. That is a public commitment, so the number of
entries carrying it is a design decision, not a side effect of how many ideas exist.
Seven planned pieces next to seven published ones reads as a backlog, not a pipeline.

The three that stayed in the collection are the ones closest to what is being built
now — account abstraction signing models, the memory-graph primitive, and audit
pattern recognition. The four here are still good ideas; they are just not promises.

**To promote one back**, move it into `src/content/writing/` and it appears under
Planned again — the collection is the only thing the page reads:

```
git mv docs/writing-backlog/<file>.md src/content/writing/
```

Nothing else needs to change. Each file already carries a valid frontmatter block,
including a `related_project` that resolves to a real entry in `src/content/projects/`.
