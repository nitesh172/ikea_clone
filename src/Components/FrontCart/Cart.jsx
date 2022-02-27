import { MainFooter } from "../Footer/MainFooter"
import { Navbar } from "../Navbar/Navbar"
import { RiStore3Line } from "react-icons/ri"
import { RiTruckLine } from "react-icons/ri"
import { GiSelfLove } from "react-icons/gi"
import { GiDrill } from "react-icons/gi"

import "./Cart.css"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { getUserCart } from "../../Redux/mainCart/actionCart"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"

export const Cart = () => {
  const [cookies, setCookie] = useCookies(["user"])
  const email = cookies.email
  const { userCart } = useSelector((state) => state.userCart)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://ikeaserver.herokuapp.com/cart/email=${email}`)
      .then(({ data }) => dispatch(getUserCart(data.cartItem)))
  }, [])

  return (
    <div>
      <Navbar />

      <div id="container-cart">
        <div className="cart-main">
          <div className="cart-top">
            <div className="cart-title">
              <div className="shopping">
                <h1 className="H_bold">Shopping cart</h1>
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
                {userCart.map((product) => (
                  <div key={product._id} className="cart_product">
                    <img className="cart_p_icon" src={product.img1} />
                    <div className="cart_prod_text">
                      <div className="right_text">
                        <h2 className="bold_title">{product.companyName}</h2>
                        <h2 className="desc_title">{product.name}</h2>
                        <h2 className="desc_title">{product.color}</h2>
                      </div>
                    </div>

                    <div className="price_text">
                      <h1 className="rs">Rs:{product.price}</h1>

                      <div className="util_div">
                        <button>
                          <img
                            className="del_button"
                            src="https://img.icons8.com/wired/344/filled-trash.png"
                          ></img>
                        </button>

                        <div className="del_count">
                          <p className="mar">{product.count}</p>
                          <img
                            className="down_arrow"
                            src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="total-cart-price">
              <p className="sub">Subtotal</p>
              <p id="prc-cart">0</p>
            </div>
          </div>

          <div className="cart-bottom">
            <div className="retun-cart">
              <img
                className="invert_icon"
                src="https://cdn-icons-png.flaticon.com/512/664/664468.png"
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
                  <p>Home delivery</p>
                </div>
                <div id="gocheck" className="two-r">
                  <RiStore3Line className="cartTruck"></RiStore3Line>
                  <p>Click & collect</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="goToShippingBtn"
          onClick={() => {
            navigate("/shipping")
          }}
        >
          Proceed
        </div>

        <div className="cart-main-bottom">
          <div className="servise">
            <RiTruckLine className="bigTruck"></RiTruckLine>
            {/* <img src="https://cdn-icons.flaticon.com/png/512/819/premium/819873.png?token=exp=1645708348~hmac=c2c01fa23048cb93874a287fcbb603cc" alt="" /> */}
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
            <GiSelfLove className="bigTruck"></GiSelfLove>
            {/* <img src="https://cdn-icons.flaticon.com/png/512/3164/premium/3164624.png?token=exp=1645708447~hmac=88798abe10f74bcd65657a7ae6c76c09" alt="" /> */}
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
            <GiDrill className="bigTruck"></GiDrill>
            {/* <img src="https://cdn-icons.flaticon.com/png/512/780/premium/780634.png?token=exp=1645708574~hmac=4722d04ff55a821df83100d3f2ff8b5e" alt="" /> */}
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

      <MainFooter />
    </div>
  )
}
