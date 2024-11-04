import type { Options } from './types'
import { Name } from './utils/constant'

import unplugin from '.'

export default (options: Options): any => ({
  name: Name,
  hooks: {
    'astro:config:setup': async (astro: any) => {
      astro.config.vite.plugins ||= []
      astro.config.vite.plugins.push(unplugin.vite(options))
    },
  },
})
