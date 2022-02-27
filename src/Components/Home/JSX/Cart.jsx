import { Footer } from "./Footer"
import { Navbar } from "../../Navbar/Navbar"

import "../CSS/Cart.css"

import { useState } from "react"

export const Cart = () => {
  const [cart, setCart] = useState(cartFromLocalStore)

  const removeFromCart = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove))
  }

  return (
    <div>
      <Navbar />

      <div id="container-cart">
        <div className="cart-main">
          <div className="cart-top">
            <div className="cart-title">
              <div className="shopping">
                <h1>Shopping cart</h1>
                <div>
                  <img
                    className="downicon"
                    src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                    alt=""
                  />
                </div>
                <div className="printer">
                  <img
                    className="printericon"
                    src="https://cdn-icons-png.flaticon.com/512/446/446991.png"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="cart_productdiv">
              <div className="Cart_div">
                {cart.map((product) => (
                  <div className="cart_product">
                    <h2>{product.name}</h2>
                    <h2>{product.cost}</h2>
                    {/*  <h1>Total:{total}</h1>  */}
                    <img className="cart_p_icon" src={product.image} />
                    <button onClick={() => removeFromCart(product)}>
                      Remove From cart
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="total-cart-price">
              <p>Subtotal</p>
              <p id="prc-cart">0</p>
            </div>
          </div>

          <div className="cart-bottom">
            <div className="retun-cart">
              <img
                src="https://cdn-icons.flaticon.com/png/512/3258/premium/3258481.png?token=exp=1645708756~hmac=8d863d88784977edd8b5edc088161574"
                alt=""
              />
              <div className="left-return">
                <p>
                  <span className="big-p">Make the most of delivery </span>
                  (order from 0Kg to 3Kg : Rs.199)
                </p>
                <p>
                  The cost of delivery varies according to the weight of your
                  order.
                </p>
              </div>
              <div className="right-return">
                <p>
                  Weight of your order:{" "}
                  <span id="weight" className="big-p">
                    0{" "}
                  </span>
                </p>
                <p>
                  Remaining weight:{" "}
                  <span id="rmg-weight" className="big-p">
                    300 kg
                  </span>
                </p>
              </div>
            </div>
            <div className="recieve">
              <p>How would you like to receive your order?</p>
              <div className="recieve-bottom">
                <div className="one-r">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/2800/premium/2800333.png?token=exp=1645708649~hmac=7fe4ce2438bfe97058a3a487171c8444"
                    alt=""
                  />
                  <p>Home delivery</p>
                </div>
                <div id="gocheck" className="two-r">
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/3258/premium/3258481.png?token=exp=1645708756~hmac=8d863d88784977edd8b5edc088161574"
                    alt=""
                  />
                  <p>Click & collect</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cart-main-bottom">
          <div className="servise">
            <img
              src="https://cdn-icons.flaticon.com/png/512/819/premium/819873.png?token=exp=1645708348~hmac=c2c01fa23048cb93874a287fcbb603cc"
              alt=""
            />
            <div className="service-des">
              <p>Our Delivery Service</p>
              <p>
                Safe & contact-less delivery according to government permission.
              </p>
              <p>
                <a>More info</a>
              </p>
            </div>
          </div>

          <div className="servise">
            <img
              src="https://cdn-icons.flaticon.com/png/512/3164/premium/3164624.png?token=exp=1645708447~hmac=88798abe10f74bcd65657a7ae6c76c09"
              alt=""
            />
            <div className="service-des">
              <p>Our Return Policy</p>
              <p>
                We have made some updates to our return policy due to the COVID
                19 situation.
              </p>
              <p>
                <a>More info</a>
              </p>
            </div>
          </div>

          <div className="servise">
            <img
              src="https://cdn-icons.flaticon.com/png/512/780/premium/780634.png?token=exp=1645708574~hmac=4722d04ff55a821df83100d3f2ff8b5e"
              alt=""
            />
            <div className="service-des">
              <p>Our Assembly Service</p>
              <p>
                Sometimes it is nice to have someone else assemble it for you.
              </p>
              <p>
                <a>More info</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
