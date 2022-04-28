import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 共感之眼: Feature = {
  key: '共感之眼',
  ancestry: Ancestry.rg,
  sixD: {
    skill: '5%',
    agility: '5%',
    will: '5%',
  },
  properties: {
    lifetime: 15,
  },
}

export const 天空馈赠: Feature = {
  key: '天空馈赠',
  ancestry: Ancestry.rg,
  sixD: {
    skill: 5,
    agility: 9,
  },
  properties: {
    lifetime: 15,
  },
}

export const 火山威严: Feature = {
  key: '火山威严',
  ancestry: Ancestry.rg,
  sixD: {},
  properties: {
    lifetime: 10,
    critRate: '10%',
    antiknockRate: '10%',
  },
}

export const 大地之力: Feature = {
  key: '大地之力',
  ancestry: Ancestry.rg,
  sixD: {
    constitution: 3,
  },
  properties: {
    lifetime: 10,
    life: 7,
  },
}

export const 游说家: Feature = {
  key: '游说家',
  ancestry: Ancestry.rg,
  sixD: {
    skill: 3,
  },
  properties: {
    lifetime: 5,
  },
}

export const 畸形: Feature = {
  key: '畸形',
  ancestry: Ancestry.rg,
  sixD: {
    skill: -3,
  },
  properties: {},
}
