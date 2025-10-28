---
title: Site Configuration
createTime: 2025/10/10 10:10:10
permalink: /en/config/core/
---

Site-wide configuration reference.

## File Location

```
src/config.ts
```

## Basic Settings

```typescript
// Detect browser language automatically (defaults to 'en' during SSR)
const SITE_LANG = detectBrowserLanguage("en");
// Uncomment the line below to force a specific language
// const SITE_LANG = "zh"; // Supported values include 'zh', 'en', 'ja', etc.

export const siteConfig: SiteConfig = {
  title: "Twilight",
  subtitle: "Blog Template",

  lang: SITE_LANG, // Browser language result
  translate: {
    enable: true, // Toggle translation feature
    service: "client.edge", // Use Microsoft Edge translation service
    defaultLanguage: getTranslateLanguageFromConfig(SITE_LANG), // Auto-pick fallback language
    showSelectTag: false, // Hide the default dropdown and use custom buttons instead
    autoDiscriminate: true, // Auto-detect user language
    ignoreClasses: ["ignore", "banner-title", "banner-subtitle"], // Ignore these CSS classes while translating
    ignoreTags: ["script", "style", "code", "pre"], // Ignore these HTML tags while translating
  },
}
```

- `title`: Primary site title, used in the browser tab and page header.
- `subtitle`: Secondary title that usually appears below the hero banner.
- `lang`: Default language, affecting dates, translations, and more.


## Theme Settings

```typescript
    themeColor: {
        hue: 255, // Hue value between 0 and 360. Examples: red: 0, cyan: 200, teal: 250, pink: 345
        fixed: false, // Hide the theme-color picker from visitors
    },
    defaultTheme: "dark", // Options: "system", "light", "dark"
```

- `hue`: Hue value for the default theme color.
- `fixed`: When `true`, visitors cannot change the color picker.
- `defaultTheme`: Select light/dark/system appearance.


## Wallpaper Settings

Wallpapers support three modes: `fullscreen`, `banner`, and `none` (solid color background).

```typescript
  wallpaper: {
    mode: "banner", // "banner" | "fullscreen" | "none"

    // Shared image source for fullscreen and banner modes
    // Accepts a single image or an array. Arrays longer than 1 trigger the carousel.
    src: {
      desktop: [
        "/assets/desktop-banner/desktopBanner_1.webp",
      ], // Desktop wallpaper images
      mobile: [
        "/assets/mobile-banner/mobileBanner_1.webp",
      ], // Mobile wallpaper images
    },

    position: "center", // Equivalent to CSS object-position, supports 'top', 'center', 'bottom'

    // Carousel settings (shared by fullscreen and banner)
    carousel: {
      enable: true, // true: enable slideshow when multiple images exist; false: pick a random image
      interval: 3.3, // Interval in seconds
    },

    // PicFlow API support (shared by fullscreen and banner)
    imageApi: {
      enable: false, // Enable image API
      url: "http://domain.com/api_v2.php?format=text&count=4", // API endpoint returning one image URL per line
    },
    // The PicFlow API needs the text response type, hence format=text.
    // Project repo: https://github.com/matsuzaka-yuki/PicFlow-API

    // Banner-only options
    banner: {
      homeText: {
        enable: true, // Show custom text on the home banner
        title: "Twilight", // Banner headline
        subtitle: [
          "Illuminate Our Paths",
        ],
        typewriter: {
          enable: true, // Enable subtitle typewriter effect
          speed: 111, // Typing speed in milliseconds
          deleteSpeed: 51, // Delete speed in milliseconds
          pauseTime: 3000, // Pause duration after completing each cycle (ms)
        },
      },

      credit: {
        enable: false, // Show a credit line for the banner image
        text: "Describe", // Credit text
        url: "", // Optional source link
      },

      navbar: {
        transparentMode: "semifull", // "semi" | "full" | "semifull"
      },
    },

    // Fullscreen-only options
    fullscreen: {
      zIndex: -1,
      opacity: 0.9,
      blur: 1,
      navbar: {
        transparentMode: "semi",
      },
    },
  },
```

### Wallpaper Tips

- **Image paths**: Paths starting with `/` are resolved from the `/public` directory; others are relative to `/src`.
- **Carousel**: Automatically enabled when more than one image is provided.
- **Responsive**: Different images can be used for desktop and mobile.
- **Typewriter effect**: Configure typing speed, deletion speed, and pauses.


## Table of Contents

```typescript
    toc: {
        enable: true, // Toggle table of contents
        depth: 3,     // Heading depth from 1 to 6; 1 shows only h1
    },
```

- `enable`: Disable to hide the TOC on article pages.
- `depth`: Control how many heading levels appear.


## Navbar Dropdown Menu (`navBarConfig`)

Configure the multi-level navigation menu in `src/config.ts`.

### Key Options

- **`links`** (`Array<Object>`): Defines each navigation item. Items can use presets (`LinkPreset`) or custom objects.
  - Custom link properties:
    - `name`: Visible label.
    - `url`: Destination URL.
    - `children`: Optional array for nested menus.
    - `external`: When `true`, opens in a new tab.

### Creating a Nested Menu

Add a custom link with a `children` array inside `navBarConfig.links`.

```typescript
export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    {
      name: "Links",
      url: "/links/",
      children: [
        {
          name: "GitHub",
          url: "https://github.com/Spr-Aachen",
          external: true,
        },
        {
          name: "Bilibili",
          url: "https://space.bilibili.com/359461611",
          external: true,
        },
        {
          name: "Gitee",
          url: "https://gitee.com/Spr-Aachen",
          external: true,
        },
      ],
    },
    {
      name: "My",
      url: "/content/",
      children: [
        LinkPreset.About,
        LinkPreset.Friends,
        LinkPreset.Anime,
        LinkPreset.Diary,
      ],
    },
  ],
};
```

