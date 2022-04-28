/**
 * 特殊（P2）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const druid: Profession = {
  en: 'druid',
  cn: '德鲁伊',
  type: ProfessionType.special,
  grade: ProfessionGrade.P2,
  Growth6D: generateSixDFromArr([0, 0.22, 0, 0.07, 0.73, 0.44]),
}

export const minister: Profession = {
  en: 'minister',
  cn: '牧师',
  type: ProfessionType.special,
  grade: ProfessionGrade.P2,
  Growth6D: generateSixDFromArr([0, 0.15, 0, 0.07, 0.51, 0.73]),
}
