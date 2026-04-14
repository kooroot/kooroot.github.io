---
title: DeFi Smart Contract Suite
description: DEX, Lending & DeFi Protocol Implementations in Solidity
image: /images/code-screen.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Solidity", "Hardhat", "JavaScript", "DeFi"]
github: https://github.com/kooroot/DEX_solidity
date: 2023-03-19
---

## Problem
Reading DeFi protocol source code without writing equivalent implementations leaves gaps in understanding the mechanics that govern AMM pricing, lending health factors, and liquidation flows. Building core primitives from scratch forces confrontation with the numeric edge cases and state-update ordering that production audits focus on.

## Approach
- **Primitive-by-primitive rebuild**: Implemented DEX, lending, and supporting contracts as independent modules rather than a monolith, so each mechanism could be reasoned about and tested in isolation.
- **Hardhat for iteration speed**: Chose Hardhat's JavaScript test harness for faster write-test cycles on unit-level invariants before graduating components to integration.
- **AMM-first ordering**: Built the constant-product DEX before the lending market so that oracle-adjacent patterns (spot pricing, slippage accounting) were already internalized before tackling collateral valuation.
- **Test-driven edge coverage**: Wrote tests around fee rounding, LP share minting on first deposit, and liquidation boundaries where real protocols most often fail.

## Implementation

### DEX Implementation
Automated Market Maker contract with liquidity pool management backed by LP tokens, token swap functionality with fee mechanisms, and pair-level accounting matching Uniswap-style constant-product semantics.

### Lending Protocol
Collateralized lending and borrowing system with liquidation logic, health factor management, and an interest rate model driving per-block accrual against deposited collateral.

### DeFi Patterns
ERC-20 utility contracts, protocol interaction patterns, and comprehensive Hardhat test suites exercising the AMM and lending modules end-to-end.

## Outcome
- A working multi-primitive DeFi suite covering DEX and lending, each independently deployable and testable.
- Hardhat test suites validating swap math, LP minting, interest accrual, and liquidation boundaries.
- Reference implementation used as a base for subsequent audit and research work.

## Technologies
- **Smart Contracts**: Solidity
- **Framework**: Hardhat
- **Testing**: JavaScript, Hardhat test suite
- **Patterns**: AMM, Lending, ERC-20
