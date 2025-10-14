---
title: 页脚配置
createTime: 2025/10/10 10:10:10
permalink: /config/footer/
---


## 文件位置

```
src/FooterConfig.html
```


## 配置结构

页脚配置分为两个部分：

1. **HTML内容文件**：`src/FooterConfig.html`
2. **配置开关**：`src/config.ts` 中的 `footerConfig`


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