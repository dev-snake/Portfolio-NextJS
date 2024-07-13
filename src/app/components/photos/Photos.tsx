'use client';
import { GlareCard } from '../ui/glare-card';
import { Image } from '@nextui-org/react';
export default function Photos() {
	return (
		<div className="w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
			<h1 className="font-ProtestGuerrilla uppercase text-4xl tracking-[1.8px]">Photos</h1>
			<div className="max-w-8xl grid grid-cols-4 gap-x-20 gap-y-5 mt-10 ">
				<GlareCard>
					<Image src="/images/18cr7.jpg" alt="CR7" isBlurred />
				</GlareCard>
				<GlareCard>
					<Image src="/images/cr7smoke.jpg" alt="CR7" isBlurred />
				</GlareCard>
				<GlareCard>
					<Image src="/images/cr7Red.jpg" alt="CR7" isBlurred />
				</GlareCard>
				<GlareCard>
					<Image src="/images/threeRed.jpg" alt="CR7" isBlurred />
				</GlareCard>
				<GlareCard>
					<Image src="/images/greenCr7.jpg" alt="CR7" isBlurred />
				</GlareCard>
				<GlareCard>
					<Image src="/images/cr7yellow.jpg" alt="CR7" isBlurred />
				</GlareCard>
				<GlareCard>
					<Image src="/images/Slider_CR7_4.jpg" alt="CR7" isBlurred />
				</GlareCard>
				<GlareCard>
					<Image src="/images/Slider_CR7_6.jpg" alt="CR7" isBlurred />
				</GlareCard>
			</div>
		</div>
	);
}
