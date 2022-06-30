# @unocss/vite

UnoCSS 的 Vite 插件，随 `unocss` 软件包一起提供。

> 这个插件没有任何默认预设。您正在 UnoCSS 之上构建元框架，请参阅 [此文件](https://github.com/unocss/unocss/blob/main/packages/unocss/src/vite.ts) 以获取绑定默认预设的示例。

## 安装

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

在你的主入口添加 `uno.css` ：

```ts

```ts
// main.ts
import 'uno.css'
```

### 无预设使用

```bash
npm i -D @unocss/vite
```

```ts
// vite.config.ts
import Unocss from '@unocss/vite'

export default {
  plugins: [
    Unocss({
      presets: [
        /* no presets by default */
      ],
      /* options */
    }),
  ],
}
```

## 模式

Vite 插件带有一组启用不同行为的模式。

###### `global` (默认)

这是插件的默认模式：在这种模式下，您需要 `uno.css` 在入口点添加导入。

此模式为 `build` 和 `dev` 启用了一组 Vite 插件，并支持 `HMR`。

生成的 `css` 将是在 `index.html` 上注入的全局样式表。

###### `vue-scoped`

此模式会将生成的 CSS 注入 Vue SFC 的 `<style scoped>` 以进行隔离。

###### `svelte-scoped`

此模式会将生成的 CSS 注入 Svelte 的 `<style>` 以进行隔离。

###### `shadow-dom`

由于 `Web Components` 使用 `Shadow DOM`，因此无法直接从全局样式表中设置内容样式（除非您使用 `custom css vars`，否则会穿透 `Shadow DOM`），您需要内联生成的 css 由插件转化为 `Shadow DOM` 样式。

要内联生成的 css，您只需将插件模式配置为 `shadow-dom` 并在每个 web component css 块上包含 `@unocss-placeholder` 占位符。

###### `per-module` (实验性)

此模式将为每个模块生成一个 CSS 表，可以限定范围。

###### `dist-chunk` (实验性)

此模式将为构建时的每个代码块生成一个 CSS 表，非常适合 MPA。

## "Design in DevTools"

由于“按需”的限制，DevTools 不知道您尚未在源代码中使用的那些。 因此，如果您想通过直接更改 DevTools 中的类来尝试工作原理，只需将以下行添加到您的主条目中。

```ts
import 'uno.css'
import 'virtual:unocss-devtools'
```

> ⚠️ 请谨慎使用，在后台我们使用 [`MutationObserver`](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) 来检测类更改。 这意味着不仅您的手动更改，而且您的脚本所做的更改都将被检测并包含在样式表中。 当您基于脚本标记中的某些逻辑添加动态类时，这可能会导致开发和生产构建之间出现一些错位。 我们建议将您的动态部件添加到 [安全列表](https://github.com/unocss/unocss/issues/511) 或尽可能为您的生产构建设置 UI 回归测试。

`virtual:unocss-devtools` 在生产环境中将是一个空包。

## 框架

一些 UI/App 框架有一些必须修复才能使其工作的警告，如果您使用以下框架之一，只需应用建议。

### React

**警告**: 你应该使用 `import 'virtual:uno.css'` 替代 `import 'uno.css'` 来导入 `uno.css` 虚拟模块。当您第一次启动开发服务器时，您需要更新一些样式模块以使其正常工作（我们正在尝试修复它）。

如果你正在使用 `@vitejs/plugin-react`:

```ts
// vite.config.js
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'

export default {
  plugins: [
    react(),
    Unocss({
      /* options */
    }),
  ],
}
```

或者你正在使用 `@vitejs/plugin-react-refresh`:

```ts
// vite.config.js
import reactRefresh from '@vitejs/plugin-react-refresh'
import Unocss from 'unocss/vite'

export default {
  plugins: [
    reactRefresh(),
    Unocss({
      /* options */
    }),
  ],
}
```

如果你正在使用 `@unocss/preset-attributify`，你应该在 `build` 脚本中移除 `tsc`。

如果你正在一起使用 `@vitejs/plugin-react` 、 `@unocss/preset-attributify`, 则必须在之前添加插件 `@vitejs/plugin-react`.

```ts
// vite.config.js
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'

export default {
  plugins: [
    Unocss({
      /* options */
    }),
    react(),
  ],
}
```

在 [examples/vite-react](https://github.com/unocss/unocss/tree/main/examples/vite-react) 目录上有一个使用这两个插件的 `React` 示例项目，请检查 `package.json` 中的 `scripts` 和 Vite 配置文件。

### Preact

如果你正在使用 `@preact/preset-vite`:

```ts
// vite.config.js
import preact from '@preact/preset-vite'
import Unocss from 'unocss/vite'

export default {
  plugins: [
    preact(),
    Unocss({
      /* options */
    }),
  ],
}
```

或者你正在使用 `@prefresh/vite`:

```ts
// vite.config.js
import prefresh from '@prefresh/vite'
import Unocss from 'unocss/vite'

export default {
  plugins: [
    prefresh(),
    Unocss({
      /* options */
    }),
  ],
}
```

如果你正在使用 `@unocss/preset-attribute`，你应该从 `build` 脚本中移除 `tsc`。

如果你正在一起使用 `@preact/preset-vite` 、 `@unocss/preset-attributify`, 则必须在之前添加插件 `@preact/preset-vite`.

```ts
// vite.config.js
import preact from '@preact/preset-vite'
import Unocss from 'unocss/vite'

export default {
  plugins: [
    Unocss({
      /* options */
    }),
    preact(),
  ],
}
```

在 [examples/vite-preact](https://github.com/unocss/unocss/tree/main/examples/vite-preact) 目录中有一个使用这两个插件的 `Preact` 示例项目，请检查 `package.json` 中的 `scripts` 和 Vite 配置文件。

### Svelte

你必须在之前添加插件 `@sveltejs/vite-plugin-svelte`.

添加此插件并在 `extractors` 选项中配置 `extractorSvelte` 以支持 `class:foo` and `class:foo={bar}`

您可以使用带有 `class:` 的简单规则，例如 `class:bg-red-500={foo}` 或使用 `shorcuts` 来包含多个规则，请参阅下面链接示例项目中的 `src/App.svelte`。

```ts
// vite.config.js
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Unocss from 'unocss/vite'
import { extractorSvelte } from '@unocss/core'

export default {
  plugins: [
    Unocss({
      extractors: [extractorSvelte],
      /* more options */
    }),
    svelte(),
  ],
}
```

在 [examples/vite-svelte](https://github.com/unocss/unocss/tree/main/examples/vite-svelte) 目录中有一个 `Vite + Svelte` 示例项目。

###  Sveltekit

添加此插件并在 `extractors` 选项中配置 `extractorSvelte` 以支持 `class:foo` and `class:foo={bar}`

您可以使用带有 `class:` 的简单规则，例如 `class:bg-red-500={foo}` 或使用 `shorcuts` 来包含多个规则，请参阅链接示例项目中的 `src/routes/__layout.svelte` 以下。

```ts
// svelte.config.js
import preprocess from 'svelte-preprocess'
import UnoCss from 'unocss/vite'
import { extractorSvelte } from '@unocss/core'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),
  kit: {
    vite: {
      plugins: [
        UnoCss({
          extractors: [extractorSvelte],
          /* more options */
        }),
      ],
    },
  },
}
```

在 [examples/sveltekit](https://github.com/unocss/unocss/tree/main/examples/sveltekit) 目录中有一个 `SvelteKit` 示例项目。

### Web Components

使用 web components，您需要在插件上启用 `shadow-dom` 模式。

不要忘记删除 `uno.css` 的导入，因为 `shadow-dom` 模式不会公开它并且应用程序将无法运行。

```ts
// vite.config.js
import Unocss from 'unocss/vite'

