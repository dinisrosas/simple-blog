<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ props }) => {
		return {
			props,
			stuff: {
				title: 'Home',
				description: 'A blog'
			}
		};
	};
</script>

<script lang="ts">
	import { calcReadingTime, date, type Post } from '$lib/utils';
	export let posts: Post[];
</script>

<ul>
	{#each posts as post}
		{@const time = calcReadingTime(post.body.text)}
		<li>
			<strong>{post.title}</strong>
			<div class="footer">
				<div>{date(post.publishedAt)}</div>
				·
				{time === 0 ? '1' : time} min
			</div>
			<a href="/{post.slug}">Read More</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.footer {
		display: flex;
		flex-direction: row;
		gap: 0.25rem;
		align-items: center;
		font-size: 0.9rem;
	}

	a {
		font-size: 0.9rem;
	}
</style>
