# [@unocss/preset-uno](https://github.com/unocss/unocss/tree/main/packages/preset-uno)

[UnoCSS](https://github.com/unocss/unocss) 默认预设

> 请注意，此预设更像是现阶段试验 UnoCSS 可能性的游乐场，也可作为制作自定义预设的参考。它不遵循 semver，如有更改，恕不另行通知。我们不建议在严肃的作品中使用它。改用自定义规则来确保稳定的结果。

## 安装

```bash
npm i -D @unocss/preset-uno
```

```ts
import presetUno from '@unocss/preset-uno'

Unocss({
  presets: [
    presetUno(),
  ],
})
```

## 使用

此预设试图提供流行的实用程序优先框架的通用超集，包括 Tailwind CSS、Windi CSS、Bootstrap、Tachyon 等。

例如，ml-3(Tailwind)、ms-2(Bootstrap)、ma4(Tachyons)、mt-10px(Windi CSS) 都有效。

```css
.ma4 { margin: 1rem; }
.ml-3 { margin-left: 0.75rem; }
.ms-2 { margin-inline-start: 0.5rem; }
.mt-10px { margin-top: 10px; }
```

有关默认预设的更多详细信息，您可以查看我们的 [playground](https://unoc.antfu.me/play) 并尝试一下。

## License

MIT License &copy; 2021-PRESENT [Anthony Fu](https://github.com/antfu)