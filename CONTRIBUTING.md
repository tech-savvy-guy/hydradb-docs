# Contributing to HydraDB Docs

Thanks for helping improve the HydraDB documentation.

This guide explains how to add new content pages to this repository.

## Prerequisites

- Node.js 20+ recommended
- npm (or pnpm/yarn, but examples below use npm)

## Project Structure

- Docs content lives in: `content/docs`
- Each page is an `.mdx` file with frontmatter (`title`, `description`)
- Pages are served under `/docs/...`

## Add a New Page

1. Create a new `.mdx` file under `content/docs`.
   - Example: `content/docs/getting-started/quickstart.mdx`
2. Add frontmatter at the top of the file:

   ```mdx
   ---
   title: Quickstart
   description: Get up and running quickly with HydraDB.
   ---
   ```

3. Write your content using Markdown/MDX.
   - Use clear headings (`##`, `###`)
   - Keep sections focused and actionable
4. If helpful, link the new page from an existing entry page (for example `content/docs/index.mdx`) so users can discover it quickly.

## Content Guidelines

- Prefer concise, task-oriented writing
- Use code blocks for commands and examples
- Keep command snippets copy-paste friendly
- Use consistent terminology (`HydraDB`, `tenant`, etc.)
- Avoid including secrets or private URLs

## Run the Docs Locally

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open `http://localhost:3000` and verify your page under `/docs/...`.

## Validate Before Submitting

Run type and content checks:

```bash
npm run types:check
```

Create a production build:

```bash
npm run build
```

> Note: In restricted network environments, build can fail if Google Fonts cannot be fetched. This is environmental and not necessarily a docs-content issue.

## Submit Your Change

1. Commit your changes with a clear message
2. Open a pull request
3. In the PR description, include:
   - What page(s) you added or updated
   - Why the change is useful
   - Any screenshots for UI-visible docs changes (if relevant)

Thanks again for contributing.
