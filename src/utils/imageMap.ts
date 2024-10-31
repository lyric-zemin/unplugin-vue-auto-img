import fg from 'fast-glob'
import type { RequiredOptions } from './options'
import { capitalize, toArray } from './util'

type ImageMap = Map<string, string>

/**
 * 图片映射表
 * name - path
 */
export const imageMap: ImageMap = new Map()

export async function generateImageMap(options: RequiredOptions): Promise<void> {
  const { dirs, extensions, deep, directoryAsNamespace, ns } = options
  const exts = toArray(extensions).join(',')
  const pattern = toArray(dirs).map(dir => `${dir}${deep ? '/**/' : '/'}*{${exts}}`.replace('//', '/'))
  const entries = await fg.glob(pattern, {})
  for (const entry of entries) {
    const paths = replaceDirectory(entry, toArray(dirs)).split('/')
    const name = [ns, ...(directoryAsNamespace ? paths.slice(0, -1) : []), paths.slice(-1)[0].replace(/\.[^.]+$/, '')].map(capitalize).join('')
    imageMap.set(name, `/${entry}`)
  }
}

function replaceDirectory(path: string, dirs: string[]): string {
  for (const dir of dirs) {
    path = path.replace(dir, '')
  }
  return path
}
