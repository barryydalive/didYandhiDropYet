import React from 'react'
import ReactDOM from 'react-dom'
import Released from './components/Released'
import './index.css'

const App = () => {
  console.log('Hi if you are reading this you may have a job for me. Feel free to contact me with job offers @ Barry.huang93@gmail.com')
  return (
    <div className={'main'}>
      <h1>Did Yandhi Drop Yet?</h1>
      <Released />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
