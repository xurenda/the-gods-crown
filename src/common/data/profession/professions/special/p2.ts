/**
 * 特殊（P2）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const 德鲁伊: Profession = {
  key: '德鲁伊',
  type: ProfessionType.special,
  grade: ProfessionGrade.P2,
  Properties6D: generateSixDFromArr([0, 2, 0, 0, 10, 5]),
  Growth6D: generateSixDFromArr([0, 0.22, 0, 0.07, 0.73, 0.44]),
}

export const 牧师: Profession = {
  key: '牧师',
  type: ProfessionType.special,
  grade: ProfessionGrade.P2,
  Properties6D: generateSixDFromArr([0, 1, 0, 0, 6, 10]),
  Growth6D: generateSixDFromArr([0, 0.15, 0, 0.07, 0.51, 0.73]),
}
