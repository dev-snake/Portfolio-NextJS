'use client';
import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarMenuItem,
	NavbarMenu,
	NavbarContent,
	NavbarItem,
	Link,
	Button
} from '@nextui-org/react';
import { useState } from 'react';
import { AcmeLogo } from './logoBranch';
export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuItems = ['About me', 'My CV', 'Project', 'Photos'];
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
					<h1 className="font-ProtestGuerrilla text-2xl tracking-[1.8px]">DEV_SNAKE</h1>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4" justify="center">
				<NavbarBrand>
					<h1 className="font-ProtestGuerrilla text-2xl tracking-[1.8px]">DEV_SNAKE</h1>
				</NavbarBrand>
			</NavbarContent>
			<NavbarContent className="hidden  sm:flex gap-2 " justify="end">
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`} className="mr-8">
						<Link
							className="w-full text-white text-center font-ProtestGuerrilla text-lg tracking-[1.8px] uppercase"
							size="md"
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarContent>
			<NavbarMenu className="bg-black text-white">
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link className="w-full text-white text-center " size="sm">
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
