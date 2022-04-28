import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 佩尔弗因王族圣痕: Feature = {
  key: '佩尔弗因王族圣痕',
  ancestry: Ancestry.pr,
  sixD: {
    power: 5,
    skill: 9,
  },
  properties: {
    lifetime: 25,
  },
}

export const 科内塔之怒: Feature = {
  key: '科内塔之怒',
  ancestry: Ancestry.pr,
  sixD: {
    skill: '5%',
  },
  properties: {
    lifetime: 15,
    hitRate: '10%',
    critRate: '10%',
  },
}

export const 虎牙: Feature = {
  key: '虎牙',
  ancestry: Ancestry.pr,
  sixD: {},
  properties: {
    lifetime: 10,
    critRate: '15%',
  },
}

export const 鹰眉: Feature = {
  key: '鹰眉',
  ancestry: Ancestry.pr,
  sixD: {
    skill: 3,
  },
  properties: {
    lifetime: 5,
  },
}

export const 平衡感: Feature = {
  key: '平衡感',
  ancestry: Ancestry.pr,
  sixD: {},
  properties: {
    lifetime: 5,
    hitRate: '20%',
  },
}

export const 潜伏兽性: Feature = {
  key: '潜伏兽性',
  ancestry: Ancestry.pr,
  sixD: {
    will: -9,
  },
  properties: {
    aggressivity: 2,
  },
}
