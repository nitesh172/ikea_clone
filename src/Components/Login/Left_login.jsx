import React from 'react'
import {IoArrowBackOutline} from "react-icons/io5"


export const Left_login = () => {
  return (
    <div className='blueBox'>
    <div id='iconBox'>

              <div id='backIB'> 
                  <IoArrowBackOutline className='backIcon'></IoArrowBackOutline>
              </div>

              <div id='logoBox'>
                    <img src="https://in.accounts.ikea.com/resources/static/logo.svg" className='img' alt="" />
              </div>

            </div>

            <div id='loginText'>

              <span style={{color:"rgb(250,216,20)"}}>Login</span> to your IKEA account.

            </div>

            <div id='secondT'>Too many passwords? <br />
                You can now login with an OTP we will send on your email <br /> address or verified mobile number.
                <br /><br />
                Access your IKEA account using your email address to add and verify your mobile number.
            </div>

            <div id='smallText'>
                IKEA.in - <u>Cookie Policy</u> and  <u>Privacy Policy</u> <br /> &copy; Inter IKEA System B.V. 1999-2022
            </div>
        </div>

  )
}
