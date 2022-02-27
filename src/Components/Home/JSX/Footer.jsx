import "../CSS/Footer.css"
export const Footer = () => {
  return (
    <footer className="wrapperFooter">
      <div className="footerContent">
        <div className="footer-Content">
          <div className="footerContentColumn">
            <h1 className="columnHeading">
              A world of inspiration for your home
            </h1>
          </div>
          <div className="footerContentColumn">
            <div className="contentLogo">
              <img
                src="https://www.ikea.com/global/en/images/ikea-logo.svg"
                className="contentImg"
                alt=""
              />
            </div>
          </div>
          <div className="footerContentColumn">
            <div className="footerLinks">
              <div class="footerLink">About us |</div>
              <div class="footerLink">Life at home |</div>
              <div class="footerLink">Sustainability |</div>
              <div class="footerLink">Ethics & Integrity |</div>
              <div class="footerLink">Work with us |</div>
              <div class="footerLink">Newsroom |</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerRoom">
        <div className="footer-room">
          <div className="footerRoomImgDiv">
            <img
              src="https://www.ikea.com/global/en/images/footer-daylight.svg"
              width="1950"
              height="320"
              class="footer-room__image svelte-l7jfkp"
              alt=""
            ></img>
            <img
              src="https://www.ikea.com/global/en/images/footer-nighttime.svg"
              width="1950"
              height="320"
              class="footerRoomImg2"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div class="footerEnd">
        <div class="footerEndItem">© Inter IKEA Systems B.V. 1999 - 2021</div>{" "}
        <div class="footerEndItem">
          <button class="footerEndButton">Cookie information</button>{" "}
          <span class="footerEndlastLink">Privacy Statement</span>
        </div>
      </div>
    </footer>
  )
}
