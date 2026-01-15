---
title: 内容配置
createTime: 2025/10/10 10:10:10
permalink: /config/content/
---

内容配置，包含文章、项目、技能、时间线等，支持通过后台进行管理


## 文件结构

```
项目根目录/
└── src/
    └── content/
        ├── albums/      # 相册数据
        ├── diary/       # 日记数据
        ├── friends/     # 友链数据
        ├── posts/       # 文章数据
        ├── projects/    # 项目数据
        ├── skills/      # 技能数据
        ├── timeline/    # 时间线数据
        ├── about.md     # 关于页面内容
        └── friends.md   # 友链页面内容
```


## 文章数据

文章存放在 `src/content/posts` 目录及其子目录下。支持 Markdown (`.md`) 格式。

### Frontmatter 配置

每篇文章开头需要包含 Frontmatter 配置：

```yaml
---
title: 文章标题
published: 2025-01-15    # 发布日期
updated: 2025-01-15      # 更新日期（可选）
description: 文章描述     # 显示在列表页的摘要
image: /path/to/image    # 文章封面图（可选）
tags: [Tag1, Tag2]      # 标签
category: CategoryName   # 分类
draft: false             # 是否为草稿
---
```

### 扩展语法

支持以下自定义组件语法：

- **GitHub 仓库卡片**：`::github{repo="Owner/Repo"}`
- **提示框 (Admonitions)**：
  ```markdown
  :::note
  提示内容
  :::
  ```
  支持 `note`, `tip`, `important`, `warning`, `caution`。
- **隐藏文本 (Spoiler)**：`:spoiler[被隐藏的文字]`


## 项目数据

在 `src/content/projects` 中新建一个json文件，按以下格式填写项目信息：

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

在 `src/content/skills` 中新建一个json文件，按以下格式填写项目信息：

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

在 `src/content/timeline` 中新建一个json文件，按以下格式填写项目信息：

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

每个json file对应一个时间点，文件名会作为时间点的id


## 相册数据

在 `src/content/albums` 中新建一个json文件：

```json
{
    "title": "相册标题",
    "description": "相册描述",
    "cover": "封面图URL",
    "date": "2025-01-01T00:00:00.000Z",
    "location": "地点",
    "tags": ["标签"],
    "layout": "masonry",
    "columns": 3,
    "photos": [
        {
            "src": "图片URL或本地路径",
            "alt": "图片描述",
            "title": "图片标题",
            "description": "详细描述",
            "tags": ["标签"]
        }
    ],
    "visible": true
}
```


## 日记数据

在 `src/content/diary` 中新建一个json文件：

```json
{
    "content": "日记内容",
    "date": "2025-01-01T00:00:00Z",
    "images": []
}
```


## 友链数据

在 `src/content/friends` 中新建一个json文件：

```json
{
    "title": "站点名称",
    "imgurl": "头像URL",
    "desc": "站点描述",
    "siteurl": "站点链接",
    "tags": ["分类标签"]
}
```


## 单页内容

- `src/content/about.md`: “关于”页面的详细内容。
- `src/content/friends.md`: “友链”页面的头部说明内容（如申请方式）。


## 后台管理

访问您的 URL/admin 进入后台管理界面，点击对应选项卡即可管理