'use client';
import React, { useState } from 'react';
import DomainsInfo from './DomainInfo';
import Clubs from './Clubs';
export default function Domains() {
	const [menu, setMenu] = useState(DomainsInfo);
  const filterItem = (category) => {
          const updated = menu.filter((curEle) => {
			return curEle.name === category;
		  });
		  setMenu(updated);
	};
	return (
		<>
				<div className='w-full mt-20 flex justify-center items-center gap-4  '>
					<button onClick={() => filterItem('Systems')}>Sytem</button>
					<button onClick={() => filterItem('Web Development')}>Web Development</button>
					<button onClick={() => filterItem('Electronics')}>Electronics</button>
					<button onClick={() => filterItem('3D Modeling')}>3D Modeling</button>
				</div>
			<Clubs menu={menu} />
		</>
	);
}
