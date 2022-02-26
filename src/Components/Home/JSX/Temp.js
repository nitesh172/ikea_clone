import { useEffect, useState } from "react"

const cartFromLocalStore= JSON.parse(localStorage.getItem('IkeaCart') || '[]')


export const Temp = () => {
 
    const [cart , setCart] = useState(cartFromLocalStore)
    const [total , setTotal] = useState(0)
   
  
    useEffect(() =>{
        localStorage.setItem('IkeaCart' , JSON.stringify(cart))

  }, [cart])




    const product = {
        name: 'Products   Temp',
        cost:  1000,
        image:'https://www.ikea.com/in/en/images/products/lanespelare-mug-holder-black__0997518_pe822696_s5.jpg?f=xxxs'
    }



    const addToCart = (product) => {
        console.log("cart working")
        setCart([...cart , product])
    }
   
    const Totalview = (x) =>{
        console.log("Totalview woinii")
        setTotal(total+x)
    }

    const removeFromCart = (productToRemove) =>{
    ///////////
    setCart(
        cart.filter((product) => product !== productToRemove )
    );

    }
 

    return (
      <div>

      <header>
       <button> Go to cart({cart.length})</button>
      </header>
      
    

      <div className="Product">
      <h1>Products   Temp</h1>
      <h3>Cup Ikea</h3>
      <h3>1000</h3>
      <img src="https://www.ikea.com/in/en/images/products/lanespelare-mug-holder-black__0997518_pe822696_s5.jpg?f=xxxs" />
      <button onClick={()=> addToCart(product)}>Add to cart</button>
      </div>
        
      {/* ------------------------------------------------------------------------------------------ */}

      <div className="Cart_div">
      {cart.map((product)=>(
           
          <div className="cart_product">
          
           <h2>{product.name}</h2>
           <h2>{product.cost}</h2>
          {/*  <h1>Total:{total}</h1>  */} 
           <img src={product.image}  />
           <button onClick={() => removeFromCart(product)}>Remove From cart</button>
          </div>
      ))  }
      
      
      
      
      </div>





      </div>
    )
  }
  