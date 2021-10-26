<script context="module">
	export const load = async ({ page }) => ({
		props: {
			key: page.path
		}
	});
</script>

<script>
	export let key;

	import { blur } from 'svelte/transition';
	import NavBar from '$lib/NavBar.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<NavBar />

{#key key}
	<div in:blur={{ duration: 500, delay: 500 }} out:blur={{ duration: 500 }}>
		<slot />
	</div>
{/key}

<Footer />

<style windi:preflights:global windi:safelist:global>
</style>
