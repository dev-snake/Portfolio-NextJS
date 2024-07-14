import { BackgroundBeams } from '@/app/components/ui/background-beams';
import { Card, CardHeader, CardBody, CardFooter, Image, Button } from '@nextui-org/react';
export default function Photos() {
	return (
		<div className="w-full mb-20">
			<div className="max-w-8xl mx-auto mt-10  px-5">
				<h1 className="text-2xl font-semibold relative z-50">
					Top Ronaldo's the most goals
				</h1>
				<div className="grid sm:grid-cols-3 gap-2 mt-5 ">
					{Array.from({ length: 6 }).map((_, index: number) => (
						<Card className="bg-[#18181b] relative z-50 p-1">
							<CardHeader className="grid">
								<p className="text-white uppercase font-bold">Daily Mix</p>
								<small className="text-slate-200 truncate mt-2">
									No list of Ronaldo's greatest goals is complete without this
									jaw-dropping moment, arguably his best-ever goal.
								</small>
							</CardHeader>
							<CardBody>
								<Image
									alt="NextUI hero Image with delay"
									src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
								/>
							</CardBody>
							<CardFooter className="text-white flex justify-between">
								<p>Upload at 2024-02-14 15:28:32</p>
								<Button size="md" color="primary">
									Watch
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
			<BackgroundBeams />
		</div>
	);
}
