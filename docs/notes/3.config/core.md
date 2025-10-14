---
title: 站点配置
createTime: 2025/10/10 10:10:10
permalink: /config/core/
---


## 文件位置

```
src/config.ts
```


## 基础设置

```typescript
const SITE_LANG = "zh_CN"; // 语言代码，例如：'en', 'zh_CN', 'ja' 等。

export const siteConfig: SiteConfig = {
    title: "Twilight",        // 网站标题
    subtitle: "A blog demo",  // 网站副标题
    lang: SITE_LANG,         // 不需要配置，会根据 SITE_LANG 自动设置
}
```

- `title`：网站的主标题，显示在浏览器标签页和页面头部
- `subtitle`：网站的副标题，通常显示在主页横幅下方
- `lang`：网站的默认语言，影响日期格式、翻译等功能


## 主题设置

```typescript
	themeColor: {
		hue: 255, // 主题色的默认色相，范围从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉色：345
		fixed: false, // 对访问者隐藏主题色选择器
	},
    defaultTheme: "dark", // "system" 跟随系统， "light" 浅色， "dark" 深色
```

- `hue`：主题色的色相值，可以是 0-360 之间的任何数值
- `fixed`：设置为 `true` 时，访客将无法更改主题色
- `defaultTheme`: 黑白主题，有 `system` 跟随系统、`light` 浅色、`dark` 深色三个选项


## 横幅设置

横幅设置控制主页顶部的横幅显示：

```typescript
  banner: {
    enable: true,  // 是否启用横幅
    src: {         // 横幅图片路径
      desktop: [   // 桌面端图片数组
        "assets/desktop-banner/1.webp",
        "assets/desktop-banner/2.webp",
        // 支持多张图片，自动启用轮播
      ],
      mobile: [    // 移动端图片数组
        "assets/mobile-banner/1.webp",
        "assets/mobile-banner/2.webp",
        // 移动端专用图片
      ],
    },
    position: "center", // 图片对齐方式，支持 'top', 'center', 'bottom'
    
    carousel: {
      enable: true,    // 启用轮播功能（多图片时）
      interval: 1,     // 轮播间隔时间（秒）
    },
    
    homeText: {
      enable: true,    // 在首页显示自定义文本
      title: "Twilight", // 首页横幅主标题
      subtitle: [      // 副标题数组，支持多个文本
        "One demo website",
        "Carousel Text1",
        "Carousel Text2",
      ],
      typewriter: {
        enable: true,     // 启用打字机效果
        speed: 100,       // 打字速度（毫秒）
        deleteSpeed: 50,  // 删除速度（毫秒）
        pauseTime: 2000,  // 完整显示后的暂停时间（毫秒）
      },
    },
    
    credit: {
      enable: false,    // 显示横幅图片来源文本
      text: "Describe", // 来源文本
      url: "",          // 可选：原作品或作者页面链接
    },
  },

navbar: {
		transparentMode: "semifull", // 导航栏透明模式："semi" 半透明加圆角，"full" 完全透明，"semifull" 动态透明
	},
```

### 横幅配置详解

- **图片路径**：相对于 `/src` 目录，如果以 `/` 开头则相对于 `/public` 目录
- **轮播功能**：当图片数组长度大于1时自动启用轮播
- **响应式设计**：桌面端和移动端可使用不同的图片
- **打字机效果**：副标题支持动态打字机效果，可配置速度和暂停时间


## 目录设置

```typescript
  toc: {
    enable: true, // 是否启用目录功能
    depth: 3,     // 目录深度，1-6，1表示只显示h1标题
  },
```

- `enable`：设置为 `false` 可禁用文章目录功能
- `depth`：控制目录显示的标题层级深度


## 导航栏二级折叠菜单配置 (`navBarConfig`)

此配置用于控制网站导航栏中的二级折叠菜单。您可以在 `src/config.ts` 文件中找到并修改它。

### 主要配置项：

*   **`links`**: `Array<Object>`
    *   一个数组，定义了导航栏中的各个链接。每个链接对象可以是一个预设链接 (`LinkPreset`)，也可以是一个自定义链接对象。
    *   自定义链接对象支持多级菜单，包含以下属性：
        *   **`name`**: `string`
            *   菜单项显示的名称。
        *   **`url`**: `string`
            *   菜单项点击后跳转的 URL。
        *   **`children`**: `Array<Object>` (可选)
            *   一个数组，定义了当前菜单项的子菜单。子菜单项的结构与顶级菜单项类似，可以继续嵌套。
            *   每个子菜单项也可以包含 `name`, `url`, `external` 等属性。
            *   **`external`**: `boolean` (可选)
                *   如果设置为 `true`，表示这是一个外部链接，会在新标签页中打开。

