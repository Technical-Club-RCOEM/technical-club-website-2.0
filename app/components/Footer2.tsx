import React from 'react';

export default function Footer2() {
	return (
		<div className="flex h-max w-full justify-center items-center gap-72 bg-[#000] p-16 text-start text-white">
			<div className="flex flex-col ">
				<span className="text-7xl">Contact us</span>
				<div className="flex gap-16 pt-4">
					<div className="flex flex-col">
						<span>Want to colaberate</span>
						<span>technicalclub@rknec.edu</span>
					</div>
					<div className="flex flex-col">
						<span>Call us</span>
						<span>0712 258 001</span>
					</div>
				</div>
				<div className="flex flex-col pt-8">
					<span>Socials</span>
					<div className="flex gap-6">
						<span>INSTAGRAM</span>
						<span>FACEBOO</span>
						<span>LINKEDIN</span>
						<span>TWITTER</span>
					</div>
					{/* </div> */}
				</div>
			</div>
			<div className="flex flex-col justify-center gap-10">
				<div className="flex h-48 w-48 items-center justify-center rounded-full border bg-[#091F36]">
					<p className="">Get In Touch</p>
				</div>
				<div className='flex flex-col'>
					<span>LOCATION</span>
					<span className="w-48">
						{' '}
						Shri Ramdeobaba College of Engineering and Management, Katol Rd, Lonand, Gittikhadan, Nagpur, Maharashtra
						440013
					</span>
				</div>
			</div>
		</div>
	);
}
