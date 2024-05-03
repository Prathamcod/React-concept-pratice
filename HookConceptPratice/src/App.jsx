import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const BtnCounter = () => {
    setCount(count + 1)
  }
  return (
    <>
      <Button />
    

    
      <div className="buttonClickCounter">
        <button onClick={BtnCounter}>click the btn counter : {count} </button>
      </div>
    </>
  )
}

export default App
