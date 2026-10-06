---
name: "AlbertFang's Blog（中文 BBS 站）"
description: "中文 BBS 进站画面式个人博客主页：纸上终端与 ANSI 蓝底双主题、全站等宽字模、fieldset 框线语法、青色信号 + 琥珀标记。"
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
  dark-ground: "#101830"
  dark-ink: "#dfe6f3"
  dark-ink-soft: "rgb(223 230 243 / 0.72)"
  dark-ink-dim: "rgb(223 230 243 / 0.62)"
  dark-line: "rgb(223 230 243 / 0.26)"
  dark-line-strong: "rgb(223 230 243 / 0.5)"
  dark-accent: "#52d9cf"
  dark-accent-2: "#f0b45c"
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
  menu-link:
    textColor: "{colors.accent}"
  read-link:
    textColor: "{colors.accent}"
    typography: "0.875rem / 700"
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
---

# Design System: AlbertFang's Blog（中文 BBS 站）

## Overview

**Creative North Star: "一座自己的中文 BBS 站"**

主页不是博客首页，而是一座个人中文 BBS 站的进站画面（整屏终端，开本约 80 列）：访客像登录一样进站——整个视口就是这块屏幕，顶部系统行横贯报站名与【技术 · 生活】，双线进站牌里是站长与联络方式，「最新张贴」是版面文章，右侧「版面导航」是四个板块的菜单，底部状态栏横贯写着「在线 1 人 · 访客就是你」。它拒绝「问候语 + 卡片网格」的博客模板排布，也拒绝无语法堆砌的终端霓虹装饰（扫描线、闪烁、辉光、多色 ANSI 都不出现）。

一切文字排在同一张等宽字模网格上：中文方块字天然等宽，拉丁字母与数字由自托管的 JetBrains Mono（latin 子集）补齐同一网格。区块以 ANSI 框线语法组织（fieldset/legend 嵌线标题：进站牌 3px 双线、一般区块 1px 实线），零圆角、零阴影；层次靠框线粗细（双线 > 强实线 > 实线 > 虚线）与墨阶表达。青色是唯一信号色（交互与状态），琥珀只做 [标记] 第二高亮；「图形」词汇只有 [方括号] 文本标记与 ▸ 光标符。

浅色主题是「纸上终端」（冷纸白 #f3f2ec + 蓝黑墨 #1c2438），深色主题是经典 ANSI 蓝底终端（藏青 #101830 + 亮白字 #dfe6f3）——两套各自调版、同等认真，深色不是浅色的滤镜。签名交互是 BBS 光标条：文章行悬停/键盘聚焦时整行被信号色填充（深色 = accent 反白 + 地色字，浅色 = 0.16 透明度青 tint + 墨字），行首浮出 ▸——方向键选文的肌肉记忆。动效只有一条时间线：列表逐行点亮。

本档于 2026-10-06 在 finish review（fix 轮 5 处 material fixes 全部 resolved，disposition ship）之后从已构建的 `src/pages/index.astro` 重写，每条值都由构建代码背书；上一版「生活副刊」方向（新闻纸/宋体/朱砂）已整体退役，此处只作历史注记。2026-10-07 依用户「内容与背景分离、要求排版覆盖整个页面」的反馈改为整屏进站：地面铺满主页视口、系统行/状态栏通栏、全局 chrome 在主页并入等宽世界（全部改动收敛于 `src/pages/index.astro` 的 `body:has(.station)` 作用域），五张参考截图同步重拍。参考截图：`.impeccable/review/desktop.png`、`desktop-dark.png`、`desktop-hover-cursor.png`、`mobile.png`、`mobile-dark.png`。

