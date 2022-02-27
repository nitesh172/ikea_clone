import React from "react"
import "../../CSS/Register/Signup.css"
import { Navbar } from "../../../Navbar/Navbar"
import { Left_signup } from "./Left_signup"
import { Right_signup } from "./Right_signup"

export const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Left_signup />
        <div className="middle-div"></div>
        <Right_signup />
      </div>
    </>
  )
}
