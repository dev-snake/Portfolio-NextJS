export default function MarketingDetail({ params }: { params: { slug: string } }) {
	console.log(params);
	return (
		<div>
			<h1>Marketing Detail {params.slug}</h1>
		</div>
	);
}