**Key Characteristics:**
- 进站画面语法：系统行 → 进站牌 → 最新张贴 + 版面导航 → 状态栏；站龄/篇数/最近更新全部为真实数据。
- 等宽单声部：'JetBrains Mono Local'（拉丁/数字，自托管 latin 子集）+ 系统 CJK，全站一个字族栈。
- ANSI 框线层级：3px 双线（进站牌）> 1px 强实线（通栏线）> 1px 实线（区块/行分隔）> 1px 虚线（头条分隔）；legend 嵌线为框题。
- 零圆角、零阴影；[方括号] 文本标记与 ▸ 光标是仅有的「图形」。
- 青色经济：青 = 信号/交互（用途封闭清点），琥珀 = 第二高亮且只用于 [草稿]/[外链] 标记。
- 动效一条时间线：列表逐行点亮（0.55s expo-out，+0.06s 递进，prefers-reduced-motion 关闭）。
- 界面全中文；日期/篇数/序号一律 tabular-nums。

## Colors

一句话性格：浅色是冷纸白上一色蓝黑墨加一枚青色信号；深色是 ANSI 蓝底终端，同一套角色各自调版。

### Primary
- **终端青·信号 (accent)**（浅 #0a6f68 / 深 #52d9cf）：唯一交互与状态色，用途封闭清点——框题 legend 文字、方括号链接、[阅读全文]、▸ 光标符、行悬停标题/版面名、焦点环、选区底色、深色光标条整行底。除此之外不做任何用途。

### Secondary
- **终端琥珀·标记 (accent-2)**（浅 #8f5a00 / 深 #f0b45c）：第二高亮，唯一用途是 `.mark` 方括号状态标记（[草稿]、[外链]），配 0.78em 弱化字号与 400 字重。永不做大面积装饰。

### Neutral
- **终端地 (ground)**（浅 #f3f2ec / 深 #101830 ANSI 藏青）：`.station` 自绘的地面色，整个进站画面印在这一层上。
- **蓝黑墨 (ink)**（浅 #1c2438 / 深 #dfe6f3 亮白）：正文与标题的墨，也是框线基色与浅色光标条的文字色。
- **次墨 (ink-soft)**（浅 rgb(28 36 56 / 0.72) / 深 rgb(223 230 243 / 0.72)）：站长行、欢迎语、提要、状态栏。
- **淡墨 (ink-dim)**（浅 rgb(28 36 56 / 0.68) / 深 rgb(223 230 243 / 0.62)）：元数据、日期、计数、序号、版面注记；透明度已按主题分别调对比。
- **框线 (line)**（浅 rgb(28 36 56 / 0.32) / 深 rgb(223 230 243 / 0.26)）：区块边框、行分隔、头条虚线。
- **强框线 (line-strong)**（浅 rgb(28 36 56 / 0.55) / 深 rgb(223 230 243 / 0.5)）：系统行/状态栏通栏线、进站牌双线、头像方框。
- **光标条 (cursor-tint)**（浅 rgb(10 111 104 / 0.16)；深 = accent 本色 + 文字翻转为 ground）：行悬停/聚焦的整行底色，即「反白」的两种实现。

### Named Rules
**The 青色经济 Rule.** 青 = 信号与交互，用途封闭清点（legend、链接、▸、焦点环、选区、光标条）；琥珀 = 第二高亮且只用于 [标记]。两色都不做分隔线、背景块或大面积装饰；新增任何一处用量必须先退役一处现有用途。

**The 双主题同权 Rule.** 深色是经典 ANSI 蓝底的独立调版（ground #101830、accent #52d9cf、淡墨 0.62），浅色（ground #f3f2ec、accent #0a6f68、淡墨 0.68）；每个新颜色必须同时给出两套值，dim/soft 档按主题分别校对比，不做透明度滤镜。

**The 墨阶封底 Rule.** ink-dim 是文字最淡档，不再往下稀释；更弱的层级用 0.8125rem 字号与框线区分，不用更淡的墨。

## Typography

**Display Font:** 'JetBrains Mono Local'（自托管 woff2：`public/fonts/jetbrains-mono-latin-400.woff2` + `-700.woff2`，latin 子集约 21/22KB，@font-face 在 index.astro 以 is:global 声明、font-display: swap），fallback ui-monospace, Consolas, 'Cascadia Mono', 'Courier New'。
**Body Font:** 同一字族栈——中文落到系统 PingFang SC / Microsoft YaHei；CJK 刻意不用网络字体（PRODUCT「轻盈快稳」）。
**Character:** 全站单声部等宽。中文方块字天然等宽，拉丁与数字由 JetBrains Mono 补齐同一网格；终端开本感来自「万物同宽」，不靠第二字族做对比。层级只靠字重（400/700）、字号与墨阶。

