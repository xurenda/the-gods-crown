const MIN_LEVEL = 1
const MAX_LEVEL = 150
const LOW_GROWTH_LEVEL = 60
const NORMAL_GROWTH_COEFFICIENT = 1
const LOW_GROWTH_COEFFICIENT = 0.25

const levelErr = new Error('人物等级输入错误')

/**
 * 校验输入等级
 */
export function adjustLevel(startLevel: number, endLevel: number): [number, number] {
  if (typeof startLevel !== 'number') {
    startLevel = Number(startLevel)
  }

  if (
    Number.isNaN(startLevel) ||
    startLevel % 1 !== 0 || // 非整数
    startLevel < MIN_LEVEL ||
    startLevel > MAX_LEVEL
  ) {
    throw levelErr
  }

  if (typeof endLevel !== 'number') {
    endLevel = Number(endLevel)
  }

  if (
    Number.isNaN(endLevel) ||
    endLevel % 1 !== 0 || // 非整数
    endLevel < MIN_LEVEL ||
    endLevel > MAX_LEVEL
  ) {
    throw levelErr
  }

  if (startLevel > endLevel) {
    throw levelErr
  }

  return [startLevel, endLevel]
}

/**
 * 计算等级加成（成长）系数
 */
export function calcLevelWithCoefficient(startLevel: number, endLevel: number): number {
  ;[startLevel, endLevel] = adjustLevel(startLevel, endLevel)

  if (startLevel > LOW_GROWTH_LEVEL) {
    return LOW_GROWTH_COEFFICIENT * (endLevel - startLevel)
  }

  if (endLevel <= LOW_GROWTH_LEVEL) {
    return NORMAL_GROWTH_COEFFICIENT * (endLevel - startLevel)
  }

  return NORMAL_GROWTH_COEFFICIENT * (LOW_GROWTH_LEVEL - startLevel) + LOW_GROWTH_COEFFICIENT * (endLevel - LOW_GROWTH_LEVEL)
}
