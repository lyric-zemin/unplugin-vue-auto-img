// Generated by unplugin-vue-images
export {}

declare module 'virtual:images' {
  export interface ImageMap {
    IA: string
    IB: string
    IInnerC: string
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    readonly IA: typeof import('/src/assets/images/a.png')['default']
    readonly IB: typeof import('/src/assets/images/b.png')['default']
    readonly IInnerC: typeof import('/src/assets/images/inner/c.png')['default']
  }
}
