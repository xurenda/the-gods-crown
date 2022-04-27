/**
 * 高阶函数
 */

/**
 * 防抖：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
 * @param func 需要防抖的函数
 * @param delay 延迟时间，单位：ms
 * @returns {function}
 */
export function debounce(func: Function, delay = 0): Function {
  let timerId: number | null = null

  return function (...args: any[]) {
    timerId && window.clearTimeout(timerId)

    timerId = window.setTimeout(() => {
      func.apply(null, args)
    }, delay)
  }
}

/**
 * 集中：一定时间内频繁调用时，将函数集中执行
 * @param func 待集中处理的函数
 * @param wait 等待时间，单位：ms
 * @returns {Function}
 */
export function centralize(func: Function, wait = 0): Function {
  let timerId: number | null = null
  const queue: Function[] = []

  return (...args: any[]) => {
    queue.push(() => func.apply(undefined, args))

    timerId && window.clearTimeout(timerId)
    timerId = window.setTimeout(() => {
      // 从队列中取出函数集中执行
      while (queue.length > 0) {
        queue.shift()?.()
      }
    }, wait)
  }
}
