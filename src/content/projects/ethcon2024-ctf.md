---
title: EthCon 2024 CTF
description: Designed and hosted blockchain security CTF challenges at EthCon Korea 2024
image: /images/security-lock.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Python", "Solidity", "Security", "CTFd", "Smart Contract"]
github: https://github.com/graylab-team/ethcon2024_ctf
date: 2024-09-15
---

## Problem
EthCon Korea 2024 needed a hands-on security track that went beyond talks — developers retain attack and defense reasoning far better when they exploit vulnerable contracts themselves than when they watch slides about them. The event needed blockchain-focused challenges spanning multiple categories, calibrated across difficulty tiers, and running on competition infrastructure that could be trusted with live scoring for a conference audience.

## Approach
- **Progressive difficulty laddering** from beginner to advanced so newcomers gain footing on early challenges before confronting subtle exploits that would otherwise discourage them.
- **Coverage across attack classes** (reentrancy, access control, logic flaws, cryptography, bytecode reverse engineering) rather than depth in a single class, to match the heterogeneous skill set of a conference audience.
- **Full solvability testing** for every challenge before release, because an unsolvable or ambiguous CTF challenge destroys participant trust for the remainder of the event.
- **CTFd over a custom scoreboard** for battle-tested dynamic scoring, team management, and registration under live-event pressure.
- **Dockerized deployments** so challenge environments could be reset, scaled, and torn down without interfering with scoring.

## Implementation

### Challenge Design
- Created smart contract vulnerability challenges covering common attack vectors
- Designed progressive difficulty levels from beginner to advanced
- Built challenges around reentrancy, access control, and logic flaws
- Tested all challenges for solvability and expected difficulty calibration

### Challenge Categories
- **Smart Contract Exploitation**: Identifying and exploiting Solidity vulnerabilities
- **Cryptography**: Blockchain-specific cryptographic puzzles
- **Reverse Engineering**: Analyzing deployed contract bytecode

### Platform Operation
- Deployed and configured CTFd platform for the competition
- Managed dynamic scoring and real-time leaderboard
- Handled participant registration and team management
- Provided live support during the competition

## Outcome
- Successfully hosted the CTF event at EthCon Korea 2024, one of Korea's premier Ethereum conferences.
- Challenge set covering smart contract exploitation, cryptography, and reverse engineering across a beginner-to-advanced difficulty curve.
- CTFd platform operated with dynamic scoring and real-time leaderboard throughout the competition.
- Engaged developers in hands-on blockchain security education on live infrastructure.

## Technologies
- **Platform**: CTFd (Python)
- **Challenges**: Solidity, Foundry
- **Infrastructure**: Docker, deployment automation
