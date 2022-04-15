
## 什么是 unocss？

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
- [Inspector](#inspector) - 以交互方式检查和调试
- [CSS-in-JS 运行时版本](https://github.com/unocss/unocss/tree/main/packages/runtime)
- [CSS Scoping](#css-scoping)
- [VS Code 扩展](https://marketplace.visualstudio.com/items?itemName=antfu.unocss)
- CSS 的代码分割 - 为 MPA 提供最小的 CSS
- 库友好 - 将原子样式与您的组件库一起提供并安全地限定范围

###### 基准

```
11/5/2021, 4:26:57 AM
1656 utilities | x50 runs (min build time)

none                              8.30 ms / delta.      0.00 ms 
unocss       v0.4.15             13.58 ms / delta.      5.28 ms (x1.00)
windicss     v3.2.1             989.57 ms / delta.    981.27 ms (x185.94)
tailwindcss  v3.0.0-alpha.1    1290.96 ms / delta.   1282.66 ms (x243.05)
```

###### 非目标

UnoCSS 被设计为不具备：

- CSS 预处理器 (e.g. `@apply`) - 但你可以使用 [快捷方式](#shortcuts).
- Tailwind 插件系统 - 但您可以在几秒钟内编写自定义规则并将它们作为预设共享！

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

查看[所有 packages](https://github.com/unocss/unocss/tree/main/packages).

请参阅 [Vite](https://github.com/unocss/unocss/blob/main/packages/vite/README.md) 上的完整文档:
- modes: `global`, `dist-chunk`, `per-module`, `vue-scoped`, `svelte-scoped`, and `shadow-dom`.
- frameworks: `React`, `Preact`, `Svelte`, `SvelteKit`, `Web Components`, `Solid` and `Elm`.

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

请参阅 [https://github.com/unocss/unocss/tree/main/packages/nuxt](https://github.com/unocss/unocss/tree/main/packages/nuxt) 上的完整文档



## Editor setup


### Vscode

  官方的 [unocss vscode extension](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) 扩展为编辑器提供了很好的体验。

  它默认具有：

  - 匹配实用程序的装饰和工具提示
  - 从 `uno.config.js` 、 `vite.config.js` 或者 `nuxt.config.js` 加载配置
  - 匹配实用程序的计数
