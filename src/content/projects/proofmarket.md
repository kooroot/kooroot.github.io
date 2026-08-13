---
title: ProofMarket
description: Solana prediction market settled by a Merkle-proof CPI into the TxLINE oracle — no committee vote, no dispute window, and a forged proof reverts on chain
image: /images/prediction-market.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Rust", "Anchor", "Solana", "SPL Token", "TypeScript", "Next.js", "solana-bankrun", "Bun", "Merkle proofs"]
github: https://github.com/kooroot/proofmarket
date: 2026-07-09
---

## Problem
A prediction market is only as trustworthy as whatever resolves it. The usual answers keep a human in the loop — an optimistic oracle with a commit/reveal round and a dispute window, or a token-weighted vote — so the payout ends up depending on who turns up and how much they hold, and the money cannot move until the window closes. When the data provider already publishes a signed Merkle commitment over the match statistics, that entire apparatus is resolving something the cryptography has already decided.

## Approach
- **Resolution is a cross-program invocation.** Each market is a TxLINE `validate_stat` predicate such as *"Brazil scores > 1.5 goals"*. Resolving calls straight into the oracle program and reads the returned `bool` back through `sol_get_return_data`.
- **The keeper is untrusted by construction.** A forged proof reverts inside `validate_stat`, so whoever submits it cannot mis-settle a market — including the operator.
- **One fund-moving surface.** The Anchor program is the only component that touches money. Ingestion and frontend sit outside the trust boundary entirely.
- **The finality guard is not negotiable.** `create_market` rejects a resolve time that is not in the future, and `resolve` requires the proof's `maxTimestamp` to be at or past `resolve_after_ts`, so a market cannot be settled on a stale mid-match snapshot.

## Implementation

### On-chain program
Six instructions — `create_market`, `stake`, `resolve`, `claim`, `refund`, `close_market` — holding SPL parimutuel pools. Payout math and the epoch/root guards live in their own modules with pure-Rust unit tests, separate from the account plumbing.

### Proof Receipt
The frontend renders the whole resolution chain rather than an outcome flag: stat leaf → eventStatRoot → fixture subtree → daily-root PDA → `validate_stat` TRUE → escrow release. A toggle re-folds the Merkle path in the browser so a reader can check it without trusting the page.

### Hermetic replay
`e2e-replay` runs create → stake ×3 → resolve → claim inside an in-process SVM via `solana-bankrun`, against a frozen daily-root account and a local ABI-compatible oracle fixture that preserves the real `validate_stat` discriminator, argument layout, and return-data contract. No validator, no RPC, no devnet SOL, so the settlement path still reproduces after devnet retention drops the original accounts.

### Why the live market stays open
The frozen golden proof is historical, and the finality guard means no market creatable on the deployed program can ever be resolved by it. Staging a "live" resolve for a reviewer would require weakening the exact check that makes settlement trustless, so the complete resolve → claim leg is demonstrated through the deterministic replay instead.

### Toolchain pinning
Anchor 0.31.1 pulls `edition2024` dependencies through `solana-program` 2.x, which needs rustc ≥ 1.85 in two separate places. The SBF build pins platform-tools v1.52; IDL generation is forced onto stable through `RUSTUP_TOOLCHAIN=stable`, because anchor's host-side `idl-build` defaults to nightly and breaks `#[derive(Accounts)]` hygiene.

## Outcome
- Program `6QNd5mHvV7czVkrRNdLPmuUybSwwdPWq9RYuwk5LZuEb` deployed to Solana devnet, with a demo at `proofmarket-tan.vercel.app` whose faucet grants both test-USDC and gas so a reviewer needs no devnet SOL of their own.
- **1,144 LOC of Rust** in the Anchor program plus a 507-line local oracle fixture, and **9,308 LOC of authored TypeScript/TSX** excluding the generated IDL.
- **198 test cases across 53 suites**, plus 22 Rust unit tests covering uneven pools, fee-on-loser, and the epoch/root guards.
- Devnet and play money throughout. Settlement moves only test-USDC; mainnet funds would require a separate deployment compiled against the mainnet oracle.
- Built for the TxODDS World Cup Hackathon, Track 1 — Prediction Markets & Settlement.

## Technologies
Rust · Anchor 0.31.1 · Solana (Agave 2.1) · SPL Token · solana-bankrun · TypeScript · Next.js · React · Bun · Vitest · Merkle proof verification · Vercel
