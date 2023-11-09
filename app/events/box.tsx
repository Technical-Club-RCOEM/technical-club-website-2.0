import Image from 'next/image';



export default function Box(props: BoxProps) {

	return (
		<>
			<div className="flex h-fit min-h-[600px] w-full justify-center lg:ml-40 ml-10 relative">
				<div className="events-box rounded-b-[100px] bg-tc-blue">
					<div className="flex h-full flex-col 	 gap-6 pb-10 px-16 pt-12  text-white lg:flex-row">
						<Image
							src={props.img}
							alt="Logo"
							className="rounded-bl-[80px] rounded-tr-[80px] min-h-screen-[100px] border-8 border-white"
							width={400}
							height={480}
							priority
						/>
						<div className='lg:flex lg:flex-col lg:justify-center '>
						<p className={'text-center text-4xl'}>{props.name}</p><br />
						<p className="text-left text-xl">{props.description}</p>
						</div>
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
