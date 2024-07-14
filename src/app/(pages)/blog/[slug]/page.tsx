type ParamsType = {
	params: {
		slug: string;
	};
};
export default function BlogDetail({ params }: ParamsType) {
	console.log(params);
	return (
		<div>
			<h1>my post : {params.slug}</h1>
		</div>
	);
}
