import type { RequestHandler } from '@sveltejs/kit';
import { client, gql, type Post } from 'src/lib/utils';

export const get: RequestHandler = async () => {
	const query = gql`
		query Posts {
			posts {
				title
				slug
        body {
          text
        }
        publishedAt
			}
		}
	`;

	const data = await client<{ posts: Post[] }>(query);

	return {
		body: {
			posts: data.posts
		}
	};
};
