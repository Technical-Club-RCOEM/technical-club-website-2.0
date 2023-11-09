// src/components/ProductDetails.js
import React from "react";
import Image from "next/image";

const ProductDetails = ({ selectedProduct }) => {
  return (
    <div className="w-full flex justify-center items-center overflow-hidden bg-[#091f36] p-10 text-white ">
      {selectedProduct && (
        <div className="sm:w-max h-72 flex flex-col sm:flex-row justify-center rounded-sm items-center gap-10 sm:border sm:p-10 ">
          <Image src={selectedProduct.img} className="w-1/2 sm:w-96" alt="Logo" width={400} height={400} priority />
          <div className="flex w-96 flex-col justify-center items-center sm:items-start gap-5">
          <h2 className="text-3xl">{selectedProduct.name}</h2>
          <p className="font-bold-100 text-center sm:text-start">{selectedProduct.info}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
