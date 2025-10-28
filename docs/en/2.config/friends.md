---
title: Friend Links Configuration
createTime: 2025/10/10 10:10:10
permalink: /en/config/friends/
---

Configure the friend links (blogroll) page and related metadata.

## File Location

```
src/config/friendsConfig.ts
```


## Type Definition

```typescript
interface FriendLink {
  title: string;      // Display name
  imgurl: string;     // Avatar image URL
  desc: string;       // Short description
  siteurl: string;    // Destination URL
  tags?: string[];    // Optional tags
  weight: number;     // Sorting weight (higher = earlier)
  enabled: boolean;   // Toggle visibility
}
```


## Basic Example

```typescript
export const friendsConfig: FriendLink[] = [
  {
    title: "Astro",
    imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4",
    desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
    siteurl: "https://github.com/withastro/astro",
    tags: ["Framework"],
    weight: 10,
    enabled: true,
  },
  {
    title: "Twilight Theme Docs",
    imgurl: "https://docs-twilight.spr-aachen.com/logo.png",
    desc: "The Progressive JavaScript Framework",
    siteurl: "https://docs-twilight.spr-aachen.com",
    tags: ["Documentation"],
    weight: 8,
    enabled: true,
  },
];
```


## Field Reference

| Field      | Type      | Required | Description                                  |
|------------|-----------|----------|----------------------------------------------|
| `title`    | `string`  | Yes      | Display name of the link                     |
| `imgurl`   | `string`  | Yes      | Avatar image URL                             |
| `desc`     | `string`  | Yes      | Short description text                       |
| `siteurl`  | `string`  | Yes      | URL to open when clicked                     |
| `tags`     | `string[]`| No       | Tags for grouping or filtering               |
| `weight`   | `number`  | Yes      | Higher values appear earlier in the list     |
| `enabled`  | `boolean` | Yes      | Toggle visibility of the link                |
