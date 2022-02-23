import "./Menu.css"

import {BiMenu} from "react-icons/bi"
import {IoCloseSharp} from "react-icons/io5"

import {useState, useRef} from 'react'
import {BsGlobe2} from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { hideFunction, showFunction } from "../../../Redux/Shop/actionShop"

export const Menu = () => {

  const {active} = useSelector(store=>store.shop)


  const dispatch = useDispatch()

  const focusSecond = useRef(null)
  const focusProduct = useRef(null)



  return (

    <div id="menuIconBox">

       <BiMenu id="menuIcon" onClick={()=> {
         dispatch(showFunction())
        }}></BiMenu>

            
       <div className={active ? "show" : "leftBox " } id="h"   >

          <div className="heading">
              <div>
                <div className="circle">
                  <IoCloseSharp onClick={()=>{
                    dispatch(hideFunction())
                  }} className="closeIcon"></IoCloseSharp>
                </div>
              </div>
              <div>
                <div className="boxImg">
                    <img src="https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg" className="img"  alt="" />
                </div>
              </div>
          </div>
          
        <div id="secondBox"  ref={focusSecond} >

        
          <div id="text">
                  <div id="firstC" onClick={()=>{
                    // console.log(focusSecond.current);
                    // console.log(focusProduct.current);

                  }}>
                      Products                    
                  </div>

                  <div id="secondC">
                    Rooms
                  </div>

                  <div id="thirdC">
                    New at IKEA
                  </div>

                  <div id="fourthC">
                    All offers
                  </div>
          </div>  

          <div id="textS">
                  <div>
                    Tips and inspirations
                  </div>
                  
                  <div>
                    Currently an IKEA
                  </div>
                  
                  <div>
                    Track your order
                  </div>

          </div>

          <div id="textT">
                    <div>
                      IKEA Family
                    </div>
                    <div>
                      IKEA Business
                    </div>
                    <div>
                      IKEA Restaurant
                    </div>
                    <div>
                      Our Store
                    </div>
                    <div>
                      Design your room
                    </div>
                    <div>
                      Customer service
                    </div>
                    <div>
                      Download the IKEA app
                    </div>
          </div>

          <div id="country">
            <div>
              <BsGlobe2></BsGlobe2>
            </div>
            <div>
              Change country
            </div>
          </div>

        </div>


        {/* ////products Box */}

        <div id="productBox" ref={focusProduct}>
                  
        </div>

       </div>
    </div>
  

  )
}

