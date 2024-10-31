import { describe, expect, it } from 'vitest'
import { generateImageMap, imageMap } from '../src/utils/imageMap'
import { defaultOptions } from '../src/utils/options'

describe('imageMap', () => {
  it('imageMap test', async () => {
    await generateImageMap({ ...defaultOptions, dirs: 'test/src' })

    expect(imageMap).toMatchInlineSnapshot(`
      Map {
        "A" => "test/src/a.png",
        "B" => "test/src/b.jpg",
        "InnerC" => "test/src/inner/c.png",
      }
    `)
  })
})
