import React from 'react'
import "./Navbar.css"
import {IoSearchSharp} from "react-icons/io5"
import {BsCamera} from "react-icons/bs"
import {RiTruckLine} from "react-icons/ri"
import {FiUser} from "react-icons/fi"
import {AiOutlineShoppingCart} from "react-icons/ai"
import { Info } from './Info/Info'
import { Menu } from './Menu/Menu'


export const Navbar = () => {

    
  return (
    <div>
        <Info></Info>
        <div id='navBox'>

            <div>
                <Menu ></Menu>
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
                            <div>
                                <IoSearchSharp className='searchIcon'></IoSearchSharp>

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
                            <div id='userBox'>

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

        <div id='dis'>

        </div>

        
        
    </div>
  )
}
