/**
 * 重步兵（P3）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const royalGuards: Profession = {
  en: 'royalGuards',
  cn: '王室禁卫',
  type: ProfessionType.heavyInfantry,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([5, 12, 8, 1, 0, 0]),
  Growth6D: generateSixDFromArr([0.6, 1, 0.85, 0.15, 0, 0]),
}

export const armoredSergeant: Profession = {
  en: 'armoredSergeant',
  cn: '铁甲军士',
  type: ProfessionType.heavyInfantry,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([8, 13, 4, 1, 0, 0]),
  Growth6D: generateSixDFromArr([0.85, 1.1, 0.45, 0.2, 0, 0]),
}

export const templeIronGuard: Profession = {
  en: 'templeIronGuard',
  cn: '圣堂铁卫',
  type: ProfessionType.heavyInfantry,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([7, 11, 3, 1, 0, 4]),
  Growth6D: generateSixDFromArr([0.8, 0.85, 0.3, 0.2, 0, 0.45]),
}

export const heavyArmourMonk: Profession = {
  en: 'heavyArmourMonk',
  cn: '重甲僧侣',
  type: ProfessionType.heavyInfantry,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([3, 11, 1, 1, 3, 6]),
  Growth6D: generateSixDFromArr([0.32, 0.84, 0.2, 0.19, 0.4, 0.65]),
}
