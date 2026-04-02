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

## Overview
A custom ETH-collateralized USDC lending protocol built from scratch with Foundry. Implements core DeFi lending mechanics including deposit, borrow, repay, and liquidation with configurable risk parameters.

## Protocol Mechanics

### Collateral & Risk Parameters
- **Loan-to-Value (LTV)**: 50% — borrow up to half of collateral value
- **Liquidation Threshold**: 75% — positions liquidated when LTV exceeds this
- **Interest Model**: Per-block compound interest using ray math (`1.000000000315...`)

### Core Functions
- **Deposit**: Supply ETH as collateral or USDC as lending liquidity
- **Borrow**: Borrow USDC against ETH collateral within LTV limits
- **Repay**: Repay borrowed USDC with accrued interest
- **Liquidate**: Liquidate undercollateralized positions with bonus incentive

### Oracle Integration
- Price oracle interface for ETH/USDC price feeds
- Liquidation health factor calculation based on real-time pricing

## Testing
- Comprehensive Foundry test suite covering all protocol functions
- Edge case testing for liquidation boundaries and interest accrual

## Technologies
- **Language**: Solidity
- **Framework**: Foundry
- **Math**: Ray-based compound interest calculation
- **Pattern**: Oracle-dependent pricing, ERC20 integration
