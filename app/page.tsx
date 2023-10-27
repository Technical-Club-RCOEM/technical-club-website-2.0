import Image from 'next/image';
import About from './components/About';
export default function Home() {
	return (
		<>
			<div className="flex w-full items-center justify-between">
				<p className="ml-40 text-9xl">
					It's
					<br />
					Technical!
				</p>
				<Image src="/logo asset.svg" className="ml-4" alt="Logo" width={800} height={800} priority />
			</div>
			<About/>
		</>
	);
}
