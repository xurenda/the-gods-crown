export interface Profession {
  en: string
  cn: string
  type: ProfessionType
  grade: ProfessionGrade
}

export enum ProfessionType {
  cavalry = '骑兵',
  archer = '弓兵',
  infantry = '步兵',
  heavyInfantry = '重步兵',
  special = '特殊',
}

export enum ProfessionGrade {
  P1 = 'P1',
  P2 = 'P2',
  P3 = 'P3',
}
