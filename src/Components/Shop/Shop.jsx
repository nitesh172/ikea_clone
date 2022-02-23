import React from 'react'
import "./Shop.css"
import { Navbar } from '../Navbar/Navbar'
import { TopCat } from './top Cat/TopCat'

export const Shop = () => {

    let firstNameArr = ["Sofas & armchairs", "Cookware & tableware", "Smart home", "Mirrors", "Shoe & clothes stand"]
    let firstImgArr = [
        "https://www.ikea.com/images/sofa-and-armchairs-82856f7f365c3487b404dd2665b8f70b.jpg?f=xxs",
        "https://www.ikea.com/images/fc/ce/fcce62a0c6048965e3c2b3e4125e852e.jpg?f=xxs",
        "https://www.ikea.com/images/78/c9/78c9a423f0930496fa1ebcf9a12baedb.jpg?f=xxs",
        "https://www.ikea.com/images/5d/a3/5da3ce930867d15358c8157401a44458.jpg?f=xxs",
        "https://www.ikea.com/images/vases-9fddcf8b07b054a19e6923fd74186d71.jpg?f=xxs"
    ]

    let secondNameArr = ["Beds", "Chairs", "Table and desks", "Baby and childrens", "Storage & organisation"]
    let secondImgArr = [
        "https://www.ikea.com/ext/ingkadam/m/2be35629f3ae2ffd/original/PH180600.jpg?f=xxs",
        "https://www.ikea.com/images/f5/75/f575c3df39ddd9af62619b08f089ce2c.jpg?f=xxs",
        "https://www.ikea.com/images/fe/ae/feaee06bfbd5461d0eaec8d487000d8a.jpg?f=xxs",
        "https://www.ikea.com/images/de/0a/de0a3e3f4e3093866439262c7d6991a1.jpg?f=xxs",
        "https://www.ikea.com/images/79/7e/797e3f004247e68c9bb1b5b433b9cc54.jpg?f=xxs"
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

            
            <div id='secondTop'>
                 <TopCat firstImgArr={secondImgArr} firstNameArr={secondNameArr} ></TopCat>


            </div>

        </div>




        <div id="empty">

        </div>
    </div>
  )
}
