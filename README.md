# AlbertFang's Blog

我的个人博客，以技术写作为主（技术长文、工程笔记、踩坑记录），同时记录生活与思考。基于 [astro-theme-vitesse](https://github.com/kieranwv/astro-theme-vitesse) 模板构建。

- 线上地址：<https://albertfang0926.github.io>
- RSS：<https://albertfang0926.github.io/rss.xml>

## 技术栈

- [Astro](https://astro.build/) + [Vue 3](https://vuejs.org/) + [UnoCSS](https://unocss.dev/)
- MDX 支持（Markdown 中可使用组件）
- 纯静态输出，无后端；浅色 / 深色主题、RSS、sitemap、文章目录

## 目录结构

```txt
src/
├── content/
│   ├── blog/
│   │   ├── blogs/    # 博客：技术成文
│   │   ├── notes/    # 随记：短碎片
│   │   └── talks/    # 分享：对话感内容
│   └── pages/        # 独立页面（如 Markdown 样式示例）
├── components/       # Vue / Astro 组件
├── layouts/          # 页面布局
├── pages/            # 路由页面（含 rss.xml、robots.txt）
├── styles/           # 全局样式与正文排版
├── site-config.ts    # 站点信息、导航、社交链接
└── data/             # 项目页数据
```

## 本地开发

需要 Node.js 18.17 及以上版本。

```bash
# 安装依赖
npm install

# 启动开发服务器，访问 http://localhost:1977
npm run dev

# 构建到 dist/
npm run build

# 本地预览构建产物
npm run preview
```

## 写一篇文章

在 `src/content/blog/<栏目>/` 下新建 Markdown 文件（栏目对应上表中的 blogs / notes / talks），写入 frontmatter 即可：

```md
---
title: 文章标题
description: 一句话简介
date: 2026-10-07
tag: 可选标签
---

正文……
```

支持的可选字段还包括 `image`（列表配图）、`draft`（草稿）、`duration` 等，见 `src/content.config.ts` 中的 schema。

保存并推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages，无需手动操作。

## 致谢与许可

基于 [Kieran Wang](https://github.com/kieranwv/) 的 [astro-theme-vitesse](https://github.com/kieranwv/astro-theme-vitesse) 模板，遵循 [MIT License](./LICENSE)。
