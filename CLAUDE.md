# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a collection of self-contained web mini-projects — each game or tool lives in a single HTML file with inline CSS and JavaScript. No build step, no dependencies, no framework.

## Running Projects

Open any `.html` file directly in a browser. No server required.

## Git Workflow

- GitHub repo: https://github.com/blackice2090/claude-project
- Branch: `main`
- GitHub CLI (`gh`) is installed at `C:/Program Files/GitHub CLI/gh.exe` and is not on PATH — reference it by full path if needed.
- After every meaningful change: commit with a descriptive message and push to `origin main`.
- Commit message convention: `feat:`, `fix:`, `refactor:`, `style:` prefixes.

## Architecture

Each project is a standalone `.html` file containing:
1. `<style>` — all CSS inline, dark theme using `#1a1a2e` / `#16213e` / `#0f3460` palette with `#e94560` accent.
2. `<body>` — semantic HTML structure.
3. `<script>` — vanilla JS, no external libraries.

New projects should follow this same single-file pattern unless there is a strong reason to split them.
