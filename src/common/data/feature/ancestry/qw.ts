import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 切瓦利王族圣痕: Feature = {
  key: '切瓦利王族圣痕',
  ancestry: Ancestry.qw,
  sixD: {
    power: 9,
    constitution: 5,
  },
  properties: {
    lifetime: 25,
  },
}

export const 欧里克的神力: Feature = {
  key: '欧里克的神力',
  ancestry: Ancestry.qw,
  sixD: {
    power: '10%',
  },
  properties: {
    lifetime: 15,
    aggressivity: 3,
  },
}

export const 欧里克的赐福: Feature = {
  key: '欧里克的赐福',
  ancestry: Ancestry.qw,
  sixD: {},
  properties: {
    lifetime: 10,
    life: 8,
    maxWeightBearing: 6,
  },
}

export const 雄师之力: Feature = {
  key: '雄师之力',
  ancestry: Ancestry.qw,
  sixD: {
    power: 5,
  },
  properties: {
    lifetime: 5,
  },
}

export const 非凡气质: Feature = {
  key: '非凡气质',
  ancestry: Ancestry.qw,
  sixD: {
    power: 3,
  },
  properties: {
    lifetime: 5,
  },
}

export const 哮喘: Feature = {
  key: '哮喘',
  ancestry: Ancestry.qw,
  sixD: {
    constitution: -3,
  },
  properties: {
    maxWeightBearing: -3,
  },
}
