---
title: PloggingCats NFT
description: Eco-friendly Plogging Reward NFT Platform on Polygon
image: /images/nft-art.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Solidity", "JavaScript", "Polygon", "Hardhat"]
github: https://github.com/kooroot/Polygon_NFT_PloggingCats
date: 2022-05-28
---

## Problem
Plogging — jogging while picking up litter — lacks a digital reward layer that could recognise and sustain participation. Minting environmentally themed NFTs as proof of activity gives participants a collectible, transferable record. Building this on Polygon rather than Ethereum mainnet keeps minting fees compatible with small, frequent rewards.

## Approach
- **Polygon over Ethereum L1** to make per-reward mint cost negligible.
- **ERC-721 for uniqueness** of each plogging reward NFT.
- **Hardhat** for contract development, testing, and deployment.
- **Vanilla HTML/CSS/JavaScript frontend** for the minting page and promotional site to keep the stack lightweight.
- **Cat theming** for brand memorability independent of the underlying activity.

## Implementation

### NFT Smart Contracts
ERC-721 contract deployed on Polygon Mainnet, issuing cat-themed collectible NFTs as plogging rewards. Contract development and deployment handled with Hardhat.

### Minting Interface
Web-based minting page with wallet connection to Polygon, real-time minting status, and transaction tracking.

### Platform Website
Promotional landing page for the PloggingCats project covering community engagement and plogging activity, built with HTML, CSS, and JavaScript for responsive rendering.

## Outcome
- ERC-721 reward NFT contract live on Polygon Mainnet.
- Minting page with Polygon wallet connection and transaction feedback.
- Promotional site describing the plogging activity and community model.

## Technologies
- **Smart Contracts**: Solidity, Hardhat, Polygon
- **Frontend**: HTML, CSS, JavaScript
- **Network**: Polygon (Mainnet)
- **Standard**: ERC-721 NFT
