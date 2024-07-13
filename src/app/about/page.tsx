import { Image, Card } from '@nextui-org/react';
import CR7 from '../../../public/images/cr7.png';
export default function About() {
	return (
		<div className=" max-w-8xl mx-auto mt-4 p-4">
			<div className="flex justify-center">
				<h1 className=" text-5xl font-ProtestGuerrilla sm:text-[140px] uppercase  mt-44 text-center ">
					Cristiano Ronaldo
				</h1>
				<Image src={CR7.src} isBlurred className="cursor-pointer" />
			</div>
		</div>
	);
}
