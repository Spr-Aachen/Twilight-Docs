---
title: 站点配置
createTime: 2025/10/10 10:10:10
permalink: /config/core/
---

站点配置


## 文件位置

```
src/config.ts
```


## 站点设置

配置网站的全局设置，包括语言、时区、主题色、壁纸等。

```typescript
// 自动检测浏览器语言
const SITE_LANG = detectBrowserLanguage("en"); // 服务端渲染时默认为 'en'
// 如果需要强制使用特定语言，可以取消注释下面一行并设置语言代码
//const SITE_LANG = "zh"; // 强制使用的语言代码，'zh', 'en', 'ja' 等

// 设置网站时区
const SITE_TIMEZONE = 8; // from -12 to 12 default in UTC+8

// 站点配置
export const siteConfig: SiteConfig = {
    // 站点 URL（以斜杠结尾）
    siteURL: "https://twilight.spr-aachen.com/", // 请替换为你的站点 URL 并以斜杠结尾
    // 站点标题
    title: "Twilight",
    // 站点副标题
    subtitle: "Blog Template",
    // 语言配置
    lang: SITE_LANG, // 自动检测的浏览器语言
    // 翻译配置
    translate: {
        // 启用翻译功能
        enable: true,
        // 翻译服务
        service: "client.edge", // 使用 Edge 浏览器
        // 默认翻译语言
        defaultLanguage: getTranslateLanguageFromConfig(SITE_LANG), // 根据检测到的语言自动设置默认翻译语言
        // 显示语言选择下拉框
        showSelectTag: false, // 使用自定义按钮
        // 自动检测用户语言
        autoDiscriminate: true,
        // 翻译时忽略的 CSS 类名
        ignoreClasses: ["ignore", "banner-title", "banner-subtitle"],
        // 翻译时忽略的 HTML 标签
        ignoreTags: ["script", "style", "code", "pre"],
    },
    // 时区配置
    timeZone: SITE_TIMEZONE,
    // 字体配置
    font: {
        // zenMaruGothic 字体 (适合日语和英语，对中文适配一般)
        zenMaruGothic: {
            // 作为全局字体
            enable: true,
        },
        // Hanalei 字体 (适合中文)
        hanalei: {
            // 作为全局字体
            enable: false,
        },
    },
    // 主题色配置
    themeColor: {
        // 主题色的默认色相 (范围从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉色：345)
        hue: 255,
        // 对访问者隐藏主题色选择器
        fixed: false,
    },
    // 默认主题 ("system" 跟随系统 | "light" 浅色 | "dark" 深色)
    defaultTheme: "dark",
    // 壁纸配置
    wallpaper: {
        // 模式 ("banner" 横幅 | "fullscreen" 全屏 | "none" 纯色)
        mode: "banner",
        // 图片源配置 (fullscreen 和 banner 模式共享)
        src: {
            // 桌面壁纸图片 (支持单张图片或图片数组，当数组长度 > 1 时自动启用轮播)
            desktop: [
                "/assets/desktop-banner/desktopBanner_1.webp",
            ],
            // 移动壁纸图片 (支持单张图片或图片数组，当数组长度 > 1 时自动启用轮播)
            mobile: [
                "/assets/mobile-banner/mobileBanner_1.webp",
            ],
        },
        // 壁纸位置 ('top' | 'center' | 'bottom')
        position: "center",
        // 轮播配置 (fullscreen 和 banner 模式共享)
        carousel: {
            // 为多张图片启用轮播，否则随机显示一张图片
            enable: true,
            // 轮播间隔时间 (秒)
            interval: 3.3,
        },
        // PicFlow API 配置 (fullscreen 和 banner 模式共享)
        imageApi: {
            // 启用图片 API
            enable: false,
            // API 地址，返回每行一个图片链接的文本
            url: "http://domain.com/api_v2.php?format=text&count=4",
        },
        // Banner 模式专属配置
        banner: {
            // 横幅文本配置
            homeText: {
                // 在主页显示文本
                enable: true,
                // 主标题
                title: "Twilight",
                // 副标题，支持单个字符串或字符串数组
                subtitle: [
                    "Illuminate Our Paths",
                ],
                // 副标题打字机效果
                typewriter: {
                    // 启用副标题打字机效果
                    enable: true,
                    // 打字速度 (毫秒)
                    speed: 111,
                    // 删除速度 (毫秒)
                    deleteSpeed: 51,
                    // 完全显示后的暂停时间 (毫秒)
                    pauseTime: 3000,
                },
            },
            // 横幅图片来源文本
            credit: {
                // 显示横幅图片来源文本
                enable: false,
                // 要显示的来源文本
                text: "Describe",
                // (可选) 原始艺术品或艺术家页面的 URL 链接
                url: "",
            },
            // 导航栏配置
            navbar: {
                // 导航栏透明模式 ("semi" 半透明加圆角 | "full" 完全透明 | "semifull" 动态透明)
                transparentMode: "semifull",
            },
            // 水波纹效果配置
            waves: {
                // 启用水波纹效果
                enable: true,
                // 启用性能模式 (简化波浪效果以提升性能)
                performanceMode: true,
            },
        },
        // Fullscreen 模式专属配置
        fullscreen: {
            // 层级
            zIndex: -1, // 确保壁纸在背景层
            // 壁纸透明度，0-1之间
            opacity: 0.9,
            // 背景模糊程度 (像素值)
            blur: 1,
            // 导航栏透明模式
            navbar: {
                transparentMode: "semi", // 使用半透明模式而不是完全透明
            },
        },
    },
    // OpenGraph 配置
    generateOgImages: false, // 注意开启图片生成后要渲染很长时间，不建议本地调试的时候开启
    // favicon 配置
    favicon: [// 默认留空，若填写内容则会覆盖默认图标，内容示例如下
        {
            // 图标文件路径
            src: "/favicon/favicon-light-32.png",
            // 指定主题 ("light" | "dark")
            theme: "light",
            // 图标大小
            sizes: "32x32",
        },
    ],
    // bangumi 配置
    bangumi: {
        // 用户 ID
        userId: "your-bangumi-id", // 可以设置为 "sai" 测试
    },
};
```

