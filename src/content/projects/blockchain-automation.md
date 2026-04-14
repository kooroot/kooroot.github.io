---
title: Blockchain Automation Tools
description: Automated On-chain Operations & Monitoring
image: /images/dev-workspace.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Python", "Node.js", "Docker", "Web3.js", "Telegram Bot"]
github: https://github.com/kooroot
date: 2024-01-20
---

## Problem
Running airdrop-farming campaigns, tracking wallet P&L, and responding to on-chain events across Ethereum, L2s, and Solana required stitching together ad-hoc scripts and manual dashboards. Multi-chain operations at scale meant repeated context switches, missed timing windows on governance votes and token claims, and no unified visibility into wallet state or gas conditions.

## Approach
- **Per-function tool modules** rather than a monolith: separate services for transaction execution, portfolio aggregation, alerting, and airdrop workflows.
- **Python for on-chain scripting** (web3.py, asyncio) and **Node.js for ethers.js-heavy execution paths** — each language used where its ecosystem is strongest.
- **Telegram as the alert surface** since it handles cross-device push without infrastructure overhead.
- **Randomized transaction patterns** (timing, amount, path) for airdrop workflows to avoid the heuristics farming-detection systems flag.
- **Docker + PM2 + cron** for process supervision, keeping long-running listeners and scheduled jobs independently recoverable.

## Implementation

### Multi-chain Transaction Automation
Batch transaction executors for Ethereum, Arbitrum, Optimism, and Solana with EIP-1559 gas optimization. Scheduling layer for time-sensitive operations (token claims, governance votes) so critical windows are not missed.

### Wallet Portfolio Manager
Multi-wallet balance aggregator across EVM and Solana. DeFi position tracker pulling lending and liquidity protocol state. P&L calculation with historical price lookups for accurate cost-basis reporting.

### Alert & Notification System
Telegram bot for real-time wallet activity and price alerts. Smart contract event listeners for protocol-specific triggers. Configurable threshold alerts for gas prices and token prices.

### Airdrop Workflow Engine
Task orchestration framework covering multi-step qualification criteria. Transaction randomization across timing, amounts, and routing paths to produce organic-looking activity. Per-wallet progress tracking and completion scoring.

## Outcome
- Consolidated multi-chain operations into a single supervised toolchain.
- Real-time visibility into wallet activity, gas conditions, and DeFi positions via Telegram and local dashboards.
- Reduced manual operational overhead for airdrop qualification and governance participation.

## Technologies
- **Backend**: Python (web3.py, asyncio), Node.js (ethers.js)
- **Automation**: Docker, cron jobs, PM2 process manager
- **Notifications**: Telegram Bot API, Discord webhooks
- **Data Storage**: SQLite for transaction logs, Redis for caching
