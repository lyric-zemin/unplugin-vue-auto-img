import type { FilterPattern } from '@rollup/pluginutils'

export interface Options {
  /**
   * @default [/\.vue$/, /\.vue\?vue/, /\.vue\?v=/]
   */
  include?: FilterPattern
  /**
   * @default [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/]
   */
  exclude?: FilterPattern

  /**
   * @default 'src/assets/images'
   */
  dirs?: string | string[]
  /**
   * @default ['.jpg', '.jpeg', '.png', '.gif']
   */
  extensions?: string | string[]
  /**
   * @default true
   */
  deep?: boolean
  /**
   * 将目录作为命名的一部分
   *
   * @default true
   */
  directoryAsNamespace?: boolean

  /**
   * 生成 d.ts 文件路径
   *
   * @default 'src/images.d.ts'
   */
  dts?: string
  /**
   * 图片命名空间
   *
   * @default 'I'
   */
  ns?: string
}
