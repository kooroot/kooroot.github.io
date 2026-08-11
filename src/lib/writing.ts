import type { CollectionEntry } from 'astro:content';

export type WritingEntry = CollectionEntry<'writing'>;

export interface WritingCard {
  /** The entry whose title and metadata head the card. */
  lead: WritingEntry;
  /** Both language versions when the entry belongs to a KO/EN pair; empty otherwise. */
  versions: WritingEntry[];
}

export const byDateDesc = (a: WritingEntry, b: WritingEntry) =>
  b.data.date.getTime() - a.data.date.getTime();

/** Pieces published elsewhere link out; local ones resolve to their detail page. */
export const isExternal = (post: WritingEntry) => Boolean(post.data.external_url);

export const hrefOf = (post: WritingEntry) => post.data.external_url ?? `/writing/${post.id}`;

/**
 * Collapses entries sharing a `pair` key into a single card so a piece published
 * in both Korean and English reads as one work rather than two. The English
 * title heads the card when both versions exist. Unpaired entries stand alone
 * with an empty `versions` array.
 */
export function toCards(posts: WritingEntry[]): WritingCard[] {
  const cards: WritingCard[] = [];
  const claimed = new Set<string>();

  for (const post of posts) {
    const key = post.data.pair;
    if (!key) {
      cards.push({ lead: post, versions: [] });
      continue;
    }
    if (claimed.has(key)) continue;
    claimed.add(key);

    const versions = posts
      .filter((p) => p.data.pair === key)
      .sort((a, b) => a.data.lang.localeCompare(b.data.lang));
    cards.push({ lead: versions.find((v) => v.data.lang === 'en') ?? post, versions });
  }

  // A pair enters the list at the position of whichever version came first in
  // `posts`, but the card displays the *lead* version's date. Re-sorting by the
  // lead keeps the rendered date column monotonic when the two versions of a
  // pair carry different dates.
  return cards.sort((a, b) => byDateDesc(a.lead, b.lead));
}
