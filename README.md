# tyl.sh

Personal site and blog for Tyler Cyert. Built with Next.js and MDX, styled as a minimal terminal/BBS dark theme.

## Running locally

```bash
npm install
npm run dev
```

## Blog posts

Posts live in `content/posts/` as `.mdx` files. Each file needs frontmatter at the top:

```mdx
---
title: "Post Title"
date: "2026-04-05"
description: "A short summary shown in post listings."
tags: ["tag1", "tag2"]
---

Post content goes here. Standard Markdown works — headings, lists, code blocks, images, links, etc.
```

To add a new post, create a file like `content/posts/my-new-post.mdx`. The filename becomes the URL slug (`/blog/my-new-post`). Posts are sorted by date, newest first.

### Interactive elements in posts

Since posts are MDX, you can import and use React components inline. Register them in `components/MDXComponents.tsx` to make them available in all posts.

## Site pages

| Page | File | Notes |
|------|------|-------|
| Home | `app/page.tsx` | Intro, projects list, recent posts |
| About | `app/about/page.tsx` | Bio / about me |
| Blog index | `app/blog/page.tsx` | All posts listed by date |
| Blog post | `app/blog/[slug]/page.tsx` | Renders MDX from `content/posts/` |

## Projects

Projects are listed on the homepage in `app/page.tsx`. To add or edit a project, update the `projects` section in that file.

## Styling

All styles are in `app/globals.css` — plain CSS, no framework. Blog post content is styled via the `.prose` class.

## Deployment

Pushes to `main` deploy automatically via Vercel.
