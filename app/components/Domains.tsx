"use client"
import React, { useState } from 'react';
import { products } from './DomainsData';
import { roboto_slab } from '../fonts';
import DomainsNavbar from './DomainsNavbar';
import DomainsCard from './DomainsCard';
function Domains() {
	const [selectedProduct, setSelectedProduct] = useState(null);

	const handleItemClick = (item) => {
		setSelectedProduct(item);
	};

	return (
		<div className="flex w-full flex-col items-center justify-center overflow-hidden bg-[#091f36] py-24 ">
			<p className={'py-2 text-center text-8xl text-white max-md:text-5xl ' + roboto_slab.className}>Our Domains</p>
			<div className="flex flex-col items-center justify-center gap-0 text-white">
				<DomainsNavbar products={products} onItemClick={handleItemClick} />
				<DomainsCard selectedProduct={selectedProduct} />
			</div>
		</div>
	);
}

export default Domains;
