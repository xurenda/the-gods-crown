export interface SixD {
  power: number
  constitution: number
  skill: number
  agility: number
  perception: number
  will: number
}

export interface SixDMaybePercentage {
  power: number | string
  constitution: number | string
  skill: number | string
  agility: number | string
  perception: number | string
  will: number | string
}

export type SixDArr = [number, number, number, number, number, number]

export interface Dimension {
  key: DimensionKey
  grade: DimensionGrade
  value: number
}

export type DimensionEn = 'power' | 'constitution' | 'skill' | 'agility' | 'perception' | 'will'
export type DimensionZn = '力量' | '体质' | '技巧' | '敏捷' | '感知' | '意志'

export enum DimensionKey {
  power = '力量',
  constitution = '体质',
  skill = '技巧',
  agility = '敏捷',
  perception = '感知',
  will = '意志',
}

export enum DimensionGrade {
  SSS = 'SSS',
  SS = 'SS',
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
}
