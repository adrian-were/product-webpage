import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Product from './components/Product';
import Footer from './components/Footer'


function App() {
return (
  <div>
    <Navbar />
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
        </Routes>
    <Footer />
  </div>
)
}

export default App
