---
title: 番剧页面配置
createTime: 2025/10/10 10:10:10
permalink: /config/anime/
---


# 本地数据源


## 文件位置

```
src/data/anime.ts
```


## 修改番剧列表

要添加、删除或修改番剧信息，请直接编辑 `AnimeItem` 数组：

1. **添加番剧**：复制现有番剧对象并修改其属性
2. **修改番剧信息**：直接修改现有番剧对象的属性值
3. **删除番剧**：从数组中移除对应的番剧对象


## 番剧属性说明

每个番剧对象包含以下属性：

- `title`：番剧标题 - 动漫的正式名称或译名
- `status`：观看状态（"watching" 或 "completed"） - 当前的观看进度状态
- `rating`：评分（0-10） - 个人对该番剧的评分
- `cover`：封面图片路径（相对于 public 目录） - 番剧封面图片的存储路径
- `description`：番剧描述 - 对番剧的简短评价或剧情概要
- `episodes`：集数信息 - 番剧的总集数描述
- `year`：播放年份 - 番剧首次播出的年份
- `genre`：类型标签 - 番剧的分类标签数组，如["动作", "日常"]
- `studio`：制作公司 - 负责制作该番剧的动画工作室
- `link`：番剧链接（可指向 Bilibili 或其他平台） - 观看或了解更多信息的链接
- `progress`：观看进度 - 当前已观看的集数
- `totalEpisodes`：总集数 - 番剧的完整集数
- `startDate`：开始播出日期 - 番剧开始播出的时间（格式：YYYY-MM）
- `endDate`：结束播出日期 - 番剧播出结束的时间（格式：YYYY-MM）


## 番剧图片

要为番剧添加封面图片：

1. 将图片文件放置在 `public/assets/anime/` 目录下
2. 在番剧对象的 `cover` 属性中指定图片文件名

确保图片格式为 WebP 以获得最佳性能。



# Bangumi数据源


## 文件位置

开关位于 `src/config.ts` 文件中。


## 修改番剧

```typescript
bangumi: {
		userId: "your-bangumi-id", // 在此处设置你的Bangumi用户ID，可以设置为 "sai" 测试
	},
	anime: {
		mode: "bangumi", // 番剧页面模式："bangumi" 使用Bangumi API，"local" 使用本地配置
	},
```

1. 把括号中的 "your-bangumi-id" 替换为Bangumi用户ID。
2. mode配置为"bangumi"，这样就能从Bangumi API获取番剧数据。