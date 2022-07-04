import { url } from '$lib/env';
import { client, gql, type Post } from '$lib/utils';

export async function get() {
	const query = gql`
		query Posts {
			posts {
				slug
				updatedAt
			}
		}
	`;

	const data = await client<{ posts: Post[] }>(query);

	return {
		headers: {
			'Content-type': 'application/xml'
		},
		body: `
    <?xml version="1.0" encoding="UTF-8" ?>

    <urlset>

    <url>
      <loc>${url}/</loc>
    </url>

    <url>
      <loc>${url}/contact</loc>
    </url>

    ${data.posts
			.map(
				(post) => `
      <url>
        <loc>${url}/${post.slug}</loc>
        <lastmod>${post.updatedAt.split('T')[0]}</lastmod>
      </url>
    `
			)
			.join('')}

    </urlset>
    `.trim()
	};
}
