import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 上古灵性: Feature = {
  key: '上古灵性',
  ancestry: Ancestry.jl,
  sixD: {
    perception: '15%',
  },
  properties: {
    lifetime: 75,
  },
}

export const 自然共感: Feature = {
  key: '自然共感',
  ancestry: Ancestry.jl,
  sixD: {
    perception: 12,
  },
  properties: {
    lifetime: 30,
  },
}

export const 专注之眸: Feature = {
  key: '专注之眸',
  ancestry: Ancestry.jl,
  sixD: {
    perception: 7,
    will: 7,
  },
  properties: {
    lifetime: 45,
  },
}

export const 神秘气质: Feature = {
  key: '神秘气质',
  ancestry: Ancestry.jl,
  sixD: {
    agility: 3,
  },
  properties: {
    lifetime: 15,
  },
}

export const 听风: Feature = {
  key: '听风',
  ancestry: Ancestry.jl,
  sixD: {},
  properties: {
    lifetime: 15,
    remoteSkewness: '30%',
  },
}

export const 弱视: Feature = {
  key: '弱视',
  ancestry: Ancestry.jl,
  sixD: {
    perception: 5,
  },
  properties: {
    lifetime: 20,
    hitRate: '-40%',
  },
}
