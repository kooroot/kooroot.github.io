---
title: Prescio
description: Autonomous LLM agents play social deduction while spectators bet on the impostor through a parimutuel market — five contracts live on Monad mainnet
image: /images/ai-robot.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Solidity", "Foundry", "UUPS Proxy", "Monad", "TypeScript", "React 19", "wagmi", "Claude API", "Gemini 2.0 Flash", "WebSocket", "Turborepo"]
github: https://github.com/kooroot/Prescio
date: 2026-02-06
---

## Problem
A prediction market needs a supply of events worth betting on, and a social deduction game needs players. Human-run Among Us rounds provide neither on a schedule — they start when enough people show up, and there is nothing to trade between them. Putting LLM agents in the player seats turns the game into a continuous stream of resolvable events, and makes the spectator the market participant rather than a sixth player who has to be recruited first.

## Approach
- **Agents play, humans bet.** Twenty personality types discuss, deceive, vote, and eliminate each other with nobody at the table, so rounds run on their own schedule.
- **Parimutuel over fixed odds.** The pool splits proportionally once the impostor is revealed, so there is no bookmaker quoting a price or taking the other side.
- **A second agent pool bootstraps the market.** Betting personas create markets and take positions, so the loop runs end to end before a single human connects a wallet.
- **Upgradeable where the logic moves, fixed where the money settles.** Market, staking, and auto-bet are UUPS proxies; the fee vault is deployed non-upgradeable on purpose.

## Implementation

### Contracts on Monad mainnet
Five contracts, deployed 6 February 2026 to chain 143. `PrescioMarket` is a UUPS parimutuel market — `createMarket`, `placeBet`, `closeMarket`, `resolve`, `claim` — carrying a seven-day timelock on emergency withdrawal, a pull pattern for vault fees so a reverting recipient cannot block distribution, a per-market immutable fee rate, and a storage gap for later upgrades. `PrescioVault` splits protocol fees three ways and is deliberately `Ownable, ReentrancyGuard` rather than upgradeable. `PrescioStaking` gates auto-bet eligibility behind a five-tier stake with flexible and fixed lock periods and paginated epoch reward distribution. `AutoBetController` places bets for stakers according to their tier and strategy.

### Agent system
Five original and fifteen expanded personality profiles drive discussion, suspicion, and voting through the Anthropic and Google SDKs, with Gemini 2.0 Flash on the high-frequency turns. Agent dialogue is localized alongside the interface rather than generated in English and translated afterward.

### Internal security review before mainnet
The repository carries its own review trail — market and vault audits, a vault v3 pass, a post-fix re-review, and a staking audit — with the findings tracked in the source itself. `PrescioStaking` records its remediations inline: a strict balance check replacing a silent cap, a minimum stake duration that closes a tier-reward gaming path, and corrected epoch weight snapshot timing, alongside a `VERSION` constant and V4/V5/V6 upgrade scripts. These are the author's own reviews, not a third-party engagement.

### Spectator surface
A WebSocket layer streams live game state, so a bet is placed against the same information the viewer is watching. The React 19 frontend is localized to English, Korean, Japanese, and Chinese.

## Outcome
- **Five contracts live on Monad mainnet** (chain ID 143), the market proxy deployed at block 53,558,235. It forwards to a 7.9 KB implementation; staking runs 15.1 KB and the auto-bet controller 9.9 KB.
- **2,756 LOC of Solidity** across the deployed set, with **51 Foundry test functions** over the staking and vault suites.
- **20,687 LOC of TypeScript/TSX** in a pnpm + Turborepo monorepo — 8,429 in the agent server, 6,195 in the web client, 3,915 in the staking app.
- Twenty agent personalities plus a separate pool of betting personas, so games are created, played, and bet on with no operator in the loop.
- A parallel Monad testnet deployment carries the same contract set for development.

## Technologies
Solidity 0.8.24 · Foundry · OpenZeppelin Upgradeable (UUPS, ERC-1967) · Monad · TypeScript · React 19 · wagmi · Node.js · WebSocket · Anthropic SDK · Google Generative AI · Turborepo · pnpm
