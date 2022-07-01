# [@unocss/preset-icons](https://github.com/unocss/unocss/tree/main/packages/preset-icons)

在 [UnoCSS](https://github.com/unocss/unocss) 中使用**任何**带有**纯 CSS** 的图标。

<blockquote>
<p>💡 推荐阅读 - <br><a href="https://antfu.me/posts/icons-in-pure-css"><strong>Icons in Pure CSS</strong></a><br></p>
</blockquote>

按照以下约定使用图标

- `<prefix><collection>-<icon>`
- `<prefix><collection>:<icon>`

例如：

```html
<!-- A basic anchor icon from Phosphor icons -->
<div class="i-ph-anchor-simple-thin" />
<!-- An orange alarm from Material Design Icons -->
<div class="i-mdi-alarm text-orange-400" />
<!-- A large Vue logo -->
<div class="i-logos-vue text-3xl" />
<!-- Sun in light mode, Moon in dark mode, from Carbon -->
<button class="i-carbon-sun dark:i-carbon-moon" />
<!-- Twemoji of laugh, turns to tear on hovering -->
<div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
```

<img width="100%" src="https://user-images.githubusercontent.com/11247099/136709053-31b4db79-eddc-4dc6-aa2d-388086332630.gif"><br><sup>这是由纯 CSS 提供支持的</sup>

## 安装

```bash
npm i -D @unocss/preset-icons @iconify-json/[the-collection-you-want]
```

我们使用 [Iconify](https://iconify.design) 作为我们的图标数据源。你需要在 `devDependencies` 安装相应的图标集 `@iconify-json/*`。例如， `@iconify-json/mdi` 用于 [Material Design Icons](https://materialdesignicons.com/), `@iconify-json/tabler` 用于 [Tabler](https://tabler-icons.io/)。您可以参考 [Icônes](https://icones.js.org/) 或 [Iconify](https://icon-sets.iconify.design/) 了解所有可用的集合。

```ts
import presetIcons from '@unocss/preset-icons'

Unocss({
  presets: [
    presetIcons({ /* options */ }),
    // ...other presets
  ],
})
```

> 💡 您也可以单独使用此预设作为对现有 UI 框架的补充，以获得纯 CSS 图标！

如果您希望一次安装 Iconify 上可用的所有图标集 (~130MB)：

```bash
npm i -D @iconify/json
```

## 配置

```ts
export interface IconsOptions {
  /**
   * 与当前字体大小 (1em) 相关的比例。
   *
   * @default 1
   */
  scale?: number
  /**
   * 生成的 CSS 图标的模式。
   *
   * - `mask` - 为单色图标使用背景颜色和 `mask` 属性
   * - `background-img` - 为图标使用背景图像，颜色是静态的
   * - `auto` - 根据图标的样式巧妙地决定每个图标的“掩码”和“背景图像”之间的模式
   *
   * @default 'auto'
   * @see https://antfu.me/posts/icons-in-pure-css
   */
  mode?: 'mask' | 'background-img' | 'auto'
  /**
   * 匹配图标规则的类前缀。
   *
   * @default `i-`
   */
  prefix?: string
  /**
   * 应用于生成的 CSS 的额外 CSS 属性
   *
   * @default {}
   */
  extraProperties?: Record<string, string>
  /**
   * 匹配缺失图标时发出警告
   *
   * @default false
   */
  warn?: boolean
  /**
   * 在 Node.js 环境中，预设会自动搜索已安装的 iconify 数据集。
   * 在浏览器中使用时，提供此选项以提供具有自定义加载机制的数据集。
   */
  collections?: Record<string, (() => Awaitable<IconifyJSON>) | undefined | CustomIconLoader | InlineCollection>
  /**
   * Rule layer
   *
   * @default 'icons'
   */
  layer?: string
  /**
   * 自定义图标。
   */
  customizations?: Omit<IconCustomizations, 'additionalProps' | 'trimCustomSvg'>
  /**
   * 检测到使用时自动安装图标源包
   *
   * **警告**: 仅在 `node` 环境中，在 `browser` 上，此选项将被忽略。
   *
   * @default false
   */
  autoInstall?: boolean
  /**
   * 自定义图标单位。
   *
   * @default `em`
   */
  unit?: string

  /**
   * 从 CDN 加载图标。 应该以 `https://` 开头并以 `/` 结尾
   *
   * Recommends:
   * - https://esm.sh/
   * - https://cdn.skypack.dev/
   */
  cdn?: string
}
```

### 额外属性

您可以提供额外的 CSS 属性来控制图标的默认行为。 以下是默认内联的make图标示例：

```ts
presetIcons({
  extraProperties: {
    'display': 'inline-block',
    'vertical-align': 'middle',
    // ...
  },
})
```

## 模式覆盖

默认情况下，此预设会根据图标的特性自动为每个图标选择渲染模式。 您可以在这篇 [博客文章](https://antfu.me/posts/icons-in-pure-css) 中阅读更多内容。 在某些情况下，您可能希望为每个图标显式设置渲染模式。

- `?bg` for `background-img` - 将图标呈现为背景图像
- `?mask` for `mask` - 将图标呈现为蒙版图像

例如，`vscode-icons:file-type-light-db`，一个带有颜色的图标，将呈现为背景图像。 使用 `vscode-icons:file-type-light-db?bg` 将其渲染为蒙版图像并绕过它的颜色。

## 配置集合和图标解析器

您可以通过 `@iconify-json/[the-collection-you-want]`、`@iconify/json` 或使用您的 `UnoCSS` 配置中的 `collections` 选项使用自定义的集合来提供集合。

### Browser

要加载 `iconify` 集合，您应该使用 `@iconify-json/[the-collection-you-want]` 而不是 `@iconify/json`，因为 `json` 文件很大。
#### Bundler

使用 bundlers 时，您可以使用`动态导入`提供集合，以便将它们作为异步块打包并按需加载。
```ts
presetIcons({
  collections: {
    carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default),
    mdi: () => import('@iconify-json/mdi/icons.json').then(i => i.default),
    logos: () => import('@iconify-json/logos/icons.json').then(i => i.default),
  }
})
```

#### CDN

或者，如果您更喜欢从 CDN 获取它们，您可以从 `v0.32.10` 开始指定 `cdn` 选项。 我们推荐 [esm.sh](https://esm.sh/) 作为 CDN 提供商。
```ts
presetIcons({
  cdn: 'https://esm.sh/'
})
```

#### 定制

您还可以使用 [CustomIconLoader](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/types.ts#L17) 或 [InlineCollection](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/types.ts#L86)，例如使用`InlineCollection`：

```ts
UnoCSS({
  presets: [
    presetIcons({
      collections: {
        custom: {
          circle: '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"></circle></svg>',
          /* ... */
        },
        carbon: () => import('@iconify-json/carbon/icons.json').then(i => i.default as any),
        /* ... */
      }
    })
  ]
})
```

然后，您可以在 html 上使用它：`<span class="i-custom:circle"></span>`

### Node.js

在 `Node.js` 中，预设会自动搜索已安装的 iconify 数据集，因此您无需注册 `iconify` 集合。

您还可以使用 [CustomIconLoader](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/types.ts#L17) 或 [InlineCollection](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/types.ts#L86)。

此外，您还可以使用 [FileSystemIconLoader](https://github.com/iconify/iconify/blob/master/packages/utils/src/loader/node-loaders.ts#L9) 从文件中加载自定义图标 系统。 您需要将 `@iconify/utils` 包安装为 `dev 依赖项`。

```ts
// vite.config.ts
import { promises as fs } from 'fs'
// loader helpers
import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'

