---
title: MEV Research & Implementation
description: Maximal Extractable Value research with Flashbots bundle submission
image: /images/code-screen.jpg
category: Blockchain Research
show_tile: true
tech_stack: ["Ethereum", "Flashbots", "MEV", "JavaScript", "Solidity"]
github: https://github.com/graylab-team/MEV_HELLO_WORLD
date: 2024-11-20
---

## Overview
Researched Maximal Extractable Value (MEV) extraction mechanics on Ethereum, built proof-of-concept implementations for Flashbots bundle submission, and studied mempool monitoring techniques.

## Research Areas

### MEV Fundamentals
- Studied MEV taxonomy: arbitrage, liquidations, sandwich attacks, backrunning
- Analyzed the Flashbots ecosystem: MEV-Boost, block builders, searcher workflows
- Evaluated MEV impact on Ethereum users and protocol-level mitigation strategies

### Flashbots Implementation
- Built MEV bundle submission pipeline using Flashbots RPC
- Implemented atomic transaction bundles targeting specific block numbers
- Deployed custom MEV and Counter contracts for testing bundle execution
- Handled bundle simulation, submission, and inclusion verification

### Mempool Monitoring
- Set up mempool transaction monitoring infrastructure
- Analyzed pending transaction patterns for MEV opportunity detection
- Studied transaction ordering and gas price dynamics

## Technologies
- **MEV Infrastructure**: Flashbots RPC, MEV-Boost
- **Smart Contracts**: Solidity, custom MEV contracts
- **Monitoring**: JavaScript, WebSocket mempool feeds
- **Networks**: Ethereum mainnet, Goerli testnet

## Impact
Research provided foundational understanding of MEV mechanics, informing strategies for protecting user transactions and evaluating MEV-aware protocol designs.
