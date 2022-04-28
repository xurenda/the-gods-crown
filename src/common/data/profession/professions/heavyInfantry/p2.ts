/**
 * 重步兵（P2）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const 方阵步兵: Profession = {
  key: '方阵步兵',
  type: ProfessionType.heavyInfantry,
  grade: ProfessionGrade.P2,
  Properties6D: generateSixDFromArr([3, 7, 5, 1, 0, 0]),
  Growth6D: generateSixDFromArr([0.32, 0.51, 0.47, 0.15, 0, 0]),
}

export const 重甲枪兵: Profession = {
  key: '重甲枪兵',
  type: ProfessionType.heavyInfantry,
  grade: ProfessionGrade.P2,
  Properties6D: generateSixDFromArr([5, 8, 2, 1, 0, 0]),
  Growth6D: generateSixDFromArr([0.47, 0.58, 0.25, 0.15, 0, 0]),
}
