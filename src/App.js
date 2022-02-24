import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home/JSX/Home"
import { Signup } from './Components/Home/JSX/Register/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signup />}></Route>
      </Routes>
    </div>
  )
}

export default App
