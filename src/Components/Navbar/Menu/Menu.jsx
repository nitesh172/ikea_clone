import "./Menu.css"

import {BiMenu} from "react-icons/bi"
import {IoCloseSharp, IoArrowBackOutline} from "react-icons/io5"

import {useState, useRef} from 'react'
import {BsGlobe2} from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { hideFunction, showFunction } from "../../../Redux/Shop/actionShop"

export const Menu = () => {

  const {active} = useSelector(store=>store.shop)


  const dispatch = useDispatch()
  let i = 0;


  const focusSecond = useRef(null)
  const focusProduct = useRef(null)
  const focusFurniture = useRef(null)
  const focusKitchen  = useRef(null)
  const focusSB = useRef(null);
  const focusTB = useRef(null)


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
          
        <div className="secondBox"  ref={focusSecond} >

        
          <div id="text">
                  <div id="firstC" onClick={()=>{
                    // console.log(focusSecond.current);
                    // console.log(focusProduct.current);

                    focusSecond.current.classList.add("hideBox")
                    focusProduct.current.classList.add("showBox")
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

        <div className="productBox" ref={focusProduct}>

              <div id="prodHeading">
                  
                  <div>
                    <div id="arrowBox" >
                       <IoArrowBackOutline id="backArrIcon"  onClick={()=>{
                        focusSecond.current.classList.remove("hideBox")
                        focusProduct.current.classList.remove("showBox")
                        focusFurniture.current.classList.add("non")
                          //make them work
                      }}></IoArrowBackOutline>

                    </div>
                  </div>

                  <div>
                      Products
                  </div>

              </div>

              <div id="prodText">
                    <div>
                      <div>New lower price</div>
                      <div>Textile under Rs.999</div>
                      <div>Handpicked combinations for a new fresh look</div>
                      <div>Sustainable living</div>
                      <div>Product guides</div>
                      
                    </div>

                    <div>
                        <div id="Furniture" onClick={()=>{
                          
                          if(i%2 == 0){
                            focusFurniture.current.classList.remove("non")
                            i++;
                          }else{
                            focusFurniture.current.classList.add("non")
                            i++
                          }
                        }}>Furniture</div>
                        <div onClick={()=>{
                            
                            if(i%2 == 0){
                            focusKitchen.current.classList.remove("non")
                            i++;
                          }else{
                            focusKitchen.current.classList.add("non")
                            i++
                          }
                        }}>Kitchen & appliances</div>
                        <div onClick={()=>{
                        }}>Beds & mattresses</div>
                        <div>Storage & organisation</div>
                        <div>Working from home</div>
                        <div>Textiles</div>
                        <div>Decoration</div>
                        <div>Bathroom products</div>
                        <div>Outdoor products</div>
                        <div>Lighthing</div>
                        <div>Carpet, mats & flooring</div>
                        <div>Baby & children</div>
                        <div><u>More</u></div>
                    </div>
              </div>
                 
        </div>

      </div>

      <div className="ProdBox non" ref={focusFurniture}>
              sidF

      </div>

    </div>
  

  )
}

