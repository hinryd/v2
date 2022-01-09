<script context="module">
	/** @type {import('@sveltejs/kit').Load} */
	export const load = async ({ url, params }) => ({
		props: {
			key: url.pathname
		}
	});
</script>

<script>
	export let key;

	import 'virtual:windi.css';
	import { blur } from 'svelte/transition';
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<NavBar />

{#key key}
	<div in:blur={{ duration: 500, delay: 350 }} out:blur={{ duration: 500 }}>
		<slot />
	</div>
{/key}

<Footer />
