import {useState,useEffect} from 'react';
import axios from "axios"
import "./AddressPage.css"

import useRazorpay from "react-razorpay";


import { useSelector, useDispatch } from 'react-redux';
import { getUserCart } from '../../Redux/Cart/actionCart';

import img from "./arrow_active.gif"

export const AddressPage = () => {

    const Razorpay = useRazorpay();


    // let cartArr = [
    //     {
    //         image:"https://www.ikea.com/in/en/images/products/nyhamn-3-seat-sofa-bed-with-foam-mattress-knisa-grey-beige__0767330_pe754069_s3.jpg",
    //         name:"NYHAMN",
    //         desc:"3-seat sofa-bed",
    //         price:"21,990"
    //     },
    //     {
    //         image:"https://www.ikea.com/in/en/images/products/lerberg-shelf-unit-dark-grey__69211_pe183961_s3.jpg",
    //         name:"LERBERG",
    //         desc:"shelf unit",
    //         price:"1,990"
    //     },
    //     {
    //         image:"https://www.ikea.com/in/en/images/products/nyhamn-3-seat-sofa-bed-with-foam-mattress-knisa-grey-beige__0767330_pe754069_s3.jpg",
    //         name:"NYHAMN",
    //         desc:"3-seat sofa-bed",
    //         price:"21,990"
    //     },
    //     {
    //         image:"https://www.ikea.com/in/en/images/products/lerberg-shelf-unit-dark-grey__69211_pe183961_s3.jpg",
    //         name:"LERBERG",
    //         desc:"shelf unit",
    //         price:"1,990"
    //     }
    // ]



   
    const email = "innocentkp004@gmail.com";
  const {userCart} = useSelector((state)=> state.userCart)
  const dispatch = useDispatch()
   console.log(userCart)

  
   
  
    useEffect(() =>{
       // localStorage.setItem('IkeaCart' , JSON.stringify(cart))
       axios.get(`https://ikeaserver.herokuapp.com/cart/email=${email}`)
       .then(({data}) => 
                   dispatch(getUserCart(data.cartItem))  )
        // console.log(data.cartItem)
        
        
  }, [])

    let sum = 0;

    userCart.forEach((el) =>{
       
        sum += el.price* el.count;
    })

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

                    <div id='nameText' className='step2c'>
                        Shopping cart (Step 1 of 3)
                    </div>
                </div>

                <div className='insStep'>
                    <div id='iconDiv' >
                        <img src={img} alt="" />
                        <div id='numb' > 2</div>
                    </div>

                    <div id='nameText' className='setp1c'>
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


        <div id='addressOuterBox'>

            <div>
                <div id='delInfo'>Delivery information</div>

                <div id='nameAddDiv'>Enter your Name and Address.</div>

                <div id='allDetailsInpDiv'>

                    <div className='lable'>First name*:</div>
                    <input type="text" className='inpAddressPage' />

                    
                    <div className='lable'>Middle name:</div>
                    <input type="text" className='inpAddressPage' />

                    
                    <div className='lable'>Last name*:</div>
                    <input type="text" className='inpAddressPage' />

                    
                    <div className='lable'>Address*:</div>
                    <input type="text" className='inpAddressPage' />

                    
                    <div className='lable'>Address1:</div>
                    <input type="text" className='inpAddressPage' />

                    
                    <div className='lable'>Landmark:</div>
                    <input type="text" className='inpAddressPage' />

                    
                    <div className='lable'>City*:</div>
                    <input type="text" className='inpAddressPage' />

                    
                    <div className='lable'>Email*:</div>
                    <input type="text" className='inpAddressPage' />

                    
                    <div className='lable'>Phone*:</div>
                    <input type="number" className='inpAddressPage' />

                    <div id='proceedPay' onClick={()=>{
                        async function rz() {

                            console.log("sid");

  const data = {
    amount: (sum + 599)*100 ,
  }
  let url = "https://ikeaserver.herokuapp.com/razorpay"
  let response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
  let d = await response.json()
  console.log(d)
  var options = {
    key: "rzp_test_kqeHDKDTMlfKMR", // Enter the Key ID generated from the Dashboard
    name: "IKEA",
    description: d.id,// id option
    image:
      "https://xp.io/storage/1GTsrVkl.png",
    order_id: d.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: "https://ikeaserver.herokuapp.com/razorpay/success",
    notes: {
      address: "Razorpay Corporate Office",
    },
    theme: {
      color: "#0060B2",
    },

  }
  var rzp1 = new Razorpay(options)
  rzp1.open()
//   e.preventDefault()
}
 rz() 
                    }}>
                        Proceed to pay
                    </div>

                </div>
            </div>


            <div>

                <div id='addressOS'>

                    <div id='outBox'>

                        <div id='outBOS'>Order Summary</div>

                        <div id='leng'>{userCart.length} items</div>

                        <div id='scrollItems'>
                            {
                                userCart.map((el)=>{
                                    return <div id='addressItemsDiv' >

                                        <div>
                                            <div id='addressImageBox'>
                                                <img src={el.img1}  alt="" />
                                            </div>
                                        </div>

                                        <div>
                                            <div id='addName'>{el.name}</div>
                                            <div id='addDesc'>{el.desc.substring(0, 20)}...</div>
                                            <div id='addArt'>Article No. {Math.floor(Math.random()*1000)} </div>

                                            <div id='addPriceDiv'>
                                                <div>Total</div>
                                                <div>Rs. {el.price}.00</div>
                                            </div>
                                        </div>

                                    </div>
                                })
                            }

                        </div>
                        

                    </div>

                    <div id='secondOutBox'>

                        <div id='addOV'>
                            <div>Order value:</div>
                            <div>Rs. {sum}.00</div>
                        </div>

                        <div id='addFee'>
                            <div>Delivery fee/Picking fee</div>
                            <div>Rs. 599.00</div>
                        </div>

                        <div id='addTA'>
                            <div>Total amount:</div>
                            <div>Rs. {sum + 599}.00</div>

                        </div>

                    </div>

                </div>

            </div>

        </div>


        



        <div id='empty'>

        </div>
       
        
    </div>
  )
}
