---
title: Site Configuration
createTime: 2025/10/10 10:10:10
permalink: /en/config/core/
---

Site Configuration


## File Location

```
Project Root/
└── twilight.config.yaml
```


## Site Settings

Configure the global settings of the website, including URL, language, time zone, theme color, wallpaper, etc.

```yaml
site:
    # Site URL (ending with a slash)
    siteURL: "https://twilight.spr-aachen.com/"
    # Site Title
    title: "Twilight"
    # Site Subtitle
    subtitle: "Blog Template"
    # Language Configuration
    lang: "en"
    # Translation Configuration
    translate:
        # Enable translation feature
        enable: true
        # Translation service
        service: "client.edge"
        # Show language selection dropdown
        showSelectTag: false
        # Automatically detect user language
        autoDiscriminate: true
        # CSS class names to ignore during translation
        ignoreClasses:
            - "ignore"
            - "banner-title"
            - "banner-subtitle"
        # HTML tags to ignore during translation
        ignoreTags:
            - "script"
            - "style"
            - "code"
            - "pre"
    # Time Zone Configuration
    timeZone: 8
    # Font Configuration
    font:
        # Example font configuration - Zen Maru Gothic
        "Example - ZenMaruGothic":
            # Font source (Font CSS link | Font file path)
            src: "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap"
            # Font name (font-family)
            family: "Zen Maru Gothic"
    # Theme Color Configuration
    themeColor:
        # Default hue of the theme color (range from 0 to 360. e.g., Red: 0, Cyan: 200, Teal: 250, Pink: 345)
        hue: 255
    # Default Theme ("system" follows system | "light" light mode | "dark" dark mode)
    defaultTheme: "dark"
    # Wallpaper Configuration
    wallpaper:
        # Mode ("banner" banner | "fullscreen" full screen | "none" solid color)
        mode: "banner"
        # Image source configuration (shared by fullscreen and banner modes)
        src:
            # Desktop wallpaper image (relative to /public directory; supports a single image or an image array, carousel is automatically enabled when array length > 1)
            desktop:
                - "/assets/images/desktopWallpaper_1.jpg"
                - "/assets/images/desktopWallpaper_2.jpg"
                - "/assets/images/desktopWallpaper_3.jpg"
            # Mobile wallpaper image (relative to /public directory; supports a single image or an image array, carousel is automatically enabled when array length > 1)
            mobile:
                - "/assets/images/mobileWallpaper_1.jpg"
                - "/assets/images/mobileWallpaper_2.jpg"
        # Wallpaper position ('top' | 'center' | 'bottom')
        position: "center"
        # Carousel configuration (shared by fullscreen and banner modes)
        carousel:
            # Enable carousel for multiple images, otherwise display one image randomly
            enable: true
            # Carousel interval (seconds)
            interval: 3.6
            # Enable Ken Burns effect
            kenBurns: true
        # Banner mode specific configuration
        banner:
            # Banner text configuration
            homeText:
                # Display text on the home page
                enable: true
                # Main title
                title: "Twilight"
                # Subtitle, supports a single string or a string array
                subtitle:
                    - "Illuminate Our Paths"
                # Subtitle typewriter effect
                typewriter:
                    # Enable subtitle typewriter effect
                    enable: true
                    # Typing speed (ms)
                    speed: 111
                    # Deleting speed (ms)
                    deleteSpeed: 51
                    # Pause time after full display (ms)
                    pauseTime: 3000
            # Banner image source credit text
            credit:
                # Display banner image source credit text
                enable: false
                # Source text to display
                text: "Describe"
                # (Optional) URL link to the original artwork or artist page
                url: ""
            # Navigation bar configuration
            navbar:
                # Navigation bar transparency mode ("semi" semi-transparent with rounded corners | "full" fully transparent | "semifull" dynamic transparency)
                transparentMode: "semifull"
            # Water ripple effect configuration
            waves:
                # Enable water ripple effect
                enable: true
                # Enable performance mode (simplifies wave effects to improve performance)
                performanceMode: false
        # Fullscreen mode specific configuration
        fullscreen:
            # Layer level
            zIndex: -1
            # Wallpaper opacity, between 0-1
            opacity: 0.9
            # Background blur degree (pixel value)
            blur: 1
            # Navigation bar transparency mode
            navbar:
                transparentMode: "semi"
    # Loading page configuration
    loadingOverlay:
        # Whether to enable the loading page
        enable: true
        # Loading title configuration
        title:
            # Whether to enable the loading title
            enable: true
            # Loading title text
            content: "LOADING"
            # Animation cycle (s)
            interval: 1.5
        # Loading animation configuration
        spinner:
            # Whether to enable the loading animation
            enable: true
            # Animation cycle (s)
            interval: 1.5
    # favicon configuration
    favicon: []
    # bangumi configuration
    bangumi:
        # User ID
        userId: "your-bangumi-id"
    # OpenGraph configuration
    generateOgImages: false
```

