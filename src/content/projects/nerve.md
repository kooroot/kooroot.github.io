---
title: Nerve
description: Reflexive AI orchestration CLI that routes coding tasks through a lead/reviewer agent loop with hash-checked patches
image: /images/code-matrix.jpg
category: AI Engineering
show_tile: true
tech_stack: ["Rust", "Cargo Workspace", "Claude Code", "Codex", "Tokio"]
github: https://github.com/kooroot/Nerve
date: 2026-05-06
---

## Problem
Single-agent coding has a predictable failure mode: the same model that writes a patch tends to rationalise it. Ad-hoc reviewers in a chat window are easy to skip, hard to audit, and produce no machine-readable trail of what was proposed, what was challenged, and what actually landed on disk. A reviewer needs to be a first-class step in the orchestrator, not a polite suggestion bolted on at the end.

## Approach
- **Lead / reviewer split as the core abstraction.** The lead proposes a patch; the reviewer returns `LGTM` / `REQUEST_CHANGES` / `BLOCK`; the orchestrator iterates until a configured policy accepts.
- **Generic `ModelAdapter` trait** so any CLI or model — Claude Code, Codex, or a deterministic mock — plugs in identically.
- **Patches as data, not side effects.** All changes are emitted as `NvPatch` values with SHA-256 checks; nothing touches the filesystem unless `--apply` is passed.
- **Strategies as a dispatch layer.** `consensus`, `pipeline`, and `tournament` modes route a single task through different combinations of agents.
- **Auditable by default.** Round records, event streams, and patch index live under `.nerve/` so every session is replayable.

## Implementation

### Cargo Workspace and `nv` CLI
A multi-crate Rust workspace exposes the `nv` binary. Config loading, profile matching, and a deterministic mock lead/reviewer loop give a reliable test path that runs without any LLM calls (`NERVE_ADAPTER=mock`).

### Real Subprocess Adapters
The Claude Code and Codex adapters spawn the upstream CLIs as subprocesses, parse JSONL string fields, and convert unified diffs into safe `NvPatch` values for create / modify / delete / rename operations.

### Patch Apply / Rollback with Hash Checks
`NvPatch` apply and rollback are SHA-256 verified end-to-end and indexed so previously-applied patches can be reversed deterministically.

### Strategies, Daemon, and TUI
`consensus`, `pipeline`, and `tournament` strategies dispatch the same task across configured adapter pairs. A line-oriented `daemon` mode and a terminal TUI (`--tui`) surface session summaries and per-round events. A scratch-file watcher feeds real-time cross-firing between agents during long runs.

### Machine-readable Reports
Every session can be exported as `--json` for downstream tooling, and the persistent history under `.nerve/` keeps the patch index and round records across runs.

## Outcome
- Phase 1 MVP plus the planned Phase 2/3 CLI execution features all implemented and pushed.
- Mock adapter loop is fully deterministic and tested; real Claude Code / Codex subprocess paths convert unified diffs into typed patches.
- Verification gates (fmt, clippy, full tests, config validate, mock doctor, daemon smoke, TUI smoke) all pass on the merged roadmap.
- Three-strategy dispatch (`consensus`, `pipeline`, `tournament`), persistent `.nerve/` history, daemon and TUI surfaces, and machine-readable session reports are live.

## Technologies
- **Language / Runtime**: Rust, Tokio, Cargo workspace
- **Agents**: Claude Code, Codex CLI (via `ModelAdapter` subprocess)
- **Patch Format**: `NvPatch` with SHA-256 integrity, unified-diff conversion
- **UX**: `nv` CLI, `--tui` terminal interface, `daemon` line-oriented mode
- **Audit**: `.nerve/` history, patch index, per-round event stream, `--json` reports
