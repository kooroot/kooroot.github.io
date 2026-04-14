---
title: Smart Contract Security Audit
description: DEX & Lending Protocol Audit Reports and TON Staking Audit
image: /images/security-lock.jpg
category: Blockchain Research
show_tile: true
tech_stack: ["Solidity", "Foundry", "Security", "Audit"]
github: https://github.com/kooroot/Audit
date: 2023-10-15
---

## Problem
Audit skill develops through repeated pattern recognition across many implementations of the same primitive, not through a single deep engagement. A corpus of 25+ DEX, lending, and staking implementations — each with its own deviations from canonical patterns — was available through DreamplusAcademy and a TON v2 engagement, and warranted systematic review.

## Approach
- **Same-primitive repetition**: Audited 13 DEX and 12 lending implementations rather than rotating across primitives, because repeated exposure to AMM and lending code surfaces recurring vulnerability classes faster.
- **AMM focus on swap-path invariants**: Targeted fee rounding, k-invariant violations, and LP share calculation because these are the dominant DEX bug classes.
- **Lending focus on liquidation and oracle**: Prioritized collateral accounting, liquidation math, and oracle dependencies since these are where lending forks most often diverge dangerously from their source protocols.
- **TON staking as contrast case**: Audited the TON v2 staking contract in Foundry to test whether the patterns learned from Solidity DEX/lending audits transferred to a different staking primitive.

## Implementation

### DEX Protocol Audits
Audited 13 DEX contract implementations from DreamplusAcademy. Analyzed AMM logic, liquidity pool security, and fee mechanisms, identifying common vulnerability patterns in swap functions and LP share accounting.

### Lending Protocol Audits
Audited 12 lending contract implementations. Reviewed collateral management and liquidation logic, and assessed oracle dependency and price manipulation risks across the corpus.

### TON Staking v2 Audit
Independent security audit of the TON staking v2 protocol. Used Foundry-based testing and verification to analyze the staking mechanism and reward distribution logic.

## Outcome
- Completed audit reports for 25+ smart contract implementations across DEX, lending, and staking primitives.
- Recurring vulnerability patterns catalogued across swap fee rounding, liquidation threshold handling, and oracle staleness.
- Methodology validated across a non-Solidity target (TON v2), confirming transferability of core review patterns.

## Technologies
- **Smart Contracts**: Solidity, Foundry
- **Security Tools**: Static analysis, manual review
- **Frameworks**: Hardhat, Foundry (Forge)
