import { Ancestry } from '../role/properties/ancestry'
import { Properties } from '../role/properties/types'
import { InputSixD } from '../role/sixDimensions/types'

export interface Feature {
  key: string
  ancestry?: Ancestry
  sixD: Partial<InputSixD>
  properties: Partial<Properties>
}
