'use client';
import React, { useState } from 'react';
import DomainsInfo from './DomainInfo';
import { filterProps } from 'framer-motion';
export default function Clubs() {
	const [menu, setMenu] = useState(DomainsInfo);
	const filterItem = (category) => {
		const updated = menu.filter((curEle) => {
		  return curEle.name === category;
		});
		setMenu(updated);
  };
	// console.log(menu);
	return (
		<>
			<div className="w-full h-full flex justify-center items-center  flex-col bg-black text-white p-10">
			<div className='w-full mt-20 flex justify-center items-center gap-4  '>
					<button onClick={() => filterItem('Systems')}>Sytem</button>
					<button onClick={() => filterItem('Web Development')}>Web Development</button>
					<button onClick={() => filterItem('Electronics')}>Electronics</button>
					<button onClick={() => filterItem('3D Modeling')}>3D Modeling</button>
				</div>
				{menu.map((item) => (
					<div className="h-52 border flex justify-center items-center gap-16  bg-black p-10" key={item.id}>
						<div className="text-3xl">{item.id} </div>
						<div className="flex flex-col items-start justify-center gap-5">
							<span>{item.name}</span>
							<span className='w-96'>{item.info}</span>
						</div>
					</div>
				))}
			</div>
			;
		</>
	);
}
