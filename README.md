# unplugin-vue-images

Automatically import images into the vue project

<!-- [![NPM version](https://img.shields.io/npm/v/unplugin-vue-images?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-vue-images) -->

## Install

```bash
npm i unplugin-vue-images
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import Images from 'unplugin-vue-images/vite'

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
import Images from 'unplugin-vue-images/rollup'

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
    require('unplugin-vue-images/webpack')({ /* options */ })
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
    ['unplugin-vue-images/nuxt', { /* options */ }],
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
      require('unplugin-vue-images/webpack')({ /* options */ }),
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
import Images from 'unplugin-vue-images/esbuild'

build({
  plugins: [Images()],
})
```

<br></details>
