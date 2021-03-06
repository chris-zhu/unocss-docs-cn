import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

const Integrations = [
  { text: 'Vite', link: '/integrations/vite' },
  { text: 'Nuxt', link: '/integrations/nuxt' },
  { text: 'Webpack', link: '/integrations/webpack' },
  { text: 'Runtime', link: '/integrations/runtime' },
  { text: 'VS Code', link: '/integrations/vscode' },
]

const Presets = [
  { text: 'Uno', link: '/presets/uno' },
  { text: 'Mini', link: '/presets/mini' },
  { text: 'Wind', link: '/presets/wind' },
  { text: 'Icons', link: '/presets/icons' },
  { text: 'Attributify', link: '/presets/attributify' },
  { text: 'Typography', link: '/presets/typography' },
  { text: 'Web Fonts', link: '/presets/web-fonts' },
  { text: 'rem-to-px', link: '/presets/rem-to-px' },
  { text: 'Tagify', link: '/presets/tagify' },
]

const Transformer = [
  { text: 'Directives', link: '/transformer/directives' },
  { text: 'Variant Group', link: '/transformer/variant-group' },
  { text: 'Compile Class', link: '/transformer/compile-class' },
]

const Utilities = [
  { text: '规则', link: '/utilities/' },
  { text: '变体', link: '/utilities/variants/' },
]

const nav = [
  { text: '指引', link: '/guide/' },
  {
    text: '集成',
    items: Integrations,
  },
  {
    text: '预设',
    items: Presets,
  },
  {
    text: '转换器',
    items: Transformer,
  },
  { text: '配置', link: '/config/' },
  {
    text: 'Utilities',
    items: Utilities,
  },
  {
    text: `v${version}`,
    items: [
      {
        text: 'Release Notes',
        link: 'https://github.com/unocss/unocss/releases',
      },
      {
        text: 'Contributing',
        link: 'https://github.com/unocss/unocss/blob/main/CONTRIBUTING.md',
      },
    ],
  },
]

const sidebar = {
  '/utilities/': [
    {
      text: 'General',
      collapsed: false,
      collapsible: true,
      items: [
        {
          text: 'Color',
          link: '/utilities/general/color',
        },
      ],
    },
    {
      text: '规则',
      collapsed: false,
      collapsible: true,
      items: [
        {
          text: 'Align',
          link: '/utilities/rules/align',
        },
        {
          text: 'Background',
          link: '/utilities/rules/background',
        },
      ],
    },
  ],
  '/integrations/': [
    {
      text: '集成',
      items: Integrations,
    },
  ],
  '/presets': [
    {
      text: '预设',
      items: Presets,
    },
  ],
  '/transformer': [
    {
      text: '转换器',
      items: Transformer,
    },
  ],
  '/guide': [
    {
      text: '集成',
      items: Integrations,
    },
    {
      text: '预设',
      items: Presets,
    },
    {
      text: '转换器',
      items: Transformer,
    },
    {
      text: 'Utilities',
      items: Utilities,
    },

  ],
}

export default defineConfig({
  title: 'UnoCSS',
  description: '即时、按需的原子化CSS引擎',
  head: [
    ['meta', { property: 'og:title', content: 'UnoCSS' }],
    ['meta', { property: 'og:description', content: '按需引入、即时原子化CSS引擎' }],
    ['meta', { property: 'og:url', content: 'https://github.com/unocss/unocss' }],
    ['meta', { property: 'og:image', content: 'https://repository-images.githubusercontent.com/412152628/30d80147-4535-4ff1-9837-b9015eecbb07' }],
    ['meta', { name: 'twitter:title', content: 'UnoCSS' }],
    ['meta', { name: 'twitter:description', content: '按需引入、即时原子化CSS引擎' }],
    ['meta', { name: 'twitter:image', content: 'https://repository-images.githubusercontent.com/412152628/30d80147-4535-4ff1-9837-b9015eecbb07' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200;400;600&display=swap', rel: 'stylesheet' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    editLink: {
      pattern: 'https://github.com/chris-zhu/unocss-docs-cn/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    nav,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/unocss/unocss' },
    ],
    sidebar,
    algolia: {
      appId: 'Y2FD9M8BUN',
      apiKey: '6e33b98070a934a735840d9b85293348',
      indexName: 'unocss_docs_cn',
    },
  },
})
