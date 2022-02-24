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

  const [pBox, setPBox] = useState(false)
  const [fBox, setFBox] = useState(false)
  const [kBox, setKBox] = useState(false)
  const [bBox, setBBox] = useState(false)
  const [sBox, setSBox] = useState(false)
  const [wBox, setWBox] = useState(false)
  


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
                    focusFurniture.current.classList.add("non")
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
                          setPBox(!pBox)
                          setKBox(false)
                          setBBox(false)
                          setSBox(false)
                          setWBox(false)
                          setFBox(true)
                          
                        }}>Furniture</div>
                        <div onClick={()=>{
                          setPBox(pBox ? true : false)
                          setBBox(false)
                          setSBox(false)
                          setWBox(false)
                          setFBox(false)
                          setKBox(true)
                           
                        }}>Kitchen & appliances</div>
                        <div onClick={()=>{

                          
                          setPBox(pBox ? true : false)
                          setSBox(false)
                          setWBox(false)
                          setFBox(false)
                          setKBox(false)
                          setBBox(true)

                        }}>Beds & mattresses</div>
                        <div  onClick={()=>{

                          
                          setPBox(pBox ? true : false)
                          setWBox(false)
                          setFBox(false)
                          setKBox(false)
                          setBBox(false)
                          setSBox(true)

                        }}>Storage & organisation</div>
                        <div  onClick={()=>{

                          
                          setPBox(pBox ? true : false)
                          setSBox(false)
                          setFBox(false)
                          setKBox(false)
                          setBBox(false)
                          setWBox(true)

                        }}>Working from home</div>
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

      <div className={pBox ? "ProdBox" : "non"} ref={focusFurniture}>
              
              <div className={fBox ? "pShow" : "pHide"}>
                        
                <div>
                   
                </div>      
                        
              </div>

              <div className={kBox ? "pShow" : "pHide"}>

                        sidK
              </div>

              <div className={bBox ? "pShow" : "pHide"}>
                sidB
              </div>

              <div className={sBox ? "pShow" : "pHide"}>
                sidS
              </div>

              <div className={wBox ? "pShow" : "pHide"}>
                sidW
              </div>

      </div>

    </div>
  

  )
}

