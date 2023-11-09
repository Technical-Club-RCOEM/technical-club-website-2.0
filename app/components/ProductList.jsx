// src/components/ProductList.js
import React from 'react';

const ProductList = ({ products, onItemClick }) => {
	return (
		<div className="z-10  flex w-full cursor-pointer items-center justify-center bg-[#091f36] p-0 pb-5 text-white sm:p-10">
			<ul className="z-10 flex gap-0 rounded border-2 p-1 text-base sm:gap-24 sm:p-5 sm:text-xl">
				{products.map((product) => (
					<li
						key={product.id}
						onClick={() => onItemClick(product)}
						className="mr-1 text-center hover:text-gray-300 sm:mr-8"
					>
						{product.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductList;
