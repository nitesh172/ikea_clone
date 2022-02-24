import React from 'react'
import "./Shop.css"
import { Navbar } from '../Navbar/Navbar'
import { TopCat } from './top Cat/TopCat'

export const Shop = () => {

    let firstNameArr = ["Sofas & armchairs", "Cookware & tableware", "Smart home", "Mirrors", "Shoe rack & clothes stand"]
    let firstImgArr = [
        "https://www.ikea.com/images/sofa-and-armchairs-82856f7f365c3487b404dd2665b8f70b.jpg?f=xxs",
        "https://www.ikea.com/images/fc/ce/fcce62a0c6048965e3c2b3e4125e852e.jpg?f=xxs",
        "https://www.ikea.com/images/78/c9/78c9a423f0930496fa1ebcf9a12baedb.jpg?f=xxs",
        "https://www.ikea.com/images/5d/a3/5da3ce930867d15358c8157401a44458.jpg?f=xxs",
        "https://www.ikea.com/images/vases-9fddcf8b07b054a19e6923fd74186d71.jpg?f=xxs"
    ]

  return (
    <div>
        <Navbar></Navbar>

        <div>
            <img src="https://www.ikea.com/images/72/c9/72c9d840fa0fb57ca9b8ae4910e246e5.png?f=sg" className='mainImg' alt="" />
        </div>

        <div id='secondBox'>

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

        </div>

        <div id='thirdBox'>
            <img src="https://www.ikea.com/images/2f/c9/2fc9e6f591d795810dece0f39060960e.png?f=sg" className='img' alt="" />
        </div>

        <div id='topCat' className='box'>

            <div id='topText'>Top categories</div>

            
            <TopCat firstImgArr={firstImgArr} firstNameArr={firstNameArr} ></TopCat>

            

        </div>




        <div id="empty">

        </div>
    </div>
  )
}
