import "../CSS/Product.css"
import { useState , useEffect } from "react"
import axios from 'axios'


export const Product = ({id, title , image , imageX , desc , price , rating}) => {
  
    const [over, setOver] = useState(false);
  


      
    

  return (
    <div className="product">

    <div className="gameproduct" 
    onMouseOver={() => setOver(true)}
    onMouseOut={() => setOver(false)}
    >
     <img className="img_icon"   src={over ? image : imageX}  ></img>
     <h3 className="title_txt">{title} </h3>
     <h3 className="desc_txt">{desc} </h3>
     <h3 className="price_txt"><span className="rs">Rs</span> {price} </h3>
     <div className="rating_txt">{
         Array(rating).fill()
         .map((_ , index)=>(
             <p  key={index}>★</p>
         ))
     }</div>
    </div>
    </div>
  )
}



