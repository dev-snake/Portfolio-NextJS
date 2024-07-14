'use client';
import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenuItem,
	NavbarMenu,
	NavbarContent
} from '@nextui-org/react';
import { useState } from 'react';
import Link from 'next/link';
import { menuItems } from './menu-items';
export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	return (
		<Navbar
			maxWidth="full"
			isMenuOpen={isMenuOpen}
			onMenuOpenChange={setIsMenuOpen}
			className="bg-transparent"
		>
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
			</NavbarContent>

			<NavbarContent className="sm:hidden pr-3" justify="center">
				<NavbarBrand>
					<Link
						href="/"
						className="font-ProtestGuerrilla text-2xl tracking-[1.8px] cursor-pointer"
					>
						DEV_SNAKE
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarBrand>
					<Link
						href="/"
						className="font-ProtestGuerrilla text-2xl tracking-[1.8px] cursor-pointer"
					>
						DEV_SNAKE
					</Link>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="hidden  sm:flex gap-2 " justify="end">
				{menuItems.map(({ label, path }, index) => (
					<NavbarMenuItem key={`${label}-${index}`} className="mr-8 ">
						<Link
							href={path}
							className="w-full text-white text-center font-ProtestGuerrilla text-lg tracking-[1.8px] uppercase "
						>
							{label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarContent>
			<NavbarMenu className="bg-black text-white">
				{menuItems.map(({ label, path }, index) => (
					<NavbarMenuItem key={`${label}-${index}`}>
						<Link href={path} className="w-full text-white text-center ">
							{label}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
