// eslint-disable-next-line no-unused-vars
import React from "react";
import Header from "./Header";
import Button from "./Button";

const Section = () => {
    const handleClick = () => {
        console.log("Boo!!!")
    }
    return (
        <>
            <Header heading="Technostark" />
            <Button handleClick={handleClick} text="Click Here.." />
        </>
    );
};

export default Section;
