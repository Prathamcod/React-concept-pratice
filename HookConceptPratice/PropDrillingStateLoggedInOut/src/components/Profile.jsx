// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Button from "./Button.jsx";

const Profile = () => {
    const [state, setState] = useState("Logged In")
    return (
        <>
            <p>{state}</p>
            <Button setState={setState} state={state} />
        </>
    )
};

export default Profile;
