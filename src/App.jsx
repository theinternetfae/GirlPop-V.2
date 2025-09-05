import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Landing from "./Landing.jsx";
import Home from "./Home.jsx";
import Checkout from "./Checkout.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
        <Footer />
      </BrowserRouter>   
    </>
  )

}

export default App
