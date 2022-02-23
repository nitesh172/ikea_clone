
import { useState } from "react"
import "../CSS/Gamepage.css"
import {Product} from './Product'
import {Footer} from './Footer'



export const GamePage = () => {

   
    


    return (
      <div className="game_main">
      <div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
       publishing software like Aldus PageMaker including versions of Lorem Ipsum.lll</p>

      
      </div>

       <div className="filter_box">
         <select className="select_button">
         <option value="sort">Sort</option>
         <option value="Lowtohigh">Low to high</option>
         <option value="hightolow"> high to low</option>
         </select>


         <select className="select_button">
         <option value="sort">Category</option>
         <option value="Lowtohigh">Low to high</option>
         <option value="hightolow"> high to low</option>
         </select>

         <select className="select_button">
         <option value="sort">Price</option>
         <option value="Lowtohigh">Low to high</option>
         <option value="hightolow"> high to low</option>
         </select>

         

         <select className="select_button">
         <option value="sort">Size</option>
         <option value="Lowtohigh">Low to high</option>
         <option value="hightolow"> high to low</option>
         </select>

         <select className="select_button">
         <option value="sort">Material</option>
         <option value="Lowtohigh">Low to high</option>
         <option value="hightolow"> high to low</option>
         </select>

         <select className="select_button">
         <option value="sort">All filters</option>
         <option value="Lowtohigh">Low to high</option>
         <option value="hightolow"> high to low</option>
         </select>
       </div>      
       
       

   { /* Product Div starts here ---    --------------------------------------------------------------------*/  } 


       <div className="game_products_div">
        <div className="product">
         <Product 
         id="1"
         title="LÅNESPELARE"
         desc="Mug Holder"
         price={799}
         imageX="https://www.ikea.com/in/en/images/products/lanespelare-mug-holder-black__0985191_pe816542_s5.jpg?f=xxs"
         image="https://www.ikea.com/in/en/images/products/lanespelare-mug-holder-black__0997518_pe822696_s5.jpg?f=xxxs"
         rating={4}
         />
        
        </div>

        <div className="product">
        <Product 
        id="2"
        title="LÅNESPELARE"
        desc="Mug Holder"
        price={799}
        imageX="https://www.ikea.com/in/en/images/products/utespelare-gaming-desk-black__0985179_pe816538_s5.jpg?f=xxs"
        image="https://www.ikea.com/in/en/images/products/utespelare-gaming-desk-black__0997777_pe822755_s5.jpg?f=xxxs"
        rating={4}
        />
        </div>

        <div className="product">
        <Product 
        id="2"
        title="LÅNESPELARE"
        desc="Mug Holder"
        price={799}
        imageX="https://www.ikea.com/in/en/images/products/uppspel-pegboard-combination-black__0985178_pe816537_s5.jpg?f=xxs"
        image="https://www.ikea.com/in/en/images/products/uppspel-pegboard-black__0997548_pe822699_s5.jpg?f=xxxs"
        rating={5}
        />
        </div>

        <div className="product">
        <Product 
        id="2"
        title="LÅNESPELARE"
        desc="Mug Holder"
        price={799}
        imageX="https://www.ikea.com/in/en/images/products/gruppspel-gaming-chair-gunnared-beige__1036734_pe838521_s5.jpg?f=xxs"
        image="https://www.ikea.com/in/en/images/products/gruppspel-gaming-chair-gunnared-beige__1046699_ph180881_s5.jpg?f=xxs"
        rating={4}
        />
        </div>

       

        <div className="product">
        <Product 
        id="2"
        title="LÅNESPELARE"
        desc="Mug Holder"
        price={799}
        imageX="https://www.ikea.com/in/en/images/products/lanespelare-multi-functional-cushion-blanket__0984811_pe816419_s5.jpg?f=xxs"
        image="https://www.ikea.com/in/en/images/products/lanespelare-accessories-stand__1083065_pe858960_s5.jpg?f=xxxs"
        rating={3}
        />
        </div>

        <div className="product">
        <Product 
        id="2"
        title="LÅNESPELARE"
        desc="Mug Holder"
        price={799}
        image="https://www.ikea.com/in/en/images/products/huvudspelare-gaming-chair-black__0961666_pe807698_s5.jpg?f=xxs"
        imageX="https://www.ikea.com/in/en/images/products/utespelare-gaming-chair-bomstad-black__0997900_pe822868_s5.jpg?f=xxxs"
        rating={4}
        />
        </div>

        <div className="product">
        <Product 
        id="2"
        title="LÅNESPELARE"
        desc="Mug Holder"
        price={799}
        image="https://www.ikea.com/in/en/images/products/huvudspelare-gaming-chair-black__0961666_pe807698_s5.jpg?f=xxs"
        imageX="https://www.ikea.com/in/en/images/products/lanespelare-multi-functional-cushion-blanket__0997849_pe822825_s5.jpg?f=xxxs"
        rating={3}
        />
        </div>

        <div className="product">
        <Product 
        id="2"
        title="LÅNESPELARE"
        desc="Mug Holder"
        price={799}
        image="https://www.ikea.com/in/en/images/products/huvudspelare-gaming-chair-black__0961666_pe807698_s5.jpg?f=xxs"
        imageX="https://www.ikea.com/in/en/images/products/gruppspel-gaming-chair-gunnared-beige__1046699_ph180881_s5.jpg?f=xxs"
        rating={4}
        />
        </div>
       
       </div>
     
        { /* Footer starts here ------------------------------------------------------------------------------- */  } 
    
       <Footer />



      { /* 
         <div className="Select_radiodiv">
       <label for="mysort" className="radio">
        <input className="radio_input" type="radio" name="mysort_field" id="mysort"></input>
       </label>
    
    */  } 
      


      </div>
        
      
    )
  }
  


  