import React from 'react'
import "./login.css"
import { Left_login } from "./Left_login";
import { Right_login } from "./Right_login";


export const Login = () => {
    return (
        <>
            <div className='logins-container'>
                <Left_login />
                <Right_login />
            </div>
        </>

    )
}
