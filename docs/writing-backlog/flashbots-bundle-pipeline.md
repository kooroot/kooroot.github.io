---
title: "The Flashbots Bundle Pipeline, Hands-On"
description: "Exercising MEV end to end: building an atomic bundle, simulating it, submitting via Flashbots RPC, and verifying inclusion — with test contracts that make execution observable."
date: 2026-06-16
tags: ["MEV", "Flashbots", "Ethereum"]
draft: true
related_project: "mev-research"
---

<!--
  Grounded in the mev-research project (Flashbots bundle submission, simulation,
  inclusion verification, custom test contracts). Educational walk-through.
-->

## TL;DR

_One paragraph: most MEV explanations stop at taxonomy. Run the submission pipeline
end to end instead — bundle semantics, simulation, inclusion verification, mempool
monitoring — using test contracts so execution is observable without live opportunities._

## Outline

- **Taxonomy before tooling** — arbitrage, liquidations, sandwich, backrun; map them before touching infra.
- **Bundle semantics** — atomicity, target block number, ordering guarantees.
- **Simulation** — `eth_callBundle` and reading the result before you ever submit.
- **Submission** — Flashbots RPC, the submission path for atomic bundles.
- **Inclusion verification** — confirming the bundle landed (or why it didn't).
- **Making it observable** — custom MEV + Counter test contracts instead of waiting on real opportunities.

## To verify before publishing

- Re-check current Flashbots RPC method names/endpoints against live docs before quoting.
