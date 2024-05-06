import React from "react";

const Paragraph = (props) => {
    return (
        <>
            {props.children}
            <p>{props.text}</p>
            
        </>
    );
};

export default Paragraph;
