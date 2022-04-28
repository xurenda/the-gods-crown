const MIN_LEVEL = 1
const MAX_LEVEL = 150
const LOW_GROWTH_LEVEL = 60
const NORMAL_GROWTH_COEFFICIENT = 1
const LOW_GROWTH_COEFFICIENT = 0.25

/**
 * 校验输入等级
 */
export function adjustLevel(level: number): number {
  if (typeof level !== 'number') {
    level = Number(level)
  }

  if (
    Number.isNaN(level) ||
    level % 1 !== 0 || // 非整数
    level < MIN_LEVEL ||
    level > MAX_LEVEL
  ) {
    throw new Error('人物等级输入错误')
  }

  return level
}

/**
 * 计算等级加成（成长）系数
 */
export function calcLevelWithCoefficient(level: number): number {
  level = adjustLevel(level)

  let normal: number
  let low: number
  if (level > LOW_GROWTH_LEVEL) {
    normal = LOW_GROWTH_LEVEL
    low = level - LOW_GROWTH_LEVEL
  } else {
    normal = level
    low = 0
  }

  return normal * NORMAL_GROWTH_COEFFICIENT + low * LOW_GROWTH_COEFFICIENT
}
