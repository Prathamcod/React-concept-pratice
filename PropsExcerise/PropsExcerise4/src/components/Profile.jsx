import React from "react";
import Card from "./Card";

const Profile = ({ ProfileText, handleClick, buttonText, CardText }) => {
    return (
        <>
            <h1>
                {ProfileText}
            </h1>

            <Card
                handleClick={handleClick}
                CardText={CardText}
                buttonText={buttonText}
            />
        </>
    );
};

export default Profile;
