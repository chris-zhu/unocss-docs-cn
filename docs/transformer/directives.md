# @unocss/transformer-directives

UnoCSS 转换器的指令 `@apply` 和 `theme()`

## 安装

```bash
npm i -D @unocss/transformer-directives
```

```ts
// uno.config.js
import { defineConfig } from 'unocss'
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({
  // ...
  transformers: [
    transformerDirective(),
  ],
})
```

## 使用

### `@apply`

```css
.custom-div {
  @apply text-center my-0 font-medium;
}
```

将会被转换为：

```css
.custom-div {
  margin-top: 0rem;
  margin-bottom: 0rem;
  text-align: center;
  font-weight: 500;
}
```

> Currently only `@apply` is supported.

#### CSS 变量 模式

为了与 vanilla CSS 兼容，你可以使用 CSS 变量来替换 `@apply` 指令。

```css
.custom-div {
  --at-apply: text-center my-0 font-medium;
}
```

使用规则带有变体时 `:`, 你需要使用引号包裹你的值

```css
.custom-div {
  --at-apply: "hover:text-red";
}
```

此功能默认启用（带有前缀`--at-`），你可以通过以下方式配置或禁用它：

```js
transformerDirective({
  varStyle: '--my-at-',
  // or disable with:
  // varStyle: false
})
```

### `theme()`

使用 `theme()` 指令 点符号 来访问您的主题配置值。


```css
.btn-blue {
  background-color: theme('colors.blue.500');
}
```

将会被编译为：

```css
.btn-blue {
  background-color: #3b82f6;
}
```
