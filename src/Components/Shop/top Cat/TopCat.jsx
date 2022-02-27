import React from "react"
import "./TopCat.css"

export const TopCat = ({ firstImgArr, firstNameArr }) => {
  let i = -1

  return (
    <div id="firstCat">
      {firstImgArr.map((img, index) => {
        i++
        return (
          <div key={index} id="box">
            <div id="imgDiv">
              <img src={img} alt="" />
            </div>

            <div id="onImgBox">{firstNameArr[i]}</div>
          </div>
        )
      })}
    </div>
  )
}
