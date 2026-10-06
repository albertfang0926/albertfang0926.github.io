---
version: 1
slug: "src-layouts-baselayout-astro"
primary_target: "src/layouts/BaseLayout.astro"
related_targets: ["src/pages/blog/[...path].astro","src/pages/posts/[...slug].astro","src/pages/[...slug].astro","src/pages/projects/index.astro","src/pages/404.mdx","src/styles/global.css","uno.config.ts","src/components/Header.vue","src/components/Footer.vue","src/components/ListPosts.vue","src/components/ListProjects.vue","src/components/ScrollToTop.vue"]
---

# Surface brief — 站内路由页并入 BBS 世界（BaseLayout + 全部内容路由）

## Scope & mode

范围：src/layouts/BaseLayout.astro、src/pages/blog/[...path].astro、src/pages/posts/[...slug].astro、src/pages/[...slug].astro、src/pages/projects/index.astro、src/pages/404.mdx，及全局层（uno.config.ts、src/styles/global.css、Header.vue、Footer.vue、ListPosts.vue、ListProjects.vue、ScrollToTop.vue）。Read 模式：访客的问题是「这篇文章写了什么、值不值得读完」。2026-10-07 用户确认两项决策：① 全站并入 BBS 世界（结构语言全上，模板语言退役）；② 长文正文等宽全站（全站一个字族栈）。主页 index.astro 的既有世界不动，只回收被全局化的部分。

## Audience, job, constraints

- 受众：开发者读者与朋友/熟人；从主页版面导航进版，或从 RSS/分享直达文章页。
- 任务：列表页扫读某版全部文章（标题/日期/版面/提要）并进文；文章页舒适读完一篇中文长文（含代码块、表格、引用）。
- 证明/内容：真实文章 3 篇；页脚模板链接（Posts Props / Markdown Style）保留原样（是否中文化是 PRODUCT.md 既有未决项，本次不处理）；「项目」页占位数据保留原样（同样未决）。
- 约束：浅/深双主题同权；界面全中文；纯静态保持轻盈（不为 CJK 下网络字体，自托管 latin 子集 ≤22KB）；不虚构数据。

## Chosen direction & memorable moment

既有世界「中文 BBS 站」全站延伸：主页是进站画面，子页面是站内空间——列表页是「版面文章索引」，文章页是「一张贴子展开正文」。memorable moment = 光标条与 ▸ 跟随访客进版；文章页的阅读感是「在终端里读一篇排版认真的长文」。

## Unresolved decisions

- 无阻塞项。页脚英文链接中文化、项目页真实数据（PRODUCT.md 未决）不在本次范围。

## Direction contract

THESIS: 子页面不是另一套博客模板，而是同一座 BBS 站的版内空间——列表页是版面文章索引，文章页是一张贴子展开的正文；它拒绝点阵背景、描边大字年份、圆角卡片、玻璃拟态等模板语言在全站残留。

OWN-WORLD: 完全继承 DESIGN.md（等宽单声部、纸上终端/ANSI 蓝底双主题、青色经济、零圆角零阴影、框线层级、tabular-nums）。新增词汇仅两条：① 「年代分隔行」——列表按年分段，年份以 Label 号淡墨 tabular-nums 骑在 1px line 横线上（同 legend 嵌线语法）；② 「文章贴」头部——文章页用 3px double 进站牌同款双线框住标题与元数据行，正文 prose 无框直排、行长约 42em。

STORY: 访客从版面导航进版，看到该版全部文章按年分段（光标条可逐行选读，含提要）；点进文章，双线「贴子」框报标题/日期/版面/读时，往下是无干扰的等宽长文，代码块以 1px 框线嵌在同一网格里；读完经页脚细注层离开或回进站画面。

FIRST VIEWPORT: 文章页（/posts/*）：全局页头之下，3px double fieldset「文章」内是 Headline 号标题 + Label 号元数据行（日期 · 版面 [tag] · 读时 N分钟 · [草稿]），其下正文直排；列表页（/blog/*）：1px fieldset「{版面名}」内是版签行（[博客] [随记] [分享] 方括号链接，当前版 700 墨色 + 行首 ▸）+ 按年分段的 BBS 光标条行（序号 标题 日期 meta，提要作次行）。

FORM: 既有世界扩展（established world 的 surface 扩展），非新方向；precisely specified extension，不跑 concept-seed，无 seed key。签名交互 = 光标条（自主页复制的同一语法）；动效沿用唯一时间线（列表逐行点亮 0.55s expo-out 递进），文章页无入场动效。

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
