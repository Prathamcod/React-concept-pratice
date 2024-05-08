// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";

const Pokemon = () => {
    const [fetch, setFetch] = useState("")

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/mankey")
            .then(Response => Response.json)
            .then(data => setFetch(data.message))
    })
    return (
        <>
            <h1>Mankey</h1>
            <img src="{data }" alt="" />
        </>
    );
};

export default Pokemon;
