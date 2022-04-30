import ProfessionInput from '@/common/components/ProfessionInput'
import SixDInput from '@/common/components/SixDInput'
import { RecoilRoot } from 'recoil'
import './app.less'

function App() {
  return (
    <RecoilRoot>
      <SixDInput />
      <ProfessionInput />
    </RecoilRoot>
  )
}

export default App
