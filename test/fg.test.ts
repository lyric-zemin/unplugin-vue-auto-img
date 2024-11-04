import { describe, expect, it } from 'vitest'
import fg from 'fast-glob'

describe('fg', () => {
  it('fg pattern', async () => {
    const entries = await fg.glob([`test/src/**/*{.png,.jpg}`, 'src/**/*{.ts,.png}'])

    expect(entries).toMatchInlineSnapshot(`
      [
        "test/src/a.png",
        "test/src/b.jpg",
        "test/src/c-d.png",
        "test/src/d@f.png",
        "test/src/inner/c.png",
        "src/astro.ts",
        "src/esbuild.ts",
        "src/farm.ts",
        "src/index.ts",
        "src/nuxt.ts",
        "src/rollup.ts",
        "src/rspack.ts",
        "src/types.ts",
        "src/vite.ts",
        "src/webpack.ts",
        "src/utils/constant.ts",
        "src/utils/dts.ts",
        "src/utils/imageMap.ts",
        "src/utils/options.ts",
        "src/utils/util.ts",
      ]
    `)
  })
})