- `title`: The main title of the website, displayed in browser tabs and the page header
- `subtitle`: The subtitle of the website, usually displayed below the home page banner
- `lang`: The default language of the website, affecting date format, translation, etc.
- `themeColor`: Theme settings
    - `hue`: The hue value of the theme color, can be any value between 0-360
    - `fixed`: When set to `true`, visitors will not be able to change the theme color
    - `defaultTheme`: Black and white theme, with three options: `system` follows system, `light` light mode, `dark` dark mode
- `wallpaper`: Wallpaper settings
    - `mode`: Default wallpaper mode, supports three modes: fullscreen (full screen wallpaper), banner (banner wallpaper), none (solid color background)


## Site Statistics Configuration

Configure website page view statistics

```yaml
umami:
    # Whether to show Umami statistics
    enabled: false
    # UmamiCloudAPI address
    baseUrl: "https://api.umami.is"
    # API key (can be overridden by environment variables)
    apiKey: ""
    # Script to insert (can be overridden by environment variables)
    scripts: ""
```


## Navigation Bar Configuration

Configure the navigation links of the website navigation bar, including the name and link of the navigation items.

```yaml
navbar:
    # Link configuration (link presets are located in LinkPresets in src/constants/link-presets.ts)
    links:
        - # Level 1 navigation link - Home (preset)
            "Home"
        - # Level 1 navigation link - Archive (preset)
            "Archive"
        - # Level 1 navigation link - Exhibition (custom)
            # Navigation name
            name: "Exhibition"
            # Navigation link
            url: "/exhibition/"
            # Navigation icon
            icon: "material-symbols:person"
            # Navigation description
            description: "A collection of my creative works and experiences"
            # Sub-links
            children:
                - # Level 2 navigation link - Projects (preset)
                    "Projects"
                - # Level 2 navigation link - Skills (preset)
                    "Skills"
                - # Level 2 navigation link - Timeline (preset)
                    "Timeline"
                - # Level 2 navigation link - Diary (preset)
                    "Diary"
                - # Level 2 navigation link - Albums (preset)
                    "Albums"
                - # Level 2 navigation link - Anime (preset)
                    "Anime"
        - # Level 1 navigation link - Friends (preset)
            "Friends"
        - # Level 1 navigation link - About (preset)
            "About"
```

- `links`: An array defining the various links in the navigation bar. Each link object can be a preset link (`LinkPreset`) or a custom link object
    - `name`: The name displayed for the navigation item
    - `url`: The URL to jump to after clicking the navigation item
    - `icon`: The icon of the navigation item, you can use icon names from icon libraries (such as FontAwesome, Material Icons, etc.)
    - `description`: A short description of the navigation item, usually displayed as a tooltip
    - `children`: An array defining the sub-items of the current navigation item. The structure of sub-items is similar to the parent navigation item and can be further nested


## Sidebar Layout Configuration

Configure the display, sorting, animation, and responsive behavior of the website sidebar

```yaml
# Sidebar configuration
sidebar:
    # Sidebar component configuration list (sidebar component presets are located in WidgetComponentType in src/types/config.ts)
    components:
        # Left sidebar
        left:
            - # Component - Profile (preset)
                # Type
                type: "profile"
                # Position strategy ("top" fixed at the top | "sticky" sticky)
                position: "top"
            - # Component - Announcement (preset)
                # Type
                type: "announcement"
                # Position strategy ("top" fixed at the top | "sticky" sticky)
                position: "top"
            - # Component - Post Categories (preset)
                # Type
                type: "categories"
                # Position strategy ("top" fixed at the top | "sticky" sticky)
                position: "sticky"
                # Responsive configuration
                responsive:
                    # Collapse threshold
                    collapseThreshold: 5
            - # Component - Post Tags (preset)
                # Type
                type: "tags"
                # Position strategy ("top" fixed at the top | "sticky" sticky)
                position: "sticky"
                # Responsive configuration
                responsive:
                    # Collapse threshold
                    collapseThreshold: 20
        # Right sidebar
        right:
            - # Component - Post TOC (preset)
                # Type
                type: "toc"
                # Position strategy ("top" fixed at the top | "sticky" sticky)
                position: "sticky"
                # Custom properties
                customProps:
                    # TOC depth (1-6, 1 means only display h1 titles, 2 means display h1 and h2 titles, and so on)
                    depth: 3
            - # Component - Post Statistics (preset)
                # Type
                type: "statistics"
                # Position strategy ("top" fixed at the top | "sticky" sticky)
                position: "sticky"
```


## Profile Configuration

Configure website profile, including avatar, bio, links, etc.

