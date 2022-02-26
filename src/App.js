import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home/JSX/Home"
import {GamePage} from "./Components/Home/JSX/GamePage"
import { Shop } from './Components/Shop/Shop';
import {Cart} from'./Components/Home/JSX/Cart'
import {Temp} from'./Components/Home/JSX/Temp';
// import { GamePage } from './Components/Shop/GamePage';
import { ShippingPage } from './Components/ShippingPage/ShippingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
         <Route path="/temp" element={<Temp />}></Route>
        { /*   <Route path="/cart" element={<Cart />}></Route>*/}
          { /*   <Route path="/" element={<GamePage />}></Route>*/}
         { /*  <Route path="/gamepage" element={<GamePage />}></Route>  */} 
          <Route path="/cart" element={<Cart />}></Route>
        <Route path='/shop' element={<Shop></Shop>}> </Route>
         <Route path='/gamepage/:PageName' element={<GamePage />}></Route> 
        <Route path='/shipping' element={<ShippingPage></ShippingPage>}></Route>
      </Routes>
    </div>
  )
}

export default App
