---
title: Site Configuration
createTime: 2025/10/10 10:10:10
permalink: /en/config/core/
---

Site configuration


## File Location

```
src/config.ts
```


## Site Settings

Configure global settings for the website, including language, time zone, theme color, wallpaper, and more.

```typescript
// Automatically detect browser language
const SITE_LANG = detectBrowserLanguage("en"); // Defaults to 'en' during server-side rendering
// If you want to force a specific language, uncomment the line below and set the language code
//const SITE_LANG = "zh"; // Forced language code, e.g. 'zh', 'en', 'ja'

// Set website time zone
const SITE_TIMEZONE = 8; // from -12 to 12, default is UTC+8

// Site configuration
export const siteConfig: SiteConfig = {
    // Site URL (must end with a trailing slash)
    siteURL: "https://twilight.spr-aachen.com/", // Replace with your site URL and ensure it ends with a slash
    // Site title
    title: "Twilight",
    // Site subtitle
    subtitle: "Blog Template",
    // Language configuration
    lang: SITE_LANG, // Automatically detected browser language
    // Translation configuration
    translate: {
        // Enable translation feature
        enable: true,
        // Translation service
        service: "client.edge", // Use Edge browser translation
        // Default translation language
        defaultLanguage: getTranslateLanguageFromConfig(SITE_LANG), // Automatically set the default translation language based on detected language
        // Show language select dropdown
        showSelectTag: false, // Use a custom button instead
        // Automatically detect user language
        autoDiscriminate: true,
        // CSS class names to ignore during translation
        ignoreClasses: ["ignore", "banner-title", "banner-subtitle"],
        // HTML tags to ignore during translation
        ignoreTags: ["script", "style", "code", "pre"],
    },
    // Time zone configuration
    timeZone: SITE_TIMEZONE,
    // Font configuration
    font: {
        // zenMaruGothic font (suitable for Japanese and English, average for Chinese)
        zenMaruGothic: {
            // Use as global font
            enable: true,
        },
        // Hanalei font (suitable for Chinese)
        hanalei: {
            // Use as global font
            enable: false,
        },
    },
    // Theme color configuration
    themeColor: {
        // Default hue for the theme color (0–360, e.g. red: 0, cyan: 200, teal: 250, pink: 345)
        hue: 255,
        // Hide theme color picker from visitors
        fixed: false,
    },
    // Default theme ("system" follow system | "light" light | "dark" dark)
    defaultTheme: "dark",
    // Wallpaper configuration
    wallpaper: {
        // Mode ("banner" banner | "fullscreen" full screen | "none" solid color)
        mode: "banner",
        // Image source configuration (shared by fullscreen and banner modes)
        src: {
            // Desktop wallpaper images (supports a single image or an array; when the array length > 1, carousel is enabled automatically)
            desktop: [
                "/assets/desktop-banner/desktopBanner_1.webp",
            ],
            // Mobile wallpaper images (supports a single image or an array; when the array length > 1, carousel is enabled automatically)
            mobile: [
                "/assets/mobile-banner/mobileBanner_1.webp",
            ],
        },
        // Wallpaper position ('top' | 'center' | 'bottom')
        position: "center",
        // Carousel configuration (shared by fullscreen and banner modes)
        carousel: {
            // Enable carousel for multiple images, otherwise a random image is shown
            enable: true,
            // Carousel interval (seconds)
            interval: 3.3,
        },
        // PicFlow API configuration (shared by fullscreen and banner modes)
        imageApi: {
            // Enable image API
            enable: false,
            // API endpoint returning text with one image URL per line
            url: "http://domain.com/api_v2.php?format=text&count=4",
        },
        // Banner mode specific configuration
        banner: {
            // Banner text configuration
            homeText: {
                // Show text on the homepage
                enable: true,
                // Main title
                title: "Twilight",
                // Subtitle, supports a single string or an array of strings
                subtitle: [
                    "Illuminate Our Paths",
                ],
                // Subtitle typewriter effect
                typewriter: {
                    // Enable typewriter effect for subtitle
                    enable: true,
                    // Typing speed (ms)
                    speed: 111,
                    // Deletion speed (ms)
                    deleteSpeed: 51,
                    // Pause time after fully shown (ms)
                    pauseTime: 3000,
                },
            },
            // Banner image credit text
            credit: {
                // Show banner image credit text
                enable: false,
                // Text to display as credit
                text: "Describe",
                // (Optional) URL of the original artwork or artist page
                url: "",
            },
            // Navbar configuration
            navbar: {
                // Navbar transparency mode ("semi" semi-transparent with rounded corners | "full" fully transparent | "semifull" dynamic transparency)
                transparentMode: "semifull",
            },
            // Waves effect configuration
            waves: {
                // Enable waves effect
                enable: true,
                // Enable performance mode (simplify waves effect to improve performance)
                performanceMode: true,
            },
        },
        // Fullscreen mode specific configuration
        fullscreen: {
            // Z-index
            zIndex: -1, // Ensure wallpaper stays in the background layer
            // Wallpaper opacity, between 0 and 1
            opacity: 0.9,
            // Background blur level (pixel value)
            blur: 1,
            // Navbar transparency mode
            navbar: {
                transparentMode: "semi", // Use semi-transparent mode instead of fully transparent
            },
        },
    },
    // OpenGraph configuration
    generateOgImages: false, // Enabling OG image generation will significantly increase render time; not recommended during local development
    // Favicon configuration
    favicon: [
        {
            // Icon file path
            src: "/favicon/favicon-light-32.png",
            // Theme ("light" | "dark")
            theme: "light",
            // Icon size
            sizes: "32x32",
        },
        {
            // Icon file path
            src: "/favicon/favicon-light-128.png",
            // Theme ("light" | "dark")
            theme: "light",
            // Icon size
            sizes: "128x128",
        },
        {
            // Icon file path
            src: "/favicon/favicon-dark-32.png",
            // Theme ("light" | "dark")
            theme: "dark",
            // Icon size
            sizes: "32x32",
        },
        {
            // Icon file path
            src: "/favicon/favicon-dark-128.png",
            // Theme ("light" | "dark")
            theme: "dark",
            // Icon size
            sizes: "128x128",
        },
    ],
    // bangumi configuration
    bangumi: {
        // User ID
        userId: "your-bangumi-id", // You can set this to "sai" for testing
    },
};
```

