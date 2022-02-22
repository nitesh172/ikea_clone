
import React from 'react'
import "./TopCat.css"

export const TopCat = ({firstImgArr, firstNameArr}) => {

    // console.log(firstImgArr);

  return (
    <div id='firstCat'>
        {
            
           firstImgArr.map((img)=>{
                let i = 0;

                return ( <div id='box'>
                    
                        <div id='imgDiv' style={{backgroundImage:`url(${img})`}}>
                            
                        </div>



                </div>
                )

           })
        }

    </div>
  )
}
