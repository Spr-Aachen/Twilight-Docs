---
title: 数据页面配置
createTime: 2025/10/10 10:10:10
permalink: /config/data/
---

个人数据配置， 包含项目、技能、时间线、以及友链，支持通过后台进行管理


## 文件结构

```
项目根目录/
└── src/
    └── data/
        ├── projects/    # 项目数据配置
        ├── skills/      # 技能数据配置
        └── timeline/    # 时间线数据配置
```


## 项目数据

在 `src/data/projects` 中新建一个json文件，按以下格式填写项目信息：

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

每个json文件对应一个项目，文件名会作为项目的id


## 技能数据

在 `src/data/skills` 中新建一个json文件，按以下格式填写项目信息：

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

每个json文件对应一个技能，文件名会作为技能的id


## 时间线数据

在 `src/data/timeline` 中新建一个json文件，按以下格式填写项目信息：

```json
{
    "title": "Twilight",
    "description": "My first open source template project, a blog template built with Astro framework.",
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

每个json文件对应一个时间点，文件名会作为时间点的id


## 后台管理

访问您的 URL/admin 进入后台管理界面，点击对应选项卡即可管理