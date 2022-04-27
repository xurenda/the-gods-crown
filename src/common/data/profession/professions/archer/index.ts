import { ProfessionGrade } from '../../types'
import * as p3 from './p3'

const archerProfessionData = {
  [ProfessionGrade.P0]: {},
  [ProfessionGrade.P1]: {},
  [ProfessionGrade.P2]: {},
  [ProfessionGrade.P3]: { ...p3 },
}

export default archerProfessionData
