# [@unocss/preset-mini](https://github.com/unocss/unocss/tree/main/packages/preset-mini)

[UnoCSS](https://github.com/unocss/unocss) 的最小预设

## 安装

```bash
npm i -D @unocss/preset-mini
```

```ts
import presetMini from '@unocss/preset-mini'

Unocss({
  presets: [
    presetMini(),
  ],
})
```

## 特性

### 黑暗模式

默认情况下，此预设会生成带有 `dark:` 变体的基于类的暗模式。

```html
<div class="dark:bg-red:10" />
```

将生成：

```css
.dark .dark\:bg-red\:10 {
  background-color: rgba(248, 113, 113, 0.1);
}
```

要选择基于媒体查询的暗模式，您可以使用 `@dark:` 变体：

```html
<div class="@dark:bg-red:10" />
```

```css
@media (prefers-color-scheme: dark) {
  .\@dark\:bg-red\:10 {
    background-color: rgba(248, 113, 113, 0.1);
  }
}
```

或者为 `dark:` 变体使用配置全局配置

```ts
presetMini({
  dark: 'media'
})
```

### CSS @layer

`layer-xx:` 变体支持 [原生 CSS @layer](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)

```html
<div class="layer-foo:p4" />
<div class="layer-bar:m4" />
```

将生成：

```css
@layer foo {
  .layer-foo\:p4 {
    padding: 1rem;
  }
}
@layer bar {
  .layer-bar\:m4 {
    margin: 1rem;
  }
}
```
