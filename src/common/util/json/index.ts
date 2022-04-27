/**
 * 安全的 JsonParse
 */
export function safeJsonParse<T>(jsonStr: string, defaultVal: T): T {
  if (jsonStr == null) return defaultVal

  let res: T
  try {
    res = JSON.parse(jsonStr)
  } catch (e) {
    res = defaultVal
  }

  return res
}
