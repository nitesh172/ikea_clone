import React from 'react'
import {useParams} from "react-router-dom"

export const GamePage = () => {

    let params = useParams();

    // console.log(params.name);

    
  return (
    <div>
        {params.PageName}
    </div>
  )
}
