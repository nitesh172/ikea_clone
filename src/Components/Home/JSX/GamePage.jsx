import { useEffect, useState } from "react"
import "../CSS/Gamepage.css"
import { Product } from "./Product"
import { MainFooter } from "../../Footer/MainFooter"
import { Navbar } from "../../Navbar/Navbar"
import axios from "axios"
import { useParams } from "react-router-dom"
import { MdTune } from "react-icons/md"

export const GamePage = () => {
  const { PageName } = useParams()

  const [show, setShow] = useState(true)
  const [catshow, setcatShow] = useState(true)
  const [priceshow, setpriceShow] = useState(true)
  const [sizeshow, setsizeShow] = useState(true)
  const [matshow, setmatShow] = useState(true)
  const [filtershow, setfilterShow] = useState(true)

  const [gameproducts, setGameproducts] = useState({})

  const myurl = `https://ikeaserver.herokuapp.com/pages/${PageName}`

  useEffect(() => {
    axios.get(myurl).then((res) => {
      setGameproducts(res.data)
    })
  }, [])

  const [product, setProduct] = useState([])

  const myurl1 = `https://ikeaserver.herokuapp.com/products`

  useEffect(() => {
    axios.get(myurl1).then((res) => {
      setProduct(res.data.value)
    })
  }, [])

  return (
    <div className="game_main">
      <div>
        <Navbar />
      </div>
      <div className="upper_box">
        {gameproducts.mainCategory && (
          <h1 className="game_head">{gameproducts.mainCategory}</h1>
        )}

        <div className="head_img_box">
          {gameproducts.subCategory &&
            gameproducts.subCategory.map((e, index) => {
              return (
                <img
                  key={index}
                  className="head_icon"
                  src={e.subCategoryURL}
                ></img>
              )
            })}
        </div>

        <div className="head_sub_left_div">
          {gameproducts.mainHeading && (
            <h2 className="h2_head">
              <strong>{gameproducts.mainHeading}</strong>
            </h2>
          )}

          {gameproducts.mainDesc && (
            <p className="head_p">{gameproducts.mainDesc}</p>
          )}
        </div>
      </div>
      <div className="filter_box">
        <div
          onClick={() => setShow(!show)}
          className={show ? "select_button" : "select_button_black"}
        >
          <p> Sort</p>

          <img
            className={show ? "arrowdown" : "rotate"}
            src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
          ></img>
        </div>

        {show ? null : (
          <div id="shortDropdown">
            <div>
              <label for="chooseRadio">Best match</label>
              <input id="select_match" type="radio" name="match" checked />
            </div>
            <div>
              <label for="chooseRadio">Price: low to high</label>
              <input id="low" type="radio" name="match" />
            </div>
            <div>
              <label for="chooseRadio">Price: high to low</label>
              <input id="high" type="radio" name="match" />
            </div>
            <div>
              <label for="chooseRadio">Newest</label>
              <input type="radio" name="match" />
            </div>
            <div>
              <label for="chooseRadio">Customer rating</label>
              <input type="radio" name="match" />
            </div>
            <div>
              <label for="chooseRadio">Name</label>
              <input type="radio" name="match" />
            </div>
            <div>
              <label for="chooseRadio">Most Popular</label>
              <input type="radio" name="match" />
            </div>
            <div>
              <label for="chooseRadio">Width</label>
              <input type="radio" name="match" />
            </div>
            <div>
              <label for="chooseRadio">Height</label>
              <input type="radio" name="match" />
            </div>
            <div>
              <label for="chooseRadio">Depth</label>
              <input type="radio" name="match" />
            </div>
            <div>
              <label for="chooseRadio">Length</label>
              <input type="radio" name="match" />
            </div>
          </div>
        )}

        <div
          onClick={() => setcatShow(!catshow)}
          className={catshow ? "select_button" : "select_button_black"}
        >
          <p>Category</p>

          <img
            className={catshow ? "arrowdown" : "rotate"}
            src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
          ></img>
        </div>
        {catshow ? null : (
          <div id="catdrop">
            <div>
              <label for="dining">Dining sets</label>
              <input type="checkbox" name="dining" />
            </div>
            <div>
              <label for="dining">Bathroom furniture sets</label>
              <input type="checkbox" name="dining" />
            </div>
            <div>
              <label for="dining">Desk & chair sets</label>
              <input type="checkbox" name="dining" />
            </div>
            <div>
              <label for="dining">Dining sets</label>
              <input type="checkbox" name="dining" />
            </div>
            <div>
              <label for="bed">Bedroom furniture sets</label>
              <input type="checkbox" name="bed" disabled />
            </div>
            <div>
              <label for="sofa">Outdoor sofa combinations</label>
              <input type="checkbox" name="sofa" disabled />
            </div>
          </div>
        )}

        <div
          onClick={() => setpriceShow(!priceshow)}
          className={priceshow ? "select_button" : "select_button_black"}
        >
          <p>Price</p>

          <img
            className={priceshow ? "arrowdown" : "rotate"}
            src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
          ></img>
        </div>
        {priceshow ? null : (
          <div id="pricedrop">
            <div>
              <label for="9999">₹0 - 9,999</label>
              <input name="p0" type="checkbox" />
            </div>
            <div>
              <label for="9999">₹10,000 - 19,999</label>
              <input name="p10000" type="checkbox" />
            </div>
            <div>
              <label for="9999">₹20,000 - 29,999</label>
              <input name="p20000" type="checkbox" />
            </div>
            <div>
              <label for="9999">₹30,000 - 39,999</label>
              <input name="p30000" type="checkbox" />
            </div>
            <div>
              <label for="9999">₹40,000+</label>
              <input name="p40000" type="checkbox" />
            </div>
          </div>
        )}

        <div
          onClick={() => setsizeShow(!sizeshow)}
          className={sizeshow ? "select_button" : "select_button_black"}
        >
          <p>Size</p>

          <img
            className={sizeshow ? "arrowdown" : "rotate"}
            src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
          ></img>
        </div>

        <div
          onClick={() => setmatShow(!matshow)}
          className={matshow ? "select_button" : "select_button_black"}
        >
          <p>Material</p>

          <img
            className={matshow ? "arrowdown" : "rotate"}
            src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
          ></img>
        </div>
        {matshow ? null : (
          <div id="matdrop">
            <div>
              <label for="1">Wood (including board)</label>
              <input type="checkbox" name="1" />
            </div>
            <div>
              <label for="1">Metal</label>
              <input type="checkbox" name="1" />
            </div>
            <div>
              <label for="1">Solid wood</label>
              <input type="checkbox" name="1" />
            </div>
            <div>
              <label for="1">Wood veneer</label>
              <input type="checkbox" name="1" />
            </div>
            <div>
              <label for="1">Glass</label>
              <input type="checkbox" name="1" />
            </div>
            <div>
              <label for="1">Wood (including board)</label>
              <input type="checkbox" name="1" />
            </div>
            <div>
              <label for="1">Wood (including board)</label>
              <input type="checkbox" name="1" />
            </div>
          </div>
        )}

        <div
          onClick={() => setfilterShow(!filtershow)}
          className={filtershow ? "select_button" : "select_button_black"}
        >
          <p>All Filters</p>

          <MdTune className={filtershow ? "arrowdown" : "rotate"}></MdTune>
        </div>
      </div>{" "}
      {/* dont delete me */}
      {/* Product Div starts here ---    --------------------------------------------------------------------*/}
      <div className="game_products_div">
        {product.map((item) => {
          return (
            <Product
              key={item._id}
              id={item._id}
              title={item.companyName}
              desc={item.name}
              price={item.price}
              imageX={item.img1}
              image={item.img2}
              rating={item.rating}
            />
          )
        })}
      </div>
      <div className="lower_box">
        <div className="lowerhead_sub_left_div">
          {gameproducts.pageData &&
            gameproducts.pageData.map((item, index) => {
              return (
                <div key={index}>
                  <h3 className="h3_head">
                    <strong>{item.pHeading}</strong>
                  </h3>
                  <p className="head_p">{item.pDesc}</p>
                </div>
              )
            })}
        </div>
      </div>
      {/* Footer starts here ------------------------------------------------------------------------------- */}
      <MainFooter />
    </div>
  )
}
