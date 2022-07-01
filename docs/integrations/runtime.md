# @unocss/runtime

UnoCSS 运行时 CSS-in-JS

## 使用CDN

将此行添加到您的 `index.html` 并播放：

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime"></script>
```

配置 UnoCSS（可选）：

```html
<script>
// pass unocss options
window.__unocss = {
  rules: [
    // 自定义规则...
  ],
  presets: [
    // 自定义预设...
  ],
  // ...
}
</script>
```

默认情况下，将应用`@unocss/preset-uno`。

运行时没有预检，如果你想重置样式，你可以添加自己的，或者使用`@unocss/reset`中的一个：

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/normalize.min.css">
<!-- or -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@unocss/reset/tailwind.min.css">
```

### CDN 构建

###### 核心

没有任何预设：

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/core.global.js"></script>
```

###### Uno (默认)

With `@unocss/preset-uno` preset:

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/uno.global.js"></script>
```

###### Attributify

With `@unocss/preset-uno` and `@unocss/preset-attributify` presets:

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/attributify.global.js"></script>
```

###### Mini

With `@unocss/preset-mini` and `@unocss/preset-attributify` preset:

```html
<script src="https://cdn.jsdelivr.net/npm/@unocss/runtime/mini.global.js"></script>
```

## 使用 Bundler

```bash
npm i @unocss/runtime
```

```ts
import initUnocssRuntime from '@unocss/runtime'

initUnocssRuntime({ /* options */ })
```

## 防止无样式内容的闪烁

由于 UnoCSS 在 DOM 存在之后运行，因此可能会出现“无样式内容的闪烁”，这可能会导致用户将页面视为无样式。

使用带有 CSS 规则的 `un-cloak` 属性，例如 `[un-cloak] { display: none }` 来隐藏未设置样式的元素，直到 UnoCSS 为其应用样式。

```css
[un-cloak] {
  display: none;
}
```

```html
<div class="text-blue-500" un-cloak>
  This text will only be visible in blue color.
</div>
```

## License

MIT License &copy; 2021-PRESENT [Anthony Fu](https://github.com/antfu)