### Hierarchy
- **Display**（700, clamp(1.7rem, 5vw, 2.5rem), lh 1.25, ls 0.01em）：进站牌站名，一页仅一次。
- **Headline**（700, clamp(1.35rem, 3.6vw, 1.8rem), lh 1.45）：「最新张贴」头条标题。
- **Body**（400, 0.9375rem, lh 1.75）：全站正文基准；提要 lead-desc 同号但 lh 1.85、max-width 42em（中文行长量法）。
- **UI**（400, 0.875rem, lh 1.75）：联络行 [GitHub] [RSS 订阅] [写信给我]；[阅读全文] 为同号 700 加重。
- **Legend**（700, 0.875rem, ls 0.1em）：fieldset 框题「进站 / 最新张贴 / 版面导航」，青色。
- **Label**（400, 0.8125rem, lh 1.75, tabular-nums）：系统行、日期、篇数、序号、读时、版面计数、状态栏；淡墨。

### Named Rules
**The 等宽唯一 Rule.** 全站一个字族栈，不引入第二字族，不用衬线/无衬线对比做层级；层级靠字重、字号与墨阶。

**The 轻盈中文化 Rule.** CJK 一律系统字体，不为中文下网络字体；拉丁/数字子集自托管且单文件 ≤22KB（现 400/700 各约 21/22KB），font-display: swap。

**The 排印数字 Rule.** 一切日期、篇数、序号（两位补零、自 02 起，头条为隐含的 01）、读时用 tabular-nums；等宽网格里天然对齐。

## Layout

空间模型是「整屏终端」：整个主页视口就是终端屏幕，`.station` 是铺满页面的地面容器（background ground、无边框、无卡片盒），地面之下没有别的世界。系统行与状态栏是贯穿视口的通栏条（1px line-strong 框线 + gutter 内边距），像终端的顶部/底部状态线；中间内容收在 56rem 居中开本（`.station-body`，约 80 列）里。全局 Header/Footer 在主页同落在这张地面上：等宽字族 + 墨色（`body:has(.station)` 作用域控制，仅主页生效，BaseLayout/组件文件不动）。站内自上而下：系统行 → 进站牌 → folio（最新张贴 + 版面导航）→ 状态栏 → 模板页脚（细注层）。

- **系统行/状态栏**：space-between 通栏条（可换行，gap 0.25rem 1rem），内边距 `var(--gutter) = clamp(1rem, 4vw, 2.5rem)`；系统行 border-bottom、状态栏 border-top 各 1px line-strong，0.8125rem。状态栏 `margin-top: auto` 钉在页面底部，内容不足一屏时也是终端底线的位置。
- **内容开本**：`.station-body` max-width 56rem、居中、水平 padding 同 gutter；主内容列减去侧栏后约 80 列。
- **进站牌 gate**：margin-top 1.4rem，padding 0.4rem 1.4rem 1.2rem；内含站名 Display、站长行（40px 方框头像 + 一句话 + 联络行）、欢迎语。
- **folio 两栏**：grid `minmax(0, 1fr) 12.5rem`，gap 1.2rem，margin-top 1.4rem；右栏 12.5rem 是固定的「版面菜单」侧栏。
- **行网格**：post 行 grid `2.5ch / minmax(0,1fr) / 10ch / minmax(0,12ch)`、列距 1.2ch——ch 单位让序号/标题/日期/meta 在等宽网格上对齐；padding 0.55rem 0.5rem 0.55rem 1.35rem（左空 1.35rem 给 ▸）。
- **节奏**：区块间 1.4rem；框内条目 0.55–0.6rem。spacing 刻度（0.4/0.55/1.2/1.4rem）是复用最高的档位，非强制网格。
- **断点 640px**：folio 并单栏，行网格收缩为 `2.5ch / 1fr`，日期与 meta 换行到第二行左对齐。移动端阅读链：系统行 → 进站牌 → 最新张贴 → 版面导航（与 surface contract FIRST VIEWPORT 一致）。

