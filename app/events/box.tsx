import Image from 'next/image';
import { useState } from 'react';

export default function Box(props: BoxProps) {

	// const [current , setCurrent] = useState(0);



	return (
		<>
			<div className="flex h-full w-full justify-center lg:ml-44 ml-10 relative">
				<div className="events-box rounded-b-[100px] bg-tc-blue">
					<div className="flex flex-col gap-6 pb-10 px-16 pt-12 text-white lg:flex-row">
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

			{/* Buttons */}

			
			</div>
		</>
	);
}



export interface BoxProps {
	name: string;
	description: string;
	img: string;
}
