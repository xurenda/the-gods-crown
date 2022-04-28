import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 顺风耳: Feature = {
  key: '顺风耳',
  ancestry: Ancestry.dh,
  sixD: {
    power: 5,
    agility: 9,
  },
  properties: {
    lifetime: 25,
  },
}

export const 哈苏汉之子: Feature = {
  key: '哈苏汉之子',
  ancestry: Ancestry.dh,
  sixD: {},
  properties: {
    aggressivity: 4,
    critRate: '10%',
  },
}

export const 草原之子: Feature = {
  key: '草原之子',
  ancestry: Ancestry.dh,
  sixD: {},
  properties: {
    lifetime: 10,
    life: 7,
    antiknockRate: '15%',
  },
}

export const 游牧人的自傲: Feature = {
  key: '游牧人的自傲',
  ancestry: Ancestry.dh,
  sixD: {
    skill: -3,
    agility: 5,
  },
  properties: {
    lifetime: 10,
    antiknockRate: '10%',
  },
}

export const 天生善战: Feature = {
  key: '天生善战',
  ancestry: Ancestry.dh,
  sixD: {},
  properties: {
    life: 5,
    aggressivity: 2,
  },
}

export const 耳聋: Feature = {
  key: '耳聋',
  ancestry: Ancestry.dh,
  sixD: {},
  properties: {
    remoteSkewness: '-45%',
  },
}
