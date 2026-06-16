---
title: "ERC-4626 First-Depositor Inflation Attacks, and How Vaults Harden Against Them"
description: "How the share-accounting in ERC-4626 enables first-depositor inflation and donation attacks — and how Yearn v3, Morpho, OpenZeppelin, and Solmate mitigate them."
date: 2026-06-16
tags: ["DeFi", "ERC-4626", "Security", "Solidity"]
draft: true
related_project: "erc4626-research"
---

<!--
  Grounded in the erc4626-research project (spec-first reading + cross-implementation
  comparison of Yearn v3 / Morpho / OZ / Solmate). Pure protocol research — safe to publish.
-->

## TL;DR

_One paragraph: ERC-4626's `convertToShares`/`convertToAssets` rounding plus an empty
vault let a first depositor inflate share price and steal a later depositor's deposit.
The fix the ecosystem converged on is virtual shares/assets — explain why it works._

## Outline

- **The standard in one diagram** — `deposit/mint/withdraw/redeem`, and where rounding direction is specified vs left to the implementer.
- **The attack, step by step** — empty vault → mint 1 wei share → donate assets to inflate price-per-share → victim deposit rounds to 0 shares.
- **Donation vs inflation** — why the two are usually discussed together but are distinct surfaces.
- **Mitigations compared** — virtual shares/assets (OZ), decimal offset, dead-shares seeding; how Yearn v3 and Morpho differ.
- **Integration checklist** — what to verify before trusting a vault you didn't write.

## To verify before publishing

- Re-read the exact rounding direction each implementation uses (don't quote from memory).
- Confirm OZ's current `ERC4626` virtual-offset default against the live source.
