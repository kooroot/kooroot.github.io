/**
 * The project taxonomy, and the only place it is written down.
 *
 * This used to live in four places — the `z.enum` in content.config.ts, the
 * `categories` array and `categoryColors` map in pages/projects.astro,
 * `categoryBorders` in components/ProjectCard.astro, and `categoryColors` in
 * layouts/PostLayout.astro. Nothing tied them together, so a category could
 * exist in the schema and be missing from a color map, and the failure was
 * silent: `map[category]` returns undefined, `class={`... ${undefined}`}`
 * renders the literal string "undefined" as a class name, and the heading just
 * shows up unstyled. PostLayout had exactly that hole — `AI Engineering` was
 * never added to it, so every AI project's badge quietly fell through to the
 * generic accent style.
 *
 * Now the schema enum is derived from this array, so a category cannot be
 * accepted by the content collection without also carrying its three class
 * strings. Adding the sixth category means adding one entry here.
 *
 * The class strings are written out in full rather than composed from a hue
 * name, because Tailwind scans source text for complete class names — a
 * template literal like `text-${hue}-400` produces no CSS at all.
 */

export interface CategoryStyle {
  /** Section heading on /projects. Large bold text, so 3:1 is the AA floor. */
  readonly heading: string;
  /** Hover treatment on a project card in the grid. Decorative. */
  readonly cardHover: string;
  /** Pill on a project detail page. Tinted fill, so it needs 4.5:1 at 12px. */
  readonly badge: string;
}

export interface Category extends CategoryStyle {
  readonly name: string;
}

export const PROJECT_CATEGORIES = [
  {
    name: 'Blockchain Research',
    heading: 'text-cyan-400',
    cardHover: 'hover:border-cyan-500/50 hover:shadow-cyan-500/5',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
  {
    name: 'Blockchain Development',
    heading: 'text-green-400',
    cardHover: 'hover:border-green-500/50 hover:shadow-green-500/5',
    badge: 'bg-green-500/10 text-green-400 border-green-500/20',
  },
  {
    name: 'Blockchain Node Operation',
    heading: 'text-purple-400',
    cardHover: 'hover:border-purple-500/50 hover:shadow-purple-500/5',
    badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  },
  {
    name: 'AI Engineering',
    heading: 'text-amber-400',
    cardHover: 'hover:border-amber-500/50 hover:shadow-amber-500/5',
    badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  },
  {
    // rose-400 is the only remaining hue that stays clearly apart from the four
    // above at a glance (cyan / green / purple / amber) and still clears AA as
    // text: 7.36:1 on `primary`, 6.73:1 on `card`, 6.13:1 on its own 10% tint.
    name: 'Game Development',
    heading: 'text-rose-400',
    cardHover: 'hover:border-rose-500/50 hover:shadow-rose-500/5',
    badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
  },
] as const satisfies readonly Category[];

export type CategoryName = (typeof PROJECT_CATEGORIES)[number]['name'];

/**
 * The categories the homepage's three featured slots draw from.
 *
 * The homepage used to sort every `show_tile` project by date and take the top
 * three, so the front page showed whatever happened to ship last. Game
 * Development is 2 of 56 projects and it held 2 of the 3 slots. Recency is
 * still the tiebreaker — it just picks from the work this site exists to show.
 */
export const FEATURED_CATEGORIES = [
  'Blockchain Development',
  'AI Engineering',
] as const satisfies readonly CategoryName[];

const FEATURED = new Set<string>(FEATURED_CATEGORIES);

/** Same tolerance for plain strings as `styleFor` — see the note there. */
export const isFeaturedCategory = (name: string): boolean => FEATURED.has(name);

/**
 * The tuple form `z.enum` needs. Deriving it here is the whole point: the
 * schema and the styling can no longer drift apart.
 */
export const CATEGORY_NAMES = PROJECT_CATEGORIES.map((c) => c.name) as unknown as [
  CategoryName,
  ...CategoryName[],
];

const BY_NAME = new Map<string, Category>(PROJECT_CATEGORIES.map((c) => [c.name, c]));

/**
 * Components receive `category` as a plain string (it crosses an Astro prop
 * boundary, where the literal union is lost), so the lookup has to tolerate a
 * miss. It falls back to the neutral accent treatment rather than emitting
 * `undefined` into a class list.
 */
export const styleFor = (name: string): CategoryStyle =>
  BY_NAME.get(name) ?? {
    heading: 'text-text-primary',
    cardHover: 'hover:border-accent/50',
    badge: 'bg-secondary text-accent border-accent/20',
  };
