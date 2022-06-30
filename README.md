<br>

<p align="center">
<img src="https://raw.githubusercontent.com/unocss/unocss/main/playground/public/icon-gray.svg" style="width:100px;" />
</p>

<h1 align="center">UnoCSS</h1>

<p align="center">
The instant on-demand Atomic CSS engine.
</p>

<p align="center">
<a href="https://www.npmjs.com/package/unocss"><img src="https://img.shields.io/npm/v/unocss?color=c95f8b&amp;label=" alt="NPM version"></a></p>

<blockquote align="center">
<p>💡 I highly recommend reading this blog post - <br><a href="https://antfu.me/posts/reimagine-atomic-css"><strong>Reimagine Atomic CSS</strong></a><br>for the story behind</p>
</blockquote>

<br>
<p align="center">
<a href="https://uno.antfu.me/">🧑‍💻 Interactive Docs <sup>Beta</sup></a> |
<a href="https://uno.antfu.me/play/">🤹‍♂️ Playground</a>
</p>
<br>

## 特性

受 [Windi CSS](http://windicss.org/), [Tailwind CSS](https://tailwindcss.com/), [Twind](https://github.com/tw-in-js/twind) 启发，但:

- [完全可定制](#configurations) - 没有核心实用程序，所有功能都通过预设提供
- 无需解析，无需 AST，无需扫描，它是**即时**的（比 Windi CSS 或 Tailwind JIT 快 200 倍）
- ~3.5kb min+gzip - 零依赖、浏览器友好
- [快捷方式](#shortcuts) - 可动态的别名实用程序
- [属性模式](https://github.com/unocss/unocss/tree/main/packages/preset-attributify/) - 在属性中分组实用程序
- [纯CSS图标](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) - 单个 class 来使用任意图标
- [Variant Groups](https://github.com/unocss/unocss/tree/main/packages/transformer-variant-group) - 具有公共前缀的简写实用程序组
- [CSS Directives](https://github.com/unocss/unocss/tree/main/packages/transformer-directives) - 在CSS中使用@apply指令
- [Compilation mode](https://github.com/unocss/unocss/tree/main/packages/transformer-compile-class/) - 在构建时将多个类合成为一个类。
- [Inspector](#inspector) - 以交互方式检查和调试
- [CSS-in-JS Runtime build](https://github.com/unocss/unocss/tree/main/packages/runtime) - 使用带有一行 CDN 导入的 UnoCSS。
- [CSS Scoping](#css-scoping)
- [VS Code 扩展](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)
- CSS 的代码分割 - 为 MPA 提供最小的 CSS

###### 基准

```
3/26/2022, 11:41:26 PM
1656 utilities | x50 runs (min build time)

none                             12.42 ms / delta.      0.00 ms
unocss       v0.30.6             20.98 ms / delta.      8.57 ms (x1.00)
tailwindcss  v3.0.23           1621.38 ms / delta.   1608.96 ms (x187.79)
windicss     v3.5.1            1855.86 ms / delta.   1843.45 ms (x215.16)
```

## 安装

### Vite

```bash
npm i -D unocss
```

```ts
// vite.config.ts
import Unocss from 'unocss/vite'

export default {
  plugins: [
    Unocss({ /* options */ }),
  ],
}
```

在你的主入口添加 `uno.css`

```ts
// main.ts
import 'uno.css'
```

就是这样，玩的开心。

在 [@unocss/vite](https://github.com/unocss/unocss/tree/main/packages/vite) 上了解更多

查看[所有 packages](https://github.com/unocss/unocss/tree/main/packages).

### Nuxt

```bash
npm i -D @unocss/nuxt
```

```ts
// nuxt.config.js

export default {
  buildModules: [
    '@unocss/nuxt',
  ],
}
```

在 [@unocss/nuxt](https://github.com/unocss/unocss/tree/main/packages/nuxt) 上了解更多


## 配置

默认情况下，UnoCSS 应用 [默认预设](https://github.com/unocss/unocss/tree/main/packages/preset-uno)，它提供了流行的实用程序优先框架 Tailwind CSS、Windi 的通用超集 CSS、Bootstrap、Tachyons 等

例如：`ml-3` (Tailwind)、`ms-2` (Bootstrap)、`ma4` (Tachyons) 和`mt-10px` (Windi CSS) 都是有效的。

```css
.ma4 { margin: 1rem; }
.ml-3 { margin-left: 0.75rem; }
.ms-2 { margin-inline-start: 0.5rem; }
.mt-10px { margin-top: 10px; }
```

了解更多关于[默认预设](https://github.com/unocss/unocss/tree/main/packages/preset-uno)。

### 预设

预设是 UnoCSS 的核心。 它们让您在几分钟内创建自己的自定义框架。

###### 官方预设

- [@unocss/preset-uno](https://github.com/unocss/unocss/tree/main/packages/preset-uno) - 默认预设 (现在它等同于 `@unocss/preset-wind`).
- [@unocss/preset-mini](https://github.com/unocss/unocss/tree/main/packages/preset-mini) - 最小但必不可少的规则和变体。
- [@unocss/preset-wind](https://github.com/unocss/unocss/tree/main/packages/preset-wind) - Tailwind / Windi CSS 简洁预设。
- [@unocss/preset-attributify](https://github.com/unocss/unocss/tree/main/packages/preset-attributify) - 对其它预设和规则提供 [属性模式](https://github.com/unocss/unocss/tree/main/packages/preset-attributify#attributify-mode)。
- [@unocss/preset-icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons) - 使用任何图标作为类实用程序。
- [@unocss/preset-web-fonts](https://github.com/unocss/unocss/tree/main/packages/preset-web-fonts) - 轻松使用 Web fonts。
- [@unocss/preset-typography](https://github.com/unocss/unocss/tree/main/packages/preset-typography) - 排版预设。
- [@unocss/preset-tagify](https://github.com/unocss/unocss/tree/main/packages/preset-tagify) - UnoCSS 的标签模式。
- [@unocss/preset-rem-to-px](https://github.com/unocss/unocss/tree/main/packages/preset-rem-to-px) - 将实用程序的 rem 转换为 px。

###### 社区预设

- [unocss-preset-scalpel](https://github.com/macheteHot/unocss-preset-scalpel) - UnoCSS 手术刀预设 by [@macheteHot](https://github.com/macheteHot/).
- [unocss-preset-chroma](https://github.com/chu121su12/unocss-preset-chroma) - 渐变预设 by [@chu121su12](https://github.com/chu121su12).
- [unocss-preset-scrollbar](https://github.com/action-hong/unocss-preset-scrollbar) - Scrollbar 预设 by [@action-hong](https://github.com/action-hong).

### 使用预设

为您的项目设置预设：

```ts
// vite.config.ts
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno } from 'unocss'

export default {
  plugins: [
    Unocss({
      presets: [
        presetAttributify({ /* preset options */}),
        presetUno(),
        // ...custom presets
      ],
    }),
  ],
}
```

当指定 `presets` 选项时，默认预设将被忽略。

要禁用默认预设，您可以将 `presets` 设置为空数组：

```ts
// vite.config.ts
import Unocss from 'unocss/vite'

export default {
  plugins: [
    Unocss({
      presets: [], // disable default preset
      rules: [
        // your custom rules
      ],
    }),
  ],
}
```

### 自定义规则

###### 静态规则

为 UnoCSS 编写自定义规则非常简单。 例如：

```ts
rules: [
  ['m-1', { margin: '0.25rem' }],
]
```

每当在用户的代码库中检测到 `m-1` 时，您将生成以下 CSS：

```css
.m-1 { margin: 0.25rem; }
```

###### 动态规则

为了让它更智能，将匹配器更改为正则表达式，将正文更改为函数：

```ts
rules: [
  [/^m-(\d+)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
  [/^p-(\d+)$/, match => ({ padding: `${match[1] / 4}rem` })],
]
```

函数的第一个参数是匹配结果，您可以对其进行解构以获取匹配的组。

例如，使用以下用法：

```html
<div class="m-100">
  <button class="m-3">
    <icon class="p-5" />
    My Button
  </button>
</div>
```

将生成相应的 CSS：

```css
.m-100 { margin: 25rem; }
.m-3 { margin: 0.75rem; }
.p-5 { padding: 1.25rem; }
```

恭喜！现在你拥有了自己强大的原子化 CSS 实用程序，尽情享受吧！

###### 完全控制规则

<details>
<summary>这是一项高级功能，在大多数情况下您不需要它。</summary>

<br>

当您确实需要一些 [Dynamic Rules](#dynamic-rules) 和 [Variants](#custom-variants) 组合无法涵盖的高级规则时，我们还提供了一种让您完全控制生成的方法 的CSS。

通过从动态规则的主体函数返回一个 `string` ，它将直接传递给生成的 CSS。 这也意味着您需要处理诸如 CSS 转义、变体应用、CSS 构造等。

```ts
import Unocss, { toEscapedSelector as e } from 'unocss'

Unocss({
  rules: [
    [/^custom-(.+)$/, ([, name], { rawSelector, currentSelector, variantHandlers, theme }) => {
      // discard mismatched rules
      if (name.includes('something'))
        return

      // if you want, you can disable the variants for this rule
      if (variantHandlers.length)
        return
      const selector = e(rawSelector)
      // return a string instead of an object
      return `
${selector} {
  font-size: ${theme.fontSize.sm};
}
/* you can have multiple rules */
${selector}::after {
  content: 'after';
}
.foo > ${selector} {
  color: red;
}
/* or media queries */
@media (min-width: ${theme.breakpoints.sm}) {
  ${selector} {
    font-size: ${theme.fontSize.sm};
  }
}
`
    }],
  ],
})
```

您可能需要阅读一些代码才能充分利用它。

</details>

### 顺序

UnoCSS 尊重您在生成的 CSS 中定义的规则的顺序。 后者具有更高的优先级。

### 快捷方式

UnoCSS 提供的快捷方式功能类似于 [Windi CSS's](https://windicss.org/features/shortcuts.html)

<!--eslint-skip-->

```ts
shortcuts: {
  // shortcuts to multiple utilities
  'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
  'btn-green': 'text-white bg-green-500 hover:bg-green-700',
  // single utility alias
  'red': 'text-red-100'
}
```

除了普通映射，UnoCSS 还允许您定义动态快捷方式。

与 [Rules](#custom-rules) 类似，动态快捷方式是匹配器 RegExp 和处理程序函数的组合。

```ts
shortcuts: [
  // you could still have object style
  {
    btn: 'py-2 px-4 font-semibold rounded-lg shadow-md',
  },
  // dynamic shortcuts
  [/^btn-(.*)$/, ([, c]) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
]
```

有了这个，我们可以使用 `btn-green` 和 `btn-red` 来生成以下 CSS：

```css
.btn-green {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  --un-bg-opacity: 1;
  background-color: rgba(74, 222, 128, var(--un-bg-opacity));
  border-radius: 0.5rem;
  --un-text-opacity: 1;
  color: rgba(220, 252, 231, var(--un-text-opacity));
}
.btn-red {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  --un-bg-opacity: 1;
  background-color: rgba(248, 113, 113, var(--un-bg-opacity));
  border-radius: 0.5rem;
  --un-text-opacity: 1;
  color: rgba(254, 226, 226, var(--un-text-opacity));
}
```

### 规则合并

默认情况下，UnoCSS 会将 生成相同CSS 的规则统一合并，以最小化 CSS 大小。
例如，`<div class="m-2 hover:m2">` 会生成

```css
.hover\:m2:hover, .m-2 { margin: 0.5rem; }
```

而不是两个单独的规则：

```css
.hover\:m2:hover { margin: 0.5rem; }
.m-2 { margin: 0.5rem; }
```

### 样式重置

UnoCSS 默认不提供样式重置或预检以实现最大的灵活性，并且不填充您的全局 CSS。 如果您将 UnoCSS 与其他 CSS 框架一起使用，它们可能已经为您完成了重置。 如果你单独使用 UnoCSS，你可以使用 [Normalize.css](https://necolas.github.io/normalize.css/) 之类的重置库。

我们还提供了一个小合集供您快速获取它们：

```bash
npm i @unocss/reset
```

```ts
// main.js
// pick one of the following

// normalize.css
import '@unocss/reset/normalize.css'
// reset.css by Eric Meyer https://meyerweb.com/eric/tools/css/reset/index.html
import '@unocss/reset/eric-meyer.css'
// preflights from tailwind
import '@unocss/reset/tailwind.css'
```

在 [@unocss/reset](https://github.com/unocss/unocss/tree/main/packages/reset) 上了解更多。

### 预检

您可以从配置中注入原始 css 作为预检。 已解析的 `主题` 可用于自定义 css。

<!--eslint-skip-->

```ts
preflights: [
  {
    getCSS: ({ theme }) => `
      * {
        color: ${theme.colors.gray?.[700] ?? '#333'}
        padding: 0;
        margin: 0;
      }
    `
  }
]
```

### 自定义变体

[Variants](https://windicss.org/utilities/general/variants.html) 允许您对现有规则应用一些变体。 例如，要实现 Tailwind 中的 `hover:` 变体：

<!--eslint-skip-->

```ts
variants: [
  // hover:
  (matcher) => {
    if (!matcher.startsWith('hover:'))
      return matcher
    return {
      // slice `hover:` prefix and passed to the next variants and rules
      matcher: matcher.slice(6),
      selector: s => `${s}:hover`,
    }
  }
],
rules: [
  [/^m-(\d)$/, ([, d]) => ({ margin: `${d / 4}rem` })],
]
```

- `matcher` 控制何时启用变体。 如果返回值是一个字符串，它将作为匹配规则的选择器。
- `selector` 提供了自定义生成的 CSS 选择器的可用性。

让我们看看匹配 `hover:m-2` 时发生了什么：

- `hover:m-2` 是从用户使用中提取的
- `hover:m-2` 发送到所有变体进行匹配
- `hover:m-2` 与我们的变体匹配并返回 `m-2`
- 结果 `m-2` 将用于下一轮变体匹配
- 如果没有其他变体匹配，`m-2` 将去匹配规则
- 我们的第一条规则得到匹配并生成 `.m-2 { margin: 0.5rem; }`
- 最后，我们将变体转换应用于生成的 CSS。 在这种情况下，我们在 `selector` 钩子前面加上 `:hover`

结果，将生成以下 CSS：

```css
.hover\:m-2:hover { margin: 0.5rem; }
```

有了这个，我们可以只在用户将鼠标悬停在元素上时应用 `m-2`。

变体系统非常强大，本指南无法完整介绍，您可以查看[默认预设的实现]（https://github.com/unocss/unocss/tree/main/packages/preset-mini/src/variants) 以查看更高级的用法。
### 继承主题

UnoCSS 还支持您可能在 Tailwind / Windi 中熟悉的主题系统。 在用户级别，您可以在配置中指定 `theme` 属性，它将深度合并到默认主题。

<!--eslint-skip-->

```ts
theme: {
  colors: {
    'veryCool': '#0000ff', // class="text-very-cool"
    'brand': {
      'primary': 'hsla(var(--hue, 217), 78%, 51%)', //class="bg-brand-primary"
    }
  },
  breakpoints: {
    xs: '320px',
    sm: '640px',
  }
}
```

在规则中使用主题：

```ts
rules: [
  [/^text-(.*)$/, ([, c], { theme }) => {
    if (theme.colors[c])
      return { color: theme.colors[c] }
  }],
]
```

### Layers（层级）

CSS 的顺序会影响它们的优先级。 虽然我们将[保留规则的顺序](#ordering)，但有时您可能希望将一些实用程序分组以更明确地控制它们的顺序。

与Tailwind提供 3 个固定层（`base`、`components`、`utilities`）不同，UnoCSS 允许您根据需要定义层。要设置图层，您可以将元数据作为规则的第三项传递：

```ts
rules: [
  [/^m-(\d)$/, ([, d]) => ({ margin: `${d / 4}rem` }), { layer: 'utilities' }],
  // when you omit the layer, it will be `default`
  ['btn', { padding: '4px' }],
]
```

这将会生成：

```css
/* layer: default */
.btn { padding: 4px; }
/* layer: utilities */
.m-2 { margin: 0.5rem; }
```

分层也可以在每个预检上设置：

```ts
preflights: [
  {
    layer: 'my-layer',
    getCSS: async () => (await fetch('my-style.css')).text(),
  },
]
```

您可以通过以下方式控制图层的顺序：

<!--eslint-skip-->

```ts
layers: {
  components: -1,
  default: 1,
  utilities: 2,
  'my-layer': 3,
}
```

没有指定顺序的图层将按字母顺序排序。

当你想在层之间有你的自定义 CSS 时，你可以更新你的入口模块：

```ts
// 'uno:[layer-name].css'
import 'uno:components.css'
// layers that are not 'components' and 'utilities' will fallback to here
import 'uno.css'
// your own CSS
import './my-custom.css'
// "utilities" layer will have the highest priority
import 'uno:utilities.css'
```

### Preprocess & Prefixing Hooks

UnoCSS 还提供了在处理到匹配器之前预处理和转换提取的实用程序的能力。 

例如，以下示例允许您为所有实用程序添加全局前缀：

<!--eslint-skip-->

```ts
preprocess(matcher) {
  return matcher.startsWith('prefix-')
    ? matcher.slice(7)
    : undefined // ignore
}
```

### 扫描

UnoCSS在默认情况下会扫描组件文件，如：`.jsx`, `.tsx`, `.vue`, `.md`, `.html`, `.svelte`, `.astro`.

`.js` 和 `.ts` 文件**默认不包含**。 您可以在您希望 UnoCSS 扫描的文件中的任何位置添加 `@unocss-include`，基于每个文件，或者在配置中添加 `*.js` 或 `*.ts` 以包含所有 js/ts 文件 扫描目标。 同样，您也可以添加`@unocss-ignore` 来绕过文件的扫描和转换。

### 安全列表

有时您可能需要使用动态连接，例如：

```html
<div class="p-${size}"></div>
```

由于 UnoCSS 使用静态提取在构建时工作，在编译时我们不可能知道这些实用程序的所有组合。 为此，您可以配置 `safelist` 选项。

```ts
safelist: 'p-1 p-2 p-3 p-4'.split(' ')
```

将始终生成相应的 CSS：

```css
.p-1 { padding: 0.25rem; }
.p-2 { padding: 0.5rem; }
.p-3 { padding: 0.75rem; }
.p-4 { padding: 1rem; }
```

或者更灵活：

```ts
safelist: [
  ...Array.from({ length: 4 }, (_, i) => `p-${i + 1}`),
]
```

如果您正在寻找运行时真正的动态生成，您可以查看 [@unocss/runtime](https://github.com/unocss/unocss/tree/main/packages/runtime)。

### 检查

从 v0.7.0 开始，我们的 Vite 插件现在附带一个开发检查器 ([@unocss/inspector](https://github.com/unocss/unocss/tree/main/packages/inspector)) 供您查看、试玩和 分析您的自定义规则和设置。 在你的 Vite 开发服务器中访问 `http://localhost:3000/__unocss` 来查看它。

<img src="https://user-images.githubusercontent.com/11247099/140885990-1827f5ce-f12a-4ed4-9d63-e5145a65fb4a.png">

### Runtime (CSS-in-JS)

请查看 [@unocss/runtime](https://github.com/unocss/unocss/tree/main/packages/runtime)


## Acknowledgement

> in alphabet order

- [ACSS](https://acss.io/)
- [Bootstrap Utilities](https://getbootstrap.com/docs/5.1/utilities/flex/)
- [Chakra UI Style Props](https://chakra-ui.com/docs/features/style-props)
- [Semantic UI](https://semantic-ui.com/)
- [Tachyons](https://tachyons.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Twind](https://github.com/tw-in-js/twind)
- [Windi CSS](http://windicss.org/)

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/antfu/static/sponsors.svg'/>
  </a>
</p>

## License

[MIT](./LICENSE) License &copy; 2021-PRESENT [Anthony Fu](https://github.com/antfu)
