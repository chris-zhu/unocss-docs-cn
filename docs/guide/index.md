
## 什么是 UnoCSS

UnoCSS 是一个原子化 CSS 引擎，而不是一个框架。所有的设计都考虑到了灵活性和性能。在 UnoCSS 中，没有核心实体程序，所有功能都是通过预置提供。


> 💡 我们强烈推荐阅读这篇博文 - **[Reimagine Atomic CSS](https://antfu.me/posts/reimagine-atomic-css)** 来了解其背后的故事

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



## 编辑器设置

### Vscode

#### 特性

官方的 [unocss vscode extension](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) 扩展为编辑器提供了很好的体验。

它默认具有：

- 匹配实用程序的装饰和工具提示
- 从 `uno.config.js`, `vite.config.js`, `svelte.config.js`, `astro.config.js`, `iles.config.js` or `nuxt.config.js` (or `.ts`) 加载配置
- 匹配实用程序的计数

#### 配置

默认情况下，扩展将搜索项目根目录下的配置文件。当没有找到配置时，扩展将被禁用。要使用 monorepo，您​​需要将您的unocss.root选项更改为setting.json包含配置文件的目录。

```javascript
{
  "unocss.root": "packages/client"
}
```