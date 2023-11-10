'use client';
import './Comp3.css';
import Image from 'next/image';
import shape from './img/shape.svg';
import { useState } from 'react';
import left from './img/Arrow_left.svg';
import right from './img/Arrow_right.svg';
import { Button } from '@nextui-org/react';
export default function Component() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const children = [
		{
			content: 'Harsheet Bhaiyya',
			img: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D',
		},
		{
			content: 'Aaliya Di',
			img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwA4WjhEsYgWRVID6HZnfKwjrNKWzqw7nS5Q&usqp=CAU',
		},
		{
			content: 'Madhav Bhaiyya',
			img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
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
		<div className="relative mt-48 flex flex-col h-60 w-1/2 items-center justify-center max-md:w-[90vw]">
			<Image src={shape} className="" alt="Logo" width={700} height={700} priority />
			<div className="absolute -top-24 left-[15vw] max-md:-top-2 max-md:left-12">
				<div className="photo1 absolute ml-6 md:-left-16 md:mb-10 aspect-[9/16] md:h-72 w-44 max-md:h-36 max-md:w-28">
				<Image className="w-full bg-cover no-repeat items-center object-cover" src={children[currentIndex].img} alt="img" width={300} height={400} priority/>
				</div>
				<div className="absolute -bottom-[2rem] w-44 text-center text-sm text-black max-md:-bottom-[12rem] max-md:w-24">
					Harsheet
				</div>
			</div>
			<div className="absolute translate-x-24 max-md:translate-x-12 mb-12 ml-10">{children[currentIndex].content}</div>
			{/* <div className="absolute l-12 w-1/3 translate-x-2 text-sm max-md:translate-x-12">{children[currentIndex].content}</div> */}
			<div className='w-full flex justify-between items-center mx-10 relative top-44 md:top-0 '>
				<Button isIconOnly variant="solid" className="z-10 -translate-y-16 bg-[#154a82] p-3" onClick={handleLeftClick}>
					<Image src={left} alt="arrow" width={200} height={200} priority />
				</Button>
				<Button isIconOnly variant="solid" className="z-10 -translate-y-16 bg-[#154a82] p-3" onClick={handleRightClick}>
					<Image src={right} alt="arrow" width={200} height={200} priority />
				</Button>
			</div>
		</div>
	);
}
