'use client';
import { Button } from '@nextui-org/react';
import Box from '../events/box';
import { BoxProps } from '../events/box';
import React, { useState } from 'react';
import '../events/events.css';
import img1 from '../components/img/img1.jpg';
import photo1 from '../components/img/photo1.jpeg';
import techSaga from '../components/img/ach/techsaga.jpg';

const Achievements = () => {
	const [curr, setCurr] = useState(0);

	const arr: BoxProps[] = [
		{
			name: ' Tech Saga',
			description: 'Winner ',
			img: techSaga,
		},
		{
			name: 'Hackanova 2.0 TCET Open Innovation',
			img: img1,
			description: 'Winner ',
		},
		{
			name: 'CodeFury ',
			img: img1,
			description: 'Winner',
		},
		{
			name: 'Autocoders GCOEM ',
			img: photo1,
			description: 'Winner ',
		},
		{
			name: ' IITB Techfest Zonals code',
			img: photo1,
			description: '3rd ',
		},
		{
			name: ' Designex 2.0 VIT-AP',
			img: photo1,
			description: 'Winner ',
		},
		{
			name: ' IISF-SIF (MANIT Bhopal) ',
			img: photo1,
			description: 'AIR 13th  ',
		},
		{
			name: ' IDRL S7Ep6 @ Amalthea 2022, IIT Gandhinagar ',
			img: photo1,
			description: ' 7th position  ',
		},
		{
			name: ' IDRL S7Ep8 @ Technex-23, SPVCET, Nagpur  ',
			img: photo1,
			description: '7th Position',
		},
	];

	const next = () => {
		setCurr((prev) => {
			if (prev + 1 === arr.length) return 0;
			return prev + 1;
		});
	};
	const prev = () => {
		setCurr((prev) => {
			if (prev - 1 === -1) return arr.length - 1;
			return prev - 1;
		});
	};

	return (
		<div className="h-full w-full">
			<div className="-mt-7 flex h-screen w-screen flex-col items-center justify-center ">
				<div className="achieve-bg relative h-3/4 w-9/12  rounded-[100px] bg-tc-blue"></div>
				<p
					className={
						'achieve-head absolute text-3xl uppercase tracking-wider text-white lg:left-[25vw]  lg:top-2/4 lg:text-[100px]'
					}
				>
					Achievements
				</p>
			</div>

			<div className="relative flex overflow-x-hidden lg:gap-40">
				<div
					className="flex pb-10 transition-transform duration-500 ease-out"
					style={{ transform: `translateX(-${curr * (100 / arr.length)}%)` }}
				>
					{arr.map((a, i) => {
						return <Box key={i} {...a} />;
					})}
				</div>

				<Button className="absolute left-2 top-48 h-10 rounded-md bg-slate-600 p-1 text-white lg:top-60" onClick={prev}>
					Prev
				</Button>

				<Button
					className="absolute right-4 top-48 h-10 rounded-md  bg-slate-600 p-1 text-white lg:top-60"
					onClick={next}
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default Achievements;
