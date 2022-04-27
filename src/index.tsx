import React from 'react'
import ReactDOM from 'react-dom/client'
import initGlobal from './common/handle/init'
import App from './views/app'

// 初始化全局变量
initGlobal()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
