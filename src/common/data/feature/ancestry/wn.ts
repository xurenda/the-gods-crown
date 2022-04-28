import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 神秘庇佑: Feature = {
  key: '神秘庇佑',
  ancestry: Ancestry.wn,
  sixD: {
    perception: '5%',
    will: '10%',
  },
  properties: {
    lifetime: 25,
  },
}

export const 恶魔交易: Feature = {
  key: '恶魔交易',
  ancestry: Ancestry.wn,
  sixD: {
    will: 12,
  },
  properties: {
    lifetime: 15,
  },
}

export const 复仇之眼: Feature = {
  key: '复仇之眼',
  ancestry: Ancestry.wn,
  sixD: {
    skill: 5,
    perception: 9,
  },
  properties: {
    lifetime: 10,
  },
}

export const 恶魔低语: Feature = {
  key: '恶魔低语',
  ancestry: Ancestry.wn,
  sixD: {
    perception: 5,
  },
  properties: {
    lifetime: 5,
  },
}

export const 坚韧体质: Feature = {
  key: '坚韧体质',
  ancestry: Ancestry.wn,
  sixD: {},
  properties: {
    antiknockRate: '15%',
  },
}

export const 高度近视: Feature = {
  key: '高度近视',
  ancestry: Ancestry.wn,
  sixD: {},
  properties: {
    skewness: '-30%',
  },
}
