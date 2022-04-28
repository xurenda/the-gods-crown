import { Ancestry } from '../role/properties/ancestry'
import { Properties } from '../role/properties/types'
import { SixDMaybePercentage } from '../role/sixDimensions/types'

export interface Feature {
  key: string
  ancestry: Ancestry | 'any'
  sixD: Partial<SixDMaybePercentage>
  properties: Partial<Properties>
}
