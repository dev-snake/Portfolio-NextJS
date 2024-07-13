import CR7 from '../../public/images/cr7.png';
import { Image } from '@nextui-org/react';
import { BackgroundBeams } from './components/ui/background-beams';
import { FlipWords } from './components/ui/flip-words';
import { SparklesCore } from './components/ui/sparkles';
import Photos from './components/photos/Photos';
export default function Home() {
	const words = ['RONALDO', 'CR7', 'SIUU', 'GOAT'];
	return (
		<>
			<div className="h-screen rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
				<div className="flex justify-center items-center">
					<h1 className=" text-5xl font-ProtestGuerrilla sm:text-[140px] uppercase text-center text-white">
						Cristiano <FlipWords words={words} />
						<SparklesCore
							background="transparent"
							minSize={0.4}
							maxSize={1}
							particleDensity={1200}
							className="w-full h-full"
							particleColor="#FFFFFF"
						/>
					</h1>
					<Image src={CR7.src} isBlurred className="cursor-pointer" />
				</div>
				<BackgroundBeams />
			</div>
			<Photos />
		</>
	);
}
