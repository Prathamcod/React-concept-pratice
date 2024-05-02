
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Button.css"

const Button = () => {
    const [color, setColor] = useState("red");

    const handleClick = () => {
        const newColor = color === "red" ? "blue" : "red";
        setColor(newColor);
    };

    return (
        <button onClick={handleClick} style={{ backgroundColor: color }}>
            Change Color
        </button>
    );
};

export default Button;