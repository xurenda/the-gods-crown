import { Feature } from '@/common/data/feature/types'
import { Profession } from '@/common/data/profession/types'
import sixDUtil, { handleInputSixD, sixDErr } from '@/common/data/role/sixDimensions/sixDUtil'
import { InputSixD, SixD } from '@/common/data/role/sixDimensions/types'

export function calcRole(role6D: InputSixD, roleGrowthAddition: SixD): void {
  handleInputSixD(role6D, ({ type, key, val }) => {
    switch (type) {
      case 'value':
        // TODO
        break
      case 'percentage':
        // TODO
        break
      case 'null':
      case 'percentage':
        throw sixDErr
    }
  })
}

export function calcFeature(featureArr: Feature[], featurePropertiesAddition: SixD, featurePercentageAddition: SixD): void {
  featureArr.forEach(({ sixD }) => {
    handleInputSixD(sixD, ({ type, key, val }) => {
      switch (type) {
        case 'percentage':
          featurePercentageAddition[key] += val
          break
        case 'value':
          featurePropertiesAddition[key] += val
          break
        case 'grade':
          throw sixDErr
      }
    })
  })
}

export function calcProfession(profession: Profession, professionPropertiesAddition: SixD, professionGrowthAddition: SixD): void {
  sixDUtil.addTo(professionPropertiesAddition, profession.Properties6D)
  sixDUtil.addTo(professionGrowthAddition, profession.Growth6D)
}

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
