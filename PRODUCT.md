# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Albert Fang 本人（作者）：在个人博客上记录生活片段、情绪与思考，写作为主，写作即产品。（推断：init 访谈提问未获回复，依据为仓库内容与 git 历史）

读者：作者本人与朋友/熟人。现有内容全部是生活向中文随笔（与 ChatGPT 对话引出的自我梳理、日常记录），尚无技术长文；「项目」页仍是模板占位数据。（推断，同上）

## Product Purpose

一个部署在 GitHub Pages 的个人博客（site: `https://albertfang0926.github.io`，用户站点，base 为 `/`），用于记录和分享个人生活与思考。成功意味着：写作与发布成本低，中文阅读体验舒适（浅色/深色、正文排版、文章目录），内容随时间积累成一份真实的个人记录。（目的依据仓库可证；"成功意味着"为推断）

## Positioning

真实的个人记录本身：特别是「分享」栏目中以对话体呈现的自我梳理（如《为什么焦虑？》——把焦虑讲给 ChatGPT，再整理成文），以及以「安安」为主角的生活碎片。这类内容是模板化技术博客无法复制。（推断）

## Operating Context

- 写作流程：在 `src/content/blog/<栏目>/` 新增 Markdown 文件（frontmatter：title / description / date / tag 等），git 提交后经 GitHub Pages 部署上线。
- 三个栏目对应三个 collection：`blog`（博客，/blog/blogs）、`notes`（随记，/blog/notes，collection 已定义但目录为空）、`talks`（分享，/blog/talks）；另有 `pages` collection（md-style、posts-props 两个模板示例页）。
- 本地开发：`npm run dev`（端口 1977，已加 --host）；`npm run build` 产出 `dist`。
- 作者以中文工作（git 提交信息、文章正文、导航文案均为中文）。

## Capabilities and Constraints

- 技术栈：Astro 7 + Vue 3 + UnoCSS + MDX，基于 astro-theme-vitesse 1.3.2 模板；纯静态输出，无后端。
- 已有功能：浅色/深色主题切换、RSS、sitemap、MDX、Vue 组件、文章列表配图、文章目录、返回顶部、nprogress 进度条。
- 「随记」collection 已定义但内容为空，导航指向空列表——属既有状态，非缺陷。
- 「项目」页（/projects）数据 `src/pages/projects/data.ts` 仍为模板占位卡片。**明确未决：未来是否填入真实项目、保留占位还是移除。**
- 模板英文遗留：站点 subtitle/description、页脚链接（Posts Props、Markdown Style）、日期格式化仍为 en-US。**明确未决：是否统一为中文。**
- 无评论系统、无访问统计、无服务端能力；未来工作不得虚构这些能力或相关数据。

## Brand Commitments

- 站名 "AlbertFang's Blog"，作者 Albert Fang；`public/avatar.jpg` 用作页头 logo，`public/hero.jpg` 为站点主图。
- 「安安」是文章中反复出现的角色（出自《今天安安出门啦》等；与作者的具体关系未在仓库中说明，此处不做猜测）。
- 社交链接中仅 GitHub（github.com/albertfang0926）有效，其余（Twitter/LinkedIn/Instagram/YouTube）href 为空。

## Evidence on Hand

- 真实文章 3 篇，均为中文生活内容：博客 1 篇《今天是个好日子》；分享 2 篇《为什么焦虑？》《今天安安出门啦》。
- 图片素材：`public/avatar.jpg`、`public/hero.jpg`、`public/favicon.svg`、`public/default-cover.svg`、`public/pictures/`。
- 无读者数据、评论、访问统计、外部传播或奖项证据；未来工作不得虚构此类内容。

## Product Principles

1. 记录优先：写作与发布越轻越好，任何设计不得给写作流程增加负担。
2. 中文阅读体验是一等公民：正文排版、行高、标点、目录导航按中文阅读习惯对待，模板英文遗留应逐步清理（待确认后执行）。
3. 轻盈快稳：纯静态、GitHub Pages、模板自带的 Lighthouse 性能传统必须保持。
4. 三栏目按节奏区分：博客=成文，随记=短碎片，分享=对话感内容；界面应体现这种节奏差异，而非让三者看起来一样。
