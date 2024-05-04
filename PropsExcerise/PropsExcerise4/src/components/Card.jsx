import React from "react";
import Button from "./Button";

const Card = ({ CardText, handleClick, buttonText }) => {
    return (
        <>
            <h2>{CardText}</h2>
            <Button
                handleClick={handleClick}
                text={buttonText}

            />
        </>
    );
};

export default Card;
