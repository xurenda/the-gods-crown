/**
 * 日期格式化
 */
export function dateFormat(date: Date, format: string): string {
  let ret: RegExpExecArray | null = null
  const opt = {
    'Y+': date.getFullYear().toString(), // 年
    'M+': (date.getMonth() + 1).toString(), // 月
    'd+': date.getDate().toString(), // 日
    'H+': date.getHours().toString(), // 时
    'm+': date.getMinutes().toString(), // 分
    's+': date.getSeconds().toString(), // 秒
    'S+': date.getMilliseconds().toString() // 毫秒
  }

  for (let k in opt) {
    const val = opt[k as keyof typeof opt]
    ret = new RegExp('(' + k + ')').exec(format)

    if (ret) {
      format = format.replace(ret[1], ret[1].length === 1 ? val : val.padStart(ret[1].length, '0'))
    }
  }

  return format
}
