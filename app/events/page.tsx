import Box from './box';
import img1 from '/img1.jpg'
import Image from 'next/image';

export default function Events() {
	const arr: { name: string; img: string; desc:string; }[] = [
        {
            name : "Robodrive",
            img : "/html.png",
			desc : "lorem"
		},
        
        
    ]
	return (
		<div className=' h-full w-full'>
			<div className='slider'>
				<div className='h-screen w-full overflow-hidden'>
					<div className='events-slider flex justify-center mt-12 overflow-hidden'>
						<Image src="/img1.jpg" className="ml-2 events-title-image border-black border-4 lg:rounded-[150px] " alt="Logo" width={350} height={500} priority />
						<Image src="/img1.jpg" className="ml-2 events-title-image lg:relative lg:top-16 border-black border-4 lg:rounded-tl-[100px] lg:rounded-tr-[100px] lg:rounded-br-[100px]" alt="Logo" width={350} height={500} priority />
						<Image src="/img1.jpg" className="ml-2 events-title-image border-black border-4 lg:rounded-tl-[100px] lg:rounded-tr-[100px] lg:rounded-br-[100px]" alt="Logo" width={350} height={500} priority />
						<Image src="/img1.jpg" className="ml-2 events-title-image border-black border-4 lg:rounded-tl-[100px] lg:rounded-tr-[100px] lg:rounded-br-[100px]" alt="Logo" width={350} height={500} priority />

					</div>

					<p className='events-head'>EVENTS</p>
				</div>
			</div>
			<Box></Box>

			
		</div>		
		);
		
}
