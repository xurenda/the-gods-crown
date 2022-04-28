/**
 * 步兵（P3）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const berserker: Profession = {
  en: 'berserker',
  cn: '狂战士',
  type: ProfessionType.infantry,
  grade: ProfessionGrade.P3,
  Growth6D: generateSixDFromArr([1.04, 0.58, 0.26, 0.72, 0, 0]),
}

export const bigSwordsmen: Profession = {
  en: 'bigSwordsmen',
  cn: '大剑士',
  type: ProfessionType.infantry,
  grade: ProfessionGrade.P3,
  Growth6D: generateSixDFromArr([0.98, 0.51, 0.78, 0.33, 0, 0]),
}

export const assassin: Profession = {
  en: 'assassin',
  cn: '刺客',
  type: ProfessionType.infantry,
  grade: ProfessionGrade.P3,
  Growth6D: generateSixDFromArr([0.25, 0.25, 1, 1.1, 0, 0]),
}

export const gladiator: Profession = {
  en: 'gladiator',
  cn: '决斗士',
  type: ProfessionType.infantry,
  grade: ProfessionGrade.P3,
  Growth6D: generateSixDFromArr([0.6, 0.3, 1.05, 0.65, 0, 0]),
}

export const nightMilitia: Profession = {
  en: 'nightMilitia',
  cn: '暗夜刀客',
  type: ProfessionType.infantry,
  grade: ProfessionGrade.P3,
  Growth6D: generateSixDFromArr([0.58, 0.235, 0, 0.655, 1.13, 0]),
}

export const bladeMaster: Profession = {
  en: 'bladeMaster',
  cn: '剑圣',
  type: ProfessionType.infantry,
  grade: ProfessionGrade.P3,
  Growth6D: generateSixDFromArr([0.79, 0.19, 0.58, 1.04, 0, 0]),
}
