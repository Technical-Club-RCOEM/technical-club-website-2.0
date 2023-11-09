import Image from 'next/image';
import About from './components/About';
import Domains from './components/Domains';
import Clubs from './components/Clubs';
import { roboto_slab } from './fonts';
export default function Home() {
	return (
		<>
			<div className="flex w-full items-center justify-end overflow-hidden max-md:flex-col">
				<p className={"text-8xl max-md:text-7xl p-4 " + roboto_slab.className}>
					It's
					<br />
					Technical!
				</p>
				<Image src="/TC_logo.png" className="relative max-xl:h-[90vh] max-xl:object-contain max-md:scale-80" alt="Logo" width={800} height={600} priority />
			</div>
			<About/>
		</>
	);
}
