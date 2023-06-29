import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import Reservation from './pages/Reservation'
import Acceuil from "./pages/Acceuil"
import Contact from "./pages/contact"
import Apropos from "./pages/Apropos"
import Statut from "./pages/Statut"
import {BrowserRouter ,Routes, Route, Router} from "react-router-dom"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="App">
            <BrowserRouter>
              <Routes>
                    <Route path='/' element={<Acceuil/>}/>
                    <Route path='/Statut' element={<Statut/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path='/Apropos' element={<Apropos/>}/>
                    <Route path='/Home' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/Register' element={<Register/>}/>
                    <Route path='/Reservation' element={<Reservation/>}/>
              </Routes>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App
