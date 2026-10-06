---
name: "AlbertFang's Blog（中文 BBS 站）"
description: "中文 BBS 站式个人博客：整站同站——主页是进站画面，版面索引与「文章贴」长文共用同一张地面；纸上终端与 ANSI 蓝底双主题、全站等宽字模、fieldset 框线语法、青色信号 + 琥珀标记。"
colors:
  ground: "#f3f2ec"
  ink: "#1c2438"
  ink-soft: "rgb(28 36 56 / 0.72)"
  ink-dim: "rgb(28 36 56 / 0.68)"
  line: "rgb(28 36 56 / 0.32)"
  line-strong: "rgb(28 36 56 / 0.55)"
  accent: "#0a6f68"
  accent-2: "#8f5a00"
  cursor-tint: "rgb(10 111 104 / 0.16)"
  code-ground: "#eae8df"
  code-inline: "rgb(28 36 56 / 0.07)"
  dark-ground: "#101830"
  dark-ink: "#dfe6f3"
  dark-ink-soft: "rgb(223 230 243 / 0.72)"
  dark-ink-dim: "rgb(223 230 243 / 0.62)"
  dark-line: "rgb(223 230 243 / 0.26)"
  dark-line-strong: "rgb(223 230 243 / 0.5)"
  dark-accent: "#52d9cf"
  dark-accent-2: "#f0b45c"
  dark-code-ground: "#0b1428"
  dark-code-inline: "rgb(223 230 243 / 0.12)"
typography:
  display:
    fontFamily: "'JetBrains Mono Local', ui-monospace, Consolas, 'Cascadia Mono', 'Courier New', 'PingFang SC', 'Microsoft YaHei', monospace"
    fontSize: "clamp(1.7rem, 5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "0.01em"
  headline:
    fontFamily: "'JetBrains Mono Local', ui-monospace, Consolas, 'Cascadia Mono', 'Courier New', 'PingFang SC', 'Microsoft YaHei', monospace"
    fontSize: "clamp(1.35rem, 3.6vw, 1.8rem)"
    fontWeight: 700
    lineHeight: 1.45
  body:
    fontFamily: "'JetBrains Mono Local', ui-monospace, Consolas, 'Cascadia Mono', 'Courier New', 'PingFang SC', 'Microsoft YaHei', monospace"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.75
  ui:
    fontFamily: "'JetBrains Mono Local', ui-monospace, Consolas, 'Cascadia Mono', 'Courier New', 'PingFang SC', 'Microsoft YaHei', monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.75
  legend:
    fontFamily: "'JetBrains Mono Local', ui-monospace, Consolas, 'Cascadia Mono', 'Courier New', 'PingFang SC', 'Microsoft YaHei', monospace"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.1em"
  label:
    fontFamily: "'JetBrains Mono Local', ui-monospace, Consolas, 'Cascadia Mono', 'Courier New', 'PingFang SC', 'Microsoft YaHei', monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.75
    fontFeature: "'tnum'"
rounded:
  none: "0"
spacing:
  2xs: "0.4rem"
  xs: "0.55rem"
  sm: "1.2rem"
  md: "1.4rem"
components:
  station:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0"
  gate:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.4rem 1.4rem 1.2rem"
  entry-head:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.4rem 1.4rem 1.2rem"
  board:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.2rem 1.2rem 1rem"
  board-tab:
    textColor: "{colors.accent}"
  board-tab-active:
    textColor: "{colors.ink}"
  year-row:
    textColor: "{colors.ink-dim}"
    typography: "0.8125rem / 400 / tabular-nums"
  menu-link:
    textColor: "{colors.accent}"
  read-link:
    textColor: "{colors.accent}"
    typography: "0.875rem / 700"
  prose-link:
    textColor: "{colors.accent}"
  mark:
    textColor: "{colors.accent-2}"
  board-item:
    textColor: "{colors.ink}"
    padding: "0.6rem 0.3rem"
  cursor-row-hover:
    backgroundColor: "{colors.cursor-tint}"
    textColor: "{colors.ink}"
  cursor-row-hover-dark:
    backgroundColor: "{colors.dark-accent}"
    textColor: "{colors.dark-ground}"
  code-block:
    backgroundColor: "{colors.code-ground}"
    rounded: "{rounded.none}"
  scroll-top:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    width: "3rem"
    height: "3rem"
  footer-note:
    textColor: "{colors.ink-dim}"
