import "./Menu.css"

import {BiMenu} from "react-icons/bi"
import {IoCloseSharp} from "react-icons/io5"

import {useState, useRef} from 'react'
import { useSelector, useDispatch } from "react-redux"
import { hideFunction, showFunction } from "../../../Redux/Shop/actionShop"

export const Menu = () => {

  const {active} = useSelector(store=>store.shop)

  const focusPt = useRef(null)

  const dispatch = useDispatch()

  



  return (

    <div id="menuIconBox">

       <BiMenu id="menuIcon" onClick={()=> {
         dispatch(showFunction())
        }}></BiMenu>

       <div className={active ? "show" : "leftBox " } id="h" ref={focusPt}  >
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
       </div>
    </div>
  

  )
}

