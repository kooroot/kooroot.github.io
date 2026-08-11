---
title: Victoria Front
description: A server-authoritative MapleStory Worlds lane-defense game built for the Global Dev Contest 2026 — where the hard problem is that the platform gave it a shared 16-player room rather than one instance per match
image: /images/esports-gaming.jpg
category: Game Development
show_tile: true
tech_stack: ["MapleStory Worlds", "mlua", "Python", "CSV data pipeline", "State machines"]
date: 2026-07-15
---

## Problem
Lane defense assumes one match per room: units spawn, waves advance, a gate falls, someone wins. The world this was built in does not give you that. It ships as a single non-instanced sector holding up to sixteen players on one map, with the instance-room path disabled. So there is no "the match" — there is a shared space that several people may walk into mid-run, and every navigation action any of them takes has to be answered without corrupting a run in progress.

## Approach
- **Elect an owner at runtime instead of assuming one.** A session owner is chosen from the present participants; leadership succession is explicit, and any ownership change that isn't a deliberate transfer tears down the live stage rather than silently rehoming it.
- **One guard, checking identity and position together.** Every shared-navigation RPC passes through a single validator that chains participant membership, an allow-list test against the current state-machine position, a profile-loaded check, and owner identity — failing closed, logging the rejection, and telling the caller.
- **Keep HP out of the engine's hit component on purpose.** Combat is resolved entirely server-side; only two properties replicate, and only to draw a health bar.
- **Author balance in a schema the runtime never sees.** Design-time analysis columns are validated and then deliberately stripped from what ships.

## Implementation

### Two-tier state machine
An outer meta flow of eleven states (boot → account loading → title → lobby → stage select → prep → battle → result → upgrade, plus two onboarding states) is driven by one server-side director. The inner match state — ready / playing / win / lose — latches exactly once, on gate destruction or base loss.

### Server-resolved combat
Damage, targeting, defense mitigation, and death all resolve on the server; the unit script holds HP itself because the engine's hit component has no HP field. Across all 37 scripts that yields **215 server-only methods against 23 client-callable RPCs**, and **33 replicated properties total**. Every piece of client polish — floating damage numbers, hit sparks, the red flash, attacker scale-punch, boss camera shake, the pixel HP bar — is written to no-op when its component is absent, so presentation can never affect combat.

### Persistence built for the failure it actually has
A per-user in-flight latch, because two overlapping writes to one key have undefined order. Failed writes park and retry on a ~2s sweep against a three-attempt budget. A per-user dirty check skips no-op writes, and the storage rate-limit error code is logged distinctly from generic failure. The reason for all of it: reward and star-commit paths refuse to credit any user whose record has not finished loading — crediting an unloaded record and then saving it would truncate that player's stored progress to just the one new grant.

### A balance pipeline with two schemas
The authoring pack carries computed design columns — combat power, raw DPS against a reference defense, effective HP, threat score, clear-time estimates — that are entirely absent from the nine shipped datasets. A 354-line Python validator enforces row counts, duplicate IDs, cross-table foreign keys, boss reachability, and main-progression composition, plus a subtle rule that any skill with a damage multiplier must carry a non-zero per-cast damage figure, which catches analysis cells nobody filled in. Designers author in tiles; conversion to engine units happens once, at the data boundary.

## Outcome
- **12,685 LOC across 37 authored scripts**, excluding 21,428 lines of vendored engine API stubs.
- The balance validator **passes on a clean checkout** — nine tables, 475 rows, exit 0.
- Playable scope is one region, ten stages; three further regions ship as data behind a server-side scope gate.

### What is not proven here
This was **built for** the MSW Global Dev Contest 2026 and was **never submitted or published** — every workspace descriptor still carries an empty world identity, and the repository's own submission checklist leaves eight of thirteen requirements outstanding. Two soft-launch blockers remain in the configuration: the non-instanced sixteen-player sector described above, and disabled authority protections.

The 164-case verification log is hand-authored Markdown, not machine output — there is no test framework, no CI, and no runnable test target in the project; the only executable check is the Python validator, and it reads the authoring pack rather than the data the game actually loads. Those two have already drifted. A separate 117-row checklist is entirely unexecuted. The party-room subsystem is 1,153 lines that have never run, and four of the nine shipped datasets are never read by any script.

## Technologies
MapleStory Worlds · mlua (`@Component` / `@Logic` scripts, `@Sync` properties, `@ExecSpace` RPC annotations) · MSW UserDataStorage · CSV and userdataset runtime tables · Python 3 (stdlib `csv`) · MSW UIBuilder
