import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './components/Home'
import Section from './components/Section'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Section />
  </React.StrictMode>,
)
