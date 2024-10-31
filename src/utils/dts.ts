import { resolve } from 'node:path'
import { cwd } from 'node:process'
import { writeFile } from 'node:fs/promises'
import type { RequiredOptions } from './options'
import { imageMap } from './imageMap'

export async function generateDts(options: RequiredOptions): Promise<void> {
  const { dts } = options

  if (dts) {
    const path = resolve(cwd(), dts)
    const content = `// Generated by unplugin-vue-images
export {}\n
declare module 'vue' {
  interface ComponentCustomProperties {
${([...imageMap.entries()].map(([name, path]) => `    readonly ${name}: typeof import('${path}')['default']`)).join('\n')}
  }
}
`
    await writeFile(path, content)
  }
}
