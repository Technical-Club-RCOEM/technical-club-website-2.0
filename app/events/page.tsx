import Box, { BoxProps } from './box';
import img1 from '/img1.jpg';
import Image from 'next/image';
import './events.css';
import { oswald } from '@/app/fonts';

export default function Events() {
	const arr: BoxProps[] = [
		{
			name: 'Robodrive',
			img: '/photo1.jpeg',
			description: 'lorem',
		},
	];
	return (
		<div className=" h-full w-full">
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
							className="events-title-image ml-2 border-4 border-black lg:relative lg:top-16 lg:rounded-br-[100px] lg:rounded-tl-[100px] lg:rounded-tr-[100px]"
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
			{arr.map((a) => {
				return <Box {...a} />;
			})}
		</div>
	);
}
