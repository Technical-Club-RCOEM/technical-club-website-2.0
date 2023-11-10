'use client';
import './Comp3.css';
import Image from 'next/image';
import shape from './img/shape.svg';
import { useState } from 'react';
export default function Component() {
	return (
		<div className="relative mt-32 flex h-60 w-2/3 items-center justify-center max-md:w-[90vw]">
			<Image src={shape} className="" alt="Logo" width={700} height={700} priority />
			<div className="absolute -top-24 left-[15vw] max-md:-top-2 max-md:left-12">
				<div className="photo1 absolute aspect-[9/16] w-44 max-md:w-24"></div>
				<div className="absolute -bottom-[21rem] w-44 text-center text-sm text-black max-md:-bottom-[12rem] max-md:w-24">
					Harsheet
				</div>
			</div>
			<div className="absolute w-1/3 translate-x-32 text-sm max-md:translate-x-12">Hi! I am Harsheet.</div>
		</div>
	);
}
