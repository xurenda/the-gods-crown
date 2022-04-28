import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 希尔王族圣痕: Feature = {
  key: '希尔王族圣痕',
  ancestry: Ancestry.xr,
  sixD: {
    constitution: 9,
    skill: 5,
  },
  properties: {
    lifetime: 25,
  },
}

export const 超人体格: Feature = {
  key: '超人体格',
  ancestry: Ancestry.xr,
  sixD: {
    constitution: '10%',
  },
  properties: {
    lifetime: 15,
    life: 7,
  },
}

export const 高地人的自傲: Feature = {
  key: '高地人的自傲',
  ancestry: Ancestry.xr,
  sixD: {},
  properties: {
    lifetime: 10,
    life: 12,
    maxWeightBearing: 3,
  },
}

export const 高地人的体格: Feature = {
  key: '高地人的体格',
  ancestry: Ancestry.xr,
  sixD: {
    constitution: 5,
  },
  properties: {
    lifetime: 5,
  },
}

export const 高地人的耐力: Feature = {
  key: '高地人的耐力',
  ancestry: Ancestry.xr,
  sixD: {
    constitution: 3,
  },
  properties: {
    lifetime: 5,
    maxWeightBearing: 6,
  },
}

export const 高地人的鲁莽: Feature = {
  key: '高地人的鲁莽',
  ancestry: Ancestry.xr,
  sixD: {},
  properties: {
    life: 7,
    hitRate: '-30%',
  },
}
