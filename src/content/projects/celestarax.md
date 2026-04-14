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

## Problem
Storing full HTML pages on Ethereum L1 is prohibitively expensive, and existing "on-chain website" projects either compress aggressively or push content to IPFS — weakening the censorship-resistance guarantee. A cheaper data-availability layer combined with flexible ownership primitives was needed to make fully on-chain pages practical for collaborative and community-governed use cases.

## Approach
- **Celestia DA via Conduit G2** as the data layer to drop calldata cost enough for raw HTML storage.
- **Three ownership models** (Single, MultiSig, Permissionless) to cover solo authors, teams, and community-maintained pages in one contract surface.
- **On-chain update workflow** with request/approval semantics rather than direct writes, so MultiSig and Permissionless modes share a single path.
- **The Graph subgraph** for read-side indexing instead of scanning logs from the frontend.
- **Foundry** for contract development and testing; TypeScript/React for the client.

## Implementation
Built the **Web3ite** smart contract with page creation, multi-ownership, update request/approval flows, a fee and protocol-revenue model, and a voting system for community-governed pages. HTML content is stored on-chain with per-page immutability options. A GraphQL subgraph indexes all Web3ite events — page creation, updates, ownership changes, votes — and is deployed on The Graph for decentralized querying. The TypeScript/React frontend handles wallet connectivity, transaction signing, page creation, browsing, and search.

## Findings
- **Celestia DA materially changes the cost curve** for full-HTML on-chain storage versus L1 calldata.
- **Unifying ownership modes behind a request/approval workflow** keeps the contract surface small while supporting solo, MultiSig, and community governance.
- **Subgraph-first reads** are necessary once event volume grows past trivial page counts.
- Permanent, censorship-resistant pages with flexible ownership are viable when DA cost is decoupled from settlement cost.

## Technologies
- **Smart Contracts**: Solidity, Foundry
- **DA Layer**: Celestia via Conduit G2
- **Indexing**: The Graph, GraphQL
- **Frontend**: TypeScript, React
