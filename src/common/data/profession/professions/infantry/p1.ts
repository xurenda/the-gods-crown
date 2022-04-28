/**
 * 步兵（P1）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const 新兵: Profession = {
  key: '新兵',
  type: ProfessionType.infantry,
  grade: ProfessionGrade.P1,
  Properties6D: generateSixDFromArr([1, 1, 1, 1, 0, 0]),
  Growth6D: generateSixDFromArr([0.123, 0.123, 0.123, 0.123, 0, 0]),
}

export const 轻步兵: Profession = {
  key: '轻步兵',
  type: ProfessionType.infantry,
  grade: ProfessionGrade.P1,
  Properties6D: generateSixDFromArr([2, 1, 2, 3, 0, 0]),
  Growth6D: generateSixDFromArr([0.205, 0.105, 0.11, 0.23, 0, 0]),
}
