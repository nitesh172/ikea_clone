import React from 'react'
import "./ShippingPage.css"
import img from "./arrow_active.gif"

export const ShippingPage = () => {
  return (
    <div id='outerCont'>

        <div>
            <img src="https://i.postimg.cc/HkBvsWPk/logo.png"className='imgArr' alt="" />
         
        </div>

        <div className='stepNoDiv'>

                <div className='insStep'>
                    <div id='iconDiv'>
                        <img src={img} alt="" />
                        <div id='numb' > 1</div>
                    </div>

                    <div id='nameText' className='setp1c'>
                        Shopping cart (Step 1 of 3)
                    </div>
                </div>

                <div className='insStep'>
                    <div id='iconDiv'>
                        <img src={img} alt="" />
                        <div id='numb' > 2</div>
                    </div>

                    <div id='nameText' className='step2c'>
                        Delivery information (Step 2 of 3)
                    </div>
                </div>

                <div className='insStep'>
                    <div id='iconDiv'>
                        <img src={img} alt="" />
                        <div id='numb' > 3</div>
                    </div>

                    <div id='nameText'className='step2c'>
                        Payment method (Step 3 of 3)
                    </div>
                </div> 
            

        </div>

    </div>
  )
}
