---
title: 站点配置
createTime: 2025/10/10 10:10:10
permalink: /config/core/
---

站点配置


## 文件位置

```
项目根目录/
└── twilight.config.yaml
```


## 站点设置

配置网站的全局设置，包括网址、语言、时区、主题色、壁纸等。

```yaml
site:
    # 站点 URL（以斜杠结尾）
    siteURL: "https://twilight.spr-aachen.com/"
    # 站点标题
    title: "Twilight"
    # 站点副标题
    subtitle: "Blog Template"
    # 语言配置
    lang: "en"
    # 翻译配置
    translate:
        # 启用翻译功能
        enable: true
        # 翻译服务
        service: "client.edge"
        # 显示语言选择下拉框
        showSelectTag: false
        # 自动检测用户语言
        autoDiscriminate: true
        # 翻译时忽略的 CSS 类名
        ignoreClasses:
            - "ignore"
            - "banner-title"
            - "banner-subtitle"
        # 翻译时忽略的 HTML 标签
        ignoreTags:
            - "script"
            - "style"
            - "code"
            - "pre"
    # 时区配置
    timeZone: 8
    # 字体配置
    font:
        # 示例字体配置 - Zen Maru Gothic
        "Example - ZenMaruGothic":
            # 字体源 (字体 CSS 链接 | 字体文件路径)
            src: "https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic&display=swap"
            # 字体名 (font-family)
            family: "Zen Maru Gothic"
    # 主题色配置
    themeColor:
        # 主题色的默认色相 (范围从 0 到 360。例如：红色：0，青色：200，蓝绿色：250，粉色：345)
        hue: 255
    # 默认主题 ("system" 跟随系统 | "light" 浅色 | "dark" 深色)
    defaultTheme: "dark"
    # 壁纸配置
    wallpaper:
        # 模式 ("banner" 横幅 | "fullscreen" 全屏 | "none" 纯色)
        mode: "banner"
        # 图片源配置 (fullscreen 和 banner 模式共享)
        src:
            # 桌面壁纸图片 (相对于 /public 目录; 支持单张图片或图片数组，当数组长度 > 1 时自动启用轮播)
            desktop:
                - "/assets/images/desktopWallpaper_1.jpg"
                - "/assets/images/desktopWallpaper_2.jpg"
                - "/assets/images/desktopWallpaper_3.jpg"
            # 移动壁纸图片 (相对于 /public 目录; 支持单张图片或图片数组，当数组长度 > 1 时自动启用轮播)
            mobile:
                - "/assets/images/mobileWallpaper_1.jpg"
                - "/assets/images/mobileWallpaper_2.jpg"
        # 壁纸位置 ('top' | 'center' | 'bottom')
        position: "center"
        # 轮播配置 (fullscreen 和 banner 模式共享)
        carousel:
            # 为多张图片启用轮播，否则随机显示一张图片
            enable: true
            # 轮播间隔时间 (秒)
            interval: 3.6
            # 启用 Ken Burns 效果
            kenBurns: true
        # Banner 模式专属配置
        banner:
            # 横幅文本配置
            homeText:
                # 在主页显示文本
                enable: true
                # 主标题
                title: "Twilight"
                # 副标题，支持单个字符串或字符串数组
                subtitle:
                    - "Illuminate Our Paths"
                # 副标题打字机效果
                typewriter:
                    # 启用副标题打字机效果
                    enable: true
                    # 打字速度 (毫秒)
                    speed: 111
                    # 删除速度 (毫秒)
                    deleteSpeed: 51
                    # 完全显示后的暂停时间 (毫秒)
                    pauseTime: 3000
            # 横幅图片来源文本
            credit:
                # 显示横幅图片来源文本
                enable: false
                # 要显示的来源文本
                text: "Describe"
                # (可选) 原始艺术品或艺术家页面的 URL 链接
                url: ""
            # 导航栏配置
            navbar:
                # 导航栏透明模式 ("semi" 半透明加圆角 | "full" 完全透明 | "semifull" 动态透明)
                transparentMode: "semifull"
            # 水波纹效果配置
            waves:
                # 启用水波纹效果
                enable: true
                # 启用性能模式 (简化波浪效果以提升性能)
                performanceMode: false
        # Fullscreen 模式专属配置
        fullscreen:
            # 层级
            zIndex: -1
            # 壁纸透明度，0-1之间
            opacity: 0.9
            # 背景模糊程度 (像素值)
            blur: 1
            # 导航栏透明模式
            navbar:
                transparentMode: "semi"
    # 加载页配置
    loadingOverlay:
        # 是否启用加载页
        enable: true
        # 加载标题配置
        title:
            # 是否启用加载标题
            enable: true
            # 加载标题文本
            content: "LOADING"
            # 动画周期 (s)
            interval: 1.5
        # 加载动画配置
        spinner:
            # 是否启用加载动画
            enable: true
            # 动画周期 (s)
            interval: 1.5
    # favicon 配置
    favicon: []
    # bangumi 配置
    bangumi:
        # 用户 ID
        userId: "your-bangumi-id"
    # OpenGraph 配置
    generateOgImages: false
```

