---
title: 番剧页面配置
createTime: 2025/10/10 10:10:10
permalink: /config/anime/
---

番剧页面配置


## 文件结构

```
项目根目录/
└── src/
	└── config.ts           # 模式设置
```


## Bangumi配置

```typescript
bangumi: {
		userId: "your-bangumi-id", // 在此处设置你的Bangumi用户ID，可以设置为 "sai" 测试
	},
```

1. 把括号中的 "your-bangumi-id" 替换为Bangumi用户ID。
2. mode配置为"bangumi"，这样就能从Bangumi API获取番剧数据。