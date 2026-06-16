---
title: "Audit Pattern Recognition: Recurring Bug Classes Across 25+ DEX and Lending Forks"
description: "What auditing 13 DEX and 12 lending implementations of the same primitives teaches you — the swap-path and liquidation bug classes that keep reappearing across forks."
date: 2026-06-16
tags: ["Security", "Audit", "DeFi", "Solidity"]
draft: true
related_project: "smart-contract-audit"
---

<!--
  Grounded in the smart-contract-audit project (13 DEX + 12 lending implementations,
  AMM swap-path invariants, liquidation/oracle focus). Security methodology.
-->

## TL;DR

_One paragraph: audit skill comes from repetition across many implementations of the same
primitive, not one deep dive. Catalog the recurring AMM and lending bug classes that surface
when you review the same primitive 25 times._

## Outline

- **Why same-primitive repetition beats breadth** — pattern recognition compounds faster on AMM/lending code.
- **DEX bug classes** — fee rounding, k-invariant violations, LP-share calculation errors.
- **Lending bug classes** — collateral accounting, liquidation math, oracle dependencies.
- **Where forks diverge dangerously** — the spots where a fork "optimizes" and breaks an invariant.
- **A review order that surfaces these fastest** — what to read first in an unfamiliar fork.

## To verify before publishing

- Anonymize/aggregate findings; do not disclose specifics from any private engagement (e.g. the TON v2 audit) without permission.
