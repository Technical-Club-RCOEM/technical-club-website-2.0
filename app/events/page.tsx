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
			name: 'Line Follower Workshop ',
			img: '/events/lineFollower.png',
			description: 'The workshop was conducted on 6 th of September 2022 in Electronics Auditorium from 4PM to 5PM. The workshop explained the working of a simple Line Follower Robot. The registered participants were 80+. This workshop was only for RCOEM students. The workshop was conducted smoothly without any difficulty.',
		},
		
		{
			name: 'Robo Drive 2.0 ',
			img: '/events/roboDrive2.png',
			description: 'Building on the success of the previous Robo Drive event, the club organized Robo Drive 2.0. This event aimed to further challenge participants controlling robots in a competitive environment.',
			
		},
		{
			name: 'Line Follower Competition (De-Techt) ',
			img: '/events/detech.png',
			description: ' In this competition the teams had to bring their robots then the track will be shown to them and then they will make some adjustments and compete after testing their bot twice. The track was displayed to the teams at 11 AM. Every team performed at there best and the winner team was decided by the total points they gained',
		},
		{
			name: 'Robodrive',
			img: '/events/robo1.png',
			description: 'The workshop was conducted on 6 th of September 2022 in Electronics Auditorium from 4PM to 5PM. The workshop explained the working of a simple Line Follower Robot. The registered participants were 80+. This workshop was only for RCOEM students. The workshop was conducted smoothly without any difficulty.',
		},
		{
			name: 'Drone Workshop ',
			img: '/events/droneWorkshop.png',
			description: 'This seminar was an inter-college workshop on 11th of September 2022 in Main Auditorium from 9:15 AM to 10:15 PM. The Flying Club which is a part of Technical Club gave the seminar. The workshop explained the basic working of drone to the participants. There was also a demo given on flying of a drone',
			
		},
		{
			name: 'SHINOBI SHOWDOWN- Online Coding Contest',
			img: '/events/shinobi.png',
			description: 'Shinobi Showdown was an online Coding Contest organized by The Technical Club RCOEM in collaboration with Coding Ninja. The aim of the event was to provide a coding environment in the college and provide a competitive environment amongst the mates.',
			
			
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

					<p className={'events-head'}>EVENTS</p>
				</div>
			</div>

			<div className="relative flex lg:gap-32 overflow-x-hidden" >
				
				<div className='flex transition-transform  ease-out duration-500'  style={{ transform: `translateX(-${curr * (100 / arr.length)}%)` }}>
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
	);
}
