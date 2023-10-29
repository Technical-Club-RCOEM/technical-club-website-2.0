import Image from 'next/image';

export default function Box(props: BoxProps) {
	return (
		<>
			<div className="flex h-full w-full justify-center">
				<div className="events-box rounded-b-[100px] bg-tc-blue">
					<div className="flex flex-col gap-6 pb-10 pl-10 pr-10 pt-12 text-white lg:flex-row">
						<Image
							src={props.img}
							alt="Logo"
							className="rounded-bl-[80px] rounded-tr-[80px] border-8 border-white"
							width={400}
							height={480}
							priority
						/>
						<p className="text-center">{props.name}</p>
						<p className="text-center">{props.description}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export interface BoxProps {
	name: string;
	description: string;
	img: string;
}