### Named Rules
**The 整屏进站 Rule.** 主页（含 `.station` 的页面）的地色铺满整个视口：模板点阵背景在主页关闭（`body::before` content: none），全局 Header/Footer/抽屉在主页换用本世界的等宽字族与墨阶（页头链接用墨色、页脚用淡墨），头像一律方框；本档值一律以 `html:not(.dark) body:has(.station)` / `.dark body:has(.station)` 双主题强选择器出，压过模板 dark 变体工具类的特异性。站外页面维持模板原样，不受影响。

## Elevation & Depth

零阴影。深度全部由 ANSI 框线的粗细层级与「反白」表达：3px double（进站牌）> 1px line-strong（系统行/状态栏通栏线、头像方框）> 1px line（区块边框、行分隔）> 1px dashed（头条与列表之间的分隔）。交互态的「抬升」不是投影而是光标条：整行 accent 底 + 地色字（深色，真反白）或 0.16 青 tint + 墨字（浅色）。

无 Shadow Vocabulary：系统中不存在任何 box-shadow；未来出现阴影即违约。

### Named Rules
**The 框线层级 Rule.** 需要新区分层级时先考虑换一种线（双线/强实线/实线/虚线），而不是加盒子、加背景或加阴影。

## Shapes

形体语言是终端框线，不是卡片。零圆角（全系统 radius 0，头像显式 `border-radius: 0`），零阴影。「图形」词汇只有三种文本形态：

- **fieldset/legend 嵌线框**：legend 以 `padding: 0 0.6em` 嵌进框线，是框题的唯一形态。
- **[方括号] 文本标记**：链接写作 [GitHub] [RSS 订阅] [写信给我] [阅读全文]，状态写作 [草稿] [外链]，tag 在元数据行同样以 [tag] 出现——括号即形状。
- **▸ 光标符**：行首、默认 opacity 0，悬停/聚焦时 0.15s 浮现。

头像 40px 方框、1px line-strong 边、无圆角。

### Named Rules
**The 零圆角零阴影 Rule.** 任何新元素 radius 0、无 box-shadow、无渐变；「圆角 + 背景色块 + 投影」的卡片语言是被拒绝的博客模板语法。

## Components

本页没有传统按钮与输入框；组件词汇是 BBS 零件。侧车 `.impeccable/design.json` 内含可渲染的 HTML/CSS 快照。

### 系统行 Sysline
- **样式**：站名 700 + 【技术 · 生活】次墨，右侧统计（文章 N 篇 · 站龄第 N 天 · 最近更新日期）淡墨 tabular-nums；space-between、可换行，padding-bottom 0.55rem、水平 gutter，底线 1px line-strong 横贯视口。

### 进站牌 Gate（3px 双线 fieldset）
- **边框**：3px double line-strong；legend「进站」青色嵌线（0.875rem/700/ls 0.1em）。
- **内容**：站名 Display → 站长行（40px 方框头像 + 「站长 Albert Fang · 一名开发者，也是生活的记录者。」次墨）→ 联络行（0.875rem 方括号链接）→ 欢迎语次墨。
- **链接态**：方括号链接静置即青色无下划线（括号即形状），hover/focus 下划线 text-underline-offset 3px。
- **全站状态**：`:focus-visible` outline 2px accent、offset 2px；`::selection` accent 底 ground 字。

### 方括号链接 Bracket Link
- **样式**：color accent、无下划线静置；hover/focus-visible 出下划线（offset 3px）。
- **变体**：[阅读全文] read-link 同号 700 加重，是正文流中预置加重的链接。