export default {
  plugins: [
    Unocss({
      mode: 'shadow-dom',
      /* more options */
    }),
  ],
}
```

在每个 `web component` 上，只需将 `@unocss-placeholder` 添加到其样式 css 块中：

```ts
const template = document.createElement('template')
template.innerHTML = `
<style>
:host {...}
@unocss-placeholder
</style>
<div class="m-1em">
...
</div>
`
```

如果你正在使用 [Lit](https://lit.dev/):

```ts
@customElement('my-element')
export class MyElement extends LitElement {
  static styles = css`
    :host {...}
    @unocss-placeholder
  `
  // ...
}
```

在 [examples/vite-lit](https://github.com/unocss/unocss/tree/main/examples/vite-lit) 目录中有一个 `Web Components` 示例项目。

#### `::part` 内置支持

因为此插件支持 `shortcuts`，你可以使用 `::part`；也可以使用 `preset-mini` 中的 `part-[<part-name>]:<rule|shortcut>` 规则。例如使用简单规则 `part-[<part-name>]:bg-green-500` 或使用一些 `shortcut`，请查看下面链接的示例项目中的 `src/my-element.ts`。

`part-[<part-name>]:<rule|shortcut>` 仅适用于使用 `shadow-dom` 模式的此插件。

该插件使用 `nth-of-type` 来避免与同一 web component 中的多个部分发生冲突，并且对于不同 web component 上的相同部分，您无需担心，插件会为您处理。

```ts
// vite.config.js
import Unocss from 'unocss/vite'

export default {
  plugins: [
    Unocss({
      mode: 'shadow-dom',
      shortcuts: [
        { 'cool-blue': 'bg-blue-500 text-white' },
        { 'cool-green': 'bg-green-500 text-black' },
      ],
      /* more options */
    }),
  ],
}
```

然后在你的 web components:

```ts
// my-container-wc.ts
const template = document.createElement('template')
template.innerHTML = `
<style>
@unocss-placeholder
</style>
<my-wc-with-parts class="part-[cool-part]:cool-blue part-[another-cool-part]:cool-green">...</my-wc-with-parts>
`
```

```ts
// my-wc-with-parts.ts
const template = document.createElement('template')
template.innerHTML = `
<style>
@unocss-placeholder
</style>
<div>
  <div part="cool-part">...</div>
  <div part="another-cool-part">...</div>
</div>
`
```

### Solid

**警告**: 你应该使用 `import 'virtual:uno.css'` 替代 `import 'uno.css'` 来导入 `uno.css` 虚拟模块。当您第一次启动开发服务器时，您需要更新一些样式模块以使其正常工作（我们正在尝试修复它）。

```ts
// vite.config.js
import solidPlugin from 'vite-plugin-solid'
import Unocss from 'unocss/vite'

export default {
  plugins: [
    solidPlugin(),
    Unocss({
      /* options */
    }),
  ],
}
```

在 [examples/vite-solid](https://github.com/unocss/unocss/tree/main/examples/vite-solid) 目录中有一个 `Vite + Solid` 示例项目。

### Elm

你需要在 UnoCSS 的插件之前添加 `vite-plugin-elm` 插件。

```ts
// vite.config.js
import { defineConfig } from 'vite'
import elmPlugin from 'vite-plugin-elm'
import Unocss from 'unocss/vite'

export default defineConfig({
  plugins: [
    elmPlugin(),
    Unocss({
      /* options */
    }),
  ],
})
```

在 [examples/vite-elm](https://github.com/unocss/unocss/tree/main/examples/vite-elm) 目录中有一个 `Vite + Elm` 示例项目。