---

# Design System: AlbertFang's Blog（中文 BBS 站）

## Overview

**Creative North Star: "一座自己的中文 BBS 站"**

整座站点是一座个人中文 BBS 站：主页是进站画面（整屏终端，开本约 80 列）——访客像登录一样进站，顶部系统行横贯报站名与【技术 · 生活】，双线进站牌里是站长与联络方式，「最新张贴」是版面文章，右侧「版面导航」是四个板块的菜单，底部状态栏横贯写着「在线 1 人 · 访客就是你」。站内路由页是同一座站的版内空间：列表页是「版面文章索引」（1px 版面框 + 方括号版签 + 按年分段的光标条列表），文章页是「一张贴子展开正文」（3px 双线贴框报标题与元数据，其下是无干扰的等宽长文）。它拒绝「问候语 + 卡片网格」的博客模板排布，也拒绝无语法堆砌的终端霓虹装饰（扫描线、闪烁、辉光、多色 ANSI 都不出现）。

一切文字排在同一张等宽字模网格上：中文方块字天然等宽，拉丁字母与数字由自托管的 JetBrains Mono（latin 子集）补齐同一网格——长文正文也不例外（全站一个字族栈）。区块以 ANSI 框线语法组织（fieldset/legend 嵌线标题：进站牌与文章贴头 3px 双线、一般区块 1px 实线），零圆角、零阴影；层次靠框线粗细（双线 > 强实线 > 实线 > 虚线）与墨阶表达。青色是唯一信号色（交互与状态），琥珀只做 [标记] 第二高亮；「图形」词汇只有 [方括号] 文本标记与 ▸ 光标符。正文排印（BBS 排印）自成一套封闭语法：42em 中文行长、下划线青色链接、框线标题与表格、墨洗行内代码、无斜体（强调靠 700）。

浅色主题是「纸上终端」（冷纸白 #f3f2ec + 蓝黑墨 #1c2438），深色主题是经典 ANSI 蓝底终端（藏青 #101830 + 亮白字 #dfe6f3）——两套各自调版、同等认真，深色不是浅色的滤镜。签名交互是 BBS 光标条：文章行悬停/键盘聚焦时整行被信号色填充（深色 = accent 反白 + 地色字，浅色 = 0.16 透明度青 tint + 墨字），行首浮出 ▸——方向键选文的肌肉记忆。动效只有一条时间线：列表逐行点亮。

