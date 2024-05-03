/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = ({ setState, state }) => {
    const handleSubmitBtn = () => {
        if (state === "Logged In") {
            setState("Logged Out")
        }
        else {
            setState("Logged In")
        }
    }
    return (
        <>
            <button onClick={handleSubmitBtn}>Toggle Login</button>
        </>
    );
};

export default Button;
