import "./App.css"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import About from "./Components/About"
import Product from "./Components/Product"
import Contact from "./Components/Contact"
import { Navigate, Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route to="/" component={Home} />
        <Route to="/products" component={Product} />
        <Route to="/about" component={About} />
        <Route to="/contact" component={Contact} />
        {/* <Navigate to="/" /> */}
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
