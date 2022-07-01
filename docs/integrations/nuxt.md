# @unocss/nuxt

UnoCSS Nuxt 模块

## 支持状态

| | Nuxt 2 | Nuxt Bridge | Nuxt 3 |
| --- | --- | --- | --- |
| Webpack Dev | ✅ | ✅ | 🚧 |
| Webpack Build | ✅ | ✅ | ✅ |
| Vite Dev | - | ✅ | ✅ |
| Vite Build | - | ✅ | ✅ |

## 安装

```bash
npm i -D @unocss/nuxt
```

```js
// nuxt.config.js

export default {
  modules: [
    '@unocss/nuxt',
  ],
}
```

## 配置

在 Nuxt 模块中，我们还提供了一些官方预设的快捷键：

```js
// nuxt.config.js

export default {
  modules: [
    '@unocss/nuxt',
  ],
  unocss: {
    // presets
    uno: true, // 启用 `@unocss/preset-uno`
    icons: true, // 启用 `@unocss/preset-icons`
    attributify: true, // 启用 `@unocss/preset-attributify`,

    // core options
    shortcuts: [],
    rules: [],
  },
}
```

或者你可以在 `unocss.config.js` 或 `unocss.config.ts` 中进行配置。

## License

MIT License &copy; 2021-PRESENT [Anthony Fu](https://github.com/antfu)