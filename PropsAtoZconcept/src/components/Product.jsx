/* eslint-disable react/prop-types */
// import React from "react";

// const Product = (props) => {
//     return <div>
//         <h1>{props.name}</h1>
//         <h1>{props.description}</h1>
//         <h1>${props.price}</h1>
//     </div>;
// };

// Destructing Props
// eslint-disable-next-line no-unused-vars
import React from "react";
import ItemDescriptive from "./ItemDescriptive";

const Product = ({ name, description, price }) => {
    return <div>

        <ItemDescriptive name={name} decriptive={description} />
        <h1>${price}</h1>

    </div>;

};

export default Product;
