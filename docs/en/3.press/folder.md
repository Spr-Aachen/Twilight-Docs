---
title: Folder Workflow
createTime: 2025/10/10 10:10:10
permalink: /en/press/folder/
---

The recommended approach for authoring posts that include many images or supporting assets.

## Create a Post

1. Under `src/content/posts`, create a new folder with a descriptive name, e.g. `my-complex-post`.
2. Inside the folder, add an `index.md` file.
3. Add frontmatter metadata to `index.md` (include at least `title` and `description`):

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
  url: './cover.jpg'
  alt: 'Cover image'
pubDate: 2025-01-20
---
```

Write the article content below the frontmatter using Markdown.


## Frontmatter Field Reference

Supported fields mirror the single-file workflow:

### Required
- `title`
- `description`

### Publishing
- `published`
- `pubDate`
- `date`
- `draft`

### Taxonomy & Positioning
- `tags`
- `category`
- `pinned`

### Author & Licensing
- `author`
- `licenseName`
- `sourceLink`

### Images
- `image` (recommended to use relative paths like `./cover.jpg`)
  - `url`
  - `alt`


## Markdown Learning Resources

📚 **Recommended reading**: [Runoob Markdown Tutorial](https://www.runoob.com/markdown/md-tutorial.html)

Covers:
- Markdown basics
- Headings, paragraphs, line breaks
- Emphasis (bold/italic)
- Lists, links, images
- Code blocks, tables
- Advanced features


## Frontmatter Best Practices

### Date Formats

```yaml
published: 2025-01-20
date: 2025-01-20
pubDate: 2025-01-20
```

### Tags & Categories

```yaml
tags: [Vue.js, JavaScript, Frontend, Tutorial]
category: Web Development
```

### Draft Management

- `draft: true` keeps the post hidden in production.
- `draft: false` publishes it.

### Licenses

Common values: `MIT`, `Apache-2.0`, `CC BY 4.0`, `CC BY-SA 4.0`, `Unlicensed`.

### Image Paths

Use relative paths to keep assets with the article:

```yaml
image:
  url: './cover.jpg'
  alt: 'Cover illustration'
```

### Full Example

```markdown
---
title: "React Hooks Deep Dive"
published: 2025-01-20
pinned: true
description: "Comprehensive guide to React Hooks with detailed explanations and visuals."
tags: [React, JavaScript, Hooks, Frontend]
category: "Web Development"
licenseName: "MIT"
author: "Chris Lee"
sourceLink: "https://github.com/chris/react-hooks-guide"
draft: false
date: 2025-01-20
image:
  url: './react-hooks-cover.png'
  alt: 'React Hooks cover'
pubDate: 2025-01-20
---


# React Hooks Deep Dive

![React Hooks Overview](./example-diagram.png)

...
```

## Previewing Posts

After saving, preview via the folder name appended to your dev URL. If the folder is `my-complex-post`, open `http://localhost:4321/posts/my-complex-post`.

Missing content or incorrect paths will result in 404s; check the browser console for debugging info.

## Linking to Posts

Add links from other pages using standard anchors:

```html
<a href="/posts/my-complex-post/">My complex article</a>
```

## Managing Assets

All related resources live inside the folder, e.g.:

```
src/content/posts/my-complex-post/
├── index.md
├── image1.png
├── image2.jpg
└── data.json
```

Reference images with simple relative paths:

```markdown
![Diagram](image1.png)
```

This ensures RSS can resolve image paths correctly.

## Multiple Posts

Create multiple folders, one per post:

```
src/content/posts/
├── my-first-post/
│   ├── index.md
│   └── cover.jpg
├── my-second-post/
│   ├── index.md
│   ├── image1.png
│   └── image2.png
└── my-third-post/
    ├── index.md
    └── data.json
```

Each folder keeps materials organized and easy to manage.

## Linking Multiple Posts

Create lists that reference each post:

```html
<ul>
  <li><a href="/posts/my-first-post/">My first post</a></li>
  <li><a href="/posts/my-second-post/">My second post</a></li>
  <li><a href="/posts/my-third-post/">My third post</a></li>
</ul>
```

## Advantages

- Centralizes all assets per article.
- Simplifies relative image references.
- Creates a clean structure for complex content.
- Simplifies migration and backups.
- Prevents asset conflicts by isolating each article.
