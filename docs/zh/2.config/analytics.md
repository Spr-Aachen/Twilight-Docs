---
title: 统计配置
createTime: 2025/10/10 10:10:10
permalink: /config/analytics/
---

站点统计配置


## 文件结构

```
项目根目录/
├── src/
│	└── config.ts               # 开关设置
└── .env                        # 环境变量文件
```


## 配置步骤

### 1. 创建 Umami 站点统计

0. 访问 [Umami 仪表板](https://cloud.umami.is)（如果没有账号请先[去注册](https://umami.is)）
1. 点击 `Add website`
2. 填写以下信息：
   - **Name**: 名称（如：Twilight Blog）
   - **Domain**: 您的域名
3. 点击 `Save`
4. 点击 `Edit`, 获取 **Tracking code**
5. 点击 `Settings`，找到 `API Keys`，获取 **Key**
6. 本地创建 `.env` 文件，使用 **Tracking code** 和 **Key** 设置以下环境变量：
```env
UMAMI_API_KEY=您的 Key
UMAMI_TRACKING_CODE=您的 Tracking code
```

### 2. 显示站点统计

在 `src/config.ts` 中：
```typescript
export const umamiConfig = {
	enabled: false, // 是否显示Umami统计
	baseUrl: "https://api.umami.is", // UmamiCloudAPI地址（无特殊情况保持默认即可）
};
```

### 3. 部署

1. 将代码推送到 GitHub 仓库
2. 选择平台进行部署并将 `.env` 文件内容导入到环境变量


## 故障排除

### 常见问题

1. **无法显示统计**
   - 检查 Tracking code 和 Key 是否正确
   - 确认环境变量已正确导入到部署平台

2. **开发环境启动失败**
   - 检查是否缺少必要的环境变量
   - 确认所有依赖包已正确安装

### 获取帮助

如果遇到问题，请提交 Issue 到项目仓库