- 站点设置
    - `title`：网站的主标题，显示在浏览器标签页和页面头部
    - `subtitle`：网站的副标题，通常显示在主页横幅下方
    - `lang`：网站的默认语言，影响日期格式、翻译等功能
- 主题设置
    - `hue`：主题色的色相值，可以是 0-360 之间的任何数值
    - `fixed`：设置为 `true` 时，访客将无法更改主题色
    - `defaultTheme`: 黑白主题，有 `system` 跟随系统、`light` 浅色、`dark` 深色三个选项
- 壁纸设置
    - `mode`: 壁纸默认模式，支持 fullscreen（全屏壁纸）、banner（横幅壁纸）、none（纯色背景）三种模式
    - **图片路径**：相对于 `/src` 目录，如果以 `/` 开头则相对于 `/public` 目录
    - **轮播功能**：当图片数组长度大于1时自动启用轮播
    - **响应式设计**：桌面端和移动端可使用不同的图片
    - **打字机效果**：副标题支持动态打字机效果，可配置速度和暂停时间


## 导航栏二级折叠菜单配置

配置网站导航栏的二级折叠菜单，包括菜单项的名称、链接、是否为外部链接等。

```typescript
export const navBarConfig: NavBarConfig = {
    links: [
        LinkPreset.Home,
        LinkPreset.Archive,
        {
            name: "Links", // 一级菜单名称
            url: "/links/", // 一级菜单链接 (可选，如果只有子菜单，可以为空)
            children: [
                {
                    name: "GitHub", // 二级菜单名称
                    url: "https://github.com/Spr-Aachen", // 二级菜单链接
                    external: true, // 外部链接
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

- `links`**: 一个数组，定义了导航栏中的各个链接。每个链接对象可以是一个预设链接 (`LinkPreset`)，也可以是一个自定义链接对象
    - **`name`**:  菜单项显示的名称
    - **`url`**:  菜单项点击后跳转的 URL
    - **`children`**:  一个数组，定义了当前菜单项的子菜单。子菜单项的结构与顶级菜单项类似，可以继续嵌套
    - **`external`**: 如果设置为 `true`，表示这是一个外部链接，会在新标签页中打开


## 侧边栏布局配置

配置网站侧边栏的显示、排序、动画和响应式行为

```typescript
export const sidebarLayoutConfig: SidebarLayoutConfig = {
    // 侧边栏组件配置列表
    components: [
        {
            // 组件类型
            type: "profile", // 用户资料组件
            // 是否启用该组件
            enable: true,
            // 组件所属侧边栏
            side: "left",
            // 组件显示顺序 (数字越小越靠前)
            order: 1,
            // 组件位置
            position: "top", // 固定在顶部
            // CSS 类名，用于应用样式和动画
            class: "onload-animation",
            // 动画延迟时间 (毫秒) ，用于错开动画效果
            animationDelay: 0,
        },
        {
            // 组件类型
            type: "announcement", // 公告组件
            // 是否启用该组件 (现在通过统一配置控制)
            enable: true,
            // 组件所属侧边栏
            side: "left",
            // 组件显示顺序
            order: 2,
            // 组件位置
            position: "top", // 固定在顶部
            // CSS 类名
            class: "onload-animation",
            // 动画延迟时间
            animationDelay: 50,
        },
        {
            // 组件类型
            type: "categories", // 分类组件
            // 是否启用该组件
            enable: true,
            // 组件所属侧边栏
            side: "right",
            // 组件显示顺序
            order: 3,
            // 组件位置
            position: "sticky", // 粘性定位，可滚动
            // CSS 类名
            class: "onload-animation",
            // 动画延迟时间
            animationDelay: 150,
            // 响应式配置
            responsive: {
                // 折叠阈值
                collapseThreshold: 5, // 当分类数量超过5个时自动折叠
            },
        },
        {
            // 组件类型
            type: "tags", // 标签组件
            // 是否启用该组件
            enable: true,
            // 组件所属侧边栏
            side: "right",
            // 组件显示顺序
            order: 4,
            // 组件位置
            position: "sticky", // 粘性定位，可滚动
            // CSS 类名
            class: "onload-animation",
            // 动画延迟时间
            animationDelay: 250,
            // 响应式配置
            responsive: {
                // 折叠阈值
                collapseThreshold: 20, // 当标签数量超过20个时自动折叠
            },
        },
    ],
    // 默认动画配置
    defaultAnimation: {
        // 是否启用默认动画
        enable: true,
        // 基础延迟时间 (毫秒)
        baseDelay: 0,
        // 每个组件递增的延迟时间 (毫秒)
        increment: 50,
    },
    // 响应式布局配置
    responsive: {
        // 断点配置
        breakpoints: {
            // 移动端断点 (像素值)
            mobile: 768, // 屏幕宽度小于768px
            // 平板端断点 (像素值)
            tablet: 1024, // 屏幕宽度小于1024px
            // 桌面端断点 (像素值)
            desktop: 1280, // 屏幕宽度小于1280px
        },
        // 不同设备的布局模式 ("hidden" 不显示侧边栏 | "drawer" 抽屉模式 | "sidebar" 显示侧边栏)
        layout: {
            // 移动端
            mobile: "sidebar",
            // 平板端
            tablet: "sidebar",
            // 桌面端
            desktop: "sidebar",
        },
    },
};
```

- **`enable`**:  是否启用侧边栏功能。设置为 `true` 启用，`false` 禁用。
- **`position`**: 侧边栏在页面中的位置。可选值：`"left"`（左侧）或 `"right"`（右侧）。
- **`components`**:   一个数组，定义了侧边栏中包含的各个组件及其配置
        - **`type`**:  组件类型，例如：`"profile"`（用户资料）、`"announcement"`（公告）、`"categories"`（分类）、`"tags"`（标签）。
        - **`enable`**:  是否启用该组件。设置为 `true` 启用，`false` 禁用。
        - **`order`**:  组件的显示顺序。数字越小，组件在侧边栏中显示得越靠前。
        - **`position`**:  组件在侧边栏中的定位方式。可选值：`"top"`: 固定在侧边栏顶部，不随滚动条滚动。`"sticky"`: 粘性定位，在滚动时保持可见。
        - **`class`**:  应用于组件的 CSS 类名，可用于自定义样式或动画。
        - **`animationDelay`**:  组件动画的延迟时间（毫秒）。用于错开不同组件的动画效果。
        - **`responsive`**:  针对特定组件的响应式配置。例如，`categories` 和 `tags` 组件可以配置 `collapseThreshold`：
            - **`collapseThreshold`**:  折叠阈值。当组件内的项目数量超过此值时，组件内容将自动折叠。
- **`defaultAnimation`**: 默认动画配置
    - **`enable`**: 是否启用侧边栏组件的默认动画效果。
    - **`baseDelay`**:  动画的基础延迟时间（毫秒）。
    - **`increment`**:  每个组件依次增加的动画延迟时间（毫秒）。例如，第一个组件延迟 `baseDelay`，第二个组件延迟 `baseDelay + increment`，以此类推。
- **`responsive`**: 响应式布局配置
    - **`breakpoints`**: 定义不同设备的屏幕宽度断点（像素值）：
        - **`mobile`**: 移动设备断点（例如：`768`）。
        - **`tablet`**: 平板设备断点（例如：`1024`）。
        - **`desktop`**: 桌面设备断点（例如：`1280`）。
    - **`layout`**: 定义在不同设备断点下的侧边栏布局模式：
        - **`mobile`**: 移动设备下的布局模式。可选值：`"hidden"`（不显示侧边栏）或 `"sidebar"`（显示侧边栏，通常为抽屉模式）。
        - **`tablet`**: 平板设备下的布局模式。可选值：`"hidden"` 或 `"sidebar"`。
        - **`desktop`**: 桌面设备下的布局模式。可选值：`"hidden"` 或 `"sidebar"`。


## 公告功能配置说明

配置网站公告功能，包括标题、内容、链接等。

```typescript
export const announcementConfig: AnnouncementConfig = {
    // 公告标题
    title: "Announcement",
    // 公告内容
    content: "Welcome to my blog!",
    // 允许用户关闭公告
    closable: true,
    // 链接配置
    link: {
        // 启用链接
        enable: true,
        // 链接文本
        text: "Learn More",
        // 链接 URL
        url: "/about/",
        // 是否外部链接
        external: false, // 内部链接
    },
};
```

- `enable`：设置为 `false` 可隐藏公告
- `title`：公告标题
- `content`：公告内容
- `closable`：设置为 `true` 可允许用户关闭公告
- `link.enable`：设置为 `true` 可显示链接按钮
- `link.text`：链接按钮文本
- `link.url`：链接按钮 URL
- `link.external`：设置为 `true` 可显示外部链接标记按钮


## 文章设置

配置文章的显示、编辑、目录等功能。

```typescript
export const postConfig: PostConfig = {
    // 显示“上次编辑”卡片
    showLastModified: true,
    // 在文章内容中显示封面
    showCoverInContent: false,
    // 代码高亮配置
    expressiveCode: {
        // 主题
        theme: "github-dark", // 深色背景
    },
    // 目录配置
    toc: {
        // 启用目录功能
        enable: true,
        // 目录深度 (1-6，1 表示只显示 h1 标题，2 表示显示 h1 和 h2 标题，依此类推)
        depth: 3,
    },
    // 许可证配置
    license: {
        // 启用许可证
        enable: true,
        // 许可证名称
        name: "CC BY-NC-SA 4.0",
        // 许可证链接
        url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    },
    // 评论配置
    comment: {
        // 启用评论功能
        enable: false,
        // Twikoo 评论系统配置
        twikoo: {
            // 环境 ID
            envId: "https://twikoo.vercel.app",
            // 语言
            lang: "en",
        },
    },
};
```

- 许可证配置控制文章底部的许可证显示
- 代码块配置控制代码块的显示样式, 可选主题包括：`github-dark`、`dracula`、`one-dark` 等
- 评论系统配置控制文章底部的评论系统，需要先在 [Twikoo](https://twikoo.js.org/) 上创建环境并获取环境 ID


## 粒子特效配置

配置粒子特效的显示、数量、移动速度等功能。

```typescript
export const particleConfig: ParticleConfig = {
    // 启用粒子特效
    enable: true,
    // 粒子数量
    particleNum: 12,
    // 粒子越界限制次数，-1为无限循环
    limitTimes: -1,
    // 粒子尺寸配置
    size: {
        // 粒子最小尺寸倍数
        min: 0.3,
        // 粒子最大尺寸倍数
        max: 0.9,
    },
    // 粒子透明度配置
    opacity: {
        // 粒子最小不透明度
        min: 0.3,
        // 粒子最大不透明度
        max: 0.9,
    },
    // 粒子移动速度配置
    speed: {
        // 水平移动速度
        horizontal: {
            // 最小值
            min: -0.9,
            // 最大值
            max: 0.9,
        },
        // 垂直移动速度
        vertical: {
            // 最小值
            min: 0.15,
            // 最大值
            max: 0.3,
        },
        // 旋转速度
        rotation: 0.12,
        // 消失速度
        fadeSpeed: 0.12, // 不应大于最小不透明度
    },
    // 粒子层级
    zIndex: 100, // 确保粒子在合适的层级显示
};
```


## 看板娘配置

配置看板娘的显示、位置、对话框等功能。

```typescript
export const pioConfig: import("./types/config").PioConfig = {
    // 启用看板娘
    enable: false,
    // 模型文件路径
    models: ["/pio/models/pio/model.json"],
    // 看板娘位置
    position: "left",
    // 看板娘宽度
    width: 280,
    // 看板娘高度
    height: 250,
    // 展现模式
    mode: "draggable",
    // 是否在移动设备上隐藏
    hiddenOnMobile: true,
    // 对话框配置
    dialog: {
        // 欢迎词
        welcome: "Welcome!",
        // 触摸提示
        touch: [
            "What are you doing?",
            "Stop touching me!",
            "Don't bully me like that!",
            "(｡í _ ì｡)",
        ],
        // 首页提示
        home: "Click here to go back to homepage!",
        // 换装提示
        skin: ["Want to see my new outfit?", "The new outfit looks great~"],
        // 关闭提示
        close: "See you next time~",
        // 关于链接
        link: "https://nav.kungal.org",
    },
};
```