---
title: Content Configuration
createTime: 2025/10/10 10:10:10
permalink: /en/config/content/
---

Configuration for content, including posts, projects, skills, timeline etc.. All entries can be managed through the admin panel.


## File Structure

```
project-root/
└── src/
    └── content/
        ├── albums/      # Album entries
        ├── diary/       # Diary entries
        ├── friends/     # Friend link entries
        ├── posts/       # Post entries
        ├── projects/    # Project entries
        ├── skills/      # Skill entries
        ├── timeline/    # Timeline entries
        ├── about.md     # About page content
        └── friends.md   # Friends page header content
```


## Post Entries

Posts are stored in `src/content/posts` and its subdirectories. Markdown (`.md`) format is supported.

### Frontmatter Configuration

Each post must start with a Frontmatter configuration:

```yaml
---
title: Post Title
published: 2025-01-15    # Publication date
updated: 2025-01-15      # Update date (optional)
description: Post description for list pages
image: /path/to/image    # Post cover image (optional)
tags: [Tag1, Tag2]      # Tags
category: CategoryName   # Category
draft: false             # Whether it's a draft
---
```

### Extended Syntax

The following custom component syntaxes are supported:

- **GitHub Repository Card**: `::github{repo="Owner/Repo"}`
- **Admonitions**:
  ```markdown
  :::note
  Note content
  :::
  ```
  Supported types: `note`, `tip`, `important`, `warning`, `caution`.
- **Spoiler**: `:spoiler[hidden text]`


## Project Entries

Create a JSON file inside `src/content/projects` with the following shape:

```json
{
    "title": "Twilight Blog Template",
    "description": "A CMS integrated blog theme built with Astro framework.",
    "image": "",
    "category": "website",
    "techStack": [
        "Astro",
        "Svelte",
        "Tailwind CSS"
    ],
    "status": "in-progress",
    "liveDemo": "https://twilight.spr-aachen.com",
    "sourceCode": "https://github.com/Spr-Aachen/Twilight",
    "startDate": "2025-10-01",
    "endDate": "",
    "featured": false,
    "tags": [
        "Personal Project",
        "Open Source Project"
    ]
}
```

Each JSON file corresponds to one project. The filename becomes the project ID.


## Skill Entries

Create a JSON file inside `src/content/skills`:

```json
{
    "name": "Git",
    "description": "A distributed version control system.",
    "icon": "logos:git-icon",
    "category": "tools",
    "level": "advanced",
    "experience": {
        "years": 3,
        "months": 0
    },
    "color": "#F05032"
}
```

Each JSON file corresponds to one skill. The filename becomes the skill ID.


## Timeline Entries

Create a JSON file inside `src/content/timeline`:

```json
{
    "title": "Twilight",
    "description": "My first open source template project, a blog template built with the Astro framework.",
    "type": "project",
    "startDate": "2025-10-01",
    "endDate": "",
    "skills": [
        "Astro",
        "Svelte",
        "Tailwind CSS"
    ],
    "achievements": [],
    "links": [
        {
            "name": "GitHub Repository",
            "url": "https://github.com/Spr-Aachen/Twilight",
            "type": "project"
        },
        {
            "name": "Online Demo",
            "url": "https://twilight.spr-aachen.com",
            "type": "other"
        }
    ],
    "icon": "material-symbols:code",
    "color": "#7C3AED",
    "featured": false
}
```

Each JSON file is a timeline event. The filename becomes the event ID.


## Album Entries

Create a JSON file inside `src/content/albums`:

```json
{
    "title": "Album Title",
    "description": "Album description",
    "cover": "Cover Image URL",
    "date": "2025-01-01T00:00:00.000Z",
    "location": "Location",
    "tags": ["tag"],
    "layout": "masonry",
    "columns": 3,
    "photos": [
        {
            "src": "Image URL or local path",
            "alt": "Image alt text",
            "title": "Image title",
            "description": "Detailed description",
            "tags": ["tag"]
        }
    ],
    "visible": true
}
```


## Diary Entries

Create a JSON file inside `src/content/diary`:

```json
{
    "content": "Diary content",
    "date": "2025-01-01T00:00:00Z",
    "images": []
}
```


## Friend Entries

Create a JSON file inside `src/content/friends`:

```json
{
    "title": "Site Name",
    "imgurl": "Avatar URL",
    "desc": "Site description",
    "siteurl": "Site URL",
    "tags": ["category tag"]
}
```


## Single Page Content

- `src/content/about.md`: Detailed content for the "About" page.
- `src/content/friends.md`: Header description for the "Friends" page (e.g., application instructions).


## Admin Panel

Visit `https://your-domain.com/admin` and use the corresponding tabs to manage the data entries.