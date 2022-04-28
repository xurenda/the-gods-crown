import { ProfessionGrade } from '../../types'
import * as p1 from './p1'
import * as p2 from './p2'
import * as p3 from './p3'

const infantryProfessionData = {
  [ProfessionGrade.P1]: { ...p1 },
  [ProfessionGrade.P2]: { ...p2 },
  [ProfessionGrade.P3]: { ...p3 },
}

export default infantryProfessionData
