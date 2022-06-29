# @unocss/transformer-compile-class

将一组类名编译成一个类名。受 [WindiCSS's compilation mode](https://windicss.org/posts/modes.html#compilation-mode) 和 [#948](https://github.com/unocss/unocss/issues/948) by [@UltraCakeBakery](https://github.com/UltraCakeBakery) 启发。

## 安装

```bash
npm i -D @unocss/transformer-compile-class
```

```ts
// uno.config.js
import { defineConfig } from 'unocss'
import transformerCompileClass from '@unocss/transformer-compile-class'

export default defineConfig({
  // ...
  transformers: [
    transformerCompileClass(),
  ],
})
```

## 使用

在**字符串的开头添加** `:uno:`标记它们以进行编译。例如：

```html
<div class=":uno: text-center sm:text-left">
  <div class=":uno: text-sm font-bold hover:text-red"/>
</div>
```

将会被编译为：

```html
<div class="uno-qlmcrp">
  <div class="uno-0qw2gr"/>
</div>
```

```css
.uno-qlmcrp {
  text-align: center;
}
.uno-0qw2gr {
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 700;
}
.uno-0qw2gr:hover {
  --un-text-opacity: 1;
  color: rgba(248, 113, 113, var(--un-text-opacity));
}
@media (min-width: 640px) {
  .uno-qlmcrp {
    text-align: left;
  }
}
```

## 配置项

```ts
export interface CompileClassOptions {
  /**
   * 触发编译行为的字符串
   * @default ':uno:'
   */
  trigger?: string

  /**
   * 编译后的类名前缀
   * @default 'uno-'
   */
  classPrefix?: string

  /**
   * Hash function 自定义编译生成的哈希逻辑
   */
  hashFn?: (str: string) => string

  /**
   * 在字符串中保留未知的类名
   *
   * @default true
   */
  keepUnknown?: boolean

  /**
   * layer
   */
  layer?: string
}
```
