---
title: Admin Panel Configuration
createTime: 2025/10/10 10:10:10
permalink: /en/config/cms/
---

Backend administration setup using Decap CMS.

## File Structure

```
project-root/
├── public/
│   └── admin/
│       └── config.yml        # Decap CMS configuration
├── astro.config.mjs          # Includes Decap CMS integration
└── .env                      # Environment variables
```


## Setup Steps

### 1. Create a GitHub OAuth App

1. Edit `astro.config.mjs` and make sure `oauthDisabled` is `false`:

```javascript
export default defineConfig({
  integrations: [
    decapCmsOauth({
      decapCMSVersion: "3.3.3",
      oauthDisabled: false,
    }),
  ],
})
```

2. Go to [GitHub Developer Settings](https://github.com/settings/developers).
3. Click **New OAuth App** and fill in:
   - **Application name**: e.g. `Twilight Blog CMS`
   - **Homepage URL**: your site URL
   - **Authorization callback URL**: `https://your-domain.com/oauth/callback`
4. Click **Register application**.
5. Generate a **Client Secret**.
6. Create a local `.env` file with:

```env
OAUTH_GITHUB_CLIENT_ID=your-github-client-id
OAUTH_GITHUB_CLIENT_SECRET=your-github-client-secret
```

### 2. Update the CMS Config

Edit `public/admin/config.yml`:

```yaml
backend:
  name: github
  branch: main
  repo: your-username/your-repo-name  # Replace with your GitHub repo
  site_domain: your-domain.com        # Replace with your domain
  base_url: https://your-domain.com   # Replace with your production URL
  auth_endpoint: oauth
```

### 3. Deploy and Access

1. Push changes to your GitHub repository.
2. Deploy to an SSR-capable platform and inject the `.env` values into environment variables.
3. Open `https://your-domain.com/admin` to access the CMS dashboard.


## Troubleshooting

### Common Issues

1. **OAuth authentication fails**
   - Confirm the Client ID/Secret are correct.
   - Double-check the callback URL.
2. **Cannot access the admin panel**
   - Ensure environment variables are available in production.
   - Confirm the hosting platform supports SSR.
3. **Content fails to save**
   - Verify GitHub repository permissions.
   - Confirm the branch name matches the config.
4. **Dev server fails to start**
   - Check for missing environment variables.
   - Reinstall dependencies if needed.

### Getting Help

- Review the [Decap CMS documentation](https://decapcms.org/docs/)
- Check the [astro-decap-cms-oauth project](https://github.com/dorukgezici/astro-decap-cms-oauth)
- Open an Issue in this repository for support
