# Contributing to HydraDB Documentation

Thank you for helping improve HydraDB's documentation. This guide covers everything you need to know — from setting up your environment to getting your changes merged.

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Setting Up Locally](#setting-up-locally)
- [Adding a New Page](#adding-a-new-page)
- [Frontmatter Reference](#frontmatter-reference)
- [MDX Authoring Guide](#mdx-authoring-guide)
- [Content Guidelines](#content-guidelines)
- [Navigation & Discoverability](#navigation--discoverability)
- [Validating Your Changes](#validating-your-changes)
- [Submitting a Pull Request](#submitting-a-pull-request)

---

## Prerequisites

Before getting started, make sure you have the following installed:

| Tool | Version | Notes |
|------|---------|-------|
| Node.js | 20+ (recommended) | Required to run the dev server and build |
| pnpm | Latest stable | Used as the package manager |

If you don't have pnpm installed:

```bash
npm install -g pnpm
```

---

## Project Structure

```
.
├── content/
│   └── docs/                  # All documentation source files (.mdx)
│       ├── index.mdx          # Docs landing/entry page
│       ├── getting-started/
│       │   ├── index.mdx
│       │   └── quickstart.mdx
│       └── ...
├── public/                    # Static assets (images, downloads)
├── app/                       # Next.js app directory
└── package.json
```

Key facts:

- All doc content lives under `content/docs/`
- Each page is an `.mdx` file (Markdown + JSX)
- Pages are served at `/docs/<path>`, mirroring the folder structure
- Navigation is driven by the file hierarchy and frontmatter — no separate nav config file to maintain

For detailed framework behavior, refer to the [Fumadocs documentation](https://www.fumadocs.dev/docs).

---

## Setting Up Locally

**1. Clone the repository**

```bash
git clone https://github.com/tech-savvy-guy/hydradb-docs.git
cd hydradb-docs
```

**2. Install dependencies**

```bash
pnpm install
```

**3. Start the development server**

```bash
pnpm run dev
```

**4. Open the docs in your browser**

```
http://localhost:3000
```

Navigate to `/docs/...` to preview your pages. The dev server supports hot-reload — changes to `.mdx` files appear immediately without restarting.

---

## Adding a New Page

### Step 1 — Create the file

Create a new `.mdx` file under `content/docs/`. The file path determines the URL:

| File path | Served URL |
|-----------|-----------|
| `content/docs/getting-started/quickstart.mdx` | `/docs/getting-started/quickstart` |
| `content/docs/reference/api.mdx` | `/docs/reference/api` |
| `content/docs/concepts/tenants.mdx` | `/docs/concepts/tenants` |

If the parent folder doesn't exist yet, create it:

```bash
mkdir -p content/docs/getting-started
touch content/docs/getting-started/quickstart.mdx
```

### Step 2 — Add frontmatter

Every page must begin with a YAML frontmatter block:

```mdx
---
title: Quickstart
description: Get up and running quickly with HydraDB.
---
```

See the [Frontmatter Reference](#frontmatter-reference) section for all supported fields.

### Step 3 — Write your content

Write the body of the page in MDX. Use clear headings to structure your content and include code examples wherever they help:

```mdx
---
title: Quickstart
description: Get up and running quickly with HydraDB.
---

## Install the SDK

```bash
pnpm add @hydradb/client
```

## Connect to your tenant

```ts
import { HydraDB } from '@hydradb/client';

const db = new HydraDB({ tenant: 'your-tenant-id' });
```

---

## Frontmatter Reference

| Field | Required | Description |
|-------|----------|-------------|
| `title` | ✅ Yes | Displayed as the page heading and in the browser tab |
| `description` | ✅ Yes | Used in meta tags and sometimes shown as a subtitle |
| `---` | — | All frontmatter must be wrapped in triple-dash delimiters |

Example with all fields:

```mdx
---
title: Tenant Management
description: Learn how to create, configure, and delete tenants in HydraDB.
---
```

---

## MDX Authoring Guide

MDX supports standard Markdown syntax plus React components. Here are the most common patterns used in this repo:

### Headings

Use `##` for top-level sections within a page. Reserve `#` for the page title (generated from frontmatter). Avoid skipping heading levels.

```mdx
## Overview

### Configuration options

#### Advanced settings
```

### Code blocks

Always specify a language for syntax highlighting:

````mdx
```bash
pnpm install @hydradb/client
```

```ts
const db = new HydraDB({ tenant: 'my-tenant' });
```

```json
{
  "tenantId": "abc-123",
  "region": "us-east-1"
}
```
````

### Callouts / Admonitions

Use Fumadocs callout components for notes, warnings, and tips:

```mdx
<Callout type="info">
  HydraDB automatically provisions resources when a tenant is created.
</Callout>

<Callout type="warn">
  Deleting a tenant is irreversible. All data will be permanently removed.
</Callout>
```

### Inline code

Use backticks for file names, CLI flags, values, and identifiers:

```mdx
Run `pnpm install`, then open the `config/hydra.ts` file and set the `tenantId` field.
```

### Links

Use root-relative paths for internal links:

```mdx
See the [tenant configuration guide](/docs/concepts/tenants) for more details.
```

Use full URLs for external links:

```mdx
Refer to the [Fumadocs documentation](https://www.fumadocs.dev/docs).
```

---

## Content Guidelines

### Voice and tone

- Write in second person ("you", "your") — address the reader directly
- Use active voice and present tense where possible
- Keep sentences short and scannable

### Structure

- Lead with the goal or outcome of the page, not background theory
- Group related steps in numbered lists; use bullet lists only for unordered options
- Keep sections focused — if a section needs its own sub-sections, consider splitting it into a separate page

### Code and commands

- Every code block should be copy-paste ready — no placeholder values that aren't obvious
- Use real HydraDB SDK calls, not pseudocode
- Include expected output where it helps verify success

### Terminology

Use these terms consistently throughout all pages:

| Preferred | Avoid |
|-----------|-------|
| `HydraDB` | HydraDb, Hydra DB, hydradb |
| `tenant` | workspace, org, account (unless referring to those concepts specifically) |
| `SDK` | library, module, package |
| `API key` | secret, token (unless specifically referring to a token type) |

### What not to include

- API keys, secrets, or private connection strings — even fake-looking ones
- Internal staging or preview URLs
- Personal email addresses or Slack handles
- Speculation about unreleased features

---

## Navigation & Discoverability

Fumadocs builds navigation automatically from the file system, but you may want to:

- **Cross-link related pages** at the end of a page to guide readers to the next logical step
- **Check that your page is reachable** by navigating to it from the docs home at `http://localhost:3000/docs`

---

## Validating Your Changes

Before opening a PR, run the following checks:

### Type and content checks

```bash
pnpm run types:check
```

This validates MDX structure, frontmatter fields, and TypeScript types used in any custom components.

### Production build

```bash
pnpm run build
```

A successful build confirms your page renders without errors in a production-like environment.

> **Note:** In restricted network environments (VPNs, corporate proxies, CI with limited egress), the build may fail with a font-fetch error because Next.js tries to download Google Fonts at build time. This is an environment issue and does not indicate a problem with your content. Try building outside the restricted network, or ask a maintainer to verify.

### Manual review checklist

Before submitting, review your page with these questions:

- [ ] Does the page have a `title` and `description` in frontmatter?
- [ ] Are all code blocks copy-paste ready?
- [ ] Are internal links using root-relative paths (e.g., `/docs/...`)?
- [ ] Is terminology consistent with the table in [Content Guidelines](#content-guidelines)?
- [ ] Does the page contain any secrets, private URLs, or personal information?
- [ ] Is the page reachable from at least one other page?

---

## Submitting a Pull Request

1. **Stage and commit your changes** with a descriptive message:

   ```bash
   git add content/docs/getting-started/quickstart.mdx
   git commit -m `docs: add quickstart guide for tenant setup`
   ```

   Use conventional commit prefixes where appropriate: `docs:`, `fix:`, `chore:`.

   Commit messages should be quoted with backticks to preserve formatting of code references.

2. **Push your branch** to the remote:

   ```bash
   git push origin your-branch-name
   ```

3. **Open a pull request** on GitHub against the `main` branch.

4. **Fill out the PR description** with the following:

   - **What changed:** List the pages added or updated
   - **Why it's useful:** Briefly explain the gap this fills or the problem it solves
   - **Preview notes:** If there's anything reviewers should pay special attention to (e.g., a new component, a tricky code example), call it out

5. **Respond to review feedback** and push follow-up commits as needed. Once approved, a maintainer will merge your PR.
