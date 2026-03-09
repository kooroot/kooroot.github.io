---
title: CelestaraX - On-Chain Page Hub
description: Fully on-chain HTML page platform built on Celestia DA layer
image: /images/blockchain-network.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Solidity", "TypeScript", "Foundry", "Celestia", "The Graph"]
github: https://github.com/CelestaraX/CelestaraX-Contracts
date: 2024-12-10
---

## Overview
Built CelestaraX, a platform for creating and managing fully on-chain HTML pages powered by Celestia's Data Availability layer through Conduit G2. The Web3ite smart contract enables page creation, multi-ownership models, and an on-chain content management system.

## Key Features

### Web3ite Smart Contract
- Implemented three ownership types: Single, MultiSig, and Permissionless
- Built update request/approval workflows for collaborative page management
- Developed fee management system and protocol revenue model
- Added voting system for community-governed pages
- Supported full HTML storage on-chain with immutability options

### Subgraph Indexer
- Built GraphQL subgraph indexing all Web3ite contract events
- Tracked page creation, updates, ownership changes, and votes
- Deployed on The Graph protocol for decentralized querying

### Frontend
- Developed TypeScript frontend for page creation and management
- Integrated wallet connectivity and transaction signing
- Built page browsing and search functionality

## Technologies
- **Smart Contracts**: Solidity, Foundry
- **DA Layer**: Celestia via Conduit G2
- **Indexing**: The Graph, GraphQL
- **Frontend**: TypeScript, React

## Impact
Demonstrated a novel use case for on-chain content storage leveraging Celestia's DA layer, enabling permanent, censorship-resistant web pages with flexible ownership models.
