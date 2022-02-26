import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home/JSX/Home"
import { Shop } from './Components/Shop/Shop';
// import { GamePage } from './Components/Shop/GamePage';
import { ShippingPage } from './Components/ShippingPage/ShippingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/shop' element={<Shop></Shop>}> </Route>
        {/* <Route path='/GamePage/:PageName' element={<GamePage />}></Route> */}
        <Route path='/shipping' element={<ShippingPage></ShippingPage>}></Route>
      </Routes>
    </div>
  )
}

export default App
