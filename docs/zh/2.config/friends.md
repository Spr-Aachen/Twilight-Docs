---
title: 友链配置
createTime: 2025/10/10 10:10:10
permalink: /config/friends/
---

网站友链页面的链接信息配置，支持权重排序、标签分类等


## 文件位置

```
src/config/friendsConfig.ts
```


## 配置结构

```typescript
interface FriendLink {
    title: string;        // 友链标题
    imgurl: string;       // 头像图片URL
    desc: string;         // 友链描述
    siteurl: string;      // 友链地址
    tags?: string[];      // 标签数组
    weight: number;       // 权重，数字越大排序越靠前
    enabled: boolean;     // 是否启用
}
```

## 基础配置

### 友链配置示例

```typescript
export const friendsConfig: FriendLink[] = [
    {
        title: "Astro",
        imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4",
        desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
        siteurl: "https://github.com/withastro/astro",
        tags: ["Framework"],
        weight: 10,         // 权重最高，显示在最前面
        enabled: true,      // 启用显示
    },
    {
        title: "Twilight主题模板文档",
        imgurl: "https://docs-twilight.spr-aachen.com/logo.png",
        desc: "The Progressive JavaScript Framework",
        siteurl: "https://docs-twilight.spr-aachen.com",
        tags: ["文档"],
        weight: 8,          // 权重较高
        enabled: true,
    },
];
```

## 配置选项详解

### 基础属性

| 属性 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `title` | string | 是 | 友链显示名称 |
| `imgurl` | string | 是 | 头像图片URL |
| `desc` | string | 是 | 友链描述文字 |
| `siteurl` | string | 是 | 友链跳转地址 |
| `tags` | string[] | 否 | 标签数组，用于分类 |
| `weight` | number | 是 | 权重值，数字越大排序越靠前 |
| `enabled` | boolean | 是 | 是否启用显示 |