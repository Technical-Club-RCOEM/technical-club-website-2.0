'use client';
import Tc_logo from './img/TC_logo_about.png';
import chat from './img/chat.png';
import Image from 'next/image';
import Component from './Comp';
import Domains from './Domains';
import { roboto_slab, roboto } from '../fonts';
export default function About() {
	return (
		<>
			<div className="py-32">
				<div className={'text-center text-8xl max-md:text-5xl ' + roboto_slab.className}>
					<p className="font-light">
						What is <span className="font-bold">Technical Club</span>?
					</p>
				</div>
				<div className="flex items-center justify-center">
					<div className="absolute overflow-hidden">
						<Image
							src={Tc_logo}
							className="animate-slow-spin aspect-square h-[80vh] object-contain opacity-60"
							alt="Logo"
						/>
					</div>
					<div
						className={
							'w-[35rem] py-24 text-3xl font-medium tracking-wide max-md:w-[80vw] max-md:text-xl ' + roboto.className
						}
					>
						<p>
							With a motive to provide a common platform for Interdisciplinary Technical Activities of the College, the
							technical club was launched in 2015. The club aims to technically strengthen the students by integrating
							their skills in the various fields of Engineering & technology, so as to cope up with the highly
							competitive environment.
						</p>
					</div>
				</div>
			</div>
			<div className="h-[100vh] bg-[#091f36] py-16">
				<div className={'text-center text-8xl text-white max-md:text-5xl ' + roboto_slab.className}>
					<p className="font-light">
						Why to <span className="font-bold">Technical Club</span>?
					</p>
				</div>
				<Image src={chat} className="chat-tc" alt="chat" />
				<Image src={chat} className="chat-tc2" alt="chat" />
			</div>
			<Component />
			<Domains />
		</>
	);
}
