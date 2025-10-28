---
title: Single-File Workflow
createTime: 2025/10/10 10:10:10
permalink: /en/press/file/
---

One of the two ways to author posts in the Twilight blog system. This approach is ideal for simple posts that do not require managing many images or assets.

> ⚠️ Using the single-file workflow prevents RSS from resolving local image paths correctly. If your posts rely on RSS with local media, choose the folder-based workflow instead. (Remote image hosts are fine.)

## Create a Post

1. Inside `src/content/posts`, create a new Markdown file with a descriptive name, for example `my-first-post.md`.
2. Add frontmatter—the metadata block at the top of the file. At minimum, include `title` and `description`:

```markdown
---
title: Markdown Tutorial
published: 2025-01-20
pinned: true
description: A simple example of a Markdown blog post.
tags: [Markdown, Blogging]
category: Examples
licenseName: "Unlicensed"
author: emn178
sourceLink: "https://github.com/emn178/markdown"
draft: false
date: 2025-01-20
image:
  url: 'https://example.com/image.jpg'
  alt: 'Cover image description'
pubDate: 2025-01-20
---
```

3. Write the article content beneath the frontmatter using standard Markdown syntax.

## Frontmatter Field Reference

Supported fields include:

### Required
- `title`: Post title.
- `description`: Short summary used in listings and SEO.

### Publishing
- `published`: Publication date (YYYY-MM-DD).
- `pubDate`: Publication date used by feeds (mirrors `published`).
- `date`: Created timestamp.
- `draft`: Set to `true` to hide the post in production.

### Taxonomy & Positioning
- `tags`: Array of tags describing the topic.
- `category`: Broad classification for the post.
- `pinned`: When `true`, pin the article to the top of lists.

### Author & Licensing
- `author`: Display name of the author.
- `licenseName`: License identifier, e.g. `MIT`, `CC BY 4.0`.
- `sourceLink`: Link to the original source or repository.

### Images
- `image`: Cover image configuration. (Remember RSS cannot resolve local paths in single-file mode.)
  - `url`: Image URL.
  - `alt`: Alternative text.

## Markdown Learning Resources

Need a refresher on Markdown? Start here:

📚 **Recommended reading**: [Runoob Markdown Tutorial](https://www.runoob.com/markdown/md-tutorial.html)

This guide covers:
- Markdown basics
- Headings, paragraphs, line breaks
- Emphasis (bold/italic)
- Lists, links, images
- Code blocks, tables
- Advanced features

Master the fundamentals and you will be ready to craft polished articles.

## Frontmatter Best Practices

### Date Formats
Use ISO 8601 (YYYY-MM-DD):

```yaml
published: 2025-01-20
date: 2025-01-20
pubDate: 2025-01-20
```

### Tags & Categories
- Choose specific, relevant tags.
- Use categories for broader organization.

Example:

```yaml
tags: [Vue.js, JavaScript, Frontend, Tutorial]
category: Web Development
```

### Draft Management
- `draft: true` hides the post in production builds.
- `draft: false` publishes it normally.

### License Suggestions
Common values include:
- `MIT`
- `Apache-2.0`
- `CC BY 4.0`
- `CC BY-SA 4.0`
- `Unlicensed`

### Full Example

```markdown
---
title: "Vue.js 3 Composition API Guide"
published: 2025-01-20
pinned: false
description: "Deep dive into Vue 3's Composition API, covering setup, reactivity, and lifecycle hooks."
tags: [Vue.js, JavaScript, Frontend, API]
category: "Web Development"
licenseName: "CC BY 4.0"
author: "Jane Doe"
sourceLink: "https://github.com/janedoe/vue3-guide"
draft: false
date: 2025-01-20
image:
  url: 'https://example.com/vue3-cover.jpg'
  alt: 'Vue.js 3 Composition API cover'
pubDate: 2025-01-20
---

# Vue.js 3 Composition API Guide

In this article we explore Vue 3's Composition API in depth...
```

## Previewing Posts

After saving the file, preview it in the browser. Append the filename (without `.md`) to your dev URL.

Example: if your dev server runs at `http://localhost:4321/` and the file is `my-first-post.md`, open `http://localhost:4321/posts/my-first-post`.

If the post does not exist or the path is incorrect, you will see a 404. Console output can help diagnose missing content.

## Linking to Posts

Use standard HTML anchors to link to posts:

```html
<a href="/posts/my-first-post/">My first post</a>
```

Ensure the `href` points to the correct slug.

## Adding Images

Place images inside the `public` directory and reference them with absolute paths:

```markdown
![Cover description](/images/my-image.png)
```

## Creating Multiple Posts

You can keep multiple Markdown files in `src/content/posts/`:

```
src/content/posts/
├── my-first-post.md
├── my-second-post.md
└── my-third-post.md
```

Each file corresponds to a unique post, and the filename becomes the URL path.

## Linking Multiple Posts

Create an index list elsewhere on your site:

```html
<ul>
  <li><a href="/posts/my-first-post/">My first post</a></li>
  <li><a href="/posts/my-second-post/">My second post</a></li>
  <li><a href="/posts/my-third-post/">My third post</a></li>
</ul>
```

Maintain accurate `href` values for each article.

## Notes

- Filenames become URL slugs; keep them descriptive and avoid special characters.
- The `date` field is optional—missing values fall back to the file creation time.
- Single-file mode is suited to lightweight posts. For media-heavy articles, switch to the folder workflow to keep assets organized and RSS-friendly.