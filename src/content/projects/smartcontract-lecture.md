---
title: "Smart Contract Lecture — Korea University x Onther"
description: "Smart contract development lecture series and course materials for Korea University in partnership with Onther"
image: /images/code-screen.jpg
category: Blockchain Research
show_tile: true
tech_stack: ["Solidity", "Hardhat", "JavaScript", "Education"]
github: https://github.com/kooroot/SmartContract_KU
date: 2023-03-15
---

## Problem
University-level smart contract instruction often skips the gap between Solidity syntax and the reasoning that separates safe contracts from exploitable ones. A Korea University program in partnership with Onther needed course materials that took students from EVM fundamentals through the security failure modes that drive most real-world incidents, in a form that a working engineer could revisit after the course ended.

## Approach
- **Progressive curriculum ordering** — EVM and Solidity fundamentals first, design patterns next, security last — so each layer builds on verified prior knowledge rather than front-loading vulnerability catalogs students cannot yet contextualize.
- **Hardhat as the teaching toolchain** for its ergonomics around testing, local networks, and JavaScript tooling that most students already know.
- **Pattern-based teaching** for design: students learn named patterns (checks-effects-interactions, pull-over-push, proxy, factory) rather than isolated tricks, so the vocabulary transfers to code review.
- **Vulnerability-driven security module** grounded in historical incidents to anchor abstract risks in concrete consequences.
- **Open repository** so course materials remain useful reference after the lecture series concludes.

## Implementation

### Curriculum
- Solidity fundamentals and EVM basics
- Smart contract design patterns
- Testing and deployment with Hardhat
- Security best practices and common vulnerabilities

## Outcome
- Delivered the smart contract lecture series at Korea University under the Korea University x Onther partnership.
- Open-source course materials and contract examples published for ongoing student reference.
- Curriculum covering the path from EVM fundamentals through secure contract design for a university audience.

## Technologies
- **Language**: Solidity, JavaScript
- **Framework**: Hardhat
- **Context**: Korea University x Onther partnership
