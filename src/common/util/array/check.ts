/**
 * 检查两个数组相同（保证顺序）
 */
export function checkSameArrayWithOrder<T>(a: T[], b: T[]): boolean {
  const len = a.length
  if (len !== b.length) {
    return false
  }

  if (len === 0) {
    return true
  }

  for (let i = 0; i < len; i++) {
    if (a[i] !== b[i]) return false
  }

  return true
}

/**
 * 检查两个数组相同（无视顺序）
 */
export function checkSameArray<T>(a: T[], b: T[]): boolean {
  const len = a.length
  if (len !== b.length) {
    return false
  }

  if (len === 0) {
    return true
  }

  // 这里有个问题：如果数组中有重复的元素，则只会检查一次
  // 即：[a, a, b] === [a, b, b]
  const set = new Set<T>(a)
  return !b.some(item => !set.has(item))
}
