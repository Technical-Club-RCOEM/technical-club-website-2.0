import img1 from '/img1.jpg'
import Image from 'next/image';

export default function Events() {
	return (
		<>
			<div className='flex justify-center mt-12'>
				<Image src="/img1.jpg" className="ml-2  border-black border-4 rounded-[150px]" alt="Logo" width={350} height={500} priority />
				<Image src="/img1.jpg" className="ml-2 relative top-16 border-black border-4 rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px]" alt="Logo" width={350} height={500} priority />
				<Image src="/img1.jpg" className="ml-2  border-black border-4 rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px]" alt="Logo" width={350} height={500} priority />
			</div>

			<p className='events-head'>EVENTS</p>
		</>	
		);
		
}
