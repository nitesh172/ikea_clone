import React, { useRef, useState } from 'react'
import "./Navbar.css"
import {IoSearchSharp, IoCloseSharp, IoChevronForward} from "react-icons/io5"
import {BsCamera} from "react-icons/bs"
import {RiTruckLine} from "react-icons/ri"
import {FiUser} from "react-icons/fi"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Info } from './Info/Info'
import { Menu } from './Menu/Menu'
import { useNavigate } from 'react-router-dom'


export const Navbar = () => {

    const focusUser = useRef(null)
    const [activeCls, setActiveCls] = useState(false)
    const searchFocus = useRef(null)

    const navigate = useNavigate()
  return (
    <div>
        <Info></Info>
        <div id='navBox'>

            <div>
                <Menu></Menu>
            </div>
            
            <div id='inBox'>
                <div>
                    <div id='imgBox'>
                        <img src="https://www.ikea.com/in/en/static/ikea-logo.f7d9229f806b59ec64cb.svg" className='img' alt="" />
                    </div>
                </div>
                <div>
                    <div id='grayBox' >
                        <div id='insideGray'>
                            <div ref={searchFocus}>
                                <IoSearchSharp  className='searchIcon'  ></IoSearchSharp>

                            </div>
                            <div>
                                <input type="text" placeholder='What are you looking for?' id='inpBox'/>
                            </div>
                            <div>
                                <BsCamera className='camera'></BsCamera>
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    
                    <div id='icons'>
                        <div>
                            <div id='truckBox' >
                                <RiTruckLine className='insIcons'></RiTruckLine>

                            </div>
                        </div>
                        <div>
                            <div id='userBox' onClick={()=>{
                                // alert()
                                setActiveCls(true)
                            }}>

                                <FiUser className='insIcons'></FiUser>
                            </div>
                        </div>
                        <div>
                            <div id='shoppingBox'>
                                <AiOutlineShoppingCart className='insIcons'></AiOutlineShoppingCart>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id='outName'>
            <div id='names'>
                <div>Products</div>
                <div>Rooms</div>
                <div>New at IKEA</div>
                <div>All offers</div>

            </div>

        </div>
                            
        <div className={activeCls ? "showUser " : "loginBox hideUser"} >

            <div id='blueBox'>

                
                    <div id='closeIcon'>

                        <IoCloseSharp id='closeBIcon' onClick={()=>{
                            setActiveCls(false)
                        }}></IoCloseSharp>
                                
                    </div>

                <div id='line'>
                    <div id='nameText'>
                        <div>Hej</div>
                        <div>
                            
                            <div id='logDiv' onClick={()=>{
                                navigate("/login")
                            }}>
                                    Log in
                            </div>
                            

                        </div>
                    </div>
                
                </div>          

                <div id='line1'>
                    <div>
                        <strong id='strong' style={{fontSize:".95vw"}}>Join IKEA Family</strong> <br />
                        Get access to a number of member benefits. Enjoy <br /> guaranteed discount, free workshops, exclusive previews <br /> and a lot more when you join. Its free!
                    </div>
                    <div>
                        <div id='goIconB'>
                                <IoChevronForward className='goIcon'></IoChevronForward>
                        </div>
                    </div>
                </div>

                <div id='line1'>
                    <div>
                        <strong id='strong' style={{fontSize:".95vw"}}>Join IKEA Businees Network</strong> <br />
                        Get access to a service, offers and benefits to help your <br /> businees needs. Together, we can help your businees to<br />  grow.  Its free!
                    </div>
                    <div>
                        <div id='goIconB1'>
                                <IoChevronForward className='goIcon'></IoChevronForward>
                        </div>
                    </div>
                </div>

            </div>
            
            <div id='shopp'>
            <div>
                Shopping list
            </div>
            <div>
                Planners
            </div>
        </div>


        </div>

        


        
        
    </div>
  )
}
