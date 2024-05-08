
import { useEffect } from 'react';
import { useRef } from 'react'

function App() {

  const btnref = useRef(0);
  const buttonHandle = () => {

    console.log(btnref.current = btnref.current + 1)
  }

  useEffect(() => {
    console.log("Re-rendering");
    btnref.current.style.backgroundColor = "red "
  }, [])
  return (
    <>
      <div>
        <button ref={btnref} onClick={buttonHandle}>Clicked Me</button>
      </div>
    </>
  )
}

export default App
