'use client'
import React , {useState} from 'react'
import Box, { BoxProps } from './box';
import img1 from '/img1.jpg';
import Image from 'next/image';
import './events.css';
import { oswald } from '@/app/fonts';

export default function Events() {

	const [curr , setCurr] = useState(0);

	const next = () => {
		setCurr(curr + 1);
	}
	const prev = () => {
		setCurr(curr - 1);
	}

	const arr: BoxProps[] = [
		{
			name: 'Robodrive',
			img: '/img1.jpg',
			description: 'lorem',
		},
		{
			name: 'Robot',
			img: '/img1.jpeg',
			description: 'yoyo',
		},
		{
			name: 'Robot',
			img: '/photo1.jpeg',
			description: 'yoyo',
		},
		{
			name: 'Robot',
			img: '/photo1.jpeg',
			description: 'yoyo',
		},
		
	];
	return (
		<div className=" h-full w-full py-20">
			<div className="slider">
				<div className="h-screen w-full overflow-hidden">
					<div className="events-slider mt-12 flex justify-center">
						<Image
							src="/img1.jpg"
							className="events-title-image ml-2 border-4 border-black lg:rounded-[150px] "
							alt="Logo"
							width={350}
							height={500}
							priority
						/>

						<Image
							src="/img1.jpg"
							className="events-title-image ml-2 border-4 border-black lg:rounded-br-[100px] lg:rounded-tl-[100px] lg:rounded-tr-[100px]"
							alt="Logo"
							width={350}
							height={500}
							priority
						/>
						<Image
							src="/img1.jpg"
							className="events-title-image ml-2 border-4 border-black lg:rounded-br-[100px] lg:rounded-tl-[100px] lg:rounded-tr-[100px]"
							alt="Logo"
							width={350}
							height={500}
							priority
						/>
					</div>

					<p className={'events-head ' + oswald.className}>EVENTS</p>
				</div>
			</div>

			<div className="relative flex lg:gap-32 overflow-x-hidden" >
				
				<div className='flex transition-transform ease-out duration-500'  style={{ transform: `translateX(-${curr * 25}%)` }}>
					{arr.map((a) => {
						return <Box {...a} />;
					})}
				</div>
			
			<button className='absolute left-2 p-1 lg:top-60 rounded-md bg-slate-600 top-48 text-white' onClick={prev}>
				Prev
			</button>

			<button className='absolute right-8 lg:-right-20 lg:top-60 p-1 rounded-md  top-48  text-white bg-slate-600' onClick={next}>
				Next
			</button>
			
			</div>
		</div>
	);
}
