---
title: Anime Page Configuration
createTime: 2025/10/10 10:10:10
permalink: /en/config/anime/
---

Configure the anime page.

## File Structure

```
project-root/
└── src/
    └── config.ts           # Mode settings
```


## Bangumi Integration

```typescript
bangumi: {
  userId: "your-bangumi-id", // Replace with your Bangumi user ID. Try "sai" to test
},
```

1. Replace `"your-bangumi-id"` with the Bangumi username you want to display.
2. Set the `mode` to `"bangumi"` so the page pulls data from the Bangumi API.
