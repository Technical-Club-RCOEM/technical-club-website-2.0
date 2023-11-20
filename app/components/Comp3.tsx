'use client';
import './Comp3.css';
import Image from 'next/image';
import shape from './img/shape.svg';
import { useState } from 'react';
import left from './img/Arrow_left.svg';
import right from './img/Arrow_right.svg';
import { Button } from '@nextui-org/react';

// image imports
import harsheet from './img/seniors/harsheet.png';
import madhav from './img/seniors/madhav.png';
import sushant from './img/seniors/sushant.png';

export default function Component() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const children = [
		{
			content:
				'TC is the most memorable part of my college life, made friends  and gained experiences for lifetime. Enjoyed the whole process with my TC family!!',
			img: harsheet,
		},
		{
			content:
				'My very first club in college, tons of memories and learning. To all my TC juniors, have fun and learn a lot.',
			img: madhav,
		},
		{
			content:
				"Happy to be part of TC. Met many W's and noobs , cooked sweet memories , all my fellas keep learning keep growing ;-)",
			img: sushant,
		},
	];

	const handleLeftClick = () => {
		if (currentIndex === 0) {
			setCurrentIndex(children.length - 1);
		} else {
			setCurrentIndex((prevIndex) => prevIndex - 1);
		}
	};
	const handleRightClick = () => {
		if (currentIndex === children.length - 1) {
			setCurrentIndex(0);
		} else {
			setCurrentIndex((prevIndex) => prevIndex + 1);
		}
	};
	return (
		<div className="relative mt-48 flex h-60 w-1/2 flex-col items-center justify-center max-md:w-[90vw]">
			<Image src={shape} className="" alt="Logo" width={700} height={700} priority />
			<div className="absolute -top-12 left-[12vw] max-md:-top-28 max-md:left-auto max-md:flex max-md:flex-col max-md:justify-center">
				<Image
					className="photo1 no-repeat aspect-[9/12] h-60 w-full items-center object-cover max-md:h-44 md:-translate-x-4"
					src={children[currentIndex].img}
					alt="img"
					width={300}
					height={400}
					priority
				/>
			</div>
			<div className="absolute mb-12 ml-10 w-1/3 translate-x-24 max-md:ml-1 max-md:flex max-md:w-[70vw] max-md:translate-x-0 max-md:translate-y-2 max-md:items-center max-md:justify-center max-md:text-center max-md:text-sm">
				{children[currentIndex].content}
			</div>
			<div className="relative top-44 mx-10 flex w-full items-center justify-between md:top-0 ">
				<Button
					isIconOnly
					variant="solid"
					className="z-10 bg-[#154a82] p-3 max-md:-translate-y-36"
					onClick={handleLeftClick}
				>
					<Image src={left} alt="arrow" width={200} height={200} priority />
				</Button>
				<Button
					isIconOnly
					variant="solid"
					className="z-10 bg-[#154a82] p-3 max-md:-translate-y-36"
					onClick={handleRightClick}
				>
					<Image src={right} alt="arrow" width={200} height={200} priority />
				</Button>
			</div>
		</div>
	);
}
