import { redirect } from 'next/navigation';
export default function Blog() {
	console.log(redirect);
	return (
		<>
			<button type="button">Dashboard</button>
		</>
	);
}
