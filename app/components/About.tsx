import Tc_logo from './img/TC_logo_about.png';
import chat from './img/chat.png';
import Image from 'next/image';
export default function About() {
	return (
		<>
			<div className="about-page">
				<div className="text-a" id='text-a1'>
					<span>What is </span>
					<div className="tc-col">
						<span>Technical</span>
						<span>Club ?</span>
					</div>
				</div>
				<div className="two-a">
					<div className="left-a">
						<Image src={Tc_logo} className='img-tc' alt="Logo"  />
					</div>
					<div className="right-a" id='para'>
						<p>
							With a motive to provide a common platform for Interdisciplinary Technical Activities of the College, the
							technical club was launched in 2015. The club aims to technically strengthen the students by integrating
							their skills in the various fields of Engineering & technology, so as to cope up with the highly
							competitive environment.
						</p>
					</div>
				</div>
			</div>
			<div className="about-a2">
			<div className="text-a" id='text-a'>
					<span>Why to </span>
					<div className="tc-col">
						<span>Technical</span>
						<span>Club ?</span>
					</div>
				</div>
				<Image src={chat} className='chat-tc' alt="chat"  />
				<Image src={chat} className='chat-tc2' alt="chat"  />
				<button id='btn'>Join Now</button>

			</div>
		</>
	);
}