- `Links` and `My` are top-level items.
- The `Links` menu contains three external child entries.
- The `My` menu reuses built-in `LinkPreset` options.


## License Banner

Control the license note at the bottom of each post via `licenseConfig`.

```typescript
export const licenseConfig: LicenseConfig = {
  enable: true,
  name: "CC BY-NC-SA 4.0",
  url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
```

- `enable`: Disable to hide the license block.
- `name`: Display name of the license.
- `url`: External link to license details.


## Code Block Theme

`expressiveCodeConfig` adjusts block appearance.

```typescript
export const expressiveCodeConfig: ExpressiveCodeConfig = {
  // Note: some styles (e.g., background color) are overridden in astro.config.mjs

  theme: "github-dark",
};
```

- `theme`: Choose the highlighting theme (`github-dark`, `dracula`, `one-dark`, etc.).


## Comment System

Configure comments through `commentConfig`.

```typescript
export const commentConfig: CommentConfig = {
  enable: false,
  twikoo: {
    envId: "https://app.twikoo.js.org",
  },
};
```

- `enable`: Set to `true` to activate comments.
- `twikoo.envId`: Environment ID from [Twikoo](https://twikoo.js.org/).


## Announcement Banner

```typescript
export const announcementConfig: AnnouncementConfig = {
  enable: true,
  title: "Announcement",
  content: "Welcome to my blog! This is a sample announcement.",
  closable: true,
  link: {
    enable: true,
    text: "Learn More",
    url: "/about/",
    external: true,
  },
};
```

- `enable`: Hide or show the announcement widget.
- `title`: Heading text.
- `content`: Body text.
- `closable`: Allow visitors to dismiss the banner.
- `link.enable`: Show the CTA button.
- `link.text`: Button label.
- `link.url`: Destination URL.
- `link.external`: Show external link indicator and open in new tab.


## Open Graph Thumbnails

```typescript
generateOgImages: true,
```

Set to `true` to generate OG social share images automatically.


## Sidebar Layout (`sidebarLayoutConfig`)

Controls visibility, order, animations, and responsive behavior of sidebar widgets.

### Key Fields

- **`enable`** (`boolean`): Toggle sidebar globally (default `true`).
- **`position`** (`"left" | "right"`): Sidebar placement (default `"left"`).
- **`components`** (`Array<Object>`): Configure each sidebar widget.
  - `type`: Component identifier (`"profile"`, `"announcement"`, `"categories"`, `"tags"`, etc.).
  - `enable`: Toggle component visibility.
  - `order`: Display order (lower appears earlier).
  - `position`: `"top"` (fixed) or `"sticky"` (stays visible while scrolling).
  - `class`: Custom CSS class for styling/animations.
  - `animationDelay`: Delay in milliseconds.
  - `responsive`: Optional object for device-specific behavior, e.g. `collapseThreshold` for category/tag lists.

### Default Animation (`defaultAnimation`)

- `enable`: Toggle animation effects (default `true`).
- `baseDelay`: Base delay for the first component.
- `increment`: Additional delay added per component (default `50ms`).

### Responsive Layout (`responsive`)

- `breakpoints`: Screen width thresholds (`mobile`, `tablet`, `desktop`).
- `layout`: Sidebar visibility per breakpoint (`"hidden"` or `"sidebar"`).

### Example

```typescript
export const sidebarLayoutConfig: SidebarLayoutConfig = {
  enable: true,
  position: "left",
  components: [
    {
      type: "profile",
      enable: true,
      order: 1,
      position: "top",
      class: "onload-animation",
      animationDelay: 0,
    },
    {
      type: "categories",
      enable: true,
      order: 2,
      position: "sticky",
      class: "onload-animation",
      animationDelay: 150,
      responsive: {
        collapseThreshold: 5,
      },
    },
  ],

  defaultAnimation: {
    enable: true,
    baseDelay: 0,
    increment: 50,
  },

  responsive: {
    breakpoints: {
      mobile: 768,
      tablet: 1024,
      desktop: 1280,
    },
    layout: {
      mobile: "sidebar",
      tablet: "sidebar",
      desktop: "sidebar",
    },
  },
};
```


## Particle Effects

```typescript
export const particleConfig: ParticleConfig = {
  enable: true,
  particleNum: 12,
  limitTimes: -1,
  size: {
    min: 0.3,
    max: 0.9,
  },
  opacity: {
    min: 0.3,
    max: 0.9,
  },
  speed: {
    horizontal: {
      min: -0.9,
      max: 0.9,
    },
    vertical: {
      min: 0.15,
      max: 0.3,
    },
    rotation: 0.12,
    fadeSpeed: 0.12,
  },
  zIndex: 100,
};
```


## Live2D Assistant

```typescript
export const pioConfig: import("./types/config").PioConfig = {
  enable: true,
  models: ["/pio/models/pio/model.json"],
  position: "left",
  width: 280,
  height: 250,
  mode: "draggable",
  hiddenOnMobile: true,
  dialog: {
    welcome: "Welcome!",
    touch: [
      "Hey, what are you doing?",
      "Please be gentle!",
    ],
    home: "Click here to return home!",
    skin: [
      "Wanna try a new outfit?",
      "Looking good, right?",
    ],
    close: "See you next time~",
    link: "",
  },
};
```