import { SixD } from './../role/sixDimensions/types'
export interface Profession {
  key: string
  type: ProfessionType
  grade: ProfessionGrade
  Properties6D: SixD
  Growth6D: SixD
}

export enum ProfessionType {
  cavalry = '骑兵',
  archer = '弓兵',
  infantry = '步兵',
  heavyInfantry = '重步兵',
  special = '特殊',
}

export enum ProfessionGrade {
  P1 = '一转',
  P2 = '二转',
  P3 = '三转',
}
