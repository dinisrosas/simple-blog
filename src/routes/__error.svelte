<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({ error, status }) => {
		return {
			props: {
				error,
				status
			}
		};
	};
</script>

<script lang="ts">
	export let status: number;
	export let error: any;
</script>

<div>
	<h1>{status}</h1>

	{#if status === 404}
		<strong>Page not found</strong>
		<p>Maybe going back to the <a href="/">main page</a> will help</p>
	{:else}
		<div>{error.message}</div>
	{/if}
</div>
