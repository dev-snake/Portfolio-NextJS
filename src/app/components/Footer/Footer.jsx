import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { Button } from '@nextui-org/react';
export default function Footer() {
	return (
		<div className="w-full bg-neutral-950 py-4">
			<div className=" max-w-8xl mx-auto ">
				<h1 className="text-center uppercase text-2xl font-ProtestGuerrilla tracking-[1.8px]">
					dev_snake
				</h1>
				<div className="flex justify-center  mt-5">
					<Button isIconOnly className="bg-[#3a3a42] m-2">
						<FontAwesomeIcon icon={faFacebook} className="p-2 text-white " />
					</Button>
					<Button isIconOnly className="bg-[#3a3a42] m-2">
						<FontAwesomeIcon icon={faInstagram} className="p-2 text-white " />
					</Button>
					<Button isIconOnly className="bg-[#3a3a42] m-2">
						<FontAwesomeIcon icon={faDiscord} className="p-2 text-white " />
					</Button>
				</div>
				<p className="text-center mt-10 font-ProtestGuerrilla uppercase tracking-[1.9px] py-4">
					© Copyright DEV_SNAKE
				</p>
			</div>
		</div>
	);
}
