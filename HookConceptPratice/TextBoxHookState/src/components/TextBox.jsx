// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./TextBox.css"
const TextBox = () => {
    const [text, settext] = useState("")
    const handleInputChanger = (e) => {
        console.log(e.target.value)

        settext(e.target.value)
    }
    return (
        <>
            <h1>{text}</h1>
            <input type="text" onInput={handleInputChanger} />
        </>
    )
};

export default TextBox;
