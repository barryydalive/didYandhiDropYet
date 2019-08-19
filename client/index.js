import React from 'react'
import ReactDOM from 'react-dom'
import Released from './components/Released'
import './index.css'

const App = () => {
  return (
    <div className={'main'}>
      <h1>Did Yandhi Drop Yet?</h1>
      <Released></Released>

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
