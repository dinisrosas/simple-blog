<script>
	import { page } from '$app/stores';
	$: path = $page.url.pathname;
</script>

<nav>
	<a href="/" class:inactive={path !== '/'}>
		<img src="/home.svg" title="Home" alt="Square" />
	</a>

	<div style="flex-grow: 1;" />

	<a href="/hello">
		<img src="/info{path === '/hello' ? '' : '_outline'}.svg" title="About" alt="Info" />
	</a>

	<a href="/contact">
		<img src="/email{path === '/contact' ? '' : '_outline'}.svg" title="Contact" alt="Email" />
	</a>
</nav>

<style>
	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 1.25rem;
	}

	img,
	a {
		width: 24px;
		height: 24px;
	}

	.inactive {
		opacity: 0.75;
	}
</style>
