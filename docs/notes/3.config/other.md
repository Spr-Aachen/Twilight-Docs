---
title: 其他配置
createTime: 2025/08/17 17:21:41
permalink: /config/other/
---


## 网站域名配置

你需要在 `astro.config.mjs` 文件中配置网站域名。

```typescript
export default defineConfig({
	site: "https://Twilight.mysqil.com/",
})
```

这只是指定网站的 URL。site属性被 Astro 用于多种用途，比如在网站页面和 RSS 订阅源中生成正确的 URL。