本档于 2026-10-06 在 finish review（fix 轮 5 处 material fixes 全部 resolved，disposition ship）之后从已构建的 `src/pages/index.astro` 重写，上一版「生活副刊」方向（新闻纸/宋体/朱砂）已整体退役，此处只作历史注记；同日依用户「内容与背景分离、要求排版覆盖整个页面」的反馈改为整屏进站。2026-10-07 用户以两次结构化确认批准全站延伸：① 全站并入 BBS 世界（结构语言全上，模板语言退役），② 长文正文等宽全站。世界令牌随之上收到 `src/styles/global.css`（`:root` / `html.dark`），原「站外页面维持模板原样」条款就此作废，主页只保留整屏进站时 main 的开本让位；本次全站重录经 finish review fix 轮（1 material：fieldset/entry 内容驱动列宽，根因是 main 收缩——已以 `w-full` + `width:100%` 修复；2 minor：h6 大写模板残留、页头毛玻璃——已分别以 h5/h6 重述与滚动态「系统行」语法修复），verdict pass、全部 resolved、无回归、disposition ship（2026-10-07）。参考截图：主页 `.impeccable/review/desktop.png` 等五张；全站 `.impeccable/review/site/` 十七张（浅/深 × 桌面/移动，覆盖 /、/blog/*、/posts/*、/md-style、/projects、404）。

**Key Characteristics:**
- 一座站语法：进站画面（主页）→ 版面索引（列表页/项目页）→ 文章贴（文章页），共用同一张地面、同一套令牌。
- 等宽单声部：'JetBrains Mono Local'（拉丁/数字，自托管 latin 子集）+ 系统 CJK，全站一个字族栈，长文正文同族。
- ANSI 框线层级：3px 双线（进站牌、文章贴头）> 1px 强实线（通栏线）> 1px 实线（区块/行分隔）> 1px 虚线（头条分隔/hr）；legend 嵌线为框题。
- 零圆角、零阴影；[方括号] 文本标记与 ▸ 光标是仅有的「图形」。
- 青色经济：青 = 信号/交互（用途封闭清点），琥珀 = 第二高亮且只用于 [草稿]/[外链]/[视频] 标记。
- BBS 排印：正文行长 42em，标题下框线、表格划线、代码块嵌框、无斜体（强调靠 700）。
- 动效一条时间线：列表逐行点亮（0.55s expo-out，+0.06s 递进，prefers-reduced-motion 关闭）。
- 界面全中文；日期/篇数/序号/年份一律 tabular-nums。

## Colors

一句话性格：浅色是冷纸白上一色蓝黑墨加一枚青色信号；深色是 ANSI 蓝底终端，同一套角色各自调版。全部颜色以 CSS 自定义属性写在 `src/styles/global.css` 的 `:root` / `html.dark`，UnoCSS 主题色（`ground/ink/ink-soft/ink-dim/line/line-strong/accent/accent-2`）只是这些令牌的别名。

### Primary
- **终端青·信号 (accent)**（浅 #0a6f68 / 深 #52d9cf）：唯一交互与状态色，用途封闭清点——框题 legend 文字、方括号链接（含版签）、[阅读全文]、prose 链接、▸ 光标符、行悬停标题/版面名、焦点环、选区底色、顶部进度条、深色光标条整行底。除此之外不做任何用途。

### Secondary
- **终端琥珀·标记 (accent-2)**（浅 #8f5a00 / 深 #f0b45c）：第二高亮，唯一用途是 `.mark` 方括号状态标记（[草稿]、[外链]、[视频]），配 0.78em 弱化字号与 400 字重。永不做大面积装饰。

### Neutral
- **终端地 (ground)**（浅 #f3f2ec / 深 #101830 ANSI 藏青）：整站地面色——`body` 背景即它，主页进站画面与站内所有路由页印在同一层上；也是浅色光标条上的文字色、回到顶部按钮与页头滚动底的底色。
- **蓝黑墨 (ink)**（浅 #1c2438 / 深 #dfe6f3 亮白）：正文与标题的墨，也是框线基色、当前版签与浅色光标条的文字色。
- **次墨 (ink-soft)**（浅 rgb(28 36 56 / 0.72) / 深 rgb(223 230 243 / 0.72)）：站长行、欢迎语、提要、列表行提要（row-desc）、引用块、状态栏。
- **淡墨 (ink-dim)**（浅 rgb(28 36 56 / 0.68) / 深 rgb(223 230 243 / 0.62)）：元数据、日期、计数、序号、年份行、版面注记、文章贴元数据行、细注层页脚；透明度已按主题分别调对比。
- **框线 (line)**（浅 rgb(28 36 56 / 0.32) / 深 rgb(223 230 243 / 0.26)）：区块边框、行分隔、头条虚线、代码块/图片 1px 框、hr 虚线、prose 链接下划线色。
- **强框线 (line-strong)**（浅 rgb(28 36 56 / 0.55) / 深 rgb(223 230 243 / 0.5)）：系统行/状态栏通栏线、进站牌与文章贴双线、页头滚动底线、头像/Logo 方框、引用左线、表头底线。
- **光标条 (cursor-tint)**（浅 rgb(10 111 104 / 0.16)；深 = accent 本色 + 文字翻转为 ground）：行悬停/聚焦的整行底色，即「反白」的两种实现。
- **代码地 (code-ground)**（浅 #eae8df / 深 #0b1428）：代码块（.astro-code）的屏幕底色——终端里嵌一块更深一档的有框线屏幕，比地面暗半档。
- **代码墨洗 (code-inline)**（浅 rgb(28 36 56 / 0.07) / 深 rgb(223 230 243 / 0.12)）：行内 code 的背景墨洗，无框、radius 0。

### Named Rules
**The 青色经济 Rule.** 青 = 信号与交互，用途封闭清点（legend、链接、▸、焦点环、选区、光标条、进度条）；琥珀 = 第二高亮且只用于 [标记]。两色都不做分隔线、背景块或大面积装饰；新增任何一处用量必须先退役一处现有用途。

**The 双主题同权 Rule.** 深色是经典 ANSI 蓝底的独立调版（ground #101830、accent #52d9cf、淡墨 0.62），浅色（ground #f3f2ec、accent #0a6f68、淡墨 0.68）；每个新颜色必须同时给出两套值（写进 `:root` 与 `html.dark`），dim/soft 档按主题分别校对比，不做透明度滤镜。

**The 墨阶封底 Rule.** ink-dim 是文字最淡档，不再往下稀释；更弱的层级用 0.8125rem 字号与框线区分，不用更淡的墨。

## Typography

**Display Font:** 'JetBrains Mono Local'（自托管 woff2：`public/fonts/jetbrains-mono-latin-400.woff2` + `-700.woff2`，latin 子集约 21/22KB，@font-face 在 `src/styles/global.css` 全局声明、font-display: swap），fallback ui-monospace, Consolas, 'Cascadia Mono', 'Courier New'。
**Body Font:** 同一字族栈——中文落到系统 PingFang SC / Microsoft YaHei；CJK 刻意不用网络字体（PRODUCT「轻盈快稳」）。字族栈直接写在全局 `body` 上，站内站外、界面与长文一视同仁。
**Character:** 全站单声部等宽。中文方块字天然等宽，拉丁与数字由 JetBrains Mono 补齐同一网格；终端开本感来自「万物同宽」，不靠第二字族做对比。层级只靠字重（400/700）、字号与墨阶；长文正文也是等宽（2026-10-07 用户确认②），在终端里读排版认真的长文。

### Hierarchy
- **Display**（700, clamp(1.7rem, 5vw, 2.5rem), lh 1.25, ls 0.01em）：进站牌站名，一页仅一次。
- **Headline**（700, clamp(1.35rem, 3.6vw, 1.8rem), lh 1.45）：「最新张贴」头条标题与文章贴标题（entry-title，配 overflow-wrap: anywhere）。
- **Body**（400, 0.9375rem, lh 1.75）：全站正文基准（全局 body）；提要 lead-desc 同号但 lh 1.85、max-width 42em（中文行长量法）。
- **UI**（400, 0.875rem, lh 1.75）：联络行 [GitHub] [RSS 订阅] [写信给我]；[阅读全文] 为同号 700 加重。
- **Legend**（700, 0.875rem, ls 0.1em）：fieldset 框题「进站 / 最新张贴 / 版面导航 / 文章 / 页面 / {版面名}」，青色。
- **Label**（400, 0.8125rem, lh 1.75, tabular-nums）：系统行、日期、篇数、序号、年份行、读时、版面计数、文章贴元数据行、状态栏；淡墨。

### Named Rules
**The 等宽唯一 Rule.** 全站一个字族栈，不引入第二字族，不用衬线/无衬线对比做层级；层级靠字重、字号与墨阶。长文正文与界面同一族——「在终端里读长文」是刻意保留的质感。

**The 轻盈中文化 Rule.** CJK 一律系统字体，不为中文下网络字体；拉丁/数字子集自托管且单文件 ≤22KB（现 400/700 各约 21/22KB），font-display: swap。模板自带的 Inter/DM Mono webfonts 已全站退役。

**The 排印数字 Rule.** 一切日期、篇数、序号（两位补零、自 02 起，头条为隐含的 01）、年份行、读时用 tabular-nums；等宽网格里天然对齐。

**The 无假斜体 Rule.** 全站不用斜体：`em` 渲染为 700 直立（font-style: normal），引用块也去斜体——CJK 不用假斜体，强调一律靠字重。

## Layout

空间模型是「整屏终端」：`body` 自上而下就是屏幕——全局背景即地面（var(--ground)），没有页面级卡片盒，地面之下没有别的世界。全局壳层在 `src/layouts/BaseLayout.astro`：页头 fixed（h-20，space-between，水平 gutter），main 收在 `w-full max-w-[56rem] mx-auto` 的居中开本里（显式 `w-full` 顶住 flex 列对子项的 fit-content 收缩，fieldset/.entry 再各自 `width:100%`），页脚 Footer 在 main 之外通栏铺满视口。主页 index.astro 的 `.station` 借 `body:has(.station) main` 让 main 交出模板开本（max-width: none、padding 5.5rem 0 0），地面铺满整个视口——这是主页唯一的世界特例。

- **系统行/页头**：space-between 通栏条（可换行，gap 0.25rem 1rem），内边距 `var(--gutter) = clamp(1rem, 4vw, 2.5rem)`；主页系统行 border-bottom、状态栏 border-top 各 1px line-strong，0.8125rem。全局页头滚动超过 20px 后进入滚动态：实地（ground）+ 底部 1px line-strong——与系统行同一语法，不用毛玻璃。状态栏 `margin-top: auto` 钉在页面底部，内容不足一屏时也是终端底线的位置。
- **内容开本**：main max-width 56rem、居中、水平 padding 同 gutter；主页 `.station-body` 同为 56rem 居中；文章/内容页正文再收一档——`.entry` max-width 42em 居中（中文行长量法），与文章贴头同宽。
- **进站牌 gate**：margin-top 1.4rem，padding 0.4rem 1.4rem 1.2rem；内含站名 Display、站长行（40px 方框头像 + 一句话 + 联络行）、欢迎语。
- **folio 两栏**：grid `minmax(0, 1fr) 12.5rem`，gap 1.2rem，margin-top 1.4rem；右栏 12.5rem 是固定的「版面菜单」侧栏。
- **版面框 board**（列表页/项目页）：1px 实线 fieldset，`width:100%`、padding 0.2rem 1.2rem 1rem；legend = 版面名（列表页）/组名（项目页）；框内版签行下接光标条列表；项目页每组一框，框间距 1.4rem。
- **文章贴 entry-head**：3px double fieldset（与进站牌同款），margin 0 0 1.4rem，padding 0.4rem 1.4rem 1.2rem。
- **行网格**：post 行 grid `2.5ch / minmax(0,1fr) / 10ch / minmax(0,12ch)`、列距 1.2ch——ch 单位让序号/标题/日期/meta 在等宽网格上对齐；padding 0.55rem 0.5rem 0.55rem 1.35rem（左空 1.35rem 给 ▸）；提要作标题下第二行（ink-soft 0.8125rem）。
- **年代分隔行 year-row**：flex + `::after` 1px line 撑满剩余宽度，gap 1.2ch，padding 0.3rem 0.5rem 0.3rem 0——legend 嵌线的反向用法（字骑线）。
- **节奏**：区块间 1.4rem；框内条目 0.55–0.6rem。spacing 刻度（0.4/0.55/1.2/1.4rem）是复用最高的档位，非强制网格。
- **断点 640px**：folio 并单栏，行网格收缩为 `2.5ch / 1fr`，日期与 meta 换行到第二行左对齐。移动端阅读链：页头 → 进站牌/贴框 → 正文/列表 → 细注层页脚。

### Named Rules
**The 全站一地 Rule.**（原「整屏进站 Rule」于 2026-10-07 升级）世界令牌全部写在 `:root` / `html.dark`（global.css），所有路由页共用同一张地面、同一套墨阶与青色信号——站内站外不再有两套皮肤；每个新 Surface 直接取 CSS 变量或其 UnoCSS 别名取值，不为页面另立色板。主页保留唯一的特例：`body:has(.station) main` 交出模板开本，让进站画面铺满视口。

## Elevation & Depth

零阴影。深度全部由 ANSI 框线的粗细层级与「反白」表达：3px double（进站牌、文章贴头）> 1px line-strong（系统行/状态栏/页头滚动底通栏线、头像方框、引用左线、表头底线）> 1px line（区块边框、行分隔、代码块/图片框）> 1px dashed（头条与列表之间的分隔、hr）。交互态的「抬升」不是投影而是光标条：整行 accent 底 + 地色字（深色，真反白）或 0.16 青 tint + 墨字（浅色）。代码块是唯一的「深度道具」：比地面暗半档的实底（code-ground）+ 1px 框线，像终端里嵌的一块子屏幕，靠色阶而非阴影下沉。

无 Shadow Vocabulary：系统中不存在任何 box-shadow；未来出现阴影即违约。

### Named Rules
**The 框线层级 Rule.** 需要新区分层级时先考虑换一种线（双线/强实线/实线/虚线），而不是加盒子、加背景或加阴影。

## Shapes

形体语言是终端框线，不是卡片。零圆角（全系统 radius 0，头像/Logo/图片/行内代码均显式 `border-radius: 0`），零阴影。「图形」词汇只有三种文本形态：

- **fieldset/legend 嵌线框**：legend 以 `padding: 0 0.6em` 嵌进框线，是框题的唯一形态；年代分隔行是它的反向用法（Label 号年份骑在 1px 线上）。
- **[方括号] 文本标记**：链接写作 [GitHub] [RSS 订阅] [写信给我] [阅读全文]，版签写作 [博客] [随记] [分享]，状态写作 [草稿] [外链] [视频]，tag 在元数据行同样以 [tag] 出现——括号即形状。
- **▸ 光标符**：行首、当前版签行首，默认 opacity 0（版签为常驻），悬停/聚焦时 0.15s 浮现。

头像与 Logo 是方框（1px line-strong 边、无圆角）；prose 图片 1px line 框、方角。模板语言已全站退役：点阵背景（dot.css 删除）、圆角头像/图片、圆形回到顶部按钮（现为 3rem 方框按钮）、描边大字年份（text-stroke 移除）。

### Named Rules
**The 零圆角零阴影 Rule.** 任何新元素 radius 0、无 box-shadow、无渐变；「圆角 + 背景色块 + 投影」的卡片语言是被拒绝的博客模板语法。

## Components

本站没有传统按钮与输入框（回到顶部是唯一的按钮形态）；组件词汇是 BBS 零件。侧车 `.impeccable/design.json` 内含可渲染的 HTML/CSS 快照。

### 系统行 Sysline / 全局页头
- **样式**：站名 700 + 【技术 · 生活】次墨，右侧统计（文章 N 篇 · 站龄第 N 天 · 最近更新日期）淡墨 tabular-nums；space-between、可换行，padding-bottom 0.55rem、水平 gutter，底线 1px line-strong 横贯视口。全局页头同构：左侧 32px 方框 Logo + 导航链接（ink，hover 0.15s 变青），右侧社交图标 + 主题切换；滚动 >20px 进入滚动态——实地 ground + 底线 1px line-strong（系统行语法，毛玻璃已退役）；下滚 >150px 隐藏、上滚 >150px 复现（0.4s）。

### 进站牌 Gate（3px 双线 fieldset）
- **边框**：3px double line-strong；legend「进站」青色嵌线（0.875rem/700/ls 0.1em）。
- **内容**：站名 Display → 站长行（40px 方框头像 + 「站长 Albert Fang · 一名开发者，也是生活的记录者。」次墨）→ 联络行（0.875rem 方括号链接）→ 欢迎语次墨。
- **链接态**：方括号链接静置即青色无下划线（括号即形状），hover/focus 下划线 text-underline-offset 3px。
- **全站状态**：`:focus-visible` outline 2px accent、offset 2px；`::selection` accent 底 ground 字。

### 方括号链接 Bracket Link
- **样式**：color accent、无下划线静置；hover/focus-visible 出下划线（offset 3px）。
- **变体**：[阅读全文] read-link 同号 700 加重，是正文流中预置加重的链接；prose 内链接见「BBS 排印」。

### 文章贴头部 EntryHead（3px 双线 fieldset）
- **边框**：3px double line-strong，与进站牌同款双线；legend 青色嵌线——文章页「文章」、独立内容页与 404「页面」。
- **内容**：Headline 号标题（700、overflow-wrap: anywhere，可挂琥珀 [草稿]/[视频] mark）+ Label 号元数据行（0.8125rem 淡墨 tabular-nums：日期 · 版面 · [tag] · 读时 N分钟），margin-top 0.45rem。
- **节奏**：margin 0 0 1.4rem，其下 `.entry` 42em 正文同宽直排。

### 版面框 Board Fieldset + 版签（列表页）
- **边框**：1px solid line 的 fieldset，legend = 版面名（博客/随记/分享），青色嵌线；`width:100%`、padding 0.2rem 1.2rem 1rem。项目页同一语法：每组一框，legend = 组名。
- **版签行 board-tabs**：flex 可换行（gap 0.4rem 1rem），方括号版签 [博客] [随记] [分享] 静置青色、hover 下划线；当前版 is-active = ink 700 + 行首 ▸（青色 400）——括号仍是形状，方向感来自光标符。

### 年代分隔行 Year Row
- **样式**：Label 号（0.8125rem）淡墨 tabular-nums 年份骑在 1px line 上——`::after` flex:1 撑满剩余宽度，gap 1.2ch；legend 嵌线语法的反向用法。同一年的文章只在年首出现一次分隔行；年首行的上一行不画分隔线。

### 头条块 Lead（主页）
- **标题**：Headline 号，内嵌 row-link（color inherit，hover 变青）；[草稿]/[外链] 琥珀 mark 0.78em/400。
- **元数据**：0.8125rem 淡墨（日期 · 版面 [tag] · 读时 N分钟），margin-top 0.45rem。
- **提要**：0.9375rem / lh 1.85 / 次墨 / max-width 42em。
- **收束**：底部 1px 虚线 line。

### BBS 光标条 Cursor Row（签名组件）
- **样式**：post 行 grid `2.5ch / 1fr / 10ch / 12ch`（序号 标题 日期 meta），行间 1px line 分隔；序号 0.8125rem 淡墨两位补零，标题 700（overflow-wrap: anywhere），提要作标题下第二行（0.8125rem ink-soft），日期 tabular-nums nowrap，meta 右对齐 ellipsis；空版诚实标注「本版暂无张贴 · 虚位以待」。
- **Hover / Focus-visible**：整行光标条——深色 accent 底 + ground 字（反白），浅色 0.16 青 tint + 墨字；所有子格文字（含 [标记]）同步翻转为 cursor-ink；行首 ▸ 0.15s 浮现，底色 0.15s cubic-bezier(0.16, 1, 0.3, 1) 过渡。
- **变体**：项目页行无序号/日期列（block 版式：标题 + 提要 + [外链]），同一光标条语法——主页、列表页、项目页三处同源。

### 版面导航 Board Item（主页侧栏）
- **样式**：1px 实线 fieldset 内四行（博客/随记/分享/项目），行间 1px line；版面名 700，hover/focus 0.16s 变青；右侧篇数 0.8125rem 淡墨 tabular-nums（「项目」计数位显示「看看」），下行节奏注记 0.8125rem 淡墨（随记 0 篇时诚实标注「短碎片 · 虚位以待」）。

### BBS 排印 Prose（长文正文）
- **开本**：`.entry` width:100% + max-width 42em 居中（中文行长量法），与文章贴头同宽。
- **链接 prose-link**：accent 色 + 下划线常驻（decoration line 色、offset 3px），hover 下划线变 accent——与界面的「静置无线」不同，正文里链接要一眼可辨。
- **标题**：h2 700 1.5em + 底部 1px line（框线即章界）；h3/h4 700 递减；h5 700 1em；h6 700 0.875em 淡墨（模板大写残留已清除）。
- **列表**：ul 以 '-'（ink-dim）作 bullet，ol 以「N.」计数（ink-dim 400），均 padding-left 1.75em、无 list-style。
- **引用 blockquote**：无斜体、次墨、左缘 1px line-strong，padding-left 1.2em。
- **代码**：行内 code 0.875em + 代码墨洗背景（code-inline，padding 0.15em 0.4em、radius 0、无反引号伪元素）；代码块 .astro-code = code-ground 实底 + 1px line 框线 + 方角，0.875em/lh 1.71——终端里嵌的子屏幕。
- **表格**：0.875em 划线表格，表头 700 + 底线 line-strong，行底线 line，首尾列不内缩。
- **其余**：图片 1px line 框方角；hr 1px dashed line、上下 3em；strong/em 均 700 直立；figcaption 淡墨 0.875em。

### 回到顶部 Scroll Top
- **样式**：3rem（w-12/h-12）方框按钮——1px line-strong 边、ground 底、ink 字、▸ 同族的向上箭头图标；右下 fixed（right 1.25rem / sm 7.5rem，bottom 7.5rem）。
- **状态**：滚动 >300px 后以 0.75 透明度浮现，hover 变青（文字与边框同变）；未到阈值 opacity 0 且不可点。零圆角，与圆形模板款退役。

### 状态栏 Statusbar（主页）
- **样式**：通栏 1px line-strong 上边线（横贯视口，水平 gutter），0.8125rem 次墨，space-between：「在线 1 人 · 访客就是你」×「纯静态小站 · 无需登录 · 欢迎常来」；`margin-top: auto` 钉底，其下允许模板页脚作为更淡的细注层存在。

### 细注层 Footer Note（全站页脚）
- **样式**：Footer 在 main 之外通栏铺满视口（w-full、水平 gutter、pt 1.5rem / pb 2rem），顶部 1px line 分隔，全部文字 ink-dim（0.875rem）——导航链接、CC BY-NC-SA 4.0、版权行；hover 变青 + 下划线。是全站共用的最淡一层注脚，主页在状态栏之下、站内在正文之下。

## Do's and Don'ts

### Do:
- **Do** 全站从世界令牌取值：颜色写进 global.css 的 `:root` / `html.dark`（UnoCSS `ground/ink/line/...` 已是别名），新 Surface 不另立色板、不写死 hex。
- **Do** 用 fieldset 框语法组织区块：进站牌/文章贴头 3px double、一般区块（版面框/项目组/版面导航）1px solid、legend 嵌线作框题（0.875rem/700/ls 0.1em 青色）；按年分段用 year-row（字骑线）。
- **Do** 守住青色经济：青只做信号/交互（legend、链接、▸、focus、selection、光标条、进度条），琥珀只做 [标记] 第二高亮；两色永不成为大面积装饰。
- **Do** 双主题同步出值：每个新颜色同时给浅/深两套（ground #f3f2ec/#101830，ink #1c2438/#dfe6f3，accent #0a6f68/#52d9cf，accent-2 #8f5a00/#f0b45c，code-ground #eae8df/#0b1428）；dim/soft 按主题分别校对比。
- **Do** 长文正文用 BBS 排印：.entry 42em 开本、链接青色带下划线、h2 底线、代码块嵌框（code-ground + 1px line）、表格划线、强调 700 不用斜体。
- **Do** 保持诚实数据骨架：站龄/篇数/最近更新全部由真实内容计算，空版标「虚位以待」，状态栏「在线 1 人 · 访客就是你」；不虚构在线人数/访问量等运营数据。
- **Do** 已主题化的状态一并保持：::selection accent/ground 反转、:focus-visible 2px accent、日期/计数/年份 tabular-nums。
- **Do** 动效保持一条时间线：列表逐行点亮 0.55s expo-out、行延迟 0.05s 起 +0.06s 递进（第 6 行起统一 0.35s）、包在 `prefers-reduced-motion: no-preference` 内且默认可见；缓动统一 cubic-bezier(0.16, 1, 0.3, 1)。
- **Do** CJK 保持系统字体：拉丁/数字子集自托管（400/700 各约 21/22KB，font-display: swap），不为中文网络字体牺牲轻盈。

### Don't:
- **Don't** 引入任何圆角、阴影、渐变或玻璃拟态——「圆角卡片网格」是被拒绝的博客模板语言；页头滚动态用实地 + 强框线，不回到毛玻璃。
- **Don't** 引入第二字族或为 CJK 下网络字体；层级靠字重/字号/墨阶，不靠换字体（Inter/DM Mono 已退役，长文正文也留在等宽网格上）。
- **Don't** 恢复任何已退役的模板语言：点阵背景（dot.css）、圆角头像/图片、圆形回到顶部、描边大字年份（text-stroke）、深色青字 prose 标题。
- **Don't** 把青色或琥珀用于分隔线、背景块或大段装饰文字；琥珀不出现在 `.mark` 之外的任何地方。
- **Don't** 让文字淡过 ink-dim 档；更弱层级用字号与框线区分，不稀释墨色。
- **Don't** 无语法地堆终端霓虹装饰（扫描线、闪烁、辉光、多色 ANSI）；本世界的终端感来自框线语法与反白，不来自霓虹。
- **Don't** 让 main/fieldset/entry 的宽度交给 fit-content：main `w-full max-w-[56rem]`、fieldset 与 `.entry` 显式 `width:100%`，否则 flex 列会把内容收缩成内容宽。