### 如何创建二级折叠菜单：

要创建一个二级折叠菜单，您需要在 `navBarConfig.links` 数组中添加一个包含 `children` 属性的自定义链接对象。`children` 数组中的每个元素都将成为该菜单项的子菜单。

**示例：**
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

在上述示例中：
*   `Links` 和 `My` 是一级菜单项。
*   `Links` 菜单下包含 `GitHub`, `Bilibili`, `Gitee` 三个二级子菜单，它们都是外部链接。
*   `My` 菜单下包含 `About`, `Friends`, `Anime`, `Diary` 四个二级子菜单，它们使用了预设链接 (`LinkPreset`)。


## 许可证配置

许可证配置位于 `src/config.ts` 文件中的 `licenseConfig` 对象，控制文章底部的许可证显示。

```typescript
export const licenseConfig: LicenseConfig = {
    enable: true,                   // 是否启用许可证显示
    name: "CC BY-NC-SA 4.0",      // 许可证名称
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/", // 许可证链接
};
```

- `enable`：设置为 `false` 可隐藏文章底部的许可证信息
- `name`：显示的许可证名称
- `url`：许可证详情页面的链接


## 代码块配置

代码块配置位于 `src/config.ts` 文件中的 `expressiveCodeConfig` 对象，控制代码块的显示样式。

```typescript
export const expressiveCodeConfig: ExpressiveCodeConfig = {
    // 注意：某些样式（如背景色）已被覆盖，请参见 astro.config.mjs 文件
    
    theme: "github-dark",  // 请选择深色主题，因为此博客主题目前仅支持深色背景
};
```

- `theme`：代码块的语法高亮主题，可选主题包括：`github-dark`、`dracula`、`one-dark` 等


## 评论系统配置

评论系统配置位于 `src/config.ts` 文件中的 `commentConfig` 对象，控制文章底部的评论系统。

```typescript
export const commentConfig: CommentConfig = {
    enable: false,  // 是否启用评论功能
    twikoo: {
        envId: "https://app.twikoo.js.org", // Twikoo 环境 ID
    },
};
```

