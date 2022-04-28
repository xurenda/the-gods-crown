/**
 * 重步兵（P2）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const squareInfantry: Profession = {
  en: 'squareInfantry',
  cn: '方阵步兵',
  type: ProfessionType.heavyInfantry,
  grade: ProfessionGrade.P2,
  Growth6D: generateSixDFromArr([0.32, 0.51, 0.47, 0.15, 0, 0]),
}

export const heavyArmourGunner: Profession = {
  en: 'heavyArmourGunner',
  cn: '重甲枪兵',
  type: ProfessionType.heavyInfantry,
  grade: ProfessionGrade.P2,
  Growth6D: generateSixDFromArr([0.47, 0.58, 0.25, 0.15, 0, 0]),
}
