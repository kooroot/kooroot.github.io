---
title: Liquidity Staking Research
description: Research on liquid staking protocols and restaking mechanisms
image: /images/blockchain-network.jpg
category: Blockchain Research
show_tile: true
tech_stack: ["Ethereum", "Liquid Staking", "DeFi", "EigenLayer", "Lido"]
date: 2025-08-20
---

## Problem
Liquid staking and restaking now account for a large share of staked ETH, but their economic models — validator-set management, withdrawal queue design, **slashing propagation**, and **LRT peg mechanics** — differ materially between protocols. Selecting a staking strategy or integrating an LST/LRT as collateral requires understanding these differences rather than treating the tokens as fungible yield wrappers.

## Approach
- **Major-protocol coverage first**: Studied Lido, Rocket Pool, and Coinbase to establish a baseline for validator management and peg mechanisms before moving into restaking.
- **Restaking as distinct risk class**: Treated EigenLayer and LRT protocols separately because their slashing exposure compounds rather than replaces underlying staking risk.
- **Yield decomposition**: Broke reported APR into base staking, MEV, restaking rewards, and DeFi composability layers to enable like-for-like risk-adjusted comparison.
- **On-chain data over marketing material**: Relied on Dune dashboards and validator data for empirical yield and queue-latency figures.

## Implementation

### Liquid Staking Protocols
Analyzed Lido (stETH), Rocket Pool (rETH), and Coinbase (cbETH) architectures. Compared validator set management and withdrawal queue implementations, evaluated staking derivative peg stability mechanisms, and studied protocol fee structures and their impact on staker yields.

### Restaking & EigenLayer
Researched EigenLayer's restaking model and Actively Validated Services (AVS). Analyzed slashing risk propagation across restaking layers, studied Liquid Restaking Token protocols (EtherFi, Renzo, Puffer), and evaluated economic security implications of shared security models.

### Yield Analysis
Compared base staking yields across protocols, analyzed additional yield sources from MEV, restaking, and DeFi composability, and evaluated risk-adjusted returns across different staking strategies.

## Findings
- **Peg stability** on major LSTs is driven more by withdrawal-queue reliability and secondary-market liquidity than by protocol fee differences.
- **Restaking stacks slashing risk**: AVS-level slashing events can compound on top of base-layer slashing, so LRT yields must be weighed against this non-linear tail risk.
- Headline LRT APRs often mix restaking rewards with **point-based speculative yield**, and decomposing these sources is necessary for honest comparison.
- Shared-security models materially reduce capital cost for AVS operators but centralize exposure at the underlying LST issuer.

## Technologies
- **Protocols**: Lido, Rocket Pool, EigenLayer, EtherFi
- **Tools**: Dune Analytics, on-chain data analysis
- **Networks**: Ethereum mainnet, Holesky testnet
