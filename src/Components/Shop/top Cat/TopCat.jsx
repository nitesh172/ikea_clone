
import React from 'react'
import "./TopCat.css"

export const TopCat = ({firstImgArr, firstNameArr}) => {

  let i = -1;
    // console.log(firstImgArr);

  return (
    <div id='firstCat'>
        {
            
           firstImgArr.map((img)=>{
                  i++
                return ( <div id='box'>
                    
                        <div id='imgDiv'>
                              <img src={img} alt="" />
                            
                        </div>

                        <div id='onImgBox'>
                            {firstNameArr[i]}
                        </div>



                </div>
                )

           })
        }

    </div>
  )
}
