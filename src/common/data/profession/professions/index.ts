import { ProfessionType } from '../types'
import archerProfessionData from './archer'
import cavalryProfessionData from './cavalry'
import heavyInfantryProfessionData from './heavyInfantry'
import infantryProfessionData from './infantry'
import specialProfessionData from './special'

const professionData = {
  [ProfessionType.cavalry]: cavalryProfessionData,
  [ProfessionType.archer]: archerProfessionData,
  [ProfessionType.infantry]: infantryProfessionData,
  [ProfessionType.heavyInfantry]: heavyInfantryProfessionData,
  [ProfessionType.special]: specialProfessionData,
}

export default professionData
