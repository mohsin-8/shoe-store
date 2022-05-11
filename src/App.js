import React from 'react';
import { Routes, Route } from "react-router-dom";

// import Components
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import ViewItems from "./Components/ViewItems/ViewItems";
import NotFound from "./Components/NotFound";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products/" element={<Products />} />
        <Route path="/products/:id" element={<ViewItems />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;