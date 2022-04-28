import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 审判之眼: Feature = {
  key: '审判之眼',
  ancestry: Ancestry.mx,
  sixD: {
    constitution: '5%',
    will: '10%',
  },
  properties: {
    lifetime: 25,
  },
}

export const 燃烧意志: Feature = {
  key: '燃烧意志',
  ancestry: Ancestry.mx,
  sixD: {
    constitution: 7,
    will: 9,
  },
  properties: {
    lifetime: 15,
  },
}

export const 霸气: Feature = {
  key: '霸气',
  ancestry: Ancestry.mx,
  sixD: {
    constitution: 3,
  },
  properties: {
    lifetime: 5,
  },
}

export const 炯炯有神: Feature = {
  key: '炯炯有神',
  ancestry: Ancestry.mx,
  sixD: {
    will: 5,
  },
  properties: {
    lifetime: 10,
  },
}

export const 炎发: Feature = {
  key: '炎发',
  ancestry: Ancestry.mx,
  sixD: {},
  properties: {
    life: 10,
    aggressivity: 3,
  },
}

export const 早衰: Feature = {
  key: '早衰',
  ancestry: Ancestry.mx,
  sixD: {
    power: -3,
  },
  properties: {
    lifetime: -15,
  },
}
