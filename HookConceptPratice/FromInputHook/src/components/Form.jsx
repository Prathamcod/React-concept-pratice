// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Form.css"
const From = () => {
    const [fname, setfname] = useState("")
    const [lname, setlname] = useState("")
    const [email, setEmail] = useState("")
    const [h1text, seth1text] = useState("")
    const SubmitBtn = (e) => {
        e.preventDefault()
        console.log(fname, lname, email)
        seth1text(`my name is : ${fname}${lname} , my Email id is: ${email}`)
    }
    return (
        <>
            <form onSubmit={SubmitBtn}>

                <label htmlFor="Name">First-Name: </label>
                <input
                    name="fname"
                    type="text"
                    value={fname}
                    onChange={(e) => { setfname(e.target.value) }}
                />

                <label htmlFor="Name">Last-Name: </label>
                <input
                    name="lname"
                    type="text"
                    value={lname}
                    onChange={(e) => { setlname(e.target.value) }}
                />

                <label htmlFor="email">Email-Id: </label>
                <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />

                <button type="submit">Submit</button>
            </form>
            <h1>
                {h1text}
            </h1>
        </>
    )
};

export default From;
