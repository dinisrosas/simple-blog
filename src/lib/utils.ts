export function gql(chunks: TemplateStringsArray, ...variables: any[]): string {
	return chunks.reduce(
		(acc, chunk, index) => `${acc}${chunk}${index in variables ? variables[index] : ''}`
	);
}

export async function client<T>(query: string, variables?: object): Promise<T> {
	const response = await fetch(
		'https://api-eu-west-2.graphcms.com/v2/cl56vwbqp472001ujc2x84e4l/master',
		{
			method: 'POST',
			body: JSON.stringify({ query, variables })
		}
	);

	const { data } = await response.json();

	return data;
}

export function date(date: string) {
	return new Date(date).toLocaleDateString('en', {
		month: 'long',
		day: '2-digit',
		year: 'numeric'
	});
}

export function calcReadingTime(text: string) {
	const words = text.match(/\w+/g)?.length ?? 0;
	const time = words / 200;
	const minutes = Math.floor(time);
	return minutes;
}

export type Post = {
	title: string;
	description: string;
	slug: string;
	body: {
		html: string;
		text: string;
	};
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
};
