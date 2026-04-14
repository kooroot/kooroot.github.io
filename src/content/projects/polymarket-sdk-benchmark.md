---
title: Polymarket SDK Benchmark
description: Cross-language performance benchmark of Polymarket CLOB SDKs
image: /images/data-analytics.jpg
category: Blockchain Research
show_tile: true
tech_stack: ["Python", "TypeScript", "Rust", "Polymarket", "Benchmark"]
github: https://github.com/kooroot-company/polymarket-sdk-benchmark
date: 2026-01-15
---

## Problem
Choosing an SDK for a production prediction-market trading system requires more than README claims. The Python, TypeScript, and Rust Polymarket CLOB SDKs each advertise performance, but no side-by-side measurement existed covering median latency, tail latency, and consistency under repeated load — the metrics that actually matter for an order-routing service.

## Approach
- **Warmup then measure**: 3 warmup iterations per endpoint followed by 30 measured runs to eliminate cold-start bias.
- **Multi-endpoint coverage**: `get_ok` health check, orderbook fetch, midpoint price, and WebSocket latency — the endpoints a trading bot actually hits.
- **Percentile-based analysis**: p50, p95, p99 rather than mean, since trading systems are dominated by tail latency.
- **Stability ratio (p95/p50)** as a first-class metric, treating consistency as equally important to raw speed.
- **Identical test harness across languages** so only the SDK implementation varied.

## Implementation
Built a cross-language benchmark harness exercising the Python, TypeScript, and Rust Polymarket CLOB SDKs against the same endpoint set. Each SDK ran 3 warmup iterations plus 30 measured iterations per endpoint, with latencies collected at p50, p95, and p99. Derived a stability ratio (p95/p50) to quantify consistency. WebSocket latency was measured alongside REST endpoints to cover both transport paths a real trading system uses.

## Outcome

| Metric | Python | TypeScript | Rust |
|--------|--------|-----------|------|
| **p50 Latency** | ~308ms | ~308ms | Fastest |
| **Stability (p95/p50)** | Moderate | 1.17x (best) | Intermittent spikes |
| **Production Readiness** | Good | Most stable | Fastest but variable |

- **TypeScript SDK** showed the most consistent performance with the lowest p95/p50 ratio (1.17x).
- **Rust SDK** had the fastest median latency but exhibited intermittent tail-latency spikes.
- **Python and TypeScript** were nearly identical in average response times (~308ms p50).
- Results informed production SDK selection, with TypeScript chosen for its stability characteristics.

## Technologies
- **Languages**: Python, TypeScript, Rust
- **API**: Polymarket CLOB client
- **Analysis**: Statistical latency analysis, percentile measurements
