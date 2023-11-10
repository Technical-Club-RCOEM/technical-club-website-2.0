'use client';

import {
	Navbar as NV,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
} from '@nextui-org/react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from './img/logo.png';
import { useState } from 'react';
import { BASE } from '../constants';

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const path = usePathname();

	return (
		<NV onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarBrand>
					<Image src={logo} alt="Logo" width={50} height={50} priority />
					<p className="font-bold text-inherit">Technical Club</p>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="md:hidden" justify="end">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
					className="aspect-square w-16 translate-y-24 text-black hover:bg-slate-200 sm:hidden"
				/>
			</NavbarContent>
			<NavbarMenu>
				<NavbarMenuItem className="flex flex-col gap-8 py-4">
					<Link
						color={path === '/' ? 'primary' : 'foreground'}
						href={path === '/' ? '#' : BASE}
						className="w-[90vw] border-b-2 text-2xl font-normal"
					>
						About
					</Link>
					<Link
						color={path === '/events' ? 'primary' : 'foreground'}
						href={
							path === '/events'
								? '#'
								: `\
						${BASE}/events`
						}
						aria-current="page"
						className="w-[90vw] border-b-2 text-2xl font-normal"
					>
						Events
					</Link>
					<Link
						color={path === '/achievements' ? 'primary' : 'foreground'}
						href={path === '/achievements' ? '#' : `${BASE}/achievements`}
						className="w-[90vw] border-b-2 text-2xl font-normal"
					>
						Achievements
					</Link>
				</NavbarMenuItem>
			</NavbarMenu>
			<NavbarContent className="hidden gap-8 sm:flex" justify="end">
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
