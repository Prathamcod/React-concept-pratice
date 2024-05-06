import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import Counter from './components/Counter.jsx'
import Interval from './components/Interval.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Interval />
    {/* <Counter /> */}
  </React.StrictMode>,
)
