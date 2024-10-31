import type { Options } from '../types'

export type RequiredOptions = Required<Options>

export const defaultOptions: RequiredOptions = {
  include: [/\.vue$/, /\.vue\?vue/, /\.vue\?v=/],
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],

  dirs: 'src/assets/images',
  extensions: ['.jpg', '.jpeg', '.png', '.gif'],
  deep: true,
  directoryAsNamespace: true,

  dts: 'src/images.d.ts',
  ns: 'I',
}

export function resolveOptions(options: Options = {}): RequiredOptions {
  return {
    ...defaultOptions,
    ...options,
  }
}
