/**
 * 特殊（P1）
 */

import { generateSixDFromArr } from '@/common/data/role/sixDimensions/sixDUtil'
import { Profession, ProfessionGrade, ProfessionType } from '../../types'

export const selfTaughtWizard: Profession = {
  en: 'selfTaughtWizard',
  cn: '自学巫师',
  type: ProfessionType.special,
  grade: ProfessionGrade.P1,
  Growth6D: generateSixDFromArr([0, 0.07, 0.165, 0.035, 0.195, 0.185]),
}
