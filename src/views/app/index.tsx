import { RecoilRoot } from 'recoil'

function App() {
  window.log('App', window)

  return (
    <RecoilRoot>
      <div>ok</div>
    </RecoilRoot>
  )
}

export default App
