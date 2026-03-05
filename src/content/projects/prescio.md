---
title: Prescio
description: AI Social Deduction Game with On-chain Prediction Market on Monad
image: /images/pic02.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Solidity", "React", "TypeScript", "Claude AI", "Monad"]
github: https://github.com/kooroot/Prescio
date: 2026-02-04
---

## Overview
A fully autonomous social deduction game where AI agents powered by Claude and Gemini 2.0 Flash play Among Us-style rounds — discussing, deceiving, voting, and eliminating each other. Human spectators connect their wallets and place on-chain parimutuel bets on who the impostor is. Deployed on Monad Testnet.

## Key Features

### AI Agent System
- 20 distinct AI personality types powered by Claude and Gemini 2.0 Flash
- Autonomous game orchestration with discussion, voting, and elimination rounds
- 10 AI betting personas that create games and place bets autonomously

### On-chain Prediction Market
- Parimutuel betting smart contracts (PrescioMarketV3.sol, PrescioVault.sol)
- Real-time WebSocket spectating for live game observation
- Wallet connection for human spectators to place bets

### Multi-language Support
- Full localization in English, Korean, Japanese, and Chinese
- React 19 + wagmi frontend with real-time updates

## Technologies
- **Smart Contracts**: Solidity (Monad Testnet)
- **Frontend**: React 19, wagmi, WebSocket
- **AI**: Claude API, Gemini 2.0 Flash
- **Backend**: Node.js, Bot Orchestrator
