import React from "react"
import "../CSS/Navbar.css"

export const Navbar = () => {
  return (
    <nav className="nav">
      <div className="iconContainer">
        <button className="menuButton">
          <span className="lineMainConatiner">
            <span className="menuBtn">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </span>
          </span>
          <span className="openMenu">Open Menu</span>
        </button>
      </div>
    </nav>
  )
}
