import type { Metadata } from 'next';
import './styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
export const metadata: Metadata = {
	title: 'Portfolio App',
	description: 'Generated by create next app'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<NextUIProvider>
					<header className="w-full  bg-transparent">
						<nav className="max-w-8xl mx-auto">
							<Header />
						</nav>
					</header>
					<main>{children}</main>
					<Footer />
				</NextUIProvider>
			</body>
		</html>
	);
}
