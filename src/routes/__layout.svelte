<script>
	import Nav from '$lib/nav.svelte';
	import SEO from '$lib/seo.svelte';
	import 'src/base.css';
	const year = new Date().getFullYear();
</script>

<SEO />

<header>
	<Nav />
</header>

<hr />

<main>
	<slot />
</main>

<hr />

<footer>
	{year} &copy; All rights reserved
</footer>

<style>
	header,
	main,
	footer {
		max-width: calc(550px + 1rem);
		margin: 0 auto;
		padding: 1rem;
	}

	hr {
		margin: 0;
	}
</style>
