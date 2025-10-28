---
title: 页脚配置
createTime: 2025/10/10 10:10:10
permalink: /config/footer/
---

网站页脚内容配置，支持注入自定义HTML内容如备案号、版权信息等


## 文件结构

```
项目根目录/
└── src/
    ├── config.ts           # 开关设置
	└── FooterConfig.html     # 内容设置
```


## 基础配置

### 启用页脚功能

在 `src/config.ts` 中：

```typescript
export const footerConfig: FooterConfig = {
  enable: true,  // 启用Footer HTML注入功能
};
```

### 添加HTML内容

在 `src/FooterConfig.html` 中：

```html
<!-- 这里是HTML注入示例，你可以在这个文件中添加自定义的HTML内容 -->

</div>
```