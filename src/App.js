import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home/JSX/Home"
import { Signup } from './Components/Home/JSX/Register/Signup';
import { Shop } from './Components/Shop/Shop';
import { Login } from './Components/Login/Login';
import { Item } from './Components/Items_page/Item';

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Home />}></Route>
        <Route path='/shop' element={<Shop></Shop>}> </Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/products/1" element={<Item />}></Route>

      </Routes>
    </div>
  )
}

export default App
