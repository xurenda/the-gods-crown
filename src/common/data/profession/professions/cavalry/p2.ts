/**
 * 骑兵（P2）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const lightCavalry: Profession = {
  en: 'lightCavalry',
  cn: '轻骑兵',
  type: ProfessionType.cavalry,
  grade: ProfessionGrade.P2,
  Properties6D: generateSixDFromArr([4, 3, 6, 1, 0, 0]),
  Growth6D: generateSixDFromArr([0.44, 0.32, 0.54, 0.15, 0, 0]),
}

export const heavyCavalry: Profession = {
  en: 'heavyCavalry',
  cn: '重骑兵',
  type: ProfessionType.cavalry,
  grade: ProfessionGrade.P2,
  Properties6D: generateSixDFromArr([6, 5, 2, 1, 0, 0]),
  Growth6D: generateSixDFromArr([0.54, 0.51, 0.25, 0.15, 0, 0]),
}
