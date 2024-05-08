// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Section = () => {
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        console.log("Section is re render")
    }, [])

    useEffect(() => {
        const id = setInterval(() => {
            setTimer((prevtimer) => prevtimer + 1)
        }, 2000)

        return () => clearInterval(id)
    })
    return (
        <>
            <h1>Time on page:{timer}second</h1>
        </>
    );
};

export default Section;
