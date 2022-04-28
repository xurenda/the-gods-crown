import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 自然之灵: Feature = {
  key: '自然之灵',
  ancestry: Ancestry.fl,
  sixD: {
    skill: '10%',
  },
  properties: {
    lifetime: 30,
    skewness: '20%',
  },
}

export const 森林之子: Feature = {
  key: '森林之子',
  ancestry: Ancestry.fl,
  sixD: {
    skill: 9,
    agility: 5,
  },
  properties: {
    lifetime: 10,
  },
}

export const 洞察万物: Feature = {
  key: '洞察万物',
  ancestry: Ancestry.fl,
  sixD: {},
  properties: {
    lifetime: 20,
    remoteHitRate: '30%',
  },
}

export const 自然灵巧: Feature = {
  key: '自然灵巧',
  ancestry: Ancestry.fl,
  sixD: {
    skill: 5,
  },
  properties: {
    lifetime: 5,
  },
}

export const 贤者气度: Feature = {
  key: '贤者气度',
  ancestry: Ancestry.fl,
  sixD: {
    perception: 3,
  },
  properties: {
    lifetime: 5,
  },
}

export const 返祖: Feature = {
  key: '返祖',
  ancestry: Ancestry.fl,
  sixD: {},
  properties: {
    critRate: '-3%',
  },
}
