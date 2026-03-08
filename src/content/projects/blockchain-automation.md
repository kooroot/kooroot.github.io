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

## Overview
Developed a suite of automation tools for blockchain operations — covering airdrop farming workflows, transaction monitoring, wallet management, and notification systems across multiple chains.

## Key Tools

### Multi-chain Transaction Automation
- Built batch transaction executors for Ethereum, Arbitrum, Optimism, and Solana
- Implemented gas price optimization with EIP-1559 fee estimation
- Created scheduling system for time-sensitive on-chain operations (e.g., token claims, governance votes)

### Wallet Portfolio Manager
- Developed multi-wallet balance aggregator supporting EVM and Solana wallets
- Built DeFi position tracker pulling data from lending and liquidity protocols
- Implemented P&L calculation with historical price lookups

### Alert & Notification System
- Built Telegram bot for real-time alerts on wallet activity and price movements
- Implemented smart contract event listeners for protocol-specific notifications
- Created customizable threshold alerts for gas prices and token prices

### Airdrop Workflow Engine
- Designed task orchestration framework for multi-step airdrop qualification
- Built transaction randomization (timing, amounts, paths) for organic activity patterns
- Implemented progress tracking and completion scoring per wallet

## Technologies
- **Backend**: Python (web3.py, asyncio), Node.js (ethers.js)
- **Automation**: Docker, cron jobs, PM2 process manager
- **Notifications**: Telegram Bot API, Discord webhooks
- **Data Storage**: SQLite for transaction logs, Redis for caching

## Results
Automation tools significantly reduced manual operational overhead, enabling efficient management of multi-chain activities with consistent execution and real-time visibility.
