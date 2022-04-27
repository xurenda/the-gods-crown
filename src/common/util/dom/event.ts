/**
 * 浏览器事件
 */

/**
 * 阻止事件的冒泡和浏览器的默认事件
 * @param e
 */
export function preventDefault(e: Event) {
  try {
    e.stopPropagation?.()
    e.preventDefault?.()
  } catch (error) {}
}
