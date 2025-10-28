---
title: Analytics Configuration
createTime: 2025/10/10 10:10:10
permalink: /en/config/analytics/
---

Site analytics setup.

## File Structure

```
project-root/
├── src/
│   └── config.ts            # Feature toggles
└── .env                     # Environment variables
```


## Setup Steps

### 1. Create an Umami Site

0. Open the [Umami dashboard](https://cloud.umami.is). If you do not have an account yet, [sign up first](https://umami.is).
1. Click **Add website**.
2. Fill in:
   - **Name** – e.g. `Twilight Blog`
   - **Domain** – your production domain
3. Click **Save**.
4. Press **Edit** to grab the **Tracking code**.
5. Open **Settings → API Keys** and copy the **Key**.
6. Create a local `.env` file and configure:

```env
UMAMI_API_KEY=your-key
UMAMI_TRACKING_CODE=your-tracking-code
```

### 2. Display Statistics

In `src/config.ts`:

```typescript
export const umamiConfig = {
  enabled: false, // Toggle Umami analytics
  baseUrl: "https://api.umami.is", // Keep default unless using a self-hosted URL
};
```

### 3. Deploy

1. Push code to GitHub (or your VCS of choice).
2. Deploy to your hosting platform and inject the `.env` values into environment variables.


## Troubleshooting

### Common Issues

1. **Stats are missing**
   - Double-check the tracking code and API key.
   - Ensure the environment variables are present in production.
2. **Dev server fails to start**
   - Verify required environment variables exist locally.
   - Reinstall dependencies if necessary.

### Getting Help

Open an Issue in the project repository if you need assistance.
