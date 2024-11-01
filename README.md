# unplugin-vue-auto-img

Automatically import images into the vue project

[![NPM version](https://img.shields.io/npm/v/unplugin-vue-auto-img?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-vue-auto-img)

## .d.ts

add them to the types property in your tsconfig.json:

```json
{
  "compilerOptions": {
    // ...
    "types": ["unplugin-vue-auto-img/client"]
  }
}
````

## Install

```bash
npm i unplugin-vue-auto-img
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Images from 'unplugin-vue-auto-img/vite'

export default defineConfig({
  plugins: [
    Images({ /* options */ }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import Images from 'unplugin-vue-auto-img/rollup'

export default {
  plugins: [
    Images({ /* options */ }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-vue-auto-img/webpack')({ /* options */ })
  ]
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    ['unplugin-vue-auto-img/nuxt', { /* options */ }],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-vue-auto-img/webpack')({ /* options */ }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import Images from 'unplugin-vue-auto-img/esbuild'

build({
  plugins: [Images()],
})
```

<br></details>

## Usage

`unplugin-vue-auto-img` auto import your image from `assets/images` by default to your Vue component.

You can only use image variables using camelCase.

```
--- assets
  --- images
    --- logo.png
--- App.vue
```

```vue
--- src/App.vue ---
<template>
  <div>
    <img :src="ILogo">
  </div>
</template>
```

## License

[MIT](./LICENSE)
