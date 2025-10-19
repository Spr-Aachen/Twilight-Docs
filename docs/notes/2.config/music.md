---
title: 音乐播放器配置
createTime: 2025/10/10 10:10:10
permalink: /config/music/
---

音乐播放器配置，支持本地音乐和在线音乐两种模式


## 文件结构

```
项目根目录/
└── src/
	├── components/
	│   └── widget/
	│   	└── MusicPlayer.svelte		# 内容设置
	└── config.ts           			# 开关设置
```


## 基础配置

### 启用悬浮音乐播放器

在 `src/config.ts` 中：

```typescript
export const musicPlayerConfig: MusicPlayerConfig = {
	enable: true, // Enable music player feature
};
```

### 添加音乐内容

在 `src/components/widget/MusicPlayer.svelte` 中

#### 本地曲库模式

使用本地列表播放音乐，需要配置本地播放列表

```typescript
let mode = musicPlayerConfig.mode ?? "local";
```

```typescript
const localPlaylist = [
	{
		id: 1,
		title: "a",
		artist: "xxx",
		cover: "assets/music/cover/a.jpg",
		url: "assets/music/url/a.mp3",
		duration: 240,
	},
	{
		id: 2,
		title: "b",
		artist: "xxx",
		cover: "assets/music/cover/b.jpg",
		url: "assets/music/url/b.mp3",
		duration: 240,
	},
]
```

需要注意路径相对于`public`目录

#### meting模式

调用Meting API播放音乐，需要配置API参数

```typescript
let mode = musicPlayerConfig.mode ?? "meting";
```

```typescript
// Meting API 地址，从配置中获取或使用默认值
let meting_api = musicPlayerConfig.meting_api ?? "https://exampleapi";
// Meting API 的 ID，从配置中获取或使用默认值
let meting_id = musicPlayerConfig.id ?? "exampleid";
// Meting API 的服务器，从配置中获取或使用默认值,有的meting的api源支持更多平台,一般来说,netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
let meting_server = musicPlayerConfig.server ?? "netease";
// Meting API 的类型，从配置中获取或使用默认值
let meting_type = musicPlayerConfig.type ?? "playlist";
```