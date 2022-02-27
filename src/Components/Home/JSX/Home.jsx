import { Navbar } from "./Navbar"
import "../CSS/Home.css"
import { Link } from "react-router-dom"
import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { falseButton, trueButton } from "../../../Redux/Home/actionHome"
import { Footer } from "./Footer"

export const Home = () => {
  const regionDiv = useRef()
  const shopLink = useRef()
  const arrow = useRef()
  const logoTop = useRef()
  const { regionBtn } = useSelector((store) => store.home)
  const dispatch = useDispatch()

  return (
    <div className="wrapperHome">
      <Navbar />
      <main className="mainDiv">
        <section className="section1">
          <div className="box1">
            <div className="startScreen">
              <img
                src="https://www.ikea.com/global/en/images/PH_178659_optimized_a457170442.jpg?f=sg"
                alt=""
                className="banner1"
              />
              <div className="logoHolder1" ref={logoTop}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 560 110"
                  color="#ffdb00"
                  className="svelte-b9gjqs"
                >
                  <title>IKEA</title>
                  <path
                    fill="currentcolor"
                    d="M4.35,105.17c3.61-1.79,3.36-8,3.37-8.76,0-1.52,0-76.8,0-79.86a7.12,7.12,0,0,0-2.78-5.94h65.2s-2.8,1.61-2.8,6c0,2.58,0,76.87,0,81.46,0,1.14.49,5.46,3.37,7Z"
                  ></path>
                  <path
                    fill="currentcolor"
                    d="M161.58,105.17c-3.34-2.28-3.2-7.07-3.22-8.16,0-.78,0-14.56,0-30.59,0,0,18.21,28.7,19.91,32.88,1.87,4.59-.25,5.87-.25,5.87h75s-.76-.5-1.89-1.36a29.77,29.77,0,0,1-6.69-6.55c-2.66-3.56-30.1-48.12-30.1-48.12s20.66-28.82,23.89-33a29.06,29.06,0,0,1,5.87-5.52s-4.53,0-4.53,0H179.86s3.57,2.51.42,7.09-21.9,30.54-21.9,30.54c0-15.93,0-30.56,0-31.69a7.08,7.08,0,0,1,2.85-5.94H97.72a7.13,7.13,0,0,1,2.77,5.94c.05,3.06,0,78.34,0,79.86,0,.81.24,7-3.37,8.76Z"
                  ></path>
                  <path
                    fill="currentcolor"
                    d="M266.2,10.61A7.13,7.13,0,0,1,269,16.55c0,3.06,0,78.34,0,79.86,0,.81.24,7-3.37,8.76H375V73.05a10.27,10.27,0,0,1-7.41,3.08H324.94V68.59h30.74c1.86,0,7,.59,8.32,2.33l0-28.84c-1.38,1.93-6.57,2.38-8.28,2.38H324.92V36.91s35.67,0,40.09,0A14.8,14.8,0,0,1,375,41.15V10.61Z"
                  ></path>
                  <path
                    fill="currentcolor"
                    d="M476.22,105.17s2.88-3.23,1.87-7.14a94.13,94.13,0,0,0-4.59-11.56H445.45s-3.52,7.45-4.59,11.56c-1,3.91,1.87,7.14,1.87,7.14H386a22.4,22.4,0,0,0,5.23-7.31c2-4.59,29-76.67,30.07-79.27,2-5-1.31-7.93-1.31-7.93h90.23a7.71,7.71,0,0,0-1.49,8.06c1.69,5.1,30.51,76.54,31.81,79.14a19.37,19.37,0,0,0,6,7.31ZM467,69.31S460.25,52.63,460,52a16.53,16.53,0,0,1-1-4.86h-.1A16.53,16.53,0,0,1,458,52c-.26.63-7,17.31-7,17.31Z"
                  ></path>
                  <path
                    fill="currentcolor"
                    d="M522.87,19.68a16,16,0,1,1,16,15.8,15.74,15.74,0,0,1-16-15.8m16,13.18c7.13,0,12.76-5.59,12.76-13.18a12.8,12.8,0,1,0-25.6,0c0,7.59,5.63,13.18,12.84,13.18m-3.33-4.05H532.8V10.64h6.92c4.29,0,6.42,1.58,6.42,5.17,0,3.25-2,4.67-4.71,5l5.16,8h-3.08l-4.79-7.88h-3.17Zm3.29-10.21c2.34,0,4.42-.17,4.42-3,0-2.25-2-2.67-4-2.67h-3.75V18.6Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="holder">
              <div className="regionPicker">
                <Link ref={shopLink} to={"/shop"} className="shopLink add1">
                  <span className="GoShop">Go shopping</span>
                  <svg
                    width="1.5em"
                    height="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 29"
                    className="right"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4,12l8,8,1.41-1.41L7.83,13H20V11H7.83l5.59-5.59L12,4Z"
                    ></path>
                  </svg>
                </Link>
                <div ref={regionDiv} className="regionMenu add">
                  <div className="menuContent">
                    <label htmlFor="search-sites" className="findOnlineStore">
                      Find online store
                    </label>
                    <input
                      className="searchInput"
                      data-cy="search-region"
                      id="search-sites"
                      autoComplete="off"
                      type="text"
                      placeholder="Find online store"
                    />
                    <span className="searchIcon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        className="searchsvg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.6153 4.71411C17.3982 7.12514 17.845 11.2768 15.6388 14.2247L20.7452 19.3312L19.3312 20.7452L14.2247 15.6388C11.2768 17.845 7.12514 17.3982 4.71411 14.6153C2.30308 11.8324 2.45227 7.65947 5.05587 5.05587C7.65947 2.45227 11.8324 2.30308 14.6153 4.71411ZM10.0382 5.03821C7.27678 5.03821 5.03821 7.27678 5.03821 10.0382C5.04135 12.7983 7.27808 15.0351 10.0382 15.0382C12.7996 15.0382 15.0382 12.7996 15.0382 10.0382C15.0382 7.27678 12.7996 5.03821 10.0382 5.03821Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                    <ul className="selectorList">
                      <li
                        onClick={() => {
                          if (regionBtn) {
                            regionDiv.current.classList.add("rev")
                            shopLink.current.classList.add("rev1")
                            regionDiv.current.classList.remove("add")
                            shopLink.current.classList.remove("add1")
                            dispatch(trueButton())
                          } else {
                            regionDiv.current.classList.add("add")
                            regionDiv.current.classList.remove("rev")
                            shopLink.current.classList.add("add1")
                            shopLink.current.classList.remove("rev1")
                            dispatch(falseButton())
                          }
                        }}
                      >
                        <button className="option">ikea.in</button>
                      </li>
                      <li>
                        <button className="option">
                          ikea.cn
                          <span className="lang">(中文 (Zhōngwén))</span>
                        </button>
                      </li>
                      <li>
                        <button className="option">
                          ikea.cn
                          <span className="lang">(English)</span>
                        </button>
                      </li>
                      <li>
                        <button className="option">
                          ikea.cn
                          <span className="lang">(English)</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  className="openPicker"
                  tabIndex="0"
                  onClick={() => {
                    if (regionBtn) {
                      regionDiv.current.classList.add("rev")
                      shopLink.current.classList.add("rev1")
                      regionDiv.current.classList.remove("add")
                      shopLink.current.classList.remove("add1")
                      arrow.current.style.transform = "rotate(180deg)"
                      dispatch(trueButton())
                    } else {
                      regionDiv.current.classList.add("add")
                      regionDiv.current.classList.remove("rev")
                      shopLink.current.classList.add("add1")
                      shopLink.current.classList.remove("rev1")
                      arrow.current.style.transform = "rotate(0deg)"
                      dispatch(falseButton())
                    }
                  }}
                >
                  <span className="selected-site">
                    <span aria-hidden="true">
                      Online store:
                      <span
                        style={{ fontWeight: "bold", marginLeft: ".3rem" }}
                        className="site"
                      >
                        ikea.in
                      </span>
                    </span>
                    <span className="chevron">
                      <svg
                        ref={arrow}
                        width="16"
                        height="9"
                        viewBox="0 0 16 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        style={{ marginLeft: ".3rem", transition: "all 300ms" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M16 1.38462L14.5455 0L8 6.23077L1.45455 0L0 1.38462L8 9L16 1.38462Z"
                          fill="#111111"
                        ></path>
                      </svg>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="section2">
          <Link to={"/"} className="card">
            <div className="imgContainer">
              <img
                src="https://www.ikea.com/global/en/images/Festivalfeb_f45af99188.jpg?f=l"
                alt=""
                className="cardImg"
              />
            </div>
            <div className="cardContent">
              <h2 className="cardTitle">Welcome to IKEA Festival</h2>
              <span className="iconSpan">
                <svg
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="svelte-1iyybxb right"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 3.73333L2.6 3.73333L6 4.29138e-07L4.13333 2.65948e-07L3.96317e-07
    4.46667L4.13333 9L6.06667 9L2.66667 5.26667L12 5.26667L12 3.73333Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </Link>
          <Link to={"/"} className="card">
            <div className="imgContainer">
              <img
                src="https://www.ikea.com/global/en/images/internationalsales_7dfd8b4ae0.jpg?f=l"
                alt=""
                className="cardImg"
              />
            </div>
            <div className="cardContent">
              <h2 className="cardTitle">Welcome to IKEA Festival</h2>
              <span className="iconSpan">
                <svg
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="svelte-1iyybxb right"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 3.73333L2.6 3.73333L6 4.29138e-07L4.13333 2.65948e-07L3.96317e-07
    4.46667L4.13333 9L6.06667 9L2.66667 5.26667L12 5.26667L12 3.73333Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </Link>
          <Link to={"/"} className="card">
            <div className="imgContainer">
              <img
                src="https://www.ikea.com/global/en/images/aboutikea_0cea43798a.jpg?f=l"
                alt=""
                className="cardImg"
              />
            </div>
            <div className="cardContent">
              <h2 className="cardTitle">Welcome to IKEA Festival</h2>
              <span className="iconSpan">
                <svg
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="svelte-1iyybxb right"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 3.73333L2.6 3.73333L6 4.29138e-07L4.13333 2.65948e-07L3.96317e-07
    4.46667L4.13333 9L6.06667 9L2.66667 5.26667L12 5.26667L12 3.73333Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </Link>
          <Link to={"/"} className="card">
            <div className="imgContainer">
              <img
                src="https://www.ikea.com/global/en/images/Festivalfeb_f45af99188.jpg?f=l"
                alt=""
                className="cardImg"
              />
            </div>
            <div className="cardContent">
              <h2 className="cardTitle">Welcome to IKEA Festival</h2>
              <span className="iconSpan">
                <svg
                  width="12"
                  height="9"
                  viewBox="0 0 12 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="svelte-1iyybxb right"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 3.73333L2.6 3.73333L6 4.29138e-07L4.13333 2.65948e-07L3.96317e-07
    4.46667L4.13333 9L6.06667 9L2.66667 5.26667L12 5.26667L12 3.73333Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
