// src/App.js
import React, { useState } from "react";
import { products } from "./ProductData";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
// import "./App.css";

function Domains() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleItemClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="w-full  justify-center items-center overflow-hidden bg-[#091f36] ">
      <div className="flex flex-col justify-center items-center gap-0 text-white">
        <ProductList products={products} onItemClick={handleItemClick} />
        <ProductDetails selectedProduct={selectedProduct} />
      </div>
    </div>
  );
}

export default Domains;
