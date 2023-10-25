import Image from 'next/image';

export default function Home() {
	return (
		<>
			<div className="flex w-full items-center justify-between bg-slate-100">
				<p className="ml-32 text-7xl">
					It's
					<br />
					Technical!
				</p>
				<Image src="/logo asset.svg" className="ml-4" alt="Logo" width={800} height={800} priority />
			</div>
		</>
	);
}
