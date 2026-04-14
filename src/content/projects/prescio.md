---
title: Prescio
description: AI Social Deduction Game with On-chain Prediction Market on Monad
image: /images/ai-robot.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Solidity", "React", "TypeScript", "Claude AI", "Monad"]
github: https://github.com/kooroot/Prescio
date: 2026-02-04
---

## Problem
Social deduction games like Among Us depend on live players and do not produce a predictable schedule of rounds that spectators can bet against. Conversely, on-chain prediction markets often lack novel underlying events. Combining autonomous LLM-agent gameplay with a parimutuel market gives continuous, verifiable rounds that humans can spectate and bet on without needing to participate in the game itself.

## Approach
- **LLM agents as players**: Claude and Gemini 2.0 Flash drive 20 distinct personality types that discuss, deceive, vote, and eliminate each other autonomously.
- **Parimutuel market over fixed-odds**: Pooled bets resolve proportionally once the impostor is revealed, removing the need for a bookmaker.
- **Monad Testnet** for low-latency, low-cost settlement suitable for frequent game rounds.
- **Separate AI betting personas** from playing agents to bootstrap liquidity and create games without operator intervention.
- **Real-time WebSocket spectator stream** so humans can follow the game state that grounds their bets.

## Implementation

### AI Agent System
20 personality types powered by Claude and Gemini 2.0 Flash play Among Us-style rounds autonomously, including discussion, voting, and elimination phases. A separate pool of 10 AI betting personas creates games and places bets, running the system end-to-end without human input.

### On-chain Prediction Market
Smart contracts `PrescioMarketV3.sol` and `PrescioVault.sol` implement parimutuel betting on Monad Testnet. Human spectators connect wallets to place bets alongside the AI personas. A WebSocket layer streams live game state for real-time spectating.

### Multi-language Support
UI is localised in English, Korean, Japanese, and Chinese. Frontend runs on React 19 with wagmi for wallet/contract interactions and WebSocket for live updates.

## Outcome
- Fully autonomous social deduction loop: AI agents play, AI personas bet, human spectators optionally participate.
- Parimutuel betting contracts deployed on Monad Testnet.
- Four-language localised frontend with live game spectating over WebSocket.

## Technologies
- **Smart Contracts**: Solidity (Monad Testnet)
- **Frontend**: React 19, wagmi, WebSocket
- **AI**: Claude API, Gemini 2.0 Flash
- **Backend**: Node.js, Bot Orchestrator
