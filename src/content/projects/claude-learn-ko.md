---
title: Anthropic Academy KR
description: Korean translation web app for Anthropic Academy — 13 courses, 388 lessons, multi-AI translation pipeline (Claude / OpenAI / Gemini)
image: /images/dev-workspace.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["TanStack Start", "React", "Vite", "Tailwind CSS", "MDX", "Claude API"]
github: https://github.com/kooroot/claude-learn-ko
date: 2026-03-09
---

## Problem
Anthropic's official curriculum on Anthropic Academy (Skilljar) covers Claude, the Claude API, MCP, AI Fluency, and the Bedrock / Vertex AI deployment paths — but is English-only. Korean developers wanting to study the same material end up either context-switching between the original lessons and ad-hoc translations, or skipping the curriculum entirely. A localized SSR web app with a reproducible translation pipeline closes that gap without forking content from the source.

## Approach
- **Translate, don't reauthor.** Pull lesson content from Skilljar, keep the English source alongside each translation, and re-run the pipeline whenever upstream changes.
- **Multi-provider translation pipeline** — Claude, OpenAI, and Gemini are all viable backends, so the choice is a CLI flag, not a hard dependency.
- **Server-rendered MDX** so lessons render with code blocks, callouts, and rich formatting without a heavy client-side runtime.
- **`localStorage`-based progress tracking** — no accounts, no backend, no sign-in friction.
- **Filesystem routing on TanStack Start** for predictable, type-safe lesson URLs.

## Implementation

### Course Coverage
13 courses, 388 lessons across the full Anthropic Academy catalog: Claude 101, Claude Code in Action, Building with the Claude API, Introduction to MCP, MCP Advanced Topics, AI Fluency tracks (Foundations / Educators / Students / Nonprofits / Teaching AI Fluency), Claude with Amazon Bedrock, Claude with Google Cloud Vertex AI, and Introduction to Agent Skills.

### Translation Pipeline
A `bun run translate <path> --provider=<claude|openai|gemini>` script translates a single MDX file or a whole directory. English sources live in `content/source/`, Korean translations in `content/courses/`, and a metadata sync script keeps `courses.json` aligned with the file tree.

### Content Scraper
`bun run scrape` extracts lesson content from a logged-in Skilljar session, reusable whenever the upstream catalog changes. Source markdown is stored verbatim so translations can be regenerated with a different provider without re-scraping.

### Frontend Stack
TanStack Start (React + Vite + SSR) with file-based routing, Tailwind CSS v4 with the Typography plugin for prose-heavy lesson layouts, and unified/remark/rehype for server-side MDX rendering. Progress state is local to the browser via `localStorage`.

## Outcome
- 13 Anthropic Academy courses (388 lessons) accessible in Korean through a single SSR app.
- Reproducible translation pipeline with three pluggable providers — re-translation is one command, not a manual rewrite.
- Side-by-side English/Korean content layout in the repo so contributors can audit translations against source.
- No backend required: SSR for content, `localStorage` for progress, npm-style scripts for ops.

## Technologies
- **Framework**: TanStack Start (React, Vite, SSR)
- **Content**: MDX (unified / remark / rehype) on the server
- **Styling**: Tailwind CSS v4 + Typography plugin
- **Translation Providers**: Claude API, OpenAI, Gemini (selectable per run)
- **Tooling**: Bun, custom scrape + translate + metadata-sync scripts
