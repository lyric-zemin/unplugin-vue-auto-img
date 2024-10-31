import type { FilterPattern } from '@rollup/pluginutils'

export interface Options {
  include?: FilterPattern
  exclude?: FilterPattern

  dirs?: string | string[]
  extensions?: string | string[]
  deep?: boolean
  directoryAsNamespace?: boolean

  dts?: string
  ns?: string
}
