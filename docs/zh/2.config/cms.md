---
title: 后台管理系统配置
createTime: 2025/10/10 10:10:10
permalink: /config/cms/
---

后台管理系统配置


## 文件结构

```
项目根目录/
├── public/
│   └── admin/
│       └── config.yml        # Decap CMS 配置文件
├── astro.config.mjs          # 包含 Decap CMS 集成
└── .env                      # 环境变量文件
```


## 

### 1. 创建 GitHub OAuth 应用

0. 编辑 `astro.config.mjs` 文件，将`oauthDisabled`设置为`false`：
    ```javascript
    export default defineConfig({
        integrations: [
            decapCmsOauth({
                decapCMSVersion: "3.3.3",
                oauthDisabled: false, // Disable it to use oauth, requires .env configuration
            }),
    ],
    })
    ```
1. 访问 [GitHub Developer Settings](https://github.com/settings/developers)
2. 点击 `New OAuth App`
3. 填写以下信息：
    - **Application name**: 应用名称（如："Twilight Blog CMS"）
    - **Homepage URL**: 您的网站 URL（如："https://blog.spr-aachen.com"）
    - **Authorization callback URL**: 您的 URL/oauth/callback（如："https://blog.spr-aachen.com/oauth/callback"）
4. 点击 `Register application`
5. 点击 `Generate a new client secret`
6. 本地创建 `.env` 文件，使用 **Client ID** 和 **Client Secret** 设置以下环境变量：
    ```env
    OAUTH_GITHUB_CLIENT_ID=您的 github client id
    OAUTH_GITHUB_CLIENT_SECRET=您的 github client secret
    ```

### 2. 更新配置文件

编辑 `public/admin/config.yml` 文件，更新以下配置：
```yaml
backend:
    name: github
    repo: your-username/your-repo-name  # 替换为您的 GitHub 仓库
    branch: main # 替换为您的仓库分支名称
    site_domain: your-domain  # 替换为您的域名
    base_url: https://your-domain  # 替换为您的 URL
    auth_endpoint: oauth
```

### 3. 部署和访问

1. 将代码推送到 GitHub 仓库
2. 选择支持 SSR 的部署平台，将 `.env` 文件内容导入到环境变量后开始部署
3. 访问您的 URL/admin 进入后台管理界面


## 故障排除

### 常见问题

1. **OAuth 认证失败**
    - 检查 Client ID 和 Client Secret 是否正确
    - 确认回调 URL 配置正确

2. **无法访问后台**
    - 确认环境变量已于部署前正确导入到部署平台
    - 检查部署平台是否支持 SSR

3. **内容保存失败**
    - 检查 GitHub 仓库权限
    - 确认分支名称配置正确

4. **开发环境启动失败**
    - 检查是否缺少必要的环境变量
    - 确认所有依赖包已正确安装

### 获取帮助

如果遇到问题，请：
1. 查看 [Decap CMS 官方文档](https://decapcms.org/docs/)
2. 检查 [astro-decap-cms-oauth 项目](https://github.com/dorukgezici/astro-decap-cms-oauth)
3. 提交 Issue 到项目仓库