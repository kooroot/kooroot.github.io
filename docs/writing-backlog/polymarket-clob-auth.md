---
title: "Polymarket CLOB Authentication, End to End"
description: "Walking the full Polymarket CLOB auth path: L1 EIP-712 ClobAuthDomain to derive API credentials, per-request L2 HMAC headers, and Safe-maker order signing with signatureType=2."
date: 2026-06-16
tags: ["Prediction Markets", "Polymarket", "EIP-712", "Gnosis Safe"]
draft: true
related_project: "polymarket-sdk-benchmark"
---

<!--
  POLICY: public protocol mechanics only. Do NOT include any personal trading PnL,
  strategy parameters, datasets, or live-account specifics. This is about how the
  CLOB auth scheme works, verified against the public Polymarket docs.
-->

## TL;DR

_One paragraph: Polymarket's CLOB uses a two-layer scheme — an L1 EIP-712 signature to
derive an API key once, then a cheap L2 HMAC on every request — and orders are signed by an
operator EOA on behalf of a Gnosis Safe maker via signatureType=2._

## Outline

- **Two layers, two jobs** — L1 (EIP-712 `ClobAuthDomain`, name/version/chainId=137) derives `(api_key, secret, passphrase)`; L2 (HMAC) authenticates each request.
- **The five L2 headers** — `POLY_ADDRESS`, `POLY_API_KEY`, `POLY_PASSPHRASE`, `POLY_TIMESTAMP`, `POLY_SIGNATURE` and how the signature is computed.
- **Order signing** — `Order.maker = Safe`, `Order.signer = operator EOA`, `signatureType = 2` (POLY_GNOSIS_SAFE); why delegation is off-chain only.
- **Common failure modes** — clock skew on `TIMESTAMP`, wrong chainId, signer/maker mismatch.

## To verify before publishing

- Re-fetch the current docs for header names and the HMAC payload format (don't quote from memory).
