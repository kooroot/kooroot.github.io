---
title: "Account Abstraction Signing Models, Compared"
description: "ERC-4337 UserOperations vs Safe + ERC-1271 contract signatures + EIP-6492 pre-deploy validation + session keys — which signing model to reach for, and why."
date: 2026-06-16
tags: ["Account Abstraction", "ERC-4337", "ERC-1271", "EIP-6492"]
draft: true
related_project: "smart-wallet-aa"
---

<!--
  Grounded in the smart-wallet-aa project (ERC-4337 PoC against real bundler infra,
  Safe/Kernel/Biconomy comparison) plus hands-on session-signer + ERC-1271/6492 work.
-->

## TL;DR

_One paragraph: there isn't one "AA signature" — there's the 4337 UserOperation flow, the
ERC-1271 contract-signature check for smart accounts, the EIP-6492 wrapper for accounts that
aren't deployed yet, and session keys layered on top. Map each to the problem it solves._

## Outline

- **EOA baseline** — one key, one signature, gas in the native asset; what that forecloses.
- **ERC-4337 flow** — UserOperation, EntryPoint, Bundler, Paymaster; where the surprises actually live (bundler mempool rules, Paymaster validation).
- **ERC-1271** — how a smart account "signs"; `isValidSignature` and why dApps must support it.
- **EIP-6492** — validating signatures from a counterfactual (not-yet-deployed) account; the `0x6492…` magic-suffix envelope.
- **Session keys** — `authorizeSessionSigner`, scoping, expiry; when to delegate vs require the owner key.
- **Decision table** — pick a model by: gas sponsorship, batching, recovery, delegated automation.

## To verify before publishing

- Confirm the EIP-6492 magic-suffix bytes and Safe's current ERC-1271 behavior against live sources.
