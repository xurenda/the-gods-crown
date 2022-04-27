/**
 * 空方法
 */
export function noopFunc(...args: any[]) {}

/**
 * 睡眠
 * @param time 睡眠时间，单位：ms
 */
export function sleep(time = 0) {
  return new Promise(resolve => setTimeout(resolve, time))
}
