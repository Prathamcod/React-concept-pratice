// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Counter2 = () => {
    const [state, setState] = useState(0);

    const handleBtn = () => {
        setState((state) => state + 1);
        setState((state) => state + 1);
    }

    return (

        <>
            <h1> the counter : {state}</h1>

            <button onClick={handleBtn} > + </button>
        </>
    );
};

export default Counter2;
