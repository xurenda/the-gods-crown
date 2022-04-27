import { sleep } from '../function/base'

/**
 * 限制并发的 Promise
 * @param promiseArr Promise 数组
 * @param limitCount 并发限制数，默认: 300
 * @param interval 每次的时间间隔，默认: 0
 */
export async function promiseLimitOfConcurrent<T>(promiseArr: Promise<T>[], limitCount = 300, interval = 0) {
  limitCount = limitCount < 1 ? 1 : limitCount
  interval = interval < 0 ? 0 : interval

  let res: T[] = []
  let start = 0
  let end = 0
  const shouldSleep = interval > 0 && promiseArr.length > limitCount
  while (end < promiseArr.length) {
    end = Math.min(start + limitCount, promiseArr.length)
    res = res.concat(await Promise.all(promiseArr.slice(start, end)))
    start += limitCount
    if (shouldSleep) await sleep(interval)
  }

  return res
}

/**
 * 限制并发的 Promise（通过回调）
 * @param arr 普通数组
 * @param cb 处理函数
 * @param limitCount 并发限制数，默认: 300
 * @param interval 每次的时间间隔，默认: 0
 */
export async function promiseLimitOfConcurrentWithCb<T, R>(arr: T[], cb: (arr: T[], offset: number) => Promise<R>[], limitCount = 300, interval = 0) {
  limitCount = limitCount < 1 ? 1 : limitCount
  interval = interval < 0 ? 0 : interval

  let res: R[] = []
  let start = 0
  let end = 0
  const shouldSleep = interval > 0 && arr.length > limitCount
  while (end < arr.length) {
    end = Math.min(start + limitCount, arr.length)
    res = res.concat(await Promise.all(cb(arr.slice(start, end), start)))
    start += limitCount
    if (shouldSleep) await sleep(interval)
  }

  return res
}
