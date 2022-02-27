import { MainFooter } from "../Footer/MainFooter"
import { Navbar } from "../Navbar/Navbar"

import './Cart.css'

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getUserCart } from "../../Redux/mainCart/actionCart"

//const cartFromLocalStore= JSON.parse(localStorage.getItem('IkeaCart') || '[]')



export const Cart = () => {

  const email = "niteshkumarbaghel172@gmail.com";
  const userCart = useSelector((state)=> state.userCart)
  const dispatch = useDispatch()
   console.log(userCart)

  //const [cart , setCart] = useState(cartFromLocalStore)
    const [total , setTotal] = useState(0)


  
   
  
    useEffect(() =>{
       // localStorage.setItem('IkeaCart' , JSON.stringify(cart))
       axios.get(`https://ikeaserver.herokuapp.com/cart/email=${email}`)
       .then(({data}) => 
                   dispatch(getUserCart(data.value.cartItem))  )
 
  }, [])

  //console.log(userCart)
  /*
  const removeFromCart = (productToRemove) =>{
    ///////////
    setCart(
        cart.filter((product) => product !== productToRemove )
    );

    }   */


   




  return (
    <div>
   
    <Navbar />
  
    
    
    <div id="container-cart">
      <div className="cart-main">
        <div className="cart-top">
          <div className="cart-title">

            <div className="shopping">
              <h1 className='H_bold'>Shopping cart</h1>
              <div><img className='downicon'  src="https://cdn-icons-png.flaticon.com/512/32/32195.png" alt="" /></div>
              <div className="printer"><img className='printericon' src="https://cdn-icons-png.flaticon.com/512/446/446991.png" alt="" /></div>
            </div>
          </div>



      
        <div className='cart_productdiv'>

         <div className="Cart_div">
         {userCart.userCart.map((product )=>(

             
              
           <div key={product._id} className="cart_product">
             <img className='cart_p_icon' src={product.img1}  />
             <div className='cart_prod_text'> 
               <div className='right_text'> 
                <h2 className='bold_title'>{product.companyName}</h2>
                  <h2 className='desc_title'>{product.name}</h2>
                  <h2 className='desc_title'>{product.color}</h2>
               </div> 
            
             
             </div>

             <div className='price_text'> 
             <h1 className='rs'>Rs:{product.price}</h1> 
            
             <div className='util_div'> 
               <button><img className='del_button' src='https://img.icons8.com/wired/344/filled-trash.png'></img></button>
             
                   <div className='del_count'>
                    <p className='mar'>{product.count}</p> 
                    <img className='down_arrow' src="https://cdn-icons-png.flaticon.com/512/32/32195.png" />
                   </div>
             </div>
             
             </div> 
            
              {/* 
                 onClick={() => removeFromCart(product)}
                <div></div>
             <button onClick={() => removeFromCart(product)}><img className='del_button' src='https://img.icons8.com/wired/344/filled-trash.png'></img></button>  */} 

             
             </div>
          ))  }
         
         
         
         
         </div>
         
         
         </div>
         

       


          <div className="total-cart-price">
            <p className='sub'>Subtotal</p>
            <p id="prc-cart">0</p>
          </div>
        </div>


        <div className="cart-bottom">
          <div className="retun-cart">
            <img className='invert_icon' src="https://cdn-icons-png.flaticon.com/512/664/664468.png" alt="" />
            <div className="left-return">
              <p>
                <span className="big-p">Make the most of delivery </span>(order from 0Kg to 3Kg : Rs.199)
              </p>
              <p>
                The cost of delivery varies according to the weight of your
                order.
              </p>
            </div>
            <div className="right-return">
              <p>Weight of your order: <span id="weight" className="big-p">0 </span></p>
              <p>Remaining weight: <span id="rmg-weight" className="big-p">300 kg</span></p>
            </div>
          </div>

          <div className="recieve">
            <p>How would you like to receive your order?</p>
            <div className="recieve-bottom">
              <div className="one-r">
                <img src="https://cdn-icons.flaticon.com/png/512/2800/premium/2800333.png?token=exp=1645708649~hmac=7fe4ce2438bfe97058a3a487171c8444" alt="" />
                <p>Home delivery</p>
              </div>
              <div id="gocheck" className="two-r">
                <img src="https://cdn-icons.flaticon.com/png/512/3258/premium/3258481.png?token=exp=1645708756~hmac=8d863d88784977edd8b5edc088161574" alt="" />
                <p>Click & collect</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="goToShippingBtn">

      </div> */}

      <div className="cart-main-bottom">
        <div className="servise">
          <img src="https://cdn-icons.flaticon.com/png/512/819/premium/819873.png?token=exp=1645708348~hmac=c2c01fa23048cb93874a287fcbb603cc" alt="" />
          <div className="service-des">
            <p>Our Delivery Service</p>
            <p>
            Safe & contact-less delivery according to government permission. 
            </p>
            <p><a>More info</a></p>
          </div>
        </div>

        <div className="servise">
          <img src="https://cdn-icons.flaticon.com/png/512/3164/premium/3164624.png?token=exp=1645708447~hmac=88798abe10f74bcd65657a7ae6c76c09" alt="" />
          <div className="service-des">
            <p>Our Return Policy</p>
            <p>
            We have made some updates to our return policy due to the COVID 19 situation.
            </p>
            <p><a>More info</a></p>
          </div>
        </div>

        <div className="servise">
          <img src="https://cdn-icons.flaticon.com/png/512/780/premium/780634.png?token=exp=1645708574~hmac=4722d04ff55a821df83100d3f2ff8b5e" alt="" />
          <div className="service-des">
            <p>Our Assembly Service</p>
            <p>
            Sometimes it is nice to have someone else assemble it for you.
            </p>
            <p><a>More info</a></p>
          </div>
        </div>
      </div>
    </div>





   <MainFooter />

    </div>
  )
}
