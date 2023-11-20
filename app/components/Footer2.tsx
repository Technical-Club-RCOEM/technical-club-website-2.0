import React from 'react';
import Link from 'next/link';

export default function Footer2() {
	return (
		<div className=" ph:none flex h-max w-full flex-col items-center justify-center gap-2  overflow-hidden bg-[#000] p-16 text-start text-white sm:flex sm:flex-row sm:gap-72">
			<div className="flex flex-col ">
				<span className="text-3xl sm:text-7xl">Contact us</span>
				<div className="flex gap-2  pt-4 sm:gap-16">
					<div className="flex flex-col">
						<span>Want to colaberate</span>
						<span>technicalclub@rknec.edu</span>
					</div>
					<div className="flex flex-col">
						<span>Call us</span>
						<span className="w-32">0712 258 001</span>
					</div>
				</div>
				<div className="flex flex-col pt-8">
					<span>Socials</span>
					<div className="flex gap-2 sm:flex sm:flex-row sm:gap-6">
						<Link target="_blank" href="https://www.instagram.com/technicalclubrcoem/">
							INSTAGRAM
						</Link>
						<Link target="_blank" href="https://www.facebook.com/technicalclubrcoem/">
							FACEBOOK
						</Link>
						<Link target="_blank" href="https://www.linkedin.com/company/technicalclubrcoem/">
							LINKEDIN
						</Link>
						<Link target="_blank" href="https://twitter.com/techclubrcoem/">
							TWITTER
						</Link>
					</div>
				</div>
			</div>
			<div className="mt-5 flex  justify-center gap-2 sm:flex-col sm:gap-10">
				<div className="flex flex-col">
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
