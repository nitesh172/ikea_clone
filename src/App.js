import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home/JSX/Home"
import {GamePage} from "./Components/Home/JSX/GamePage"
import { Shop } from './Components/Shop/Shop';
import {Cart} from'./Components/Home/JSX/Cart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GamePage />}></Route>
        { /*   <Route path="/" element={<Home />}></Route>*/}
          { /*   <Route path="/" element={<GamePage />}></Route>*/}
      
        <Route path='/shop' element={<Shop></Shop>}> </Route>
      </Routes>
    </div>
  )
}

export default App
