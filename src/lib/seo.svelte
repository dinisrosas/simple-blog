<script>
	import { page } from '$app/stores';
	import { url } from './env';

	$: title = $page.stuff.title ?? '404';
	$: description = $page.stuff.description ?? '';
	$: canonical = `${url}${$page.url.pathname === '/' ? '' : $page.url.pathname}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonical} />
</svelte:head>
