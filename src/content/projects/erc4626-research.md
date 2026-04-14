---
title: ERC-4626 Tokenized Vault Research
description: Research on the ERC-4626 standard for tokenized vault implementations
image: /images/defi-crypto.jpg
category: Blockchain Research
show_tile: true
tech_stack: ["Solidity", "ERC-4626", "DeFi", "Yield", "Foundry"]
date: 2025-04-10
---

## Problem
ERC-4626 is adopted across yield protocols but its subtle share-accounting behavior — particularly **first-depositor inflation attacks** and rounding direction on conversions — is not consistently handled across implementations. Evaluating a vault integration safely requires understanding both the standard and the ways production implementations deviate from or harden against it.

## Approach
- **Spec-first reading**: Walked the ERC-4626 interface and its ERC-20 relationship before examining any production code, so implementation differences could be classified as intentional hardening vs. divergence.
- **Cross-implementation comparison**: Compared Yearn v3, Morpho, and ERC-4626 wrappers to isolate how each handles share-price rounding and virtual-shares mitigations.
- **Attack surface enumeration**: Focused on inflation and donation attacks because these are the dominant vault vulnerabilities in the wild, not theoretical edge cases.
- **Reference to OpenZeppelin/Solmate**: Used their canonical implementations as the baseline for judging correctness of custom vault code.

## Implementation

### Standard Analysis
Studied the ERC-4626 interface specification and its relationship to ERC-20. Analyzed deposit/withdraw/mint/redeem flow mechanics, share price calculation methods, and rounding considerations. Reviewed known attack vectors including inflation and donation attacks.

### Implementation Patterns
Compared vault implementations across major protocols (Yearn v3, Morpho, ERC-4626 wrappers). Analyzed yield strategy integration patterns and studied multi-vault aggregation and composability use cases.

### Security Considerations
Identified first-depositor inflation attack vectors and mitigation strategies (virtual shares, dead-shares seeding). Reviewed precision loss scenarios in share/asset conversions and evaluated reentrancy risks in vault deposit/withdrawal flows.

## Findings
- **First-depositor inflation** remains the dominant ERC-4626 risk; virtual-shares mitigation in OpenZeppelin v4.9+ neutralizes it when adopted.
- Rounding direction (favor vault on deposit, favor vault on withdraw) is implementation-dependent and must be audited per-deployment.
- Composability gains from the standard are real, but wrappers and adaptors introduce new precision-loss surfaces that require per-integration review.

## Technologies
- **Standards**: ERC-4626, ERC-20, ERC-2612
- **Tools**: Foundry, Solidity
- **Reference Implementations**: OpenZeppelin, Solmate
