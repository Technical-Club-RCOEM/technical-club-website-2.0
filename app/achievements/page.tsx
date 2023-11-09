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
			name: 'Hackanova 2.0 TCET Open Innovation',
			img: '/img1.jpg',
			description: 'Winner ',
		},
		{
			name: 'CodeFury ',
			img: '/img1.jpeg',
			description: 'Winner',
		},
		{
			name: 'Autocoders GCOEM ',
			img: '/photo1.jpeg',
			description: 'Winner ',
		},
		{
			name: ' IITB Techfest Zonals code',
			img: '/photo1.jpeg',
			description: '3rd ',
		},
		{
			name: ' Designex 2.0 VIT-AP',
			img: '/photo1.jpeg',
			description: 'Winner ',
		},
		{
			name: ' IISF-SIF (MANIT Bhopal) ',
			img: '/photo1.jpeg',
			description: 'AIR 13th  ',
		},
		{
			name: ' IDRL S7Ep6 @ Amalthea 2022, IIT Gandhinagar ',
			img: '/photo1.jpeg',
			description: ' 7th position  ',
		},
		{
			name: ' IDRL S7Ep8 @ Technex-23, SPVCET, Nagpur  ',
			img: '/photo1.jpeg',
			description: '7th Position',
		},
		
	];
  return (
    <div className='w-full h-full'>
      <div className='w-screen h-screen flex flex-col items-center justify-center -mt-7 '>
        <div className='bg-tc-blue w-9/12 h-3/4 rounded-[100px]  achieve-bg relative'>
        </div>
          <p className={'absolute lg:top-1/3 lg:left-[25vw] text-3xl lg:text-[100px]  text-white achieve-head'}>Achievements</p>
      </div> 

      <div className="relative flex lg:gap-40 overflow-x-hidden" >
				
				<div className='flex transition-transform ease-out duration-500 pb-10'  style={{ transform: `translateX(-${curr * (100 / arr.length)}%)` }}>
					{arr.map((a) => {
						return <Box {...a} />;
					})}
				</div>
			
				<button className='absolute left-2 p-1 lg:top-60 rounded-md bg-slate-600 top-48 h-10 text-white' onClick={prev}>
				Prev
			</button>

			<button className='absolute right-4 lg:top-60 p-1 rounded-md  top-48 h-10 text-white bg-slate-600' onClick={next}>
				Next
			</button>
			
			</div>



    </div>
  )
}

export default Achievements