```yaml
profile:
    # Avatar configuration (relative to /public directory)
    avatar: "/assets/images/avatar.jpg"
    # Information configuration
    name: "Twilight"
    # Bio configuration
    bio: "Hi"
    # Link configuration
    links:
        - # Link example
            # Name
            name: "GitHub"
            # Icon
            icon: "fa6-brands:github"
            # Link
            url: "https://github.com/Spr-Aachen/Twilight"
```


## Announcement Feature Configuration Description

Configure website announcement feature, including title, content, link, etc.

```yaml
announcement:
    # Announcement title
    title: "Announcement"
    # Announcement content
    content: "Welcome to my blog!"
    # Allow users to close the announcement
    closable: true
    # Link configuration
    link:
        # Enable link
        enable: true
        # Link text
        text: "Learn More"
        # Link URL
        url: "/about/"
        # Whether it's an external link
        external: false
```


## Post Settings

Configure post display, editing, TOC, and other features.

```yaml
post:
    # Show "Last Modified" card
    showLastModified: true
    # Show cover in post content
    showCoverInContent: false
    # Code highlighting configuration
    expressiveCode:
        # Theme
        theme: "github-dark"
    # License configuration
    license:
        # Enable license
        enable: true
        # License name
        name: "CC BY-NC-SA 4.0"
        # License link
        url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
    # Comment configuration
    comment:
        # Enable comment feature
        enable: false
        # Twikoo comment system configuration
        twikoo:
            # Environment ID
            envId: "https://twikoo.vercel.app"
            # Language
            lang: "en"
```

- License configuration controls the license display at the bottom of the post
- Code block configuration controls the display style of code blocks, optional themes include: `github-dark`, `dracula`, `one-dark`, etc.
- Comment system configuration controls the comment system at the bottom of the post, you need to create an environment on [Twikoo](https://twikoo.js.org/) and get the environment ID first


## Enable Footer Feature

Configure website footer

```yaml
footer:
    # Enable Footer HTML injection feature
    enable: false
    # Custom HTML content, used to add record numbers and other information
    customHtml: ""
```


## Particle Effects Configuration

Configure the display, quantity, moving speed, and other features of particle effects.

```yaml
particle:
    # Enable particle effects
    enable: true
    # Number of particles
    particleNum: 12
    # Particle boundary limit times, -1 for infinite loop
    limitTimes: -1
    # Particle size configuration
    size:
        # Minimum particle size multiplier
        min: 0.3
        # Maximum particle size multiplier
        max: 0.9
    # Particle opacity configuration
    opacity:
        # Minimum particle opacity
        min: 0.3
        # Maximum particle opacity
        max: 0.9
    # Particle moving speed configuration
    speed:
        # Horizontal moving speed
        horizontal:
            # Minimum value
            min: -0.9
            # Maximum value
            max: 0.9
        # Vertical moving speed
        vertical:
            # Minimum value
            min: 0.15
            # Maximum value
            max: 0.3
        # Rotation speed
        rotation: 0.12
        # Fading speed
        fadeSpeed: 0.12
    # Particle layer level
    zIndex: 100
```


## Music Configuration

Configure the default mode of the music player, Meting API, local playlist, and other features

```yaml
musicPlayer:
    # Enable music player feature
    enable: true
    # Default mode ("meting" API | "local" local)
    mode: "meting"
    # meting mode specific configuration
    meting:
        # Meting API address
        meting_api: "https://api.i-meto.com/meting/api"
        # Music platform
        server: "netease"
        # Type ("playlist" playlist | "song" single)
        type: "playlist"
        # Resource ID
        id: "2161912966"
    # local mode specific configuration
    local:
        # Playlist
        playlist:
            - # List example
                # ID
                id: 1
                # Title
                title: "深海之息"
                # Artist
                artist: "Youzee Music"
                # Cover
                cover: "https://p1.music.126.net/PhKOqFtljgHDDpKYM2ADUA==/109951169858309716.jpg"
                # Path
                url: "assets/music/深海之息.m4a"
                # Duration
                duration: 146
    # Whether to auto-play
    autoplay: true
```


## Steerable Girl (Pio) Configuration

Configure the display, position, dialog box, and other features of the steerable girl.

```yaml
pio:
    # Enable pio
    enable: false
    # Model file paths
    models:
        - "/pio/models/pio/model.json"
    # Pio position
    position: "left"
    # Pio width
    width: 280
    # Pio height
    height: 250
    # Display mode
    mode: "draggable"
    # Whether to hide on mobile devices
    hiddenOnMobile: true
    # Dialog box configuration
    dialog:
        # Welcome message
        welcome: "Welcome!"
        # Touch tips
        touch:
            - "What are you doing?"
            - "Stop touching me!"
            - "Don't bully me like that!"
            - "(｡í _ ì｡)"
        # Home page tips
        home: "Click here to go back to homepage!"
        # Skin change tips
        skin:
            - "Want to see my new outfit?"
            - "The new outfit looks great~"
        # Close tips
        close: "See you next time~"
        # About link
        link: "https://nav.kungal.org"
```