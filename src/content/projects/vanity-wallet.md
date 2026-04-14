---
title: Vanity Wallet Generator
description: Custom Pattern Cryptocurrency Wallet Address Generator
image: /images/code-screen.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Python", "Cryptography", "Ethereum"]
github: https://github.com/kooroot/vanity-wallet
date: 2025-12-13
---

## Problem
Ethereum addresses are a 20-byte keccak hash of a public key — opaque and interchangeable from the user's perspective. Vanity addresses (custom prefixes or suffixes) let users and organizations carry a recognizable identifier on-chain, but generation requires brute-force keypair search and any tool that phones home with the resulting private key is an immediate custody risk. A local, auditable generator was needed.

## Approach
- **Local-only key generation**: no network calls, no external services, so the private key never leaves the machine that produced it.
- **ECDSA keypair generation** using standard secp256k1 to match Ethereum's address derivation exactly.
- **Prefix and suffix pattern matching** on the hex address for flexible targeting without constraining to a single format.
- **Minimal dependency surface** keeps the code reviewable end-to-end before a user trusts it with a key they intend to fund.

## Implementation

### Address Generation
- Custom prefix and suffix pattern matching
- High-performance key pair generation
- Ethereum-compatible address output

### Security
- Local key generation with no external dependencies
- Private key handling with secure output

## Outcome
- Python CLI that generates Ethereum-format vanity addresses matching user-defined prefix or suffix patterns.
- Fully local execution path with no external dependencies for key material.
- Auditable implementation small enough to review before trusting with production keys.

## Technologies
- **Language**: Python
- **Cryptography**: ECDSA key pair generation
- **Network**: Ethereum address format
