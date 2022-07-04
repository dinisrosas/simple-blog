<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = ({}) => {
		return {
			stuff: {
				title: 'Contact',
				description: ''
			}
		};
	};
</script>

<article>
	<h1>Contact</h1>

	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur hic illum nemo esse
		blanditiis quidem voluptate, itaque ab fuga, sed ea odit saepe ut excepturi alias iure eius
		rerum tempore.
	</p>
</article>
