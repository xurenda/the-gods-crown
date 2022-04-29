import { Feature } from '@/common/data/feature/types'
import { Profession } from '@/common/data/profession/types'
import { calcLevelWithCoefficient, Level } from '@/common/data/role/properties/level'
import { generateDefaultSixD } from '@/common/data/role/sixDimensions/sixDUtil'
import { InputSixD, SixD } from '@/common/data/role/sixDimensions/types'
import { calcFeature, calcProfession, calcRole, finalCalc } from './handle'

export default function calc6D(level: Level, role6D: InputSixD, featureArr: Feature[], profession: Profession) {
  // 等级加成系数
  const levelCoefficient = calcLevelWithCoefficient(level)

  // 职业属性加成
  const professionPropertiesAddition: SixD = generateDefaultSixD()
  // 特性属性加成
  const featurePropertiesAddition: SixD = generateDefaultSixD()
  // 角色成长加成
  const roleGrowthAddition: SixD = generateDefaultSixD()
  // 职业成长加成
  const professionGrowthAddition: SixD = generateDefaultSixD()
  // 特性百分比加成
  const featurePercentageAddition: SixD = generateDefaultSixD()

  // 计算角色加成
  calcRole(role6D, roleGrowthAddition)

  // 计算特性加成
  calcFeature(featureArr, featurePropertiesAddition, featurePercentageAddition)

  // 计算职业加成
  calcProfession(profession, professionPropertiesAddition, professionGrowthAddition)

  // 最终计算
  return finalCalc(
    levelCoefficient,
    professionPropertiesAddition,
    featurePropertiesAddition,
    roleGrowthAddition,
    professionGrowthAddition,
    featurePercentageAddition
  )
}
