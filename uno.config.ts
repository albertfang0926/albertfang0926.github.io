import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

/** 世界字族栈：全站等宽单声部（DESIGN.md「等宽唯一」），中文走系统字体。 */
const monoStack
  = `'JetBrains Mono Local', ui-monospace, Consolas, 'Cascadia Mono', 'Courier New', 'PingFang SC', 'Microsoft YaHei', monospace`

export default defineConfig({
  theme: {
    fontFamily: {
      sans: monoStack,
      mono: monoStack,
    },
    // 颜色全部指向 global.css 的世界令牌（:root / html.dark 各自调版）
    colors: {
      'ground': 'var(--ground)',
      'ink': 'var(--ink)',
      'ink-soft': 'var(--ink-soft)',
      'ink-dim': 'var(--ink-dim)',
      'line': 'var(--line)',
      'line-strong': 'var(--line-strong)',
      'accent': 'var(--accent)',
      'accent-2': 'var(--accent-2)',
    },
  },
  shortcuts: [
    {
      'bg-main': 'bg-ground',
      'text-main': 'text-ink',
      'text-link': 'text-ink',
      'text-muted': 'text-ink-dim',
      'border-main': 'border-line',
    },
    {
      'text-primary': 'text-accent',
      'bg-primary': 'bg-accent',
      'bg-primary-soft': 'bg-ground',
      'border-primary': 'border-accent',
    },
    {
      'text-title': 'text-ink text-3xl font-bold',
      'nav-link': 'text-ink hover:text-accent transition-colors duration-150 cursor-pointer',
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: [
    'i-ri-file-list-2-line',
    'i-carbon-campsite',
    'i-simple-icons-github',
    'i-simple-icons-x',
    'i-simple-icons-linkedin',
    'i-simple-icons-instagram',
    'i-simple-icons-youtube',
    'i-simple-icons-bilibili',
    'i-simple-icons-zhihu',
    'i-simple-icons-sinaweibo',
    'i-ri-github-line',
    'i-ri-twitter-x-line',
  ],
})
