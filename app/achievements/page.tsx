'use client'
import Image from 'next/image';
import { oswald } from '@/app/fonts';
import Box from '../events/box';
import { BoxProps } from '../events/box';
import React , {useState} from 'react'
import '../events/events.css'


const Achievements = () => {
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
    <div className='w-full h-full'>
      <div className='w-screen h-screen flex flex-col items-center justify-center -mt-7 '>
        <div className='bg-tc-blue w-9/12 h-3/4 rounded-[100px]  achieve-bg relative'>
        </div>
          <p className={'absolute lg:top-1/3 lg:left-[25vw] text-3xl lg:text-[100px]  text-white achieve-head' + oswald.className}>Achievements</p>
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
  )
}

export default Achievements
