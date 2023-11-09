// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products, onItemClick }) => {
	return (
		<div className="w-full  flex justify-center items-center z-10 p-10 cursor-pointer bg-[#091f36] text-white">
			<ul className="flex border-2 rounded gap-24 text-xl z-10 p-5">
				{products.map((product) => (
					<li key={product.id} onClick={() => onItemClick(product)} className='mr-8 hover:text-gray-300'>
						{product.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductList;
