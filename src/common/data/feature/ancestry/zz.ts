import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 猎豹印记: Feature = {
  key: '猎豹印记',
  ancestry: Ancestry.zz,
  sixD: {
    agility: '10%',
  },
  properties: {
    lifetime: 15,
    meleeSkewness: '25%',
  },
}

export const 豹神: Feature = {
  key: '豹神',
  ancestry: Ancestry.zz,
  sixD: {
    agility: 12,
  },
  properties: {
    lifetime: 15,
  },
}

export const 猫瞳: Feature = {
  key: '猫瞳',
  ancestry: Ancestry.zz,
  sixD: {},
  properties: {
    lifetime: 5,
    hitRate: '15%',
    skewness: '15%',
  },
}

export const 夜色肌肤: Feature = {
  key: '夜色肌肤',
  ancestry: Ancestry.zz,
  sixD: {},
  properties: {
    lifetime: 5,
    antiknockRate: '15%',
    skewness: '15%',
  },
}

export const 黑豹化身: Feature = {
  key: '黑豹化身',
  ancestry: Ancestry.zz,
  sixD: {
    agility: 5,
  },
  properties: {
    lifetime: 5,
  },
}

export const 并指: Feature = {
  key: '并指',
  ancestry: Ancestry.zz,
  sixD: {
    skill: -7,
  },
  properties: {},
}
