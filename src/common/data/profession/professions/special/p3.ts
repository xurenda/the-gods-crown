/**
 * 特殊（P3）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const 大德鲁伊: Profession = {
  key: '大德鲁伊',
  type: ProfessionType.special,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([0, 1, 0, 3, 15, 9]),
  Growth6D: generateSixDFromArr([0, 0.2, 0, 0.32, 1.3, 0.78]),
}

export const 主教: Profession = {
  key: '主教',
  type: ProfessionType.special,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([0, 2, 0, 1, 10, 15]),
  Growth6D: generateSixDFromArr([0, 0.26, 0, 0.13, 0.91, 1.3]),
}

export const 帝国密使: Profession = {
  key: '帝国密使',
  type: ProfessionType.special,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([0, 3, 0, 0, 12, 13]),
  Growth6D: generateSixDFromArr([0, 0.34, 0, 0, 1.13, 1.13]),
}

export const 炼金术士: Profession = {
  key: '炼金术士',
  type: ProfessionType.special,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([0, 3, 7, 1, 5, 11]),
  Growth6D: generateSixDFromArr([0, 0.4, 0.58, 0.19, 0.52, 0.91]),
}

export const 吟游诗人: Profession = {
  key: '吟游诗人',
  type: ProfessionType.special,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([0, 2, 0, 5, 12, 4]),
  Growth6D: generateSixDFromArr([0, 0.255, 0, 0.59, 1.3, 0.455]),
}
