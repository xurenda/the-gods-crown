import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 同类相食: Feature = {
  key: '同类相食',
  ancestry: Ancestry.gt,
  sixD: {
    power: '10%',
    agility: '5%',
  },
  properties: {
    lifetime: 15,
  },
}

export const 烂脸: Feature = {
  key: '烂脸',
  ancestry: Ancestry.gt,
  sixD: {
    power: 9,
    agility: 5,
  },
  properties: {
    lifetime: -5,
  },
}

export const 邪神之血: Feature = {
  key: '邪神之血',
  ancestry: Ancestry.gt,
  sixD: {},
  properties: {
    lifetime: 5,
    critRate: '15%',
    antiknockRate: '-7%',
  },
}

export const 嗜血本性: Feature = {
  key: '嗜血本性',
  ancestry: Ancestry.gt,
  sixD: {},
  properties: {
    aggressivity: 4,
  },
}

export const 海神诅咒: Feature = {
  key: '海神诅咒',
  ancestry: Ancestry.gt,
  sixD: {},
  properties: {
    lifetime: -10,
    aggressivity: 8,
    skewness: '-10%',
  },
}

export const 静脉曲张: Feature = {
  key: '静脉曲张',
  ancestry: Ancestry.gt,
  sixD: {
    power: 7,
  },
  properties: {
    lifetime: -10,
    life: -5,
    antiknockRate: '-10%',
  },
}
