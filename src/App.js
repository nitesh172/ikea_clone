import './App.css';
import { Route, Routes } from "react-router-dom"
import { Home } from "./Components/Home/JSX/Home"
import {GamePage} from "./Components/Home/JSX/GamePage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GamePage />}></Route>
      </Routes>
    </div>
  )
}

export default App
