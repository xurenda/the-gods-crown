/**
 * 骑兵（P3）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const 皇家骑士: Profession = {
  key: '皇家骑士',
  type: ProfessionType.cavalry,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([7, 5, 9, 2, 0, 0]),
  Growth6D: generateSixDFromArr([0.8, 0.6, 1, 0.2, 0, 0]),
}

export const 重装骑兵: Profession = {
  key: '重装骑兵',
  type: ProfessionType.cavalry,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([10, 8, 3, 1, 0, 0]),
  Growth6D: generateSixDFromArr([1.1, 0.9, 0.4, 0.2, 0, 0]),
}

export const 掠袭骑兵: Profession = {
  key: '掠袭骑兵',
  type: ProfessionType.cavalry,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([6, 5, 3, 9, 0, 0]),
  Growth6D: generateSixDFromArr([0.7, 0.5, 0.4, 1, 0, 0]),
}

export const 统御骑士: Profession = {
  key: '统御骑士',
  type: ProfessionType.cavalry,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([5, 5, 7, 1, 0, 4]),
  Growth6D: generateSixDFromArr([0.6, 0.65, 0.8, 0.1, 0, 0.45]),
}

export const 恐惧骑士: Profession = {
  key: '恐惧骑士',
  type: ProfessionType.cavalry,
  grade: ProfessionGrade.P3,
  Properties6D: generateSixDFromArr([10, 7, 2, 5, 0, 0]),
  Growth6D: generateSixDFromArr([1.05, 0.77, 0.26, 0.52, 0, 0]),
}
