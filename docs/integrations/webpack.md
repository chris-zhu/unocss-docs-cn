# @unocss/webpack

UnoCSS Webpack 插件

> 这个插件没有任何默认预设。

目前这个插件只支持[`global`](https://github.com/unocss/unocss/blob/main/packages/vite/src/types.ts#L11-L21)模式

## 安装

```bash
npm i -D unocss @unocss/webpack
```

```ts
// webpack.config.js
const UnoCSS = require('unocss/webpack').default

module.exports = {
  plugins: [
    UnoCSS({ /* options */ }),
  ],
}
```

或者你可以在 `unocss.config.js` 或 `unocss.config.ts` 中有配置文件。
