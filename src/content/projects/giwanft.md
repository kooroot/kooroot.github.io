---
title: GiwaNFT
description: NFT project specification and smart contract development
image: /images/nft-art.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Solidity", "ERC-721", "NFT", "Smart Contract"]
date: 2025-01-20
---

## Problem
Launching an NFT collection requires more than a working ERC-721 contract: teams need a written specification covering metadata schema, mint phases, royalty handling, and marketplace compatibility. Without this groundwork, minting dApps and marketplace listings go out with inconsistent metadata, expensive batch mints, and missing royalty enforcement.

## Approach
- **Written specification first**: metadata schema, IPFS layout, mint phases, and royalty approach defined before contract work.
- **ERC-721A over vanilla ERC-721** for gas-optimised batch minting.
- **Merkle-proof allowlists** rather than on-chain allowlist storage to keep mint costs low.
- **ERC-2981 for royalties** to ensure enforcement across compliant marketplaces.
- **Provenance hash reveal mechanism** so mint ordering and metadata integrity are verifiable post-reveal.

## Implementation

### Specification
Authored a technical specification covering token metadata schema, IPFS storage architecture, mint phases (allowlist and public) with their price tiers, and royalty implementation using ERC-2981.

### Smart Contract Development
Implemented the collection on ERC-721A for batch-mint gas efficiency. Allowlist entry is gated by Merkle proof validation against a root stored on-chain. A provenance hash commits to final metadata before reveal so mint ordering cannot be manipulated. Withdrawal and fund-distribution logic are handled on-chain.

### Integration
Designed the contract interface consumed by the frontend minting dApp, specified metadata API endpoints compatible with OpenSea and other marketplaces, and verified metadata standard compliance for listings.

## Outcome
- Complete NFT project delivered from specification through smart contract deployment.
- Gas-optimised batch mint via ERC-721A with Merkle-proof allowlist.
- ERC-2981 royalty support and provenance-hash reveal for marketplace compatibility and fairness.
- Metadata API and contract interface ready for frontend mint dApp and marketplace listing.

## Technologies
- **Standards**: ERC-721A, ERC-2981, ERC-165
- **Smart Contracts**: Solidity, Foundry
- **Storage**: IPFS, metadata API
