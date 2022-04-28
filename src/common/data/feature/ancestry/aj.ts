import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 背叛烙印: Feature = {
  key: '背叛烙印',
  ancestry: Ancestry.aj,
  sixD: {
    power: 7,
    perception: 9,
  },
  properties: {
    lifetime: 60,
  },
}

export const 死亡讯息: Feature = {
  key: '死亡讯息',
  ancestry: Ancestry.aj,
  sixD: {
    power: '5%',
    perception: '10%',
  },
  properties: {
    lifetime: 25,
  },
}

export const 自然密码: Feature = {
  key: '自然密码',
  ancestry: Ancestry.aj,
  sixD: {},
  properties: {
    lifetime: 30,
    skewness: '30%',
    remoteSkewness: '30%',
  },
}

export const 潜伏的杀手: Feature = {
  key: '潜伏的杀手',
  ancestry: Ancestry.aj,
  sixD: {
    agility: 5,
    perception: 5,
  },
  properties: {
    lifetime: 15,
  },
}

export const 狩猎本能: Feature = {
  key: '狩猎本能',
  ancestry: Ancestry.aj,
  sixD: {
    power: 3,
  },
  properties: {
    lifetime: 15,
    aggressivity: 5,
  },
}

export const 退化: Feature = {
  key: '退化',
  ancestry: Ancestry.aj,
  sixD: {
    perception: 3,
  },
  properties: {
    hitRate: '-20%',
  },
}
