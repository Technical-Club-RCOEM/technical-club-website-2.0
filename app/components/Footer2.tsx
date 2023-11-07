import React from 'react';

export default function Footer2() {
	return (
		<div className=" flex flex-col sm:flex h-max w-full justify-center overflow-hidden  items-center gap-2 sm:gap-72 bg-[#000] p-16 text-start text-white ph:none">
			<div className="flex flex-col ">
				<span className="text-3xl sm:text-7xl">Contact us</span>
				<div className="flex gap-2  sm:gap-16 pt-4">
					<div className="flex flex-col">
						<span>Want to colaberate</span>
						<span>technicalclub@rknec.edu</span>
					</div>
					<div className="flex flex-col">
						<span>Call us</span>
						<span className='w-32'>0712 258 001</span>
					</div>
				</div>
				<div className="flex flex-col pt-8">
					<span>Socials</span>
					<div className="flex flex-col gap sm:flex gap-6">
						<span>INSTAGRAM</span>
						<span>FACEBOO</span>
						<span>LINKEDIN</span>
						<span>TWITTER</span>
					</div>
					{/* </div> */}
				</div>
			</div>
			<div className="flex  sm:flex-col justify-center gap-2 sm:gap-10">
				<div className="flex h-32 w-32 sm:h-48 sm:w-48 items-center justify-center rounded-full border bg-[#091F36]">
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
