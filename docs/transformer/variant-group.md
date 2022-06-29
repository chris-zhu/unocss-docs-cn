# @unocss/transformer-variant-group

<!-- @unocss-ignore -->

在 UnoCSS 中启用 [Windi CSS 变体组](https://windicss.org/features/variant-groups.html)

## 安装

```bash
npm i -D @unocss/transformer-variant-group
```

```ts
// uno.config.js
import { defineConfig } from 'unocss'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  // ...
  transformers: [
    transformerVariantGroup(),
  ],
})
```

## 使用

```html
<div class="hover:(bg-gray-400 font-medium) font-(light mono)"/>
```

将会被转换为：

```html
<div class="hover:bg-gray-400 hover:font-medium font-light font-mono"/>
``` 

