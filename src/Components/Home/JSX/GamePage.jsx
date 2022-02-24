
import { useState } from "react"
import "../CSS/Gamepage.css"
import {Product} from './Product'
import {Footer} from './Footer'
import { Navbar } from "../../Navbar/Navbar"



export const GamePage = () => {

   
    const [show , setShow]= useState(true)
    const [catshow , setcatShow]= useState(true)
    const [priceshow , setpriceShow]= useState(true)
    const [sizeshow , setsizeShow]= useState(true)
    const [matshow , setmatShow]= useState(true)
    const [filtershow , setfilterShow] = useState(true)


    return (
      <div className="game_main">
      <div>
     <Navbar />

      
      </div>



       <div className="filter_box">

       

         <div onClick={()=>setShow(!show)} className={show? "select_button":"select_button_black"}>
         <p> Sort</p> 

         <img className={show? "arrowdown":"rotate"}  src="https://cdn-icons-png.flaticon.com/512/32/32195.png"></img>
         </div>

         {
          show?  null : <div id="shortDropdown"  >
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
            <input type="radio" name="match"/>
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
            <input type="radio" name="match"  />
          </div>
        </div>  

         }

         

         




         <div onClick={()=>setcatShow(!catshow)} className={catshow? "select_button":"select_button_black"}>
         <p>Category</p> 

         <img className={catshow? "arrowdown":"rotate"}  src="https://cdn-icons-png.flaticon.com/512/32/32195.png"></img>
         </div>
          {
            catshow? null: <div id="catdrop">
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


          }


        
          <div onClick={()=>setpriceShow(!priceshow)} className={priceshow? "select_button":"select_button_black"}>
         <p>Price</p> 

         <img className={priceshow? "arrowdown":"rotate"}  src="https://cdn-icons-png.flaticon.com/512/32/32195.png"></img>
         </div>
         {
           priceshow? null : <div id="pricedrop">
           <div>
             <label for="9999">₹0 - 9,999</label>
             <input name="p0" type="checkbox" />
           </div>
           <div>
             <label for="9999">₹10,000 - 19,999</label>
             <input name="p10000" type="checkbox"/>
           </div>
           <div>
             <label for="9999">₹20,000 - 29,999</label>
             <input name="p20000" type="checkbox" />
           </div>
           <div>
             <label for="9999">₹30,000 - 39,999</label>
             <input name="p30000" type="checkbox"  />
           </div>
           <div>
             <label for="9999">₹40,000+</label>
             <input name="p40000" type="checkbox"  />
           </div>
         </div>
         }


         

         <div onClick={()=>setsizeShow(!sizeshow)} className={sizeshow? "select_button":"select_button_black"}>
         <p>Size</p> 

         <img className={sizeshow? "arrowdown":"rotate"}  src="https://cdn-icons-png.flaticon.com/512/32/32195.png"></img>
         </div>
         




         <div onClick={()=>setmatShow(!matshow)} className={matshow? "select_button":"select_button_black"}>
         <p>Material</p> 

         <img className={matshow? "arrowdown":"rotate"}  src="https://cdn-icons-png.flaticon.com/512/32/32195.png"></img>
         </div>
         {
           matshow? null :  <div id="matdrop">
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
         }
         

         <div onClick={()=>setfilterShow(!filtershow)} className={filtershow? "select_button":"select_button_black"}>
         <p>All Filters</p> 

         <img className={filtershow? "arrowdown":"rotate"}  src="https://cdn-icons.flaticon.com/png/512/3171/premium/3171047.png?token=exp=1645682887~hmac=9b88da106cd97a662b668d7d70bfea87"></img>
         </div>


        
     
     
         </div>      {/* dont delete me */}
       
       

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
  


  