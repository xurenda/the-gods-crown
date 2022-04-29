import { DimensionEn, DimensionGrade, InputSixD, InputSixDHandler, SixD, SixDArr } from './types'

export const sixDErr = new Error('输入六维错误')

export function generateDefaultSixD(): SixD {
  return {
    power: 0,
    constitution: 0,
    skill: 0,
    agility: 0,
    perception: 0,
    will: 0,
  }
}

export function generateSixDFromArr(arr: SixDArr): SixD {
  const [power, constitution, skill, agility, perception, will] = arr

  return {
    power,
    constitution,
    skill,
    agility,
    perception,
    will,
  }
}

export function cloneSixD(sixD: SixD): SixD {
  return {
    power: sixD.power,
    constitution: sixD.constitution,
    skill: sixD.skill,
    agility: sixD.agility,
    perception: sixD.perception,
    will: sixD.will,
  }
}

export function handleInputSixD(sixD: Partial<InputSixD>, cb: (info: InputSixDHandler) => void): void {
  ;['power', 'constitution', 'skill', 'agility', 'perception', 'will'].forEach(key => {
    const val = sixD[key as keyof InputSixD]

    if (val == null) {
      cb({
        type: 'null',
        key: key as DimensionEn,
        val: 0,
      })
    } else if (typeof val === 'string') {
      if (DimensionGrade[val as keyof typeof DimensionGrade]) {
        cb({
          type: 'grade',
          key: key as DimensionEn,
          val: val as DimensionGrade,
        })
        return
      }

      if (!val.endsWith('%')) throw sixDErr
      const percentageVal = Number(val.slice(0, -1)) / 100
      if (Number.isNaN(percentageVal)) throw sixDErr

      cb({
        type: 'percentage',
        key: key as DimensionEn,
        val: percentageVal,
      })
    } else if (typeof val === 'number') {
      cb({
        type: 'value',
        key: key as DimensionEn,
        val,
      })
    } else {
      throw sixDErr
    }
  })
}

const sixDUtil = {
  add(...sixDs: SixD[]): SixD {
    const returnSixD = generateDefaultSixD()

    sixDs.forEach(sixD => {
      const { power, constitution, skill, agility, perception, will } = sixD
      returnSixD.power += power
      returnSixD.constitution += constitution
      returnSixD.skill += skill
      returnSixD.agility += agility
      returnSixD.perception += perception
      returnSixD.will += will
    })

    return returnSixD
  },

  addTo(targetSixD: SixD, ...sourceSixDs: SixD[]): void {
    sourceSixDs.forEach(sixD => {
      const { power, constitution, skill, agility, perception, will } = sixD
      targetSixD.power += power
      targetSixD.constitution += constitution
      targetSixD.skill += skill
      targetSixD.agility += agility
      targetSixD.perception += perception
      targetSixD.will += will
    })
  },

  multiply(sixD: SixD, multiplier: number | SixD): SixD {
    const returnSixD = cloneSixD(sixD)

    if (typeof multiplier === 'number') {
      returnSixD.power *= multiplier
      returnSixD.constitution *= multiplier
      returnSixD.skill *= multiplier
      returnSixD.agility *= multiplier
      returnSixD.perception *= multiplier
      returnSixD.will *= multiplier
    } else {
      returnSixD.power *= 1 + multiplier.power
      returnSixD.constitution *= 1 + multiplier.constitution
      returnSixD.skill *= 1 + multiplier.skill
      returnSixD.agility *= 1 + multiplier.agility
      returnSixD.perception *= 1 + multiplier.perception
      returnSixD.will *= 1 + multiplier.will
    }

    return returnSixD
  },
}

export default sixDUtil