- `title`：网站的主标题，显示在浏览器标签页和页面头部
- `subtitle`：网站的副标题，通常显示在主页横幅下方
- `lang`：网站的默认语言，影响日期格式、翻译等功能
- `themeColor`: 主题设置
    - `hue`：主题色的色相值，可以是 0-360 之间的任何数值
    - `fixed`：设置为 `true` 时，访客将无法更改主题色
    - `defaultTheme`: 黑白主题，有 `system` 跟随系统、`light` 浅色、`dark` 深色三个选项
- `wallpaper`: 壁纸设置
    - `mode`: 壁纸默认模式，支持 fullscreen（全屏壁纸）、banner（横幅壁纸）、none（纯色背景）三种模式


## 站点统计配置

配置网站浏览量统计

```yaml
umami:
    # 是否显示Umami统计
    enabled: false
    # UmamiCloudAPI地址
    baseUrl: "https://api.umami.is"
    # API密钥 (可用环境变量覆盖)
    apiKey: ""
    # 要插入的Script (可用环境变量覆盖)
    scripts: ""
```


## 导航栏配置

配置网站导航栏的导航链接，包括导航项的名称、链接等。

```yaml
navbar:
    # 链接配置 (链接预设位于 src/constants/link-presets.ts 的 LinkPresets)
    links:
        - # 一级导航链接 - 主页 (预设)
            "Home"
        - # 一级导航链接 - 归档 (预设)
            "Archive"
        - # 一级导航链接 - 展览 (自定义)
            # 导航名称
            name: "Exhibition"
            # 导航链接
            url: "/exhibition/"
            # 导航图标
            icon: "material-symbols:person"
            # 导航描述
            description: "A collection of my creative works and experiences"
            # 子链接
            children:
                - # 二级导航链接 - 项目 (预设)
                    "Projects"
                - # 二级导航链接 - 技能 (预设)
                    "Skills"
                - # 二级导航链接 - 历程 (预设)
                    "Timeline"
                - # 二级导航链接 - 日记 (预设)
                    "Diary"
                - # 二级导航链接 - 相册 (预设)
                    "Albums"
                - # 二级导航链接 - 动画 (预设)
                    "Anime"
        - # 一级导航链接 - 好友 (预设)
            "Friends"
        - # 一级导航链接 - 关于 (预设)
            "About"
```

- `links`: 一个数组，定义了导航栏中的各个链接。每个链接对象可以是一个预设链接 (`LinkPreset`)，也可以是一个自定义链接对象
    - `name`:  导航项显示的名称
    - `url`:  导航项点击后跳转的 URL
    - `icon`:  导航项的图标，可以使用图标库（如 FontAwesome、Material Icons 等）的图标名称
    - `description`:  导航项的简短描述，通常显示为工具
    - `children`:  一个数组，定义了当前导航项的子项。子项的结构与父级导航项类似，可以继续嵌套


## 侧边栏布局配置

配置网站侧边栏的显示、排序、动画和响应式行为

```yaml
# 侧边栏配置
sidebar:
    # 侧边栏组件配置列表 (侧栏组件预设位于 src/types/config.ts 的 WidgetComponentType)
    components:
        # 左侧侧边栏
        left:
            - # 组件 - 资料 (预设)
                # 类型
                type: "profile"
                # 位置策略 ("top" 顶部固定 | "sticky" 粘性)
                position: "top"
            - # 组件 - 公告 (预设)
                # 类型
                type: "announcement"
                # 位置策略 ("top" 顶部固定 | "sticky" 粘性)
                position: "top"
            - # 组件 - 文章类别 (预设)
                # 类型
                type: "categories"
                # 位置策略 ("top" 顶部固定 | "sticky" 粘性)
                position: "sticky"
                # 响应式配置
                responsive:
                    # 折叠阈值
                    collapseThreshold: 5
            - # 组件 - 文章标签 (预设)
                # 类型
                type: "tags"
                # 位置策略 ("top" 顶部固定 | "sticky" 粘性)
                position: "sticky"
                # 响应式配置
                responsive:
                    # 折叠阈值
                    collapseThreshold: 20
        # 右侧侧边栏
        right:
            - # 组件 - 文章目录 (预设)
                # 类型
                type: "toc"
                # 位置策略 ("top" 顶部固定 | "sticky" 粘性)
                position: "sticky"
                # 自定义属性
                customProps:
                    # 目录深度 (1-6，1 表示只显示 h1 标题，2 表示显示 h1 和 h2 标题，依此类推)
                    depth: 3
            - # 组件 - 文章统计 (预设)
                # 类型
                type: "statistics"
                # 位置策略 ("top" 顶部固定 | "sticky" 粘性)
                position: "sticky"
```


## 资料配置

配置网站资料，包括头像、简介、链接等

```yaml
profile:
    # 头像配置 (相对于 /public 目录)
    avatar: "/assets/images/avatar.jpg"
    # 信息配置
    name: "Twilight"
    # 简介配置
    bio: "Hi"
    # 链接配置
    links:
        - # 链接示例
            # 名字
            name: "GitHub"
            # 图标
            icon: "fa6-brands:github"
            # 链接
            url: "https://github.com/Spr-Aachen/Twilight"
```


