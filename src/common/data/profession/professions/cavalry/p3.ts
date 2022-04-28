/**
 * 骑兵（P3）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const royalKnight: Profession = {
  en: 'royalKnight',
  cn: '皇家骑士',
  type: ProfessionType.cavalry,
  grade: ProfessionGrade.P3,
  Growth6D: generateSixDFromArr([0.8, 0.6, 1, 0.2, 0, 0]),
}

export const greatHeavyCavalry: Profession = {
  en: 'greatHeavyCavalry',
  cn: '重装骑兵',
  type: ProfessionType.cavalry,
  grade: ProfessionGrade.P3,
  Growth6D: generateSixDFromArr([1.1, 0.9, 0.4, 0.2, 0, 0]),
}

export const raidCavalry: Profession = {
  en: 'raidCavalry',
  cn: '掠袭骑兵',
  type: ProfessionType.cavalry,
  grade: ProfessionGrade.P3,
  Growth6D: generateSixDFromArr([0.7, 0.5, 0.4, 1, 0, 0]),
}

export const leadershipCavalry: Profession = {
  en: 'leadershipCavalry',
  cn: '统御骑士',
  type: ProfessionType.cavalry,
  grade: ProfessionGrade.P3,
  Growth6D: generateSixDFromArr([0.6, 0.65, 0.8, 0.1, 0, 0.45]),
}

export const fearCavalry: Profession = {
  en: 'fearCavalry',
  cn: '恐惧骑士',
  type: ProfessionType.cavalry,
  grade: ProfessionGrade.P3,
  Growth6D: generateSixDFromArr([1.05, 0.77, 0.26, 0.52, 0, 0]),
}
