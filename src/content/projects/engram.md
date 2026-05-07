---
title: Engram
description: AI-native persistent memory MCP server — a structured knowledge graph with O(1) state lookups, atomic mutations, and budget-controlled context injection
image: /images/ai-robot.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["TypeScript", "MCP", "SQLite", "FTS5", "Bun", "Node.js"]
github: https://github.com/kooroot/Engram
date: 2026-04-20
---

## Problem
Stuffing agent memory into markdown files or re-embedding every conversation has a poor upper bound: updating one fact rewrites a whole document, and recall requires "embed + search + pray." Relationships stay implicit in prose, audit trails are overwritten, and context budgets balloon out of control. Agents need a persistent memory primitive that supports O(1) entity lookup, structured relationships with confidence, immutable history, and token-aware retrieval.

## Approach
- **Knowledge graph, not files, not RAG.** Entities are nodes; relationships are explicit SPO triplets with confidence; updates are `UPDATE … WHERE id = ?` rather than document rewrites.
- **Immutable event log, mutable state.** Every change appends to a SHA-256-chained event log, while node state is updated in place — separating audit trail from current truth.
- **Three interfaces, one memory.** The same graph is reachable as an MCP server (for any MCP-capable CLI), a CLI tool (`engram`), and a structured query API.
- **Token-budgeted context injection.** `get_context` is relevance-ranked and budget-capped, so an agent can ask for "≤2000 tokens of context about Alice" and receive exactly that.
- **Multi-namespace by design.** Users and projects are first-class, so separate workspaces don't share a single memory pile.

## Implementation

### MCP Server
`engram mcp` exposes the standard MCP toolset (`mutate_state`, `link_entities`, `query_engram`, `get_context`, `log_event`, `search_memory`) over stdio. Registration is one command per CLI — Claude Code, Codex, Gemini, Cursor, Claude Desktop — all backed by the same SQLite store.

### Onboarding Wizard
`engram onboard` detects every installed MCP-capable CLI (`claude`, `codex`, `gemini`), shows a multiselect of where to register Engram, and runs each tool's `mcp add` automatically. `engram doctor` then verifies registration status side-by-side across all detected clients.

### Storage and Indexing
SQLite-backed storage with FTS5 full-text indexing for sub-millisecond keyword search at 10K+ nodes. Optional embedding-backed semantic search (`OPENAI_API_KEY`) layers on top of structured graph traversal.

### Relevance-ranked Context Injection
`get_context({ entities, max_tokens })` traverses the graph from named entities, ranks by relevance and recency, and returns a compact pre-rendered block — "Alice [person] (conf: 0.95) → works_on: Engram → knows: Bob ← manages: Charlie" — so the agent doesn't pay tokens to reformat raw rows.

### Event Log and Audit Trail
Every mutation appends a chained event entry — operation, before/after diff, timestamp, hash — so the full history of a node is reconstructable even after many updates.

## Outcome
- Single npm-distributable binary (`@kooroot/engram`) installable via Bun, npm, pnpm, or yarn.
- Same memory graph reachable from Claude Code, Codex, Gemini, Cursor, and Claude Desktop through MCP, plus a direct CLI and structured query API.
- O(1) entity updates and direct graph lookup replace document rewrites and embedding searches for state operations.
- FTS5 keyword search and immutable, hash-chained event log give fast retrieval without losing audit history.

## Technologies
- **Runtime**: Bun, Node.js, TypeScript
- **Protocol**: MCP (Model Context Protocol) over stdio
- **Storage**: SQLite + FTS5; optional OpenAI embeddings for semantic search
- **Distribution**: `@kooroot/engram` on npm with `engram onboard` / `engram doctor` UX
- **Clients**: Claude Code, Codex CLI, Gemini CLI, Cursor, Claude Desktop, custom MCP clients
