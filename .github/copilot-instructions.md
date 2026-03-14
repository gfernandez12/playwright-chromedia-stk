<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Repository guide for AI coding agents

Purpose: Help an AI agent be productive immediately working on this Playwright-based test repository.

1) Big picture
- This is a Playwright test suite using `@playwright/test` (see `package.json` devDependency).
- Key files/directories:
  - [package.json](package.json) — project metadata and dependencies.
  - [playwright.config.js](playwright.config.js) — test runner configuration (testDir: `./tests`, reporter: `html`, `trace: 'on-first-retry'`).
  - [tests/](tests/) — test files (example: [tests/example.spec.js](tests/example.spec.js#L1-L40)).
- Dataflow / runtime: tests use the Playwright runner to launch browser instances defined in `projects` inside `playwright.config.js`. Tests interact with web pages via `page` fixtures and assertions from `@playwright/test`.

2) Essential developer workflows (concrete commands)
- Install dependencies: `npm install`.
- Install Playwright browsers: `npx playwright install`.
- Run full test suite: `npx playwright test`.
- Run a single file: `npx playwright test tests/example.spec.js`.
- Run interactive debug: `npx playwright test --debug` or `npx playwright show-report` after a run to view HTML report.

3) Project-specific conventions & patterns
- Tests live under `tests/` and use ESM `import` syntax plus `// @ts-check` for light static checking (see [tests/example.spec.js](tests/example.spec.js#L1-L8)).
- `playwright.config.js` configures parallel execution (`fullyParallel: true`), CI behaviour (`forbidOnly`, `retries`, `workers`), and browser projects (chromium, firefox, webkit).
- Trace collection: traces are enabled `on-first-retry` to preserve CI performance.
- Environment configuration: dotenv usage is commented out in `playwright.config.js`; when adding environment variables follow that commented pattern.

4) Integration points & external dependencies
- Primary external dependency: `@playwright/test` (devDependency). Tests navigate to external sites (e.g., `https://playwright.dev/` in the example test).
- There is no active `webServer` configured (commented-out block in `playwright.config.js`). If tests require a local dev server, the repo expects adding `webServer` config and an npm `start` script.

5) Notable repo quirks to be aware of (discovered)
- `package.json` currently has an empty `scripts` object — automated workflows rely on direct `npx` commands instead of npm scripts.
- `package.json` contains `type: "commonjs"` while source files and `playwright.config.js` use ESM `import`/`export`. If you observe runtime errors related to module type, check Node version and how Playwright is invoked.

6) How to change things safely (agent guidance)
- Prefer minimal, focused changes: update `playwright.config.js` only to alter test behavior (retries, reporters, projects).
- If adding automation for developers, add npm scripts to `package.json` (examples: `test`, `test:debug`, `install:browsers`) rather than replacing developer usage.

7) Where to look for examples
- Example tests: [tests/example.spec.js](tests/example.spec.js#L1-L40).
- Config: [playwright.config.js](playwright.config.js).

If any part of the environment or expected workflows above is incorrect or incomplete, tell me what to re-check and I'll revise this guidance.
