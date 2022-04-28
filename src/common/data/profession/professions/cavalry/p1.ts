/**
 * 骑兵（P1）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const 见习骑手: Profession = {
  key: '见习骑手',
  type: ProfessionType.cavalry,
  grade: ProfessionGrade.P1,
  Properties6D: generateSixDFromArr([2, 2, 2, 1, 0, 0]),
  Growth6D: generateSixDFromArr([0.23, 0.165, 0.15, 0.105, 0, 0]),
}
