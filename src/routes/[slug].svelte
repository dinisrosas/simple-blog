<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ props }) => {
		return {
			props,
			stuff: {
				title: props.post.title,
				description: props.post.description
			}
		};
	};
</script>

<script lang="ts">
	import { date, type Post } from '$lib/utils';
	export let post: Post;
</script>

<article>
	<h1>{post.title}</h1>
	<small>{date(post.publishedAt)}</small>
	<div class="body">
		{@html post.body.html}
	</div>
</article>

<style>
	h1 {
		margin-bottom: 0;
	}

	.body {
		margin-top: 1rem;
	}
</style>
