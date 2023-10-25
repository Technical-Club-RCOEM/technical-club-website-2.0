import img1 from '/img1.jpg'
import Image from 'next/image';

export default function Events() {
	return (
		
			<div className='flex justify-center mt-20'>
				<Image src="/img1.jpg" className="ml-2" alt="Logo" width={240} height={300} priority />
				<Image src="/img1.jpg" className="ml-2" alt="Logo" width={240} height={300} priority />
				<Image src="/img1.jpg" className="ml-2" alt="Logo" width={240} height={300} priority />
			</div>
		);
		
}
