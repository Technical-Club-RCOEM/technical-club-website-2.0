'use client';
import React, { useState } from 'react';
import Box, { BoxProps } from './box';
import img1 from '../components/img/events_img.jpg';
import img2 from '../components/img/events_img2.jpg';
import Image from 'next/image';
import './events.css';
import { Button } from '@nextui-org/react';
import lineFollower from '../components/img/events/lineFollower.png';
import roboDrive2 from '../components/img/events/roboDrive2.png';
import detech from '../components/img/events/detech.png';
import robo1 from '../components/img/events/robo1.png';
import droneWorkshop from '../components/img/events/droneWorkshop.png';
import shinobi from '../components/img/events/shinobi.png';

export default function Events() {
	const [curr, setCurr] = useState(0);

	const arr: BoxProps[] = [
		{
			name: 'Line Follower Workshop ',
			img: lineFollower,
			description:
				'The workshop was conducted on 6 th of September 2022 in Electronics Auditorium from 4PM to 5PM. The workshop explained the working of a simple Line Follower Robot. The registered participants were 80+. This workshop was only for RCOEM students. The workshop was conducted smoothly without any difficulty.',
		},

		{
			name: 'Robo Drive 2.0 ',
			img: roboDrive2,
			description:
				'Building on the success of the previous Robo Drive event, the club organized Robo Drive 2.0. This event aimed to further challenge participants controlling robots in a competitive environment.',
		},
		{
			name: 'Line Follower Competition (De-Techt) ',
			img: detech,
			description:
				' In this competition the teams had to bring their robots then the track will be shown to them and then they will make some adjustments and compete after testing their bot twice. The track was displayed to the teams at 11 AM. Every team performed at there best and the winner team was decided by the total points they gained',
		},
		{
			name: 'Robodrive',
			img: robo1,
			description:
				'The workshop was conducted on 6 th of September 2022 in Electronics Auditorium from 4PM to 5PM. The workshop explained the working of a simple Line Follower Robot. The registered participants were 80+. This workshop was only for RCOEM students. The workshop was conducted smoothly without any difficulty.',
		},
		{
			name: 'Drone Workshop ',
			img: droneWorkshop,
			description:
				'This seminar was an inter-college workshop on 11th of September 2022 in Main Auditorium from 9:15 AM to 10:15 PM. The Flying Club which is a part of Technical Club gave the seminar. The workshop explained the basic working of drone to the participants. There was also a demo given on flying of a drone',
		},
		{
			name: 'SHINOBI SHOWDOWN- Online Coding Contest',
			img: shinobi,
			description:
				'Shinobi Showdown was an online Coding Contest organized by The Technical Club RCOEM in collaboration with Coding Ninja. The aim of the event was to provide a coding environment in the college and provide a competitive environment amongst the mates.',
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
			if (prev === 0) return arr.length - 1;
			return prev - 1;
		});
	};
	return (
		<div className=" h-full w-full py-10 overflow-x-hidden">
			<div className="slider overflow-x-hidden">
				<div className="h-full mb-32 w-screen flex justify-center">
					<div className="events-slider mt-12  flex justify-center">
						<Image
							src={img1}
							className="events-title-image ml-2 border-4 border-black lg:rounded-[75px] "
							alt="Logo"
							width={350}
							height={650}
							priority
						/>

						<Image
							src={img2}
							className="events-title-image ml-2 border-4 border-black lg:rounded-br-[50px] lg:rounded-tl-[50px] lg:rounded-tr-[50px]"
							alt="Logo"
							width={300}
							height={600}
							priority
						/>
						<Image
							src={detech}
							className="events-title-image ml-2 border-4 border-black lg:rounded-br-[50px] lg:rounded-tl-[50px] lg:rounded-tr-[50px]"
							alt="Logo"
							width={300}
							height={700}
							priority
						/>
					</div>

					<p className={'events-head'}>EVENTS</p>
				</div>
			</div>

			<div className="relative flex overflow-x-hidden lg:gap-32">
				<div
					className="flex transition-transform  duration-500 ease-out"
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
}
