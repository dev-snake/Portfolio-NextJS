'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from '../ui/canvas-reveal-effect';
import { BackgroundBeams } from '../ui/background-beams';
import spr from '../../../../public/images/SportingLisbon.png';
import mu from '../../../../public/images/mu.png';
import real from '../../../../public/images/real.png';
import juventus from '../../../../public/images/juventus.jpg';
import alnasrr from '../../../../public/images/alnassr.png';

export default function Clubs() {
	return (
		<div className="bg-neutral-950  antialiased w-full">
			<div className=" w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
				<h1 className="uppercase text-2xl font-ProtestGuerrilla tracking-[1.6px] my-20">
					Clubs used to complete
				</h1>
				<div className="w-[1300px]">
					<div className="grid sm:grid-cols-5 gap-3 relative z-50 w-full">
						<Card title="Sporting Lisbon" icon={<img src={spr.src} alt="" />}>
							<CanvasRevealEffect
								animationSpeed={5.1}
								containerClassName="bg-emerald-900"
							/>
						</Card>
						<Card title="Manchester United" icon={<img src={mu.src} alt="" />}>
							<CanvasRevealEffect
								animationSpeed={3}
								containerClassName="bg-black"
								colors={[
									[236, 72, 153],
									[232, 121, 249]
								]}
								dotSize={2}
							/>
							<div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
						</Card>
						<Card title="REAL MADRID" icon={<img src={real.src} alt="" />}>
							<CanvasRevealEffect
								animationSpeed={3}
								containerClassName="bg-sky-600"
								colors={[[125, 211, 252]]}
							/>
						</Card>
						<Card title="JUVENTUS" icon={<img src={juventus.src} alt="" />}>
							<CanvasRevealEffect
								animationSpeed={3}
								containerClassName="bg-yellow-200"
								colors={[[125, 211, 252]]}
							/>
						</Card>
						<Card title="AL-NASSR" icon={<img src={alnasrr.src} alt="" />}>
							<CanvasRevealEffect
								animationSpeed={3}
								containerClassName="bg-yellow-500"
								colors={[[125, 211, 252]]}
							/>
						</Card>
					</div>
				</div>
				<BackgroundBeams />
			</div>
		</div>
	);
}
const Card = ({
	title,
	icon,
	children
}: {
	title: string;
	icon: React.ReactNode;
	children?: React.ReactNode;
}) => {
	const [hovered, setHovered] = React.useState(false);
	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className=" border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative border-[1px] border-white shadow-lg "
		>
			<AnimatePresence>
				{hovered && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="h-full w-full absolute inset-0"
					>
						{children}
					</motion.div>
				)}
			</AnimatePresence>

			<div className="relative z-20">
				<div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
					{icon}
				</div>
				<h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
					{title}
				</h2>
			</div>
		</div>
	);
};
