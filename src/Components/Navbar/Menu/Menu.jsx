import "./Menu.css"

import {BiMenu} from "react-icons/bi"
import {IoCloseSharp, IoArrowBackOutline} from "react-icons/io5"

import {useState, useRef} from 'react'
import {useNavigate} from "react-router-dom"
import {BsGlobe2} from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { hideFunction, showFunction } from "../../../Redux/Shop/actionShop"

export const Menu = () => {

  const {active} = useSelector(store=>store.shop)
  const navigation = useNavigate()


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
                        
                <div id="Box">

                  <div className="headingT">
                        Furniture
                  </div>      

                  <div className="shopAll">
                        Shop all
                  </div>

                  <div className="allCatBox">
                        
                        <div onClick={()=>{
                          
                          navigation(`/GamePage/Gaming furniture`)
                        }}>Gaming furniture</div>
                        <div onClick={()=>{
                          navigation("/GamePage/Furniture set")
                        }}> Furniture set</div>
                        <div onClick={()=>{
                          navigation("/GamePage/Beds")
                        }}>Beds</div>
                        <div onClick={()=>{
                          navigation("/GamePage/Sofas & armchairs")
                        }}>Sofas & armchairs</div>
                        <div> Bookcases & shelving units</div>
                        <div> Tables & desks</div>
                        <div>Caninets & cupboards</div>
                        <div>TV & media furniture</div>
                        <div>Chest of drawers & deawer units</div>
                        <div>Wardrobs</div>
                        <div>Chairs</div>
                        <div>Outdoor furniture</div>
                        <div>Sideboards, buffets & console tables</div>
                        <div>Children's furniture</div>
                        <div>Room dividers</div>
                        <div>Trolleys</div>
                        <div>Bar furniture</div>
                        <div>Armchairs & chaise longues</div>
                        <div>Cafe furniture</div>
                        <div>Nursery furniture</div>


                  </div>


                </div>
                        
              </div>

              <div className={kBox ? "pShow" : "pHide"}>

                <div id="Box">

                  <div className="headingT">
                        Kitchen & appliances
                  </div>      

                  <div className="shopAll">
                        Shop all
                  </div>

                  <div className="allCatBox">
                        
                        <div>Kitchens</div>
                        <div>METOD interior fittings</div>
                        <div>Pantry</div>
                        <div>Wall storage</div>
                        <div>Kitchen worktops</div>
                        <div>Kitchen appliances</div>
                        <div>Kitchen islands & trolleys</div>
                        <div>Knobs & handles</div>
                        <div>Kitchen lighting</div>
                        <div>METOD Kitchen taps & sinks</div>
                        <div>Splashbacks & wall panels</div>
                        <div>Unit kitchens</div>

                  </div>


                </div>
              </div>

              <div className={bBox ? "pShow" : "pHide"}>
                <div id="Box">

                  <div className="headingT">
                        Beds & mattresses
                  </div>      

                  <div className="shopAll">
                        Shop all
                  </div>

                  <div className="allCatBox">
                        
                       <div>Beds</div>
                       <div>Bedding</div>
                       <div>Mattresses</div>
                       <div>Bedside tables</div>
                       <div>under bed storage</div>
                       <div>Bed slats</div>
                       <div>Bedroom furniture sets</div>


                  </div>


                </div>
              </div>

              <div className={sBox ? "pShow" : "pHide"}>
                <div id="Box">

                  <div className="headingT">
                        Storage & organisations
                  </div>      

                  <div className="shopAll">
                        Shop all
                  </div>

                  <div className="allCatBox">
                       
                       <div>Bookcases & shelving units</div>
                       <div>Storage solution systems</div>
                       <div>Cabinets & cupboards</div>
                       <div>TV & media furniture</div>
                       <div>Chest of drawers & drawer units</div>
                       <div>Wardrobes</div>
                       <div>Small storage & organisers</div>
                       <div>Sideboards, buffets & console tables</div>
                       <div>Hooks & wall organisation</div>
                       <div>Clothes stands & shoe racks</div>
                       <div>Trolleys</div>
                       <div>Bags</div>
                       <div>Moving supplies</div>
                       <div>Wall shelves</div>


                  </div>


                </div>
              </div>

              <div className={wBox ? "pShow" : "pHide"}>
                <div id="Box">

                  <div className="headingT">
                        Work from home
                  </div>      

                  <div className="shopAll">
                        Shop all
                  </div>

                  <div className="allCatBox">
                       
                       <div>Desk chairs</div>
                       <div>Desk & computer desks</div>
                       <div>Desk & chair sets</div>
                       <div>Drawer units</div>
                       <div>Storage units & cabinets</div>
                       <div>Room divider</div>
                       <div>Work & study lamps</div>
                       <div>Cables & chargers</div>
                       <div>Paper & media organisers</div>


                  </div>


                </div>
              </div>

      </div>

    </div>
  

  )
}

