---
title: Layer 2 Scaling Solutions Research
description: Research on Optimistic and ZK Rollups
image: /images/ethereum-layer2.jpg
category: Blockchain Research
show_tile: true
tech_stack: ["Ethereum", "Optimism", "zkSync", "StarkNet", "Scroll"]
date: 2024-03-20
---

## Problem
Choosing an L2 target for a new deployment requires reasoning about finality, cost, EVM compatibility, and bridge risk — dimensions that trade off differently between Optimistic and ZK rollups. Public comparisons often collapse these into a single ranking, obscuring the architectural reasons behind each trade-off and leading to poor deployment decisions.

## Approach
- **Primary-source reading** of fraud-proof and validity-proof specifications (Cannon, BOLD, zkSync Era, StarkNet).
- **zkEVM Type 1–4 taxonomy** as the framework for comparing EVM compatibility.
- **Throughput and finality benchmarking** across OP Stack chains and ZK rollups.
- **Bridge-security review** covering canonical bridges and third-party fast-withdrawal protocols.
- **Dune and L2Beat data** for on-chain validation of claimed performance.

## Implementation
For **Optimistic Rollups**, studied fraud proof mechanisms in Optimism (Cannon) and Arbitrum (BOLD), analyzed 7-day challenge window implications for cross-layer UX, evaluated sequencer decentralization roadmaps and their impact on censorship resistance, and benchmarked transaction throughput and finality times across OP Stack chains. For **ZK Rollups**, investigated validity proof systems (zk-SNARKs in zkSync Era vs zk-STARKs in StarkNet), analyzed prover cost and proof generation latency trade-offs, studied zkEVM compatibility levels (Type 1–4), and evaluated recursive proof aggregation.

| Metric | Optimistic Rollups | ZK Rollups |
|---|---|---|
| **Finality** | ~7 days (challenge period) | Minutes (proof verification) |
| **Cost** | Lower (no proof generation) | Higher (prover computation) |
| **EVM Compatibility** | Native | Varies (Type 1–4) |
| **Data Availability** | Calldata / EIP-4844 blobs | Calldata / DA layers |
| **Maturity** | Production-ready | Rapidly maturing |

Cross-layer bridge security coverage included canonical bridge trust assumptions, historical bridge-exploit patterns, and third-party protocols (Across, Stargate) for fast withdrawals.

## Findings
- **Finality vs cost is the core trade-off**: OR is cheap but slow to final, ZK is fast but pays for the prover.
- **zkEVM Type determines dev-experience cost** far more than raw throughput numbers.
- **Sequencer decentralization** is the binding censorship-resistance constraint on today's OR chains, not the fraud-proof game itself.
- **Canonical bridges inherit rollup finality**; fast-withdrawal protocols re-introduce third-party trust in exchange for UX.
- No single rollup type dominates — **the right choice is workload-specific**.

## Technologies
- **L2 Networks**: Optimism, Arbitrum, zkSync Era, StarkNet, Scroll, Linea
- **Tools**: Foundry, Hardhat, L2 SDKs
- **Data Analysis**: Dune Analytics, L2Beat data
