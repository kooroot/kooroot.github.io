---
title: "DeFi Lending Protocol"
description: "ETH-collateralized USDC lending protocol with liquidation mechanics, compound interest, and oracle integration"
image: /images/defi-crypto.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Solidity", "Foundry", "DeFi", "Oracle"]
github: https://github.com/kooroot/Lending_solidity
date: 2023-08-10
---

## Problem
Compound and Aave abstract the core lending mechanics behind years of layered optimizations, making the underlying invariants hard to see. Building an ETH-collateralized USDC lending market from scratch exposes the exact math that governs **LTV**, **liquidation thresholds**, and **per-block compound interest** — knowledge that is prerequisite to auditing any lending fork.

## Approach
- **Fixed parameters over configurability**: Locked LTV at 50% and liquidation threshold at 75% to focus engineering effort on correctness of the core flows rather than governance surface.
- **Ray math for compound interest**: Adopted the Aave-style ray (27-decimal) per-block accrual factor (`1.000000000315...`) to preserve precision across many blocks without drift.
- **Oracle-abstracted pricing**: Kept the price feed behind an interface so the liquidation health-factor math could be tested against injected prices instead of on-chain oracles.
- **Foundry over Hardhat**: Picked Foundry for faster Solidity-native tests against liquidation boundaries and interest-accrual edge cases.

## Implementation

### Collateral & Risk Parameters
- **Loan-to-Value (LTV)**: 50% — borrow up to half of collateral value
- **Liquidation Threshold**: 75% — positions liquidated when LTV exceeds this
- **Interest Model**: Per-block compound interest using ray math (`1.000000000315...`)

### Core Functions
Deposit supplies ETH as collateral or USDC as lending liquidity. Borrow draws USDC against ETH collateral within LTV limits. Repay settles borrowed USDC with accrued interest. Liquidate closes undercollateralized positions with a bonus incentive for the liquidator.

### Oracle Integration
Price oracle interface for ETH/USDC feeds with liquidation health-factor calculation based on real-time pricing. Tests inject prices directly to exercise boundary behavior.

### Testing
Comprehensive Foundry test suite covering all protocol functions, with explicit edge-case tests for liquidation boundaries and interest accrual across long time horizons.

## Outcome
- Working ETH-collateralized USDC lending market with deposit, borrow, repay, and liquidation flows.
- Ray-based compound-interest accrual verified against multi-block simulations.
- Foundry test suite exercising liquidation edge cases and interest-accrual correctness.

## Technologies
- **Language**: Solidity
- **Framework**: Foundry
- **Math**: Ray-based compound interest calculation
- **Pattern**: Oracle-dependent pricing, ERC20 integration
