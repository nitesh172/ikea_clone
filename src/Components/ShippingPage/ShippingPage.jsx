import React from 'react'
import "./ShippingPage.css"
import img from "./arrow_active.gif"
import { useNavigate } from 'react-router-dom'

export const ShippingPage = () => {

    let navigate = useNavigate()

    let cartArr = [
        {
            image:"https://www.ikea.com/in/en/images/products/nyhamn-3-seat-sofa-bed-with-foam-mattress-knisa-grey-beige__0767330_pe754069_s3.jpg",
            name:"NYHAMN",
            desc:"3-seat sofa-bed",
            price:"21,990"
        },
        {
            image:"https://www.ikea.com/in/en/images/products/lerberg-shelf-unit-dark-grey__69211_pe183961_s3.jpg",
            name:"LERBERG",
            desc:"shelf unit",
            price:"1,990"
        }
    ]

    let sum = 0;

    cartArr.forEach((el) =>{
        let num1 = el.price.split("");
        let n1 = ""

        for(let i = 0; i < num1.length; i++ ){
            if(num1[i] !== ","){

                n1 += num1[i];
            }
            if(num1[i] == "."){
                break
            }
        }
        sum += (+n1) ;
    })

    // console.log(sum);

  return (
    <div id='outerCont'>

        <div>
            <img src="https://i.postimg.cc/HkBvsWPk/logo.png"className='imgArr' alt="" />
         
        </div>

        <div className='stepNoDiv'>

                <div className='insStep'>
                    <div id='iconDiv'>
                        <img src={img} alt="" />
                        <div id='numb' > 1</div>
                    </div>

                    <div id='nameText' className='setp1c'>
                        Shopping cart (Step 1 of 3)
                    </div>
                </div>

                <div className='insStep'>
                    <div id='iconDiv' >
                        <img src={img} alt="" />
                        <div id='numb' > 2</div>
                    </div>

                    <div id='nameText' className='step2c'>
                        Delivery information (Step 2 of 3)
                    </div>
                </div>

                <div className='insStep'>
                    <div id='iconDiv'>
                        <img src={img} alt="" />
                        <div id='numb' > 3</div>
                    </div>

                    <div id='nameText'className='step2c'>
                        Payment method (Step 3 of 3)
                    </div>
                </div> 
            

        </div>


        <div id='headShip'> Your shopping cart</div>

        <div id='firstDetailsDiv'>
                
                <div ><b id='b'>{cartArr.length} </b>Products in shopping cart</div>

                <div id='DfeeDiv'>
                    <div>Delivery fee/Picking fee</div>
                    <div>Rs. 599.00</div>
                </div>

                <div id='tAmount'>
                    <div>Total amount:</div>
                    <div>Rs.  {sum}.00</div>
                </div>

                <div id='taxDiv'>All prices are inclusive of taxes</div>


                <div id='placeOrderBtn' onClick={()=>{
                    navigate("/filldetails")
                }}>

                    Place order
                </div>

        </div>

        <div id='shippingCart'>

            {
                cartArr.map((el)=>{
                    return <div id='itemDiv'>
                        <div >
                            <div id='imageDiv'>
                                <img src={el.image} alt="" className='img' />
                            </div>
                        </div>

                        <div>
                            <div id='descBox'>

                                <div id='nameBox'>{el.name}</div>
                                <div id='descDiv'>{el.desc}</div>
                                <div id='fPriceDiv'>Rs. {el.price}.00</div>
                                <div id='articalNo'>Article No. {Math.floor(Math.random() * 1000)}</div>
                            </div>
                        </div>
                        <div>
                            <div id='totalDiv'>
                                <div>Total</div>
                                <div>Rs. {el.price}.00</div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>


        <div id='orderSummBox'>

            <div id='oST'>Order summary</div>

            <div id='orderVal'>
                <div>Order Value:</div>
                <div>Rs. {sum}.00</div>
            </div>

            <div id='delFee'>
                <div>Delivery fee/Picking fee</div>
                <div>Rs. 599.00</div>
            </div>

             <div id='tAmount1'>
                    <div>Total amount:</div>
                    <div>Rs.  {sum + 599}.00</div>
            </div>

             <div id='taxDiv1'>All prices are inclusive of taxes</div>


            <div id='allCards'>
                <div>
                    <img  src="https://i.postimg.cc/Kj8qVK5h/visa.png" alt="" />
                </div>
                <div>
                    <img  src="https://i.postimg.cc/T1s94twn/master-card.png" alt="" />
                </div>
                <div>
                    <img  src="https://i.postimg.cc/768M05Rn/maestro.png" alt="" />
                </div>
                <div>
                    <img  src="https://i.postimg.cc/fT2c52FL/rupay.png" alt="" />
                </div>
                <div>
                    <img  src="https://i.postimg.cc/9FMT4PMj/upi.png" alt="" />
                </div>
                <div>
                    <img  src="https://i.postimg.cc/DyMG1WJ4/eWallet.png" alt="" />
                </div>
                <div>
                    <img  src="https://i.postimg.cc/V6m0znTp/axp.png" alt="" />
                </div>
                <div>
                    <img  src="https://i.postimg.cc/VLdrsYGf/diners.png" alt="" />
                </div>

            </div>

                <div id='placeOrderBtn1'  onClick={()=>{
                    navigate("/filldetails")
                }}>
                    Place order
                </div>

            

        </div>

        <div id='empty'>

        </div>

    </div>
  )
}
