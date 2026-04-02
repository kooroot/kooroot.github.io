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

## Overview
**dream-analyzer** is an extended fork of Trail of Bits' Slither static analysis framework, enhanced with custom vulnerability detectors, business logic analysis, Echidna property-based fuzzing integration, and ML-powered code similarity checking. Built as a comprehensive CLI tool for smart contract security analysis.

## Key Features

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

## Architecture
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

## Technologies
- **Core Engine**: Slither (forked & extended)
- **Fuzzing**: Echidna integration (config generation + guidance)
- **ML Model**: FastText (pretrained on Etherscan contracts)
- **Language**: Python
- **Analysis**: crytic-compile, solc-select
- **Target**: Solidity smart contracts
