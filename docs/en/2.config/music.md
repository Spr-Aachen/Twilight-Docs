---
title: Music Player Configuration
createTime: 2025/10/10 10:10:10
permalink: /en/config/music/
---

Configure the floating music player. Supports local playlists and online (Meting) sources.

## File Structure

```
project-root/
└── src/
    ├── components/
    │   └── widget/
    │       └── MusicPlayer.svelte   # Content setup
    └── config.ts                    # Feature toggles
```


## Basic Settings

### Enable the Floating Player

In `src/config.ts`:

```typescript
export const musicPlayerConfig: MusicPlayerConfig = {
  enable: true,
};
```

### Add Music Content

Open `src/components/widget/MusicPlayer.svelte`.

#### Local Playlist Mode

Use a local playlist array to play tracks stored in the project:

```typescript
let mode = musicPlayerConfig.mode ?? "local";

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
];
```

Remember that asset paths are relative to the `public` directory.

#### Meting Mode

Use the Meting API to stream music from online platforms:

```typescript
let mode = musicPlayerConfig.mode ?? "meting";

// API endpoint (default or from config)
let meting_api = musicPlayerConfig.meting_api ?? "https://exampleapi";
// Playlist ID (default or from config)
let meting_id = musicPlayerConfig.id ?? "exampleid";
// Supported platforms: netease, tencent, kugou, xiami, baidu, etc.
let meting_server = musicPlayerConfig.server ?? "netease";
// Data type: song, playlist, album, etc.
let meting_type = musicPlayerConfig.type ?? "playlist";
```
