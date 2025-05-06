import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import LandingBg from './assets/LandingBg.png'
import LandingPage from './pages/LandingPage'
import './App.css'


function App() {

  return (
   <Router>
    <Routes>
    <Route path="/" element={<LandingPage />} />
    </Routes>
   </Router>
  )
}

export default App
