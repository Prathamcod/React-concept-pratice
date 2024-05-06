// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const Interval = () => {
    const [counter, setCounter] = useState(0);
    const handleBtn = () => {
        setCounter(counter + 1)
    }

    // useEffect(() => {
    //     console.log("Components Mounted")
    // });

    // useEffect(() => {
    //     console.log("Counter will change the state")
    // }, [counter]);

    useEffect(() => {
        const CountTimer = setInterval(() => {
            console.log("Interval says hello!!")
        }, 2000);
        return () => clearInterval(CountTimer)
    }, [])

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={handleBtn}>Counter</button>
        </>
    );
};

export default Interval;
