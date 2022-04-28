import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 弗莱德里王族圣痕: Feature = {
  key: '弗莱德里王族圣痕',
  ancestry: Ancestry.nt,
  sixD: {
    constitution: 12,
  },
  properties: {
    lifetime: 25,
  },
}

export const 瓦斯提亚后裔: Feature = {
  key: '瓦斯提亚后裔',
  ancestry: Ancestry.nt,
  sixD: {
    constitution: '10%',
    will: '5%',
  },
  properties: {
    lifetime: 15,
  },
}

export const 索弗利夫的坚毅: Feature = {
  key: '索弗利夫的坚毅',
  ancestry: Ancestry.nt,
  sixD: {},
  properties: {
    lifetime: 10,
    life: 15,
  },
}

export const 钢肺: Feature = {
  key: '钢肺',
  ancestry: Ancestry.nt,
  sixD: {
    constitution: 3,
  },
  properties: {
    lifetime: 5,
    maxWeightBearing: 3,
  },
}

export const 严肃: Feature = {
  key: '严肃',
  ancestry: Ancestry.nt,
  sixD: {
    perception: -3,
    will: 5,
  },
  properties: {
    lifetime: 5,
    antiknockRate: '10%',
  },
}

export const 血友病: Feature = {
  key: '血友病',
  ancestry: Ancestry.nt,
  sixD: {},
  properties: {
    life: -10,
  },
}
