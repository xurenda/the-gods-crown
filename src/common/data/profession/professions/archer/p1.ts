/**
 * 弓兵（P1）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const 猎人: Profession = {
  key: '猎人',
  type: ProfessionType.archer,
  grade: ProfessionGrade.P1,
  Properties6D: generateSixDFromArr([1, 1, 3, 2, 0, 0]),
  Growth6D: generateSixDFromArr([0.11, 0.11, 0.23, 0.2, 0, 0]),
}
