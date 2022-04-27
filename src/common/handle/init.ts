import { dateFormat } from '../util/date'

/**
 * 初始化全局变量
 */
export default function initGlobal() {
  // process.env.NODE_ENV: 'development' | 'production' | 'test'
  window.isDev = process.env.NODE_ENV === 'development'

  window.log = (...args: any[]) => log(false, ...args)
  window.logTrace = (...args: any[]) => log(true, ...args)
}

function log(trace: boolean, ...args: any[]) {
  if (!window.isDev) return

  let key = 'DEBUG'
  const firstArg = args[0]
  if (firstArg != null && typeof firstArg !== 'object') {
    key = firstArg.toString()
    args.shift()
  }

  console.log(
    `%c[${key}${trace ? ' - trace' : ''}] ${dateFormat(new Date(), 'HH:mm:ss.SSS')}`,
    `color: white; background: black; padding: 4px 10px; font-size: 12px;`
  )
  console.log(...args)
  trace && console.trace()
}
