import { Ancestry } from '../../role/properties/ancestry'
import { Feature } from '../types'

export const 天神转世: Feature = {
  key: '天神转世',
  ancestry: Ancestry.hc,
  sixD: {
    power: 6,
    skill: 6,
    agility: 6,
  },
  properties: {
    lifetime: 60,
  },
}

export const 吉人天相: Feature = {
  key: '吉人天相',
  ancestry: Ancestry.hc,
  sixD: {
    agility: '10%',
    perception: '5%',
  },
  properties: {
    lifetime: 40,
  },
}

export const 聪慧: Feature = {
  key: '聪慧',
  ancestry: Ancestry.hc,
  sixD: {
    skill: 3,
  },
  properties: {
    lifetime: 5,
    experienceAcquisition: '15%',
  },
}

export const 福相: Feature = {
  key: '福相',
  ancestry: Ancestry.hc,
  sixD: {},
  properties: {
    lifetime: 10,
    skewness: '45%',
  },
}

export const 风的伙伴: Feature = {
  key: '风的伙伴',
  ancestry: Ancestry.hc,
  sixD: {
    power: -5,
  },
  properties: {
    lifetime: 5,
    hitRate: '25%',
    skewness: '25%',
  },
}

export const 大智若愚: Feature = {
  key: '大智若愚',
  ancestry: Ancestry.hc,
  sixD: {
    agility: -3,
  },
  properties: {
    experienceAcquisition: '15%',
    skewness: '-15%',
  },
}
