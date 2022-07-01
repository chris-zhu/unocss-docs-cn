<br>

<p align="center">
<img src="https://raw.githubusercontent.com/unocss/unocss/main/packages/vscode/res/logo.png" style="width:100px;" height="128" />
</p>

<h1 align="center">UnoCSS for VS Code</h1>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=antfu.unocss" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/antfu.unocss.svg?color=eee&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>
</p>

> **Preview**

<br>

## 特性

- 匹配实用程序的装饰和工具提示
- 从 `uno.config.js`, `vite.config.js`, `svelte.config.js`, `astro.config.js`, `iles.config.js` or `nuxt.config.js` (or `.ts`) 中获取配置
- 匹配实用程序的计数

## 配置

默认情况下，扩展将搜索项目根目录下的配置文件。 当没有找到配置时，扩展将被禁用。 要使用 monorepo，您需要将 `settings.json` 中的 `unocss.root` 选项更改为包含配置文件的目录。

```javascript
{
  "unocss.root": "packages/client"
}
```

## License

MIT License &copy; 2021-PRESENT [Anthony Fu](https://github.com/antfu)