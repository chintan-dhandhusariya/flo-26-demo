---
description: Detect and fix stale documentation using the stale-docs skill
---

Use the `@stale-docs` skill to audit and update stale documentation.

Target: $ARGUMENTS

If no target is given, audit `README.md` against `AGENTS.md`, `package.json`, and `src/`. Trust code over docs, fix stale scripts, props, file paths, and feature claims in place, then verify with `npm run build`.
