// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const ItemDescriptive = ({ name, decriptive }) => {
    return <div>
        <p>{name}</p>

        <p>
            <i>{decriptive}</i>
        </p>

    </div>;
};

export default ItemDescriptive;
