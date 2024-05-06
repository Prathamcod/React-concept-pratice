import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Paragraph from './components/Paragraph'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Paragraph text=" hello from the main.js">
      <h1>BONUS FROM MAIN.jsx</h1>
      <input type="text" placeholder='name' />
    </Paragraph>
  </React.StrictMode>,
)
