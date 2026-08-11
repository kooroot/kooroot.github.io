---
title: Mapae
description: Agentic payment infrastructure — scoped, revocable spend authority for AI agents, enforced by onchain caveats rather than backend checks, settled via x402 v2 on GIWA
description_ko: 에이전트 결제 인프라 — AI 에이전트에게 범위가 제한되고 취소 가능한 지출 권한을 부여한다. 백엔드 검증이 아니라 온체인 caveat이 한도를 강제하고, GIWA 위에서 x402 v2로 정산한다
image: /images/ethereum-layer2.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["TypeScript", "Bun", "Solidity", "Foundry", "ERC-7710", "x402 v2", "EIP-3009", "viem", "Cloudflare Workers", "MCP"]
github: https://github.com/kooroot/Mapae
date: 2026-07-23
---

## Problem
Letting an AI agent spend money means handing it a funded key and hoping the application layer holds. Every guard — the spend cap, the expiry, the allowed vendor — lives in backend code the agent's own operator controls, so the limit is only as good as the process enforcing it. A compromised agent, a prompt injection, or a plain bug is enough to drain whatever the key can reach. The authority granted needs to be narrower than the key itself, and the narrowing has to be enforced somewhere the agent cannot reach.

## Approach
- **Limits live in bytecode, not in a handler.** Spend caps are deployed caveat enforcers under ERC-7710 delegation — period cap, expiry, fixed vendor, redeemer restriction, and manager-to-child re-delegation with aggregate parent limits. The check is a contract reading its own period counter, not an `if` statement in an API route.
- **Two rails, deliberately.** An EIP-3009 gasless transfer path serves as the simple baseline; the delegated ERC-7710 path is where the scoping actually happens. Both settle through x402 v2.
- **Refuse before broadcasting.** The facilitator simulates `redeemDelegations` against live chain state first, so an over-cap or expired payment is rejected by enforcer bytecode reading the real counter — and no doomed transaction is ever paid for.
- **Claims are separated by evidence class.** The repository distinguishes what was mined on GIWA from what was only exercised on a local fork, and states plainly what is *not* proven.

## Implementation

### Delegated Payment Path
A user's HybridDeleGator smart account issues a narrowly scoped session delegation to an agent. The agent redeems against it; the caveat enforcers bound every dimension of the spend. Revocation is supported but — as the repository documents — is not itself gasless, and fails `AA21` without a pre-funded EntryPoint deposit.

### Sponsored Onboarding
A new payer's smart account is deployed via `CREATE2` from a root delegation signed *before the account existed*, then verified against the live account's ERC-1271 returning `0x1626ba7e`. The new user holds zero ETH at every step of the flow.

### Unknown vs. Failed
Running the MCP loop against a real chain rather than a fork surfaced a genuine distributed-systems defect: four stacked timeouts caused the agent to report a payment as rejected when it had in fact been mined. The fix collapsed the conflation of "unknown" with "failed" across the whole verify/settle ladder.

### Test-count CI Gate
`scripts/check-test-counts.ts` measures the counts claimed in documentation against what the suites actually collect, because a self-consistent doc check had previously let a real count drift from 341 to 353 unnoticed.

## Outcome
- Delegated and sponsor-onboarded payments settled on GIWA Sepolia with the payer spending zero gas.
- **575 TypeScript tests + 14 Foundry tests**, enforced against the documentation by a CI gate.
- **23/23 negative caveat paths** passing on both chain targets; 15/15 onboarding cases on a GIWA fork.
- 35,571 LOC TypeScript/TSX (8,115 of it test code) and 1,237 LOC Solidity across an 11-app Bun monorepo.
- Live on three Cloudflare Workers custom domains: `mapae.io`, `app.mapae.io`, `docs.mapae.io`.

## Technologies
TypeScript · Bun · Solidity · Foundry · ERC-7710 Delegation Framework · EIP-3009 · x402 v2 · viem · wagmi · GIWA Sepolia (OP Stack L2) · Cloudflare Workers · React 19 · TanStack Start · MCP
