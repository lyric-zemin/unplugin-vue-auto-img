import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import { createFilter } from 'vite'

import type { Options } from './types'
import { resolveOptions } from './utils/options'
import { generateImageMap, imageMap } from './utils/imageMap'
import { generateDts } from './utils/dts'

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options) => {
  const ops = resolveOptions(options)
  const filter = createFilter(ops.include, ops.exclude)

  return {
    name: 'unplugin-vue-images',
    enforce: 'post',
    buildStart: async () => {
      await generateImageMap(ops)
      await generateDts(ops)
    },
    transformInclude: id => filter(id),
    transform(code) {
      const prepend: { k: number, v: string }[] = []
      let i = 0
      const ret = code.replaceAll(/\b_ctx\.(\w+)\b/g, (match, name) => {
        const path = imageMap.get(name)
        if (path) {
          prepend.push({ k: i, v: path })
          return `_img_${i++}`
        }
        else {
          return match
        }
      })

      const prependStr = prepend.map(({ k, v }) => `import _img_${k} from '${v}';`).join('\n')

      return {
        code: prependStr + ret,
      }
    },
  }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