- **Site settings**
    - `title`: Main title of the site, displayed in the browser tab and page header
    - `subtitle`: Site subtitle, usually displayed under the banner on the homepage
    - `lang`: Default language of the site, affects date formats, translation, etc.
- **Theme settings**
    - `hue`: Hue value of the theme color, can be any value between 0 and 360
    - `fixed`: When set to `true`, visitors cannot change the theme color
    - `defaultTheme`: Light/Dark theme options: `system` (follow system), `light` (light), `dark` (dark)
- **Wallpaper settings**
    - `mode`: Default wallpaper mode. Supports three modes: `fullscreen` (full-screen wallpaper), `banner` (banner wallpaper), and `none` (solid background)
    - **Image paths**: Paths are relative to the `/src` directory. If starting with `/`, paths are relative to the `/public` directory
    - **Carousel**: When the image array length is greater than 1, carousel is enabled automatically
    - **Responsive design**: Desktop and mobile can use different images
    - **Typewriter effect**: Subtitle supports a dynamic typewriter effect with configurable speed and pause time


## Navbar Second-level Dropdown Menu Configuration

Configure the second-level dropdown menus for the site navbar, including menu item names, links, whether they are external links, etc.

```typescript
export const navBarConfig: NavBarConfig = {
    links: [
        LinkPreset.Home,
        LinkPreset.Archive,
        {
            name: "Links", // First-level menu name
            url: "/links/", // First-level menu link (optional; can be empty if there are only child menus)
            children: [
                {
                    name: "GitHub", // Second-level menu name
                    url: "https://github.com/Spr-Aachen", // Second-level menu link
                    external: true, // External link
                },
                {
                    name: "Bilibili",
                    url: "https://space.bilibili.com/359461611",
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

- **`links`**: An array that defines the links in the navbar. Each link item can be a preset link (`LinkPreset`) or a custom link object
    - **`name`**:  Displayed name of the menu item
    - **`url`**:  URL to navigate to when the menu item is clicked
    - **`children`**:  An array defining the submenu items of the current menu item. Submenu items have a similar structure to top-level items and can be nested further
    - **`external`**: When set to `true`, this marks the link as external and opens it in a new tab


## Sidebar Layout Configuration

Configure sidebar visibility, ordering, animations, and responsive behavior.

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

- **`enable`**:  Whether to enable the sidebar feature. `true` to enable, `false` to disable.
- **`position`**: Sidebar position on the page. Options: `"left"` or `"right"`.
- **`components`**:  Array defining sidebar components and their configuration
        - **`type`**:  Component type, e.g. `"profile"` (user profile), `"announcement"` (announcement), `"categories"` (categories), `"tags"` (tags)
        - **`enable`**:  Whether to enable this component. `true` to enable, `false` to disable.
        - **`order`**:  Display order of the component. Smaller numbers appear earlier in the sidebar.
        - **`position`**:  Placement of the component in the sidebar. Options: `"top"`: fixed at the top of the sidebar; `"sticky"`: sticky positioning, stays visible when scrolling.
        - **`class`**:  CSS class name applied to the component, used for custom styles or animations.
        - **`animationDelay`**:  Animation delay for the component (milliseconds), used to stagger animations.
        - **`responsive`**:  Per-component responsive configuration. For example, `categories` and `tags` can configure `collapseThreshold`:
            - **`collapseThreshold`**:  Collapse threshold. When the number of items in the component exceeds this value, the component content will be collapsed.
- **`defaultAnimation`**: Default animation configuration
    - **`enable`**: Whether to enable default sidebar component animations.
    - **`baseDelay`**:  Base animation delay time (ms).
    - **`increment`**:  Incremental delay (ms) per component. For example, the first component delays by `baseDelay`, the second by `baseDelay + increment`, and so on.
- **`responsive`**: Responsive layout configuration
    - **`breakpoints`**: Screen width breakpoints (pixels) for different devices:
        - **`mobile`**: Mobile breakpoint (e.g. `768`).
        - **`tablet`**: Tablet breakpoint (e.g. `1024`).
        - **`desktop`**: Desktop breakpoint (e.g. `1280`).
    - **`layout`**: Sidebar layout mode under different breakpoints:
        - **`mobile`**: Layout mode on mobile. Options: `"hidden"` (hide sidebar) or `"sidebar"` (show sidebar, usually as a drawer).
        - **`tablet`**: Layout mode on tablet. Options: `"hidden"` or `"sidebar"`.
        - **`desktop`**: Layout mode on desktop. Options: `"hidden"` or `"sidebar"`.


## Announcement Feature Configuration

Configure the site announcement feature, including title, content, links, etc.

```typescript
export const announcementConfig: AnnouncementConfig = {
    // Announcement title
    title: "Announcement",
    // Announcement content
    content: "Welcome to my blog!",
    // Allow users to close the announcement
    closable: true,
    // Link configuration
    link: {
        // Enable link button
        enable: true,
        // Link text
        text: "Learn More",
        // Link URL
        url: "/about/",
        // Whether it is an external link
        external: false, // Internal link
    },
};
```

- `enable`: Set to `false` to hide the announcement
- `title`: Announcement title
- `content`: Announcement content
- `closable`: Set to `true` to allow users to close the announcement
- `link.enable`: Set to `true` to show the link button
- `link.text`: Text of the link button
- `link.url`: URL of the link button
- `link.external`: Set to `true` to display it as an external link button


## Post Settings

Configure post display, editing, table of contents, and related features.

```typescript
export const postConfig: PostConfig = {
    // Show "Last Modified" card
    showLastModified: true,
    // Show cover image inside article content
    showCoverInContent: false,
    // Code highlight configuration
    expressiveCode: {
        // Theme
        theme: "github-dark", // Dark background
    },
    // Table of contents configuration
    toc: {
        // Enable TOC
        enable: true,
        // TOC depth (1–6, 1 shows only h1, 2 shows h1 and h2, and so on)
        depth: 3,
    },
    // License configuration
    license: {
        // Enable license
        enable: true,
        // License name
        name: "CC BY-NC-SA 4.0",
        // License URL
        url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    },
    // Comment configuration
    comment: {
        // Enable comments
        enable: false,
        // Twikoo comment system configuration
        twikoo: {
            // Environment ID
            envId: "https://twikoo.vercel.app",
            // Language
            lang: "en",
        },
    },
};
```

- License configuration controls the license display at the bottom of posts
- Code block configuration controls the style of code blocks; optional themes include: `github-dark`, `dracula`, `one-dark`, etc.
- Comment system configuration controls the comment section at the bottom of posts; you need to create an environment in [Twikoo](https://twikoo.js.org/) and obtain an environment ID first


## Particle Effect Configuration

Configure particle effects such as visibility, quantity, movement speed, and more.

```typescript
export const particleConfig: ParticleConfig = {
    // Enable particle effects
    enable: true,
    // Number of particles
    particleNum: 12,
    // Maximum times particles can go out of bounds; -1 for infinite loop
    limitTimes: -1,
    // Particle size configuration
    size: {
        // Minimum size multiplier
        min: 0.3,
        // Maximum size multiplier
        max: 0.9,
    },
    // Particle opacity configuration
    opacity: {
        // Minimum opacity
        min: 0.3,
        // Maximum opacity
        max: 0.9,
    },
    // Particle movement speed configuration
    speed: {
        // Horizontal speed
        horizontal: {
            // Minimum value
            min: -0.9,
            // Maximum value
            max: 0.9,
        },
        // Vertical speed
        vertical: {
            // Minimum value
            min: 0.15,
            // Maximum value
            max: 0.3,
        },
        // Rotation speed
        rotation: 0.12,
        // Fade-out speed
        fadeSpeed: 0.12, // Should not be greater than minimum opacity
    },
    // Particle z-index
    zIndex: 100, // Ensure particles are rendered at an appropriate layer
};
```


## Live2D Assistant (Pio) Configuration

Configure the Live2D assistant display, position, dialog, and related features.

```typescript
export const pioConfig: import("./types/config").PioConfig = {
    // Enable Live2D assistant
    enable: false,
    // Model file paths
    models: ["/pio/models/pio/model.json"],
    // Assistant position
    position: "left",
    // Assistant width
    width: 280,
    // Assistant height
    height: 250,
    // Display mode
    mode: "draggable",
    // Hide on mobile devices
    hiddenOnMobile: true,
    // Dialog configuration
    dialog: {
        // Welcome message
        welcome: "Welcome!",
        // Touch prompts
        touch: [
            "What are you doing?",
            "Stop touching me!",
            "Don't bully me like that!",
            "(｡í _ ì｡)",
        ],
        // Homepage tip
        home: "Click here to go back to homepage!",
        // Outfit change prompts
        skin: ["Want to see my new outfit?", "The new outfit looks great~"],
        // Close prompt
        close: "See you next time~",
        // About link
        link: "https://nav.kungal.org",
    },
};
```