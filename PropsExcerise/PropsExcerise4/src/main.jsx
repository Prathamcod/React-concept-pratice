import Profile from "./components/Profile";
import React from "react";
import * as ReactDOM from 'react-dom/client'
const sayHello = (e) => {
  e.preventDefault()
  console.log(e.target.value)
  console.log("say hello From Profile")
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      ProfileText={"Profile"}
      CardText={"Card"}
      buttonText={"Click Btn"}
      handleClick={sayHello}
    />
  </React.StrictMode>,
)
