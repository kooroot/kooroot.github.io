---
title: Gaianet Node Executor
description: Automated Gaianet AI Node Setup & Management Script
image: /images/pic03.jpg
category: Blockchain Node Operation
show_tile: true
tech_stack: ["Shell", "Linux", "macOS", "AI"]
github: https://github.com/kooroot/Node_Executor-Gaianet
date: 2025-02-20
---

## Overview
A script project that automatically installs and manages Gaianet AI nodes via screen sessions. It supports Ubuntu/Debian-based Linux and macOS, running the node in the background without any manual intervention.

## Key Features

### One-Click Installation
- System package update and essential utility auto-installation
- One-click installation via Gaianet's official install.sh
- Automatic environment initialization with `gaianet init`

### Multi-Platform Support
- Dedicated script for Linux (Ubuntu/Debian)
- Separate macOS-specific script provided
- Automatic OS-specific package manager utilization

### Background Execution
- `gaianet start` execution in screen session with auto-attach
- Real-time log monitoring capability
- Web dashboard integration for Node ID / Device ID registration

## Technologies
- **Scripting**: Shell (Bash)
- **Infrastructure**: Linux (Ubuntu/Debian), macOS
- **Service**: Gaianet AI Node
- **Management**: screen session
