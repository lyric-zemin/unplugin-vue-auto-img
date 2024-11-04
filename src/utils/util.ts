export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}

/** 首字母大写 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/** 转驼峰 */
export function camelCase(str: string): string {
  return str.replace(/-(\w)/g, (_, c) => c.toUpperCase())
}
