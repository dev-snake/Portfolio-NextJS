'use client';
import { Input, Button } from '@nextui-org/react';
import { Boxes } from '@/app/components/ui/background-boxes';
import { BackgroundBeams } from '@/app/components/ui/background-beams';
export default function AuthPage() {
	return (
		<div className="h-screen">
			<div className="w-[450px] bg-[#111827] rounded-xl">
				<div className="mt-40 p-4 relative z-50 ">
					<h1 className="text-center text-xl   tracking-[1.8px]">Login Administration</h1>
					<div className="flex flex-col gap-5 mt-5">
						<Input label="Username" color="default" variant="bordered" size="md" />
						<Input label="Password" size="md" variant="bordered" />
						<Button
							size="md"
							color="primary"
							className="  text-[1rem] tracking-[1.8px]"
						>
							Login
						</Button>
					</div>
				</div>
				<BackgroundBeams />
			</div>
		</div>
	);
}
