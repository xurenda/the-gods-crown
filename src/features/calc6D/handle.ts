import sixDUtil from '@/common/data/role/sixDimensions/sixDUtil'
import { SixD } from '@/common/data/role/sixDimensions/types'

export function calcRole(roleGrowthAddition: SixD): void {}

export function calcFeature(featurePropertiesAddition: SixD, featurePercentageAddition: SixD): void {}

export function calcProfession(professionPropertiesAddition: SixD, professionGrowthAddition: SixD): void {}

export function finalCalc(
  levelCoefficient: number,
  professionPropertiesAddition: SixD,
  featurePropertiesAddition: SixD,
  roleGrowthAddition: SixD,
  professionGrowthAddition: SixD,
  featurePercentageAddition: SixD
): SixD {
  let returnSixD = sixDUtil.add(
    professionPropertiesAddition,
    featurePropertiesAddition,
    sixDUtil.multiply(roleGrowthAddition, levelCoefficient),
    sixDUtil.multiply(professionGrowthAddition, levelCoefficient)
  )
  returnSixD = sixDUtil.multiply(returnSixD, featurePercentageAddition)

  return returnSixD
}
