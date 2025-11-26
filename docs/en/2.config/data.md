---
title: Data Page Configuration
createTime: 2025/10/10 10:10:10
permalink: /en/config/data/
---

Configuration for the data page, including projects, skills, and timeline sections. All entries can be managed through the admin panel.

## File Structure

```
project-root/
└── src/
    └── data/
        ├── projects/    # Project entries
        ├── skills/      # Skill entries
        └── timeline/    # Timeline entries
```


## Project Entries

Create a JSON file inside `src/data/projects` with the following shape:

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

Create a JSON file inside `src/data/skills`:

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

Create a JSON file inside `src/data/timeline`:

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


## Admin Panel

Visit `https://your-domain.com/admin` and use the corresponding tabs to manage the data entries.
