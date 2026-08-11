---
title: "How to Benchmark an Order-Routing Path (and Why Tail Latency Is the Only Number That Matters)"
description: "A reproducible method for benchmarking CLOB SDKs across languages — warmup discipline, the endpoints a trading bot actually hits, and reading p50/p95/p99 instead of the mean."
date: 2026-06-16
tags: ["Benchmarking", "Performance", "Prediction Markets", "Rust", "TypeScript"]
draft: true
related_project: "polymarket-sdk-benchmark"
---

<!--
  Grounded in the polymarket-sdk-benchmark project (Python/TS/Rust CLOB SDKs, p50/p95/p99,
  warmup + measured runs). Methodology piece — no trading strategy or PnL.
-->

## TL;DR

_One paragraph: README performance claims are useless for order routing; what matters is tail
latency under repeated load. Lay out a measurement method anyone can re-run, and show why p99
— not the mean — decides whether an SDK is viable for a trading service._

## Outline

- **Why the mean lies** — a trading path is dominated by its worst requests; the mean hides them.
- **Warmup, then measure** — cold-start bias and why N warmup iterations precede the measured runs.
- **The endpoints that count** — health check, orderbook fetch, midpoint, WebSocket latency — not synthetic micro-benchmarks.
- **Reading percentiles** — p50/p95/p99, and what a wide p99/p50 gap tells you about consistency.
- **Cross-language caveats** — comparing Python vs TypeScript vs Rust fairly (runtime warmup, connection reuse).

## To verify before publishing

- Re-run the harness before quoting any numbers; report the exact environment.
