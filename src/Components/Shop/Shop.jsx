import React from 'react'
import "./Shop.css"
import {IoArrowForwardSharp} from "react-icons/io5"
import {AiFillStar} from "react-icons/ai"
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

            <div>
                <div className='imgBox'>
                    <img src="https://i.postimg.cc/jdYR9kGT/fb608e0af75a921f2617f61e3f2bd37e.png" alt="" className='img' />
                </div>
                <div className='textBox  c1 t1'>
                    <div className='secondBoxText'>
                        Work from home essentials
                    </div>

                    <div className='circleBox r1'>
                        <IoArrowForwardSharp className='cw forArrIcon' ></IoArrowForwardSharp>
                    </div>
                </div>

            </div>

            <div>
                 <div className='imgBox'>
                    <img src="https://i.postimg.cc/SNPntpWK/2a232513f1b1e42482f586141ad0f82e.png" alt="" className='img' />
                </div>
                <div className='textBox  c2 t2'>
                    <div className='secondBoxText'>
                        Everyday essentials under Rs.499
                    </div>

                    <div className='circleBox1 r2'>
                        <IoArrowForwardSharp className='cB forArrIcon' ></IoArrowForwardSharp>
                    </div>
                </div>
            </div>

            <div>
                 <div className='imgBox'>
                    <img src="https://i.postimg.cc/VL6XZ8VS/719174fb89ee6688dc7f88041e65a10d.jpg" alt="" className='img' />
                </div>
                <div className='textBox  c3 t2'>
                    <div className='secondBoxText'>
                        Furniture under Rs.2999
                    </div>

                    <div className='circleBox r2'>
                        <IoArrowForwardSharp className='cB forArrIcon' ></IoArrowForwardSharp>
                    </div>
                </div>
            </div>

            <div>
                <div className='imgBox'>
                    <img src="https://i.postimg.cc/k5pxdhRJ/f7968dabe67eb0992ad258db84c6af73.png" alt="" className='img' />
                </div>
                <div className='textBox  c4 t2'>
                    <div className='secondBoxText'>
                        Textiles under Rs.999
                    </div>

                    <div id='text2'>
                        Bedsheets, curtains, towels and more at affordable prices
                    </div>

                    <div className='circleBox2 r2'>
                        <IoArrowForwardSharp className='cB forArrIcon' ></IoArrowForwardSharp>
                    </div>
                </div>
            </div>

            <div>
                <div className='imgBox'>
                    <img src="https://i.postimg.cc/mDnV8gyS/744ecbf3bce84a08836095578946fae1.png" alt="" className='img' />
                </div>
                <div className='textBox  c5 t1'>
                    <div className='secondBoxText'>
                        Our lowest price
                    </div>

                    <div id='text2'>
                        Shop our lowest price products
                    </div>

                    <div className='circleBox3 r1'>
                        <IoArrowForwardSharp className='cw forArrIcon' ></IoArrowForwardSharp>
                    </div>
                </div>
            </div>

            <div>
                <div className='imgBox'>
                    <img src="https://i.postimg.cc/j2V3RjnS/8e596e44b235326949eda784a919a6b5.png" alt="" className='img' />
                </div>
                <div className='textBox  c6 t1'>
                    <div className='secondBoxText'>
                        Bathroom essentials
                    </div>

                    <div className='circleBox r1'>
                        <IoArrowForwardSharp className='cw forArrIcon' ></IoArrowForwardSharp>
                    </div>
                </div>
            </div>

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


        <div id='familyOffer'>

            <div id='familyOfT'>IKEA family offers</div>

            <div id='itemBox'>
                    <div>
                        <div id='prodImgBox'></div>

                        <div className ='blueText'>
                            IKEA Family Price
                        </div>

                        <div className='nameText'>SEKINER</div>

                        <div className='descText'>Hook for door</div>

                        <div className='priceN'>Normal price Rs.99</div>

                        <div className='small'>Rs. <span className='bigT'>79</span></div>

                        <div className='starBox'>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar className='starColor'></AiFillStar>
                        </div>
                    </div> 

                    <div>
                        <div id='prodImgBox1'></div>

                         <div className ='blueText'>
                            IKEA Family Price
                        </div>

                        <div className='nameText'>HALLBAR</div>

                        <div className='descText'>Bin with lid for organic  wast</div>

                        <div className='priceN'>Normal price Rs.500</div>

                        <div className='small'>Rs. <span className='bigT'>400</span></div>

                        <div className='starBox'>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </div>

                    </div>

                    <div>
                         <div id='prodImgBox2'></div>

                          <div className ='blueText'>
                            IKEA Family Price
                        </div>

                        <div className='nameText'>HEMLAGAD</div>

                        <div className='descText'>Saucepan with lid</div>

                        <div className='priceN'>Normal price Rs.999</div>

                        <div className='small'>Rs. <span className='bigT'>699</span></div>

                        <div className='starBox'>
                            <AiFillStar></AiFillStar>
                            <AiFillStar className='starColor'></AiFillStar>
                            <AiFillStar className='starColor'></AiFillStar>
                            <AiFillStar className='starColor'></AiFillStar>
                            <AiFillStar className='starColor'></AiFillStar>
                        </div>
                    </div>

                    <div>
                         <div id='prodImgBox3'></div>

                          <div className ='blueText'>
                            IKEA Family Price
                        </div>

                        <div className='nameText'>ANGARNA</div>

                        <div className='descText'>LED table lamp</div>

                        <div className='priceN'>Normal price Rs.1,490</div>

                        <div className='small'>Rs. <span className='bigT'>1,190</span></div>

                        <div className='starBox'>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                            <AiFillStar></AiFillStar>
                        </div>
                    </div>
            </div>

        </div>

        <div id='shopNowB'>
            See all
        </div>


        <div id='threeBox'> 

            <div>
                <div className='TimgBox'>
                    <img src="https://i.postimg.cc/7ZLSMgT7/c412335f348f1cabb9f8cd8be40b408e.jpg" className='img' alt="" />
                </div>

                <div className='tBoxHead'> <u>New lower price</u> </div>
            </div>

            <div>
                 <div className='TimgBox'>
                    <img src="https://i.postimg.cc/nc33JV44/7cf171cfa52c14383a12ab53ea08e924.jpg" className='img' alt="" />
                </div>

                <div className='tBoxHead'> <u>Explore top sellers</u> </div>
            </div>

            <div>
                 <div className='TimgBox'>
                    <img src="https://i.postimg.cc/jqXXHqkp/3a1227ede4b16e693599fdda790d5a3a.jpg" className='img' alt="" />
                </div>

                <div className='tBoxHead'> <u>Book a fun day at IKEA Restaurant</u> </div>
            </div>


        </div>

        <div id='susHomeBox'>

            <div>Shop products for a more sustainable home</div>

            <div id='susProdBox'>
                
                <div id='firstBoxG'>
                    
                    <div id='greenBoxT'>Explore our guides to sustainable living</div>

                    <div id='circleGreen'>
                        <IoArrowForwardSharp id='GBIcon'></IoArrowForwardSharp>
                    </div>
                </div>

                <div>
                    <div id='susBoxImg'>
                        <img src="https://i.postimg.cc/gjk94zFg/hand-adjusts-the-water-flow-of-a-glypen-kitchen-tap-in-stain-a84ab755c113500b4318c6e4d0dc9924.jpg" className='img' alt="" />

                        <div id='susBoxG'>
                            Water saving
                        </div>
                    </div>

                </div>

                <div>

                    <div id='susBoxImg'>
                        <img src="https://i.postimg.cc/3wVVmXnJ/a-hand-pressing-the-switch-of-a-white-table-lamp-standing-on-d8a6f025fb2647b42caea256f8058feb.jpg" className='img' alt="" />

                        <div id='susBoxG'>
                            Energy saving
                        </div>
                    </div>

                </div>

                <div>
                    <div id='susBoxImg'>
                        <img src="https://i.postimg.cc/yYGmVLdd/a-woman-with-brown-hair-and-white-shirt-sleeping-under-a-whi-6f8f55594698055439b97d1138819aac.jpg" className='img' alt="" />

                        <div id='susBoxG'>
                            Healthier home
                        </div>
                    </div>
                </div>

                <div>
                    <div id='susBoxImg'>
                        <img src="https://i.postimg.cc/rwWrqc3n/three-white-sortera-bins-in-a-white-tiled-room-where-one-is-0c696d80fa4e20c5d518bf63765bd18c.jpg" className='img' alt="" />

                        <div id='susBoxG'>
                            Reducing waste
                        </div>
                    </div>
                </div>

                <div>
                    <div id='susBoxImg'>
                        <img src="https://i.postimg.cc/K8X1qwjn/ivar-chair-painted-light-green-standing-on-old-news-papers-i-f83b1db2f71591d77418a577c9c4be15.jpg" className='img' alt="" />

                        <div id='susBoxG'>
                            Sustainable furniture
                        </div>
                    </div>
                </div>

                <div>
                    <div id='susBoxImg'>
                        <img src="https://i.postimg.cc/tTm3Yk52/a-white-blanket-and-three-white-bowls-on-a-gamlehult-footsto-4e4d49761e05301b963aa83daa0595fc.jpg" className='img' alt="" />

                        <div id='susBoxG'>
                            Sustainable materials
                        </div>
                    </div>
                </div>

                <div>
                    <div id='susBoxImg'>
                        <img src="https://i.postimg.cc/wxmFbtQZ/a-hand-seasoning-huvudroll-plant-balls-in-a-ikea-365-frying-7db662f2975f80a04340c49e7c068cfb.jpg" className='img' alt="" />

                        <div id='susBoxG'>
                            Sustainable food
                        </div>
                    </div>
                </div>

            </div>

        </div>


        <div id='ideasDiv'>
            <div id='ideaHeadT'>More ideas and inspiration</div>

            <div id='allCatDiv'>

                <div>All</div>
                <div>Bedroom</div>
                <div>Living room</div>
                <div>Kitchen</div>
                <div>Workspace</div>
                <div>Outdoor</div>
                <div>Bathroom</div>
                <div> Children room</div>
                <div>Dining</div>
                <div>Hallway</div>
                <div>Accessories</div>

            </div>


            <div id='allImgsDiv'>

                <div>
                    <div className='ff'></div>
                </div>
                <div></div>
                <div></div>
            </div>

        </div>

        <div id="empty">

        </div>
    </div>
  )
}