### 头条块 Lead
- **标题**：Headline 号，内嵌 row-link（color inherit，hover 变青）；[草稿]/[外链] 琥珀 mark 0.78em/400。
- **元数据**：0.8125rem 淡墨（日期 · 版面 [tag] · 读时 N分钟），margin-top 0.45rem。
- **提要**：0.9375rem / lh 1.85 / 次墨 / max-width 42em。
- **收束**：底部 1px 虚线 line。

### BBS 光标条 Cursor Row（签名组件）
- **样式**：post 行 grid `2.5ch / 1fr / 10ch / 12ch`（序号 标题 日期 meta），行间 1px line 分隔；序号 0.8125rem 淡墨两位补零，标题 700（overflow-wrap: anywhere），日期 tabular-nums nowrap，meta 右对齐 ellipsis。
- **Hover / Focus-visible**：整行光标条——深色 accent 底 + ground 字（反白），浅色 0.16 青 tint + 墨字；所有子格文字（含 [标记]）同步翻转为 cursor-ink；行首 ▸ 0.15s 浮现，底色 0.15s cubic-bezier(0.16, 1, 0.3, 1) 过渡。

### 版面导航 Board Item
- **样式**：1px 实线 fieldset 内四行（博客/随记/分享/项目），行间 1px line；版面名 700，hover/focus 0.16s 变青；右侧篇数 0.8125rem 淡墨 tabular-nums（「项目」计数位显示「看看」），下行节奏注记 0.8125rem 淡墨（随记 0 篇时诚实标注「短碎片 · 虚位以待」）。

### 状态栏 Statusbar
- **样式**：通栏 1px line-strong 上边线（横贯视口，水平 gutter），0.8125rem 次墨，space-between：「在线 1 人 · 访客就是你」×「纯静态小站 · 无需登录 · 欢迎常来」；`margin-top: auto` 钉底，其下允许模板页脚作为更淡的细注层（淡墨、等宽）存在。

## Do's and Don'ts

### Do:
- **Do** 保持诚实数据骨架：站龄/篇数/最近更新全部由真实内容计算，随记 0 篇标「虚位以待」，状态栏「在线 1 人 · 访客就是你」；不虚构在线人数/访问量等运营数据。
- **Do** 用 fieldset 框语法组织区块：进站牌 3px double、一般区块 1px solid、legend 嵌线作框题（0.875rem/700/ls 0.1em 青色）。
- **Do** 守住青色经济：青只做信号/交互（legend、链接、▸、focus、selection、光标条），琥珀只做 [标记] 第二高亮；两色永不成为大面积装饰。
- **Do** 双主题同步出值：每个新颜色同时给浅/深两套（ground #f3f2ec/#101830，ink #1c2438/#dfe6f3，accent #0a6f68/#52d9cf，accent-2 #8f5a00/#f0b45c）；dim/soft 按主题分别校对比。
- **Do** 已主题化的状态一并保持：::selection accent/ground 反转、:focus-visible 2px accent、日期与计数 tabular-nums。
- **Do** 动效保持一条时间线：列表逐行点亮 0.55s expo-out、行延迟 0.05s 起 +0.06s 递进、包在 `prefers-reduced-motion: no-preference` 内且默认可见；缓动统一 cubic-bezier(0.16, 1, 0.3, 1)。
- **Do** CJK 保持系统字体：拉丁/数字子集自托管（400/700 各约 21/22KB，font-display: swap），不为中文网络字体牺牲轻盈。

### Don't:
- **Don't** 引入任何圆角、阴影、渐变或玻璃拟态——「圆角卡片网格」是被拒绝的博客模板语言。
- **Don't** 引入第二字族或为 CJK 下网络字体；层级靠字重/字号/墨阶，不靠换字体。
- **Don't** 把青色或琥珀用于分隔线、背景块或大段装饰文字；琥珀不出现在 `.mark` 之外的任何地方。
- **Don't** 让文字淡过 ink-dim 档；更弱层级用字号与框线区分，不稀释墨色。
- **Don't** 无语法地堆终端霓虹装饰（扫描线、闪烁、辉光、多色 ANSI）；本世界的终端感来自框线语法与反白，不来自霓虹。
