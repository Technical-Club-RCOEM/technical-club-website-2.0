// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products, onItemClick }) => {
	return (
		<div className="w-full  flex justify-center items-center z-10 p-0 pb-5 sm:p-10 cursor-pointer bg-[#091f36] text-white">
			<ul className="flex border-2 rounded gap-0 sm:gap-24 text-base sm:text-xl z-10 p-1 sm:p-5">
				{products.map((product) => (
					<li key={product.id} onClick={() => onItemClick(product)} className='text-center mr-1 sm:mr-8 hover:text-gray-300'>
						{product.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductList;