- `enable`：设置为 `true` 启用评论功能
- `twikoo.envId`：Twikoo 评论系统的环境 ID
- 需要先在 [Twikoo](https://twikoo.js.org/) 上创建环境并获取环境 ID


## 公告功能配置说明

```typescript
export const announcementConfig: AnnouncementConfig = {
	enable: true, // 启用公告功能
	title: "Announcement", // 公告标题
	content: "Welcome to my blog! This is a sample announcement.", // 公告内容
	closable: true, // 允许用户关闭公告
	link: {
		enable: true, // 显示链接按钮
		text: "Learn More", // 链接文本
		url: "/about/", // 链接地址
		external: true, // 是否显示外部链接按钮
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


## 展示社交媒体分享图片(OG)

```typescript
generateOgImages: true, // 启用生成OpenGraph图片功能
```


## 侧边栏布局配置 (`sidebarLayoutConfig`)

此配置用于控制网站侧边栏的显示、排序、动画和响应式行为。您可以在 `src/config.ts` 文件中找到并修改它。

### 主要配置项：

*   **`enable`**: `boolean`
    *   是否启用侧边栏功能。设置为 `true` 启用，`false` 禁用。
    *   默认值：`true`

*   **`position`**: `"left" | "right"`
    *   侧边栏在页面中的位置。可选值：`"left"`（左侧）或 `"right"`（右侧）。
    *   默认值：`"left"`

*   **`components`**: `Array<Object>`
    *   一个数组，定义了侧边栏中包含的各个组件及其配置。每个组件对象包含以下属性：
        *   **`type`**: `string`
            *   组件类型，例如：`"profile"`（用户资料）、`"announcement"`（公告）、`"categories"`（分类）、`"tags"`（标签）。
        *   **`enable`**: `boolean`
            *   是否启用该组件。设置为 `true` 启用，`false` 禁用。
        *   **`order`**: `number`
            *   组件的显示顺序。数字越小，组件在侧边栏中显示得越靠前。
        *   **`position`**: `"top" | "sticky"`
            *   组件在侧边栏中的定位方式。可选值：
                *   `"top"`: 固定在侧边栏顶部，不随滚动条滚动。
                *   `"sticky"`: 粘性定位，在滚动时保持可见。
        *   **`class`**: `string`
            *   应用于组件的 CSS 类名，可用于自定义样式或动画。
        *   **`animationDelay`**: `number`
            *   组件动画的延迟时间（毫秒）。用于错开不同组件的动画效果。
        *   **`responsive`**: `Object` (可选)
            *   针对特定组件的响应式配置。例如，`categories` 和 `tags` 组件可以配置 `collapseThreshold`：
                *   **`collapseThreshold`**: `number`
                    *   折叠阈值。当组件内的项目数量超过此值时，组件内容将自动折叠。

### 默认动画配置 (`defaultAnimation`)：

*   **`enable`**: `boolean`
    *   是否启用侧边栏组件的默认动画效果。
    *   默认值：`true`

*   **`baseDelay`**: `number`
    *   动画的基础延迟时间（毫秒）。
    *   默认值：`0`

*   **`increment`**: `number`
    *   每个组件依次增加的动画延迟时间（毫秒）。例如，第一个组件延迟 `baseDelay`，第二个组件延迟 `baseDelay + increment`，以此类推。
    *   默认值：`50`

### 响应式布局配置 (`responsive`)：

*   **`breakpoints`**: `Object`
    *   定义不同设备的屏幕宽度断点（像素值）：
        *   **`mobile`**: 移动设备断点（例如：`768`）。
        *   **`tablet`**: 平板设备断点（例如：`1024`）。
        *   **`desktop`**: 桌面设备断点（例如：`1280`）。

*   **`layout`**: `Object`
    *   定义在不同设备断点下的侧边栏布局模式：
        *   **`mobile`**: 移动设备下的布局模式。可选值：`"hidden"`（不显示侧边栏）或 `"sidebar"`（显示侧边栏，通常为抽屉模式）。
        *   **`tablet`**: 平板设备下的布局模式。可选值：`"hidden"` 或 `"sidebar"`。
        *   **`desktop`**: 桌面设备下的布局模式。可选值：`"hidden"` 或 `"sidebar"`。

### 示例：

```typescript:/c:/Users/Administrator/Desktop/mizuki/src/config.ts
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
			type: "announcement",
			enable: true,
			order: 2,
			position: "top",
			class: "onload-animation",
			animationDelay: 50,
		},
		{
			type: "categories",
			enable: true,
			order: 3,
			position: "sticky",
			class: "onload-animation",
			animationDelay: 150,
			responsive: {
				collapseThreshold: 5,
			},
		},
		{
			type: "tags",
			enable: true,
			order: 4,
			position: "sticky",
			class: "onload-animation",
			animationDelay: 200,
			responsive: {
				collapseThreshold: 20,
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


## 粒子特效配置

```typescript
export const particleConfig: ParticleConfig = {
	enable: true, // 是否启动粒子特效
	particleNum: 12, // 粒子数量
	limitTimes: -1, // 粒子越界限制次数，-1为无限循环
	size: {
		min: 0.3, // 粒子最小尺寸倍数
		max: 0.9, // 粒子最大尺寸倍数
	},
	opacity: {
		min: 0.3, // 粒子最小不透明度
		max: 0.9, // 粒子最大不透明度
	},
	speed: {
		horizontal: {
			min: -0.9, // 水平移动速度最小值
			max: 0.9, // 水平移动速度最大值
		},
		vertical: {
			min: 0.15, // 垂直移动速度最小值
			max: 0.3, // 垂直移动速度最大值
		},
		rotation: 0.12, // 旋转速度
		fadeSpeed: 0.12, // 消失速度，不应大于最小不透明度
	},
	zIndex: 100, // 层级，确保粒子在合适的层级显示
};
```


## 看板娘配置

```typescript
export const pioConfig: import("./types/config").PioConfig = {
	enable: true, // 启用看板娘
	models: ["/pio/models/pio/model.json"], // 默认模型路径
	position: "left", // 默认位置在右侧
	width: 280, // 默认宽度
	height: 250, // 默认高度
	mode: "draggable", // 默认为可拖拽模式
	hiddenOnMobile: true, // 默认在移动设备上隐藏
	dialog: {
		welcome: "Welcome！", // 欢迎词
		touch: [
			"你在干什么？",
			"不可以这样欺负我啦！",
		], // 触摸提示
		home: "点击这里回到首页！", // 首页提示
		skin: [
			"想看看我的新衣服吗？",
			"新衣服真漂亮~"
		], // 换装提示
		close: "下次再见吧~", // 关闭提示
		link: "", // 关于链接
	},
};
```


## 统计配置

```typescript
export const umamiConfig = {
	enabled: false,                     // 启用Umami统计
	apiKey: "api_XXXXXXXXXX",          // API密钥
	baseUrl: "https://api.umami.is",   // API地址
	scripts: `<script defer src="XXXX.XXX" data-website-id="ABCD1234"></script>`.trim(), // 统计脚本
};
```