// eslint-disable-next-line no-unused-vars
import React from "react";

const Button = (props) => {
    console.log({ props })
    return (
        <>
            <button onClick={props.handleClick}>{props.text}</button>
        </>
    );
};

export default Button;
