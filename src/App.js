import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home/JSX/Home"
import { Shop } from './Components/Shop/Shop';
// import { GamePage } from './Components/Shop/GamePage';
import { ShippingPage } from './Components/ShippingPage/ShippingPage';
import { GamePage } from './Components/Home/JSX/GamePage';
import { AddressPage } from './Components/ShippingPage/AddressPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/shop' element={<Shop></Shop>}> </Route>
        <Route path='/gamepage/:PageName' element={<GamePage></GamePage>}></Route>
        <Route path='/shipping' element={<ShippingPage></ShippingPage>}></Route>
        <Route path='/filldetails' element={<AddressPage></AddressPage>}></Route>
      </Routes>
    </div>
  )
}

export default App
