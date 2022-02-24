import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home/JSX/Home"
import { Shop } from './Components/Shop/Shop';
import { LoginPage } from './Components/Login/LoginPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path='/shop' element={<Shop></Shop>}> </Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </div>
  )
}

export default App
