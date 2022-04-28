/**
 * 弓兵（P3）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const longBowman: Profession = {
  en: 'longBowman',
  cn: '长弓手',
  type: ProfessionType.archer,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([8, 2, 10, 3, 0, 0]),
  Growth6D: generateSixDFromArr([0.85, 0.25, 1.1, 0.4, 0, 0]),
}

export const ranger: Profession = {
  en: 'ranger',
  cn: '游侠',
  type: ProfessionType.archer,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([4, 2, 10, 8, 0, 0]),
  Growth6D: generateSixDFromArr([0.45, 0.25, 1.05, 0.85, 0, 0]),
}

export const shieldCrossbowman: Profession = {
  en: 'shieldCrossbowman',
  cn: '盾弩手',
  type: ProfessionType.archer,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([5, 7, 9, 2, 0, 0]),
  Growth6D: generateSixDFromArr([0.55, 0.8, 1, 0.25, 0, 0]),
}

export const heavyCrossbowman: Profession = {
  en: 'heavyCrossbowman',
  cn: '重弩手',
  type: ProfessionType.archer,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([6, 8, 7, 1, 0, 0]),
  Growth6D: generateSixDFromArr([0.7, 0.9, 0.8, 0.2, 0, 0]),
}
