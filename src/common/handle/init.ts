import { dateFormat } from '../util/date'

export default function initGlobal() {
  // process.env.NODE_ENV: 'development' | 'production' | 'test'
  window.isDev = process.env.NODE_ENV === 'development'

  window.log = log
  window.logTrace = (...args: any[]) => {
    log(args)
    console.trace()
  }
}

function log(...args: any[]) {
  if (!window.isDev) return

  const key = args.shift()

  console.log(`%c[${key.toString()}] ${dateFormat(new Date(), 'HH:mm:ss.SSS')}`, `color: white; background: black; padding: 4px 10px; font-size: 12px;`)
  console.log(...args)
}
