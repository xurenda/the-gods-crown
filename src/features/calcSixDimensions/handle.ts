import { calcLevelWithCoefficient } from '@/common/data/role/properties/level'
import sixDUtil, { generateDefaultSixD } from '@/common/data/role/sixDimensions/sixDUtil'
import { SixD } from '@/common/data/role/sixDimensions/types'

// 职业属性加成
const professionPropertiesAddition: SixD = generateDefaultSixD()
// 角色成长加成
const roleGrowthAddition: SixD = generateDefaultSixD()
// 职业成长加成
const professionGrowthAddition: SixD = generateDefaultSixD()
// 特性属性加成
const featurePropertiesAddition: SixD = generateDefaultSixD()
// 特性百分比加成
const featurePercentageAddition: SixD = generateDefaultSixD()

export default function calcSixDimensions(startLevel: number, endLevel: number): SixD {
  const levelCoefficient = calcLevelWithCoefficient(startLevel, endLevel)

  let returnSixD = sixDUtil.add(
    professionPropertiesAddition,
    sixDUtil.multiply(roleGrowthAddition, levelCoefficient),
    sixDUtil.multiply(professionGrowthAddition, levelCoefficient),
    featurePropertiesAddition
  )
  returnSixD = sixDUtil.multiply(returnSixD, featurePercentageAddition)

  return returnSixD
}
