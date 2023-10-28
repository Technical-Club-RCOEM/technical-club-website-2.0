import Box from './box';
import img1 from '/img1.jpg'
import Image from 'next/image';

export default function Events() {
	return (
		<div className='h-full w-full'>
			<div className='h-screen w-full'>
			<div className='flex justify-center mt-12'>
				<Image src="/img1.jpg" className="ml-2 events-title-image border-black border-4 rounded-[150px]" alt="Logo" width={350} height={500} priority />
				<Image src="/img1.jpg" className="ml-2 events-title-image relative top-16 border-black border-4 rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px]" alt="Logo" width={350} height={500} priority />
				<Image src="/img1.jpg" className="ml-2 events-title-image border-black border-4 rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px]" alt="Logo" width={350} height={500} priority />
			</div>

			<p className='events-head'>EVENTS</p>
			</div>
			<Box />

			Yo
		</div>	
		);
		
}
