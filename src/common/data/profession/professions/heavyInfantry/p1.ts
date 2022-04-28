/**
 * 重步兵（P1）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const heavyInfantry: Profession = {
  en: 'heavyInfantry',
  cn: '重步兵',
  type: ProfessionType.heavyInfantry,
  grade: ProfessionGrade.P1,
  Growth6D: generateSixDFromArr([0.19, 0.23, 0.17, 0.06, 0, 0]),
}
