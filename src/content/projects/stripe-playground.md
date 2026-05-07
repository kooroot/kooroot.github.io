---
title: Stripe Playground
description: Staged Stripe payments learning prototype on Bun + Hono + TanStack — Elements, hosted Checkout, signature-verified webhooks, idempotency, and refunds
image: /images/code-screen.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Bun", "Hono", "TanStack Router", "React 19", "Stripe SDK", "bun:sqlite", "Zod"]
github: https://github.com/kooroot/stripe-playground
date: 2026-05-07
---

## Problem
Stripe's surface area is enormous — Elements, hosted Checkout, PaymentIntents, webhooks, idempotency, refunds, dynamic payment methods, 3DS, async crypto rails — and a single tutorial app collapses all of them into one screen, hiding the order in which the primitives actually depend on each other. To really learn the platform you want each concept introduced as its own staged commit, with a working artifact at every step and an explicit comparison memo when two paths cover the same ground.

## Approach
- **Staged rollout, one concept per stage.** Stage 1 seeds Stripe objects via the CLI. Stage 2 adds Elements + order-keyed PaymentIntent. Stage 3 adds signature-verified webhooks and idempotency. Stage 4 contrasts hosted Checkout against Elements. Stage 5 adds full refunds plus a stablecoin / Tempo deep-dive.
- **Webhook-authoritative order state.** The success page polls `GET /api/payments/order/:orderId` and reflects whatever the webhook wrote, not whatever the redirect param said.
- **Idempotency at every layer.** `processed_events` keyed by `event.id` for inbound webhooks; order-derived idempotency key on `refunds.create`; pre-check via `refunds.list` before issuing.
- **Test-mode-only by construction.** The server (`loadEnv`) and the web bundle (`lib/stripe.ts`) both reject keys that don't start with `sk_test_` / `pk_test_` at startup.
- **One repo, two flows.** Elements (`/checkout`) and hosted Checkout (`/checkout-hosted`) both share the same `useOrderPoll` hook and webhook dispatcher so the comparison is apples-to-apples.

## Implementation

### Stage 1 — Stripe CLI Seeding + Hono Skeleton
A `bun run seed` script provisions Customer / Product / Price objects via the Stripe CLI; `--cleanup` and `--tag` flags recover orphans from failed runs. Hono on Bun serves as the API skeleton.

### Stage 2 — Elements + Order-keyed PaymentIntent
`POST /api/payments/intent` is a create-or-reuse endpoint backed by `bun:sqlite` (`apps/api/.data/`), so resubmissions return the same intent rather than racing. The web app at `/checkout` uses TanStack Query to create the intent and renders Stripe's `PaymentElement` with dashboard-driven dynamic payment methods (cards + crypto + whatever's enabled).

### Stage 3 — Signature-verified Webhooks + Idempotency
`POST /api/webhooks/stripe` verifies the `Stripe-Signature` header against the raw request body, gates on a `processed_events` table keyed by `event.id`, and drives `orders.status` from `payment_intent.{succeeded,processing,payment_failed,canceled}` and `charge.refunded`. The success page polls until the status is terminal — webhook truth wins over the redirect.

### Stage 4 — Hosted Checkout vs Elements
`POST /api/checkout/session` creates a Stripe-hosted Checkout Session; `/checkout-hosted` redirects users to it; `/checkout-hosted/{success,cancel}` close the loop via the shared `useOrderPoll` hook. `checkout.session.{completed,async_payment_succeeded,async_payment_failed,expired}` are dispatched from the same webhook handler so order state is consistent across both flows. A comparison memo lives in `docs/notes/stage-4-elements-vs-checkout.md`.

### Stage 5 — Refunds + Stablecoin Deep-dive
`POST /api/payments/refund` issues a full refund via `stripe.refunds.create` with an order-derived idempotency key, gated on `orders.status == "succeeded"` and pre-checked against `refunds.list` to avoid double-issuing. Both success pages expose a Refund button and reflect the `refunded` state once `charge.refunded` lands. Stablecoin acceptance, Tempo watch notes, and main-app integration checklists live under `docs/notes/`.

### Per-stage Audit Loop
Every stage closes with a `dual-review audit` commit (`/codex` + `/code-review`) that catches concrete bugs — raw-body cache, filter-first idempotency, `requires_action` handling, terminal-state downgrade guards, async payment flows, render-phase polling. Audit outputs are versioned under `docs/audits/`.

## Outcome
- Five stages from CLI seeding to refunds, each leaving a working artifact and a learning note.
- Stripe Elements and hosted Checkout flows running off the same webhook-authoritative order state.
- Signature-verified inbound webhooks, idempotent processing keyed on `event.id`, and order-derived idempotency on outbound refund creation.
- Live keys structurally rejected — server and web bundle both refuse `sk_live_` / `pk_live_` at startup, so the prototype can't accidentally hit production.

## Technologies
- **Runtime**: Bun 1.2.8
- **Frontend**: TanStack Router + Query, React 19, Vite, Stripe Elements
- **Backend**: Hono on Bun
- **Storage**: `bun:sqlite` (orders, `processed_events`)
- **Shared types**: Zod via `packages/shared`
- **Payments**: `stripe` SDK, Stripe CLI (`stripe listen`, `stripe trigger`, `stripe events resend`)
