---
title: Solidity Static Analysis Tool
description: Smart Contract Vulnerability Detection & Code Similarity Checker
image: /images/security-lock.jpg
category: Blockchain Development
show_tile: true
tech_stack: ["Python", "Solidity", "FastText", "ML"]
github: https://github.com/kooroot/Join_Project_v2
date: 2023-06-23
---

## Overview
A CLI-based smart contract static analysis tool called "dream" that provides vulnerability detection with custom rule-sets and code similarity checking using a FastText model pretrained on Etherscan verified contracts.

## Key Features

### Static Analysis
- Solidity version management via solc-select
- Custom detector and rule-set configuration
- Automated vulnerability pattern detection
- Integration with crytic-compile for contract compilation

### Code Similarity
- FastText-based pretrained model on Etherscan verified contracts
- Contract code similarity scoring and comparison
- Efficient vector representation of Solidity code patterns

### CLI Interface
- pip-installable CLI tool
- Configurable analysis parameters
- Structured output reports

## Technologies
- **Language**: Python
- **ML Model**: FastText (pretrained on Etherscan contracts)
- **Analysis**: crytic-compile, solc-select
- **Target**: Solidity smart contracts
