---
title: "Designing an AI-Native Memory Primitive: Graph + Event Log vs RAG"
description: "Why agent memory built on a knowledge graph with an immutable event log beats markdown files and re-embedding — O(1) lookups, atomic updates, and token-aware retrieval."
date: 2026-06-16
tags: ["AI Engineering", "MCP", "Knowledge Graph", "Agents"]
draft: true
related_project: "engram"
---

<!--
  Grounded in the Engram project (knowledge graph, SHA-256-chained event log,
  budget-controlled context injection, MCP + CLI + query API).
-->

## TL;DR

_One paragraph: stuffing agent memory into markdown or re-embedding every conversation has a
poor upper bound — one fact edit rewrites a document, recall is "embed + search + pray." A
graph of entities + explicit relationships, backed by an immutable event log, gives O(1)
lookup, atomic updates, and token-aware retrieval instead._

## Outline

- **The failure mode** — files and RAG: relationships stay implicit, audit trails get overwritten, context budgets balloon.
- **Graph, not files, not RAG** — entities as nodes, relationships as SPO triplets with confidence; updates are `UPDATE … WHERE id = ?`.
- **Immutable log, mutable state** — append to a SHA-256-chained event log; update node state in place; separate audit trail from current truth.
- **Token-aware retrieval** — `summary` fields and a context budget so injection doesn't blow up.
- **Three interfaces, one memory** — the same graph as an MCP server, a CLI, and a query API.

## To verify before publishing

- Keep claims to what the implementation actually does; benchmark any "O(1)"/performance assertion.
