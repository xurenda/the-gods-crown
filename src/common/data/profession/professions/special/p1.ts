/**
 * 特殊（P1）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const 自学巫师: Profession = {
  key: '自学巫师',
  type: ProfessionType.special,
  grade: ProfessionGrade.P1,
  Properties6D: generateSixDFromArr([0, 0, 2, 0.8, 3.4, 3.4]),
  Growth6D: generateSixDFromArr([0, 0.07, 0.165, 0.035, 0.195, 0.185]),
}
