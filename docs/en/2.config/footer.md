---
title: Footer Configuration
createTime: 2025/10/10 10:10:10
permalink: /en/config/footer/
---

Configure custom footer content and HTML injection.

## File Structure

```
project-root/
└── src/
    ├── config.ts           # Toggles
    └── FooterConfig.html   # Injected HTML content
```


## Basic Setup

### Enable the Footer Injection

In `src/config.ts`:

```typescript
export const footerConfig: FooterConfig = {
  enable: true, // Enable custom footer HTML
};
```

### Add HTML Content

Edit `src/FooterConfig.html` and insert any markup you want to display in the footer area.
