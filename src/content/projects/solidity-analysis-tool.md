---
title: "Dream Analyzer — Smart Contract Security Analysis Tool"
description: "Custom Slither fork with extended vulnerability detectors, Echidna fuzzing integration, and ML-based code similarity analysis"
image: /images/security-lock.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Python", "Solidity", "Slither", "Echidna", "FastText", "ML"]
github: https://github.com/kooroot/Join_Project_v2
date: 2023-06-23
---

## Problem
Off-the-shelf static analyzers catch generic vulnerability classes but miss protocol-specific logic bugs (such as UniswapV2-style invariant violations) and have no native path for property-based fuzzing or cross-contract similarity detection. Security teams end up stitching Slither, Echidna, and ad-hoc scripts together per engagement. A consolidated tool that fused these capabilities behind one CLI was needed.

## Approach
- **Fork Slither rather than wrap it**: custom detectors and business-logic analysis required direct access to the core engine's SlithIR and contract models, which a wrapper cannot expose cleanly.
- **Custom detectors beyond Slither's defaults** — dedicated reentrancy variants (`Reentrant.py`, `TokenReentrancy.py`) and UniswapV2-specific business-logic checks — because real exploits are rarely caught by generic templates alone.
- **Echidna integration via generated configuration** so property-based fuzzing is driven by the static analysis results (payable functions, state variables, call sequences) rather than hand-written configs.
- **FastText code similarity** pretrained on Etherscan verified contracts to surface code clones and familiar vulnerability patterns across a codebase, complementing rule-based detection.
- **Regression-test snapshotting** with 355+ golden files to guarantee detector stability across engine updates — a static analyzer whose output changes silently is worse than one with known limits.

## Implementation

### Extended Slither Static Analysis Engine
- Forked and extended the Slither core engine (`slither_core/`) with custom detector modules
- Developed custom reentrancy detectors (`Reentrant.py`, `TokenReentrancy.py`) beyond Slither's default set
- Built **business logic detectors** including UniswapV2-specific vulnerability patterns
- 355+ regression test snapshots ensuring detector reliability across updates
- Integration with crytic-compile for contract compilation and solc-select for version management

### Echidna Property-Based Fuzzing Integration
- Implemented dynamic Echidna configuration generator (`echidna_config.yaml`) for ERC20 property testing
- Echidna guidance printer extracting payable functions, state variables, and call sequences to optimize fuzzing campaigns
- Automated property generation for token standard compliance testing

### ML-Powered Code Similarity Analysis
- FastText model pretrained on Etherscan verified contracts for code similarity scoring
- Vector representation of Solidity code patterns for efficient comparison
- Detect code clones and similar vulnerability patterns across contracts

### CLI Interface
- pip-installable CLI: `dream detect vuln`, `dream detect logic`, `dream detect all`
- Configurable analysis parameters and structured output reports
- Modular detector architecture for easy extension

### Architecture
```
dream-analyzer/
├── slither_core/           # Extended Slither engine
│   ├── detectors/
│   │   ├── vulnerability/  # Custom vuln detectors (reentrancy, etc.)
│   │   └── business_logic/ # UniswapV2 & protocol-specific detectors
│   ├── tools/properties/
│   │   └── platforms/echidna.py  # Echidna config generation
│   └── printers/guidance/
│       └── echidna.py      # Fuzzing campaign guidance
├── test_files/
│   └── detectors/
│       ├── test_detectors.py    # Regression test harness
│       └── snapshots/           # 355+ golden-file snapshots
└── dream_cli/              # CLI entry point
```

## Outcome
- **dream-analyzer**: pip-installable CLI that consolidates static analysis, property fuzzing, and ML similarity under `dream detect vuln | logic | all`.
- Extended Slither engine with custom reentrancy and UniswapV2 business-logic detectors not present in upstream Slither.
- Automated Echidna configuration and guidance driven by static analysis output.
- FastText-based code similarity scoring trained on Etherscan verified contracts.
- 355+ regression snapshots guaranteeing detector behavior stability across engine updates.

## Technologies
- **Core Engine**: Slither (forked & extended)
- **Fuzzing**: Echidna integration (config generation + guidance)
- **ML Model**: FastText (pretrained on Etherscan contracts)
- **Language**: Python
- **Analysis**: crytic-compile, solc-select
- **Target**: Solidity smart contracts
