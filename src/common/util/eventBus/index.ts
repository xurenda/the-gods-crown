export default class EventBus {
  events: Record<StringOrSymbol, Set<Function>>

  constructor() {
    this.events = {}
  }

  /**
   * 触发事件
   * @param eventKey 事件名
   * @param args 回调函数传参
   * @returns {this}
   */
  emit(eventKey: StringOrSymbol, ...args: any[]): this {
    const cbs = this.events[eventKey]

    if (cbs) {
      cbs.forEach(cb => cb.apply(null, args))
    }

    return this
  }

  /**
   * 监听事件
   * @param eventKey 事件名
   * @param cb 回调函数
   * @returns {this}
   */
  on(eventKey: StringOrSymbol, cb: Function): this {
    if (!this.events[eventKey]) {
      this.events[eventKey] = new Set()
    }

    this.events[eventKey].add(cb)

    return this
  }

  /**
   * 监听事件（只监听第一次）
   * @param eventKey 事件名
   * @param cb 回调函数
   * @returns {this}
   */
  once(eventKey: StringOrSymbol, cb: Function): this {
    // 包装方法：执行一次后取消订阅
    const func = (...args: any[]) => {
      this.off(eventKey, func)
      cb.apply(null, args)
    }

    this.on(eventKey, func)

    return this
  }

  /**
   * 取消监听
   * @param eventKey 事件名
   * @param cb 取消监听哪个回调函数，不传代表取消监听本事件所有回调
   * @returns {this}
   */
  off(eventKey: StringOrSymbol, cb?: Function): this {
    if (!cb) {
      this.events[eventKey]?.clear()
    } else {
      this.events[eventKey]?.delete(cb)
    }

    return this
  }

  /**
   * 取消监听全部
   * @returns {this}
   */
  offAll(): this {
    this.events = {}

    return this
  }
}
