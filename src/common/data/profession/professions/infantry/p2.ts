/**
 * 步兵（P2）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const warrior: Profession = {
  en: 'warrior',
  cn: '勇士',
  type: ProfessionType.infantry,
  grade: ProfessionGrade.P2,
  Properties6D: generateSixDFromArr([8, 3, 1, 5, 0, 0]),
  Growth6D: generateSixDFromArr([0.58, 0.32, 0.15, 0.4, 0, 0]),
}

export const scout: Profession = {
  en: 'scout',
  cn: '斥候',
  type: ProfessionType.infantry,
  grade: ProfessionGrade.P2,
  Properties6D: generateSixDFromArr([2, 2, 5, 8, 0, 0]),
  Growth6D: generateSixDFromArr([0.25, 0.22, 0.4, 0.58, 0, 0]),
}
