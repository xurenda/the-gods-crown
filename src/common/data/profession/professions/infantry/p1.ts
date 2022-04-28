/**
 * 步兵（P1）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const recruit: Profession = {
  en: 'recruit',
  cn: '新兵',
  type: ProfessionType.infantry,
  grade: ProfessionGrade.P1,
  Growth6D: generateSixDFromArr([0.123, 0.123, 0.123, 0.123, 0, 0]),
}

export const lightInfantry: Profession = {
  en: 'lightInfantry',
  cn: '轻步兵',
  type: ProfessionType.infantry,
  grade: ProfessionGrade.P1,
  Growth6D: generateSixDFromArr([0.205, 0.105, 0.11, 0.23, 0, 0]),
}
