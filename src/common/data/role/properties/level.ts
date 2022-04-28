const MIN_LEVEL = 1
const MAX_LEVEL = 150
const LOW_GROWTH_LEVEL = 61
const NORMAL_GROWTH_COEFFICIENT = 1
const LOW_GROWTH_COEFFICIENT = 0.35

const levelErr = new Error('人物等级输入错误')

export type Level = [number, number]

/**
 * 校验输入等级
 */
export function adjustLevel(level: Level): Level {
  if (!Array.isArray(level)) {
    throw levelErr
  }

  let [startLevel, endLevel] = level

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
export function calcLevelWithCoefficient(level: Level): number {
  const [startLevel, endLevel] = adjustLevel(level)

  if (startLevel > LOW_GROWTH_LEVEL) {
    return LOW_GROWTH_COEFFICIENT * (endLevel - startLevel)
  }

  if (endLevel <= LOW_GROWTH_LEVEL) {
    return NORMAL_GROWTH_COEFFICIENT * (endLevel - startLevel)
  }

  return NORMAL_GROWTH_COEFFICIENT * (LOW_GROWTH_LEVEL - startLevel) + LOW_GROWTH_COEFFICIENT * (endLevel - LOW_GROWTH_LEVEL)
}
