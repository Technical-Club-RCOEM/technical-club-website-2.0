'use client';

import { Navbar as NV, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from './img/logo.png';
import { BASE } from '../constants';

export function Navbar() {
	const path = usePathname();

	return (
		<NV>
			<NavbarBrand>
				<Image src={logo} alt="Logo" width={50} height={50} priority />
				<p className="text-inherit">Technical Club</p>
			</NavbarBrand>
			<NavbarContent className="hidden gap-16 sm:flex" justify="end">
				<NavbarItem isActive>
					<Link
						color={path === '/' ? 'primary' : 'foreground'}
						href={path === '/' ? '#' : BASE}
						className="font-normal"
					>
						About
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						color={path === '/events' ? 'primary' : 'foreground'}
						href={
							path === '/events'
								? '#'
								: `\
						${BASE}/events`
						}
						aria-current="page"
					>
						Events
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link
						color={path === '/achievements' ? 'primary' : 'foreground'}
						href={path === '/achievements' ? '#' : `${BASE}/achievements`}
					>
						Achievements
					</Link>
				</NavbarItem>
			</NavbarContent>
		</NV>
	);
}
