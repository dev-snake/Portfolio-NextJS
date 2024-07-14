'use client';
import React from 'react';
import { BackgroundBeams } from '../ui/background-beams';
import {
	TextRevealCard,
	TextRevealCardDescription,
	TextRevealCardTitle
} from '../ui/text-reveal-card';

export default function DesignInfor() {
	return (
		<div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
			<h1 className="my-10 font-ProtestGuerrilla text-2xl uppercase tracking-[1.8px]">
				Design Information
			</h1>
			<div className="">
				<TextRevealCard text="WHO IS DEV_SNAKE ?" revealText="I'M DANG VAN HAU.">
					<TextRevealCardTitle className="capitalize tracking-[1.8px]">
						Who Design This Website ?
					</TextRevealCardTitle>
					<TextRevealCardDescription>
						Designed by <span className="">dev_snake</span>
					</TextRevealCardDescription>
				</TextRevealCard>
				<BackgroundBeams />
			</div>
		</div>
	);
}
