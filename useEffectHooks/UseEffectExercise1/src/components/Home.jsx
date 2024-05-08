// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "../components/Section.jsx"
import Section from "../components/Section.jsx";
const Home = () => {
    const [visit, setVisit] = useState(0)

    const handleBtn = () => {
        setVisit((prevVisit) => prevVisit + 1)
    }

    useEffect(() => {
        console.log("hOME IS RE-RENDER")
    });

    return (
        <>
            <h1>Visit:{visit}</h1>
            <button onClick={handleBtn}>+</button>
            <Section />
        </>
    );
};

export default Home;
