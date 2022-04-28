import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 塞宁王族圣痕: Feature = {
  key: '塞宁王族圣痕',
  ancestry: Ancestry.sn,
  sixD: {
    power: 7,
    constitution: 3,
    skill: 7,
  },
  properties: {
    lifetime: 25,
  },
}

export const 太阳之子: Feature = {
  key: '太阳之子',
  ancestry: Ancestry.sn,
  sixD: {
    power: '5%',
    skill: '10%',
  },
  properties: {
    lifetime: 15,
  },
}

export const 金晴: Feature = {
  key: '金晴',
  ancestry: Ancestry.sn,
  sixD: {},
  properties: {
    lifetime: 10,
    hitRate: '30%',
  },
}

export const 王者气质: Feature = {
  key: '王者气质',
  ancestry: Ancestry.sn,
  sixD: {
    will: 3,
  },
  properties: {
    lifetime: 5,
  },
}

export const 弱点感应: Feature = {
  key: '弱点感应',
  ancestry: Ancestry.sn,
  sixD: {},
  properties: {
    lifetime: 5,
    critRate: '10%',
  },
}

export const 白化病: Feature = {
  key: '白化病',
  ancestry: Ancestry.sn,
  sixD: {
    constitution: -9,
    perception: 3,
  },
  properties: {},
}