## 公告功能配置说明

配置网站公告功能，包括标题、内容、链接等。

```yaml
announcement:
    # 公告标题
    title: "Announcement"
    # 公告内容
    content: "Welcome to my blog!"
    # 允许用户关闭公告
    closable: true
    # 链接配置
    link:
        # 启用链接
        enable: true
        # 链接文本
        text: "Learn More"
        # 链接 URL
        url: "/about/"
        # 是否外部链接
        external: false
```


## 文章设置

配置文章的显示、编辑、目录等功能。

```yaml
post:
    # 显示“上次编辑”卡片
    showLastModified: true
    # 在文章内容中显示封面
    showCoverInContent: false
    # 代码高亮配置
    expressiveCode:
        # 主题
        theme: "github-dark"
    # 许可证配置
    license:
        # 启用许可证
        enable: true
        # 许可证名称
        name: "CC BY-NC-SA 4.0"
        # 许可证链接
        url: "https://creativecommons.org/licenses/by-nc-sa/4.0/"
    # 评论配置
    comment:
        # 启用评论功能
        enable: false
        # Twikoo 评论系统配置
        twikoo:
            # 环境 ID
            envId: "https://twikoo.vercel.app"
            # 语言
            lang: "en"
```

- 许可证配置控制文章底部的许可证显示
- 代码块配置控制代码块的显示样式, 可选主题包括：`github-dark`、`dracula`、`one-dark` 等
- 评论系统配置控制文章底部的评论系统，需要先在 [Twikoo](https://twikoo.js.org/) 上创建环境并获取环境 ID


## 启用页脚功能

配置网站页脚

```yaml
footer:
    # 启用 Footer HTML 注入功能
    enable: false
    # 自定义 HTML 内容，用于添加备案号等信息
    customHtml: ""
```


## 粒子特效配置

配置粒子特效的显示、数量、移动速度等功能。

```yaml
particle:
    # 启用粒子特效
    enable: true
    # 粒子数量
    particleNum: 12
    # 粒子越界限制次数，-1为无限循环
    limitTimes: -1
    # 粒子尺寸配置
    size:
        # 粒子最小尺寸倍数
        min: 0.3
        # 粒子最大尺寸倍数
        max: 0.9
    # 粒子透明度配置
    opacity:
        # 粒子最小不透明度
        min: 0.3
        # 粒子最大不透明度
        max: 0.9
    # 粒子移动速度配置
    speed:
        # 水平移动速度
        horizontal:
            # 最小值
            min: -0.9
            # 最大值
            max: 0.9
        # 垂直移动速度
        vertical:
            # 最小值
            min: 0.15
            # 最大值
            max: 0.3
        # 旋转速度
        rotation: 0.12
        # 消失速度
        fadeSpeed: 0.12
    # 粒子层级
    zIndex: 100
```


## 音乐配置

配置音乐播放器的默认模式、Meting API、本地播放列表等功能

```yaml
musicPlayer:
    # 启用音乐播放器功能
    enable: true
    # 默认模式 ("meting" API | "local" 本地)
    mode: "meting"
    # meting 模式专属配置
    meting:
        # Meting API 地址
        meting_api: "https://api.i-meto.com/meting/api"
        # 音乐平台
        server: "netease"
        # 类型 ("playlist" 歌单 | "song" 单曲)
        type: "playlist"
        # 资源 ID
        id: "2161912966"
    # local 模式专属配置
    local:
        # 播放列表
        playlist:
            - # 列表示例
                # 序号
                id: 1
                # 标题
                title: "深海之息"
                # 作者
                artist: "Youzee Music"
                # 封面
                cover: "https://p1.music.126.net/PhKOqFtljgHDDpKYM2ADUA==/109951169858309716.jpg"
                # 路径
                url: "assets/music/深海之息.m4a"
                # 时长
                duration: 146
    # 是否自动播放
    autoplay: true
```


## 看板娘配置

配置看板娘的显示、位置、对话框等功能。

```yaml
pio:
    # 启用看板娘
    enable: false
    # 模型文件路径
    models:
        - "/pio/models/pio/model.json"
    # 看板娘位置
    position: "left"
    # 看板娘宽度
    width: 280
    # 看板娘高度
    height: 250
    # 展现模式
    mode: "draggable"
    # 是否在移动设备上隐藏
    hiddenOnMobile: true
    # 对话框配置
    dialog:
        # 欢迎词
        welcome: "Welcome!"
        # 触摸提示
        touch:
            - "What are you doing?"
            - "Stop touching me!"
            - "Don't bully me like that!"
            - "(｡í _ ì｡)"
        # 首页提示
        home: "Click here to go back to homepage!"
        # 换装提示
        skin:
            - "Want to see my new outfit?"
            - "The new outfit looks great~"
        # 关闭提示
        close: "See you next time~"
        # 关于链接
        link: "https://nav.kungal.org"
```