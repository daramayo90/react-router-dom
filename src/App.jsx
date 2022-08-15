import "./App.css";
import logo from "./logo.png";

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Vitamin from "./components/Vitamin";
import Navigation from "./components/Navigation";
import ProductDetails from "./components/ProductDetails";
import Lost from "./components/Lost";

import useFetch from "./hooks/useFetch";

function App() {
  const [isLogo, setIsLogo] = useState(true);
  const [products, setProducts] = useState([]);

  const { data } = useFetch('https://fakestoreapi.com/products');
  
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  const toggleLogo = () => {
    setIsLogo(!isLogo);
  };

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className={isLogo ? "static-logo" : "static-logo animated jello"}
          alt="logo"
          onMouseEnter={toggleLogo}
          onMouseLeave={toggleLogo}
          onClick={openNav}
        />
        <h1
          className={isLogo ? "menu-hidden" : "menu animated bounceInDown"}
          onClick={openNav}
        >
          Menu
        </h1>
        <Navigation closeNav={closeNav} />
      </header>
      <Routes>
        <Route exact path="/" element={<Home products={products} />} />
        <Route exact path="/vitamin" element={<Vitamin />} />
        <Route exact path="/product/:id" element={<ProductDetails products={products} />} />
        <Route path="*" element={<Lost />} />
      </Routes>
    </div>
  );
}

export default App;
