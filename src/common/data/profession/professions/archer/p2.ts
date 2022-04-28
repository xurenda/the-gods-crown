/**
 * 弓兵（P2）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const 弓箭手: Profession = {
  key: '弓箭手',
  type: ProfessionType.archer,
  grade: ProfessionGrade.P2,
  Properties6D: generateSixDFromArr([2, 1, 6, 5, 0, 0]),
  Growth6D: generateSixDFromArr([0.25, 0.15, 0.58, 0.47, 0, 0]),
}

export const 弩手: Profession = {
  key: '弩手',
  type: ProfessionType.archer,
  grade: ProfessionGrade.P2,
  Properties6D: generateSixDFromArr([2, 3, 4, 1, 0, 0]),
  Growth6D: generateSixDFromArr([0.33, 0.43, 0.54, 0.15, 0, 0]),
}
