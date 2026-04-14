---
title: DeFi Options Derivatives Research
description: Comprehensive Research on Options Pricing Models & On-chain Implementation
image: /images/data-analytics.jpg
category: Blockchain Research
show_tile: true
tech_stack: ["Python", "Black-Scholes", "DeFi", "Options"]
github: https://github.com/kooroot/Option-Research
date: 2025-04-02
---

## Problem
On-chain options protocols translate traditional derivatives pricing into a setting with discrete blocks, public mempools, and capital-constrained liquidity. Evaluating these protocols requires simultaneously understanding the classical pricing models they reference and the on-chain adaptations — **power perpetuals**, **option vaults**, **partial collateral** — that make them viable on Ethereum.

## Approach
- **Classical pricing first**: Walked Black-Scholes, binomial trees, and Monte Carlo in Python before examining protocol code, so on-chain simplifications could be evaluated against a correct reference.
- **Protocol diversity over depth in one**: Covered Opyn/Squeeth, Dopex, and Premia to compare tokenized options, vault-based, and orderbook-adjacent on-chain designs.
- **Power perpetuals as a distinct primitive**: Treated Squeeth's perpetual quadratic exposure separately from vanilla options because its funding mechanism and collateral model are structurally different.
- **Python for pricing, Solidity for protocol review**: Split the work so pricing math stayed in a notebook-friendly environment while protocol analysis used on-chain tooling.

## Implementation

### Options Pricing Models
Black-Scholes model analysis and Python implementation, binomial tree pricing methodology, and Monte Carlo simulation for exotic payoff structures.

### On-chain Implementation Methods
Tokenized options architecture, option pool mechanisms and automated strategies, and power perpetuals with partial collateral models.

### DeFi Protocol Analysis
Deep dive into Opyn / Squeeth, Dopex options vault analysis, and review of Premia's decentralized options exchange design.

## Findings
- **Black-Scholes assumptions break on-chain**: continuous hedging is impossible under discrete blocks and gas costs, so most on-chain protocols adopt vault-based passive strategies or perpetual approximations instead of true vanilla options.
- **Power perpetuals** trade option-like convexity exposure through a perpetual funding mechanism, sidestepping expiry management at the cost of funding-rate risk.
- **Option vaults** (Dopex, Ribbon-style) concentrate risk in the vault strategy, turning options selling into a yield primitive that competes more with structured products than with derivatives exchanges.
- Liquidity fragmentation remains the binding constraint for orderbook-style on-chain options.

## Technologies
- **Research**: Python, Mathematical modeling
- **Pricing Models**: Black-Scholes, Binomial, Monte Carlo
- **Protocols**: Opyn, Squeeth, Dopex, Premia
