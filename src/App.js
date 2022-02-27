import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home/JSX/Home"
import { Shop } from './Components/Shop/Shop';
// import { GamePage } from './Components/Shop/GamePage';
import { ShippingPage } from './Components/ShippingPage/ShippingPage';
import { GamePage } from './Components/Home/JSX/GamePage';
import { AddressPage } from './Components/ShippingPage/AddressPage';
import { Item } from './Components/Items_page/Item';
import { Signup } from './Components/Home/JSX/Register/Signup';
import { Login } from './Components/Login/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/shop' element={<Shop></Shop>}> </Route>
        <Route path='/gamepage/:PageName' element={<GamePage></GamePage>}></Route>
        <Route path='/shipping' element={<ShippingPage></ShippingPage>}></Route>
        <Route path='/filldetails' element={<AddressPage></AddressPage>}></Route>
        <Route path='/product/:id' element={<Item></Item>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  )
}

export default App