UnoCSS({
  presets: [
    presetIcons({
      collections: {
        // 作为集合名称的 key
        'my-icons': {
          account: '<svg><!-- ... --></svg>',
          // 懒加载你的图标集
          settings: () => fs.readFile('./path/to/my-icon.svg', 'utf-8'),
          /* ... */
        },
        'my-other-icons': async (iconName) => {
          // 您的自定义加载程序在这里。 做你想做的。
          // 例如，从远程服务器获取：
          return await fetch(`https://example.com/icons/${iconName}.svg`).then(res => res.text())
        },
        // 从文件系统加载图标的助手
        // `./assets/icons` 下带有 `.svg` 扩展名的文件将按照文件名加载
        // 您还可以提供一个转换回调来更改每个图标（可选）
        'my-yet-other-icons': FileSystemIconLoader(
          './assets/icons',
          svg => svg.replace(/#fff/, 'currentColor')
        )
      }
    })
  ]
})
```

## 图标自定义

您可以使用“自定义”配置选项自定义所有图标。

可用的自定义功能：

- `transform`：转换原始`svg`，仅在使用`custom`图标集合时应用（不包括`iconify`集合）。
- `customize`：更改默认图标自定义值。
- `iconCustomizer`：更改默认图标自定义值。

对于每个加载的图标，将按以下顺序应用自定义：

- 将 `transform` 应用于原始 `svg`，如果提供并使用自定义图标集合
- 使用默认自定义应用`customize`（如果提供）
- 应用 `iconCustomizer` 和 `customize` 自定义项（如果提供）

### 全局自定义图标转换

加载自定义图标时，您可以对其进行转换，例如使用 `currentColor` 添加 `fill` 属性：

```ts
UnoCSS({
  presets: [
    presetIcons({
      customizations: {
        transform(svg) {
          return svg.replace(/#fff/, 'currentColor')
        }
      }
    })
  ]
})
```

从 `0.30.8` 版本开始，`transform` 提供了 `collection` 和 `icon` 名称：

```ts
UnoCSS({
  presets: [
    presetIcons({
      customizations: {
        transform(svg, collection, icon) {
          // do not apply fill to this icons on this collection
          if (collection === 'custom' && icon === 'my-icon')
            return svg
          return svg.replace(/#fff/, 'currentColor')
        }
      }
    })
  ]
})
```

### 全局图标定制

加载任何图标时，您可以自定义所有图标的通用属性，例如配置相同的大小：

```ts
UnoCSS({
  presets: [
    presetIcons({
      customizations: {
        customize(props) {
          props.width = '2em'
          props.height = '2em'
          return props
        }
      }
    })
  ]
})
```

### 图标/集合 定制

您可以使用 `iconCustomizer` 配置选项自定义每个图标。

`iconCustomizer` 将优先于配置。

`iconCustomizer` 将应用于任何集合，即，对于来自 `custom` 加载器、`custom collections` 上的 `inlined` 或来自 `@iconify` 的每个图标。

例如，您可以配置 `iconCustomizer` 来更改集合的所有图标或集合上的单个图标：

```ts
UnoCSS({
  presets: [
    presetIcons({
      customizations: {
        iconCustomizer(collection, icon, props) {
          // 自定义此集合中的所有图标
          if (collection === 'my-other-icons') {
            props.width = '4em'
            props.height = '4em'
          }
          // 在此自定义集合中，自定义此图标
          if (collection === 'my-icons' && icon === 'account') {
            props.width = '6em'
            props.height = '6em'
          }
          // 在此 @iconify 集合中，自定义此 @iconify 图标
          if (collection === 'mdi' && icon === 'account') {
            props.width = '2em'
            props.height = '2em'
          }
        }
      }
    })
  ]
})
```

### 高级自定义图标集清理

将此预设与您的自定义图标一起使用时，请考虑使用类似于 [Iconify](https://iconify.design/) 对任何图标集所做的清理过程。 [Iconify 工具](https://docs.iconify.design/tools/tools2/) 中提供了您需要的所有工具。

你可以切换到 [@iconify/tools/@iconify-demo/unocss](https://github.com/iconify/tools/tree/main/%40iconify-demo/unocss) 这个仓库进行查看。

阅读 [Iconify](https://iconify.design/) 中的 [Cleaning up icons](https://docs.iconify.design/articles/cleaning-up-icons/) 文章了解更多细节。

## 相关工作人员

这个预设的灵感来自 [@husayt](https://github.com/husayt) 创建的 [issue](https://github.com/antfu/unplugin-icons/issues/88)。 基于 [@userquin](https://github.com/userquin) 的 [PR](https://github.com/antfu/unplugin-icons/pull/90) 的工作。

## License

MIT License &copy; 2021-PRESENT [Anthony Fu](https://github.com/antfu)
