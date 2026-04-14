---
title: Optimistic Rollup Analytics
description: Data Collection & Analysis for Optimistic Rollup Resource Optimization
image: /images/blockchain-research.jpg
category: Blockchain Research
show_tile: true
tech_stack: ["Python", "Alchemy API", "Data Analysis"]
github: https://github.com/kooroot/Optimistic-Rollup-Data-Collector
date: 2023-12-08
---

## Problem
Running an Optimistic Rollup is resource-intensive, and public operator guidance rarely breaks down where the cost actually lands — sequencer, batcher, proposer, or DA publication. Without structured on-chain datasets it was difficult to identify which operational knobs produce real savings versus which only shift cost between components.

## Approach
- **Python + Alchemy API** as the baseline collector — well-supported endpoints for OP Stack chains.
- **Raw, reproducible storage** of fetched data so any downstream analysis can be re-run against the same snapshot.
- **Throughput and gas-consumption slicing** per transaction class to surface resource hotspots.
- **Bottleneck-first framing**: identify the binding constraint before recommending optimizations.

## Implementation
Built a Python-based data collector on top of the Alchemy API, automated on-chain data extraction from Optimistic Rollup networks, and structured raw data storage for reproducible analysis. On the analysis side, analyzed transaction throughput and gas-consumption patterns, identified resource bottlenecks in rollup operation, and documented strategies for cost-efficient rollup infrastructure.

## Findings
- **Data availability publication dominates per-transaction cost** on L1-backed rollups — other components are secondary.
- **Raw, timestamped snapshots** are more valuable than pre-aggregated dashboards for operator-side optimization work.
- **Throughput bottlenecks shift** depending on workload mix; a single optimization rarely helps across all tx classes.
- Operating a rollup with lower resources is primarily a **batching and DA-publication** problem, not a sequencer problem.

## Technologies
- **Data Collection**: Python, Alchemy API
- **Analysis**: Raw data processing, statistical analysis
- **Network**: Optimism, Ethereum L2
