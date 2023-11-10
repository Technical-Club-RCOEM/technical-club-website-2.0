// src/components/ProductList.js
import React from 'react';
const DomainsNavbar = ({ products, onItemClick }) => {
	return (
		<div className="z-10  flex w-full mt-4 cursor-pointer items-center justify-center bg-[#091f36] p-0 pb-5 text-white sm:p-10">
			<ul className="z-10 flex flex-col sm:flex-row gap-8 text-2xl rounded border-2 p-5 sm:gap-24 sm:p-5 sm:text-xl">
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

export default DomainsNavbar;
