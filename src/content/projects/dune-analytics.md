---
title: Dune Analytics Dashboard
description: On-chain Token & Protocol Analytics
image: /images/dune.png
category: Blockchain Research
show_tile: true
tech_stack: ["SQL", "Dune Analytics", "Python", "DeFi"]
github: https://github.com/kooroot
dune: https://dune.com/tokamak-network/tokamak-network-tokenomics-dashboard
date: 2024-02-15
---

## Problem
Token and protocol research relied on fragmented block-explorer lookups and ad-hoc queries, making it hard to observe trends in whale accumulation, protocol TVL, and L2 ecosystem growth. Decision-makers needed a repeatable, queryable surface over decoded on-chain data rather than one-off scrapes.

## Approach
- **Dune V2 / DuneSQL** for direct access to decoded protocol tables without running private indexers.
- **Dashboard-per-domain**: separate boards for token flow, protocol health, and L2 ecosystem metrics so each audience sees a focused view.
- **Supplementary Python processing** (pandas, web3.py) for analyses beyond Dune's SQL surface — price joins, custom statistics, export pipelines.
- **Dune native charts** as the default visualization layer, with Matplotlib exports for static reports.

## Implementation

### Token Flow Analysis
Queries tracking whale wallet movements and accumulation patterns for major tokens. DEX trading volume distribution across Uniswap, Curve, and Balancer. Token unlock schedules correlated with price action.

### Protocol Health Metrics
TVL tracking across major DeFi protocols. Liquidity depth and utilization rates for Aave and Compound. Governance participation rates and proposal outcome tracking.

### L2 Ecosystem Analytics
Transaction volume and unique address growth compared across L2 networks. Bridge inflow/outflow between L1 and L2. Gas cost savings and sequencer revenue metrics.

## Outcome
- Dashboards used for internal research decision-making on token dynamics, protocol adoption, and L2 ecosystem growth.
- Reusable SQL building blocks for future ad-hoc on-chain investigations.
- Published tokenomics dashboard for Tokamak Network.

## Technologies
- **Query Engine**: Dune Analytics SQL (Dune V2 / DuneSQL)
- **Data Processing**: Python (pandas, web3.py) for supplementary analysis
- **Visualization**: Dune native charts, custom Matplotlib exports
- **Data Sources**: On-chain decoded tables, price feeds, protocol-specific tables
