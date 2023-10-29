import Image from 'next/image';
import About from './components/About';
export default function Home() {
	return (
		<>
			<div className="md:flex w-full items-center justify-center overflow-hidden">
				<p className="md:ml-40 md:text-9xl text-5xl ml-8 mt-8 ">
					It's
					<br />
					Technical!
				</p>
				<Image src="/logo asset.svg" className="md:ml-6 relative bottom-16 left-16" alt="Logo" width={800} height={800} priority />
			</div>
			<About/>
		</>
	);
}
