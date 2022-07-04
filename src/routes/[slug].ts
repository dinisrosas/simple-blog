import type { RequestHandler } from '@sveltejs/kit';
import { client, gql, type Post } from 'src/lib/utils';

export const get: RequestHandler = async ({ params }) => {
	const query = gql`
		query Post($slug: String!) {
			post(where: { slug: $slug }) {
				title
				slug
				description
        publishedAt
				body {
					html
				}
			}
		}
	`;

	const data = await client<{ post: Post }>(query, { slug: params.slug });

	if (!data?.post) {
		return {
			status: 404
		};
	}

	return {
		body: {
			post: data.post
		}
	};
};
