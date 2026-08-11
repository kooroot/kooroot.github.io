# PRODUCT.md — kooroot.dev

> Drafted 2026-08-11 from the existing codebase and the site owner's stated goals.
> Treat the strategic sections as a working hypothesis; correct anything that reads wrong.

## Register

**Brand.** This is a personal portfolio: the design *is* the product. Every route
(`/`, `/about`, `/projects`, `/writing`, `/devrel`) is a persuasion surface, not a tool
someone operates. There is no app shell, no auth, no dashboard.

## What this is

A statically built portfolio and technical-writing archive for a Korean blockchain
engineer and researcher. Astro 5 + Tailwind, content-collection driven, deployed to
GitHub Pages at `kooroot.dev`. Projects, writing, and role-specific views all read from
the same validated collections — nothing on a page is hand-maintained HTML.

## Who it is for

1. **Hiring managers and founders in crypto**, arriving from an application or a DM,
   scanning for whether the claims survive a click. They read fast and leave faster.
2. **Recruiters for a specific role.** `/devrel` exists for this: a targeted deep link
   that reframes the same body of work for a Developer Relations reader. It is
   deliberately absent from the nav.
3. **Engineers who found a piece of writing** and followed it back to the source.

Their job-to-be-done is identical in all three cases: *decide, in under a minute,
whether this person actually did the work.*

## Purpose

Convert scattered evidence — 26 repos, published protocol documentation, a developer
community, a live paid product — into something a reader trusts. The site's whole
argument is **verifiability**: derived counts instead of asserted ones, links out to the
actual publication, plain statements of what is *not* proven. Any design move that makes
a claim feel inflated works against the product.

## Personality

**Precise · plainspoken · load-bearing.**

The voice of good engineering documentation, not of a marketing page. Numbers appear
because they are measurements, never because a number looks impressive. Where a caveat
exists it is printed next to the claim.

## Anti-references

- **The generated standalone DevRel page** the owner rejected in favor of `/devrel`:
  its own color system, its own fonts, its own HTML file. Off-brand at every level while
  claiming to represent the same person. *Never fork the design system for one page.*
- **SaaS landing-page grammar.** Hero-metric triptychs, gradient headline text,
  identical icon-heading-text card grids, a tracked uppercase eyebrow above every
  section. The site already resists most of this; keep it out.
- **Unearned superlatives.** "Cutting-edge", "revolutionary", "10x". If a sentence would
  not survive an interviewer asking "show me", it does not ship.

## Strategic design principles

1. **Derive, don't assert.** Counts on a page come from `.length` on a collection query.
   When the collection changes, the copy is still true.
2. **One design system, many views.** A new audience gets a new *route*, never a new
   stylesheet. `/devrel` and `/writing` share `src/lib/writing.ts` for exactly this
   reason.
3. **Differentiate sections by structure, not by label.** A page earns its rhythm from
   varied treatment — a feature panel, a dense manifest, an editorial list — not from a
   kicker announcing that a new section has started.
4. **Bilingual is content, not chrome.** Korean and English pieces sit in one collection
   joined by a `pair` key. The site itself is English (`<html lang="en">`); it does not
   pretend to be localized software.
5. **Restraint has a floor.** Dark, near-monochrome, one accent — but hierarchy must
   still be unmistakable. Uniform gray on uniform cards is a failure, not minimalism.

## Accessibility

Every text token clears WCAG AA (4.5:1) on all three surfaces — `primary`
`#0a0a0a`, `secondary` `#111111`, `card` `#161616` — because the site's small type
is mostly 11–12px and therefore counts as normal text, not large text.

| token | value | on primary | on secondary | on card |
|---|---|---|---|---|
| `text-primary` | `#f5f5f5` | 18.16 | 17.32 | 16.60 |
| `text-secondary` | `#a3a3a3` | 7.85 | 7.49 | 7.17 |
| `text-muted` | `#808080` | 5.01 | 4.78 | 4.58 |
| `accent` | `#3b82f6` | 5.38 | 5.13 | 4.92 |

`text-muted` is for short labels and metadata only, never body copy.

Two traps this ramp does not protect against on its own, both of which have already
bitten this codebase:

- **A tint under accent text.** `text-accent` on `bg-accent/10` over `card` composites
  to `#1a212c`, dropping accent from 4.92:1 to **4.40:1**. Accent-colored labels get a
  border, not a fill.
- **An `opacity-*` wrapper.** Opacity composites the text *and* its background, so a
  passing pair silently fails inside it — `text-muted` in an `opacity-80` card measures
  **3.51:1**. De-emphasize with token choice and border style, never with opacity.

Solid accent-filled buttons use `accent-strong` `#2563eb` (white on it: 5.17:1).
White on plain `accent` is only 3.68:1 and must not carry button labels.

The five project-category hues are the one place a `-500/10` tint under same-hue
text is allowed, because all five clear AA even composited. Lowest of the fifteen
pairs is `rose-400` on `rose-500/10` over `card` at **6.13:1**; the category badge
is the only tinted-fill label on the site. They live in `src/lib/categories.ts`,
which is also the source the content-collection enum is derived from — a category
cannot exist without its class strings, because that failure is silent (`undefined`
renders as a class name and the heading just looks unstyled).
Every animation needs a `prefers-reduced-motion: reduce` path. Reveal animations must
enhance an already-visible default — content must never be gated behind a JS-added class.
