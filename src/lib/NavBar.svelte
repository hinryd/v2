<script>
	import { slide } from 'svelte/transition';
	let showMenu = false;
	function toggleDarkMode() {}
	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

<nav class="h-20 flex justify-between items-center px-5">
	<div class="flex items-center">
		<svg
			class="w-10 h-10"
			data-darkreader-inline-stroke=""
			fill="none"
			stroke="currentColor"
			style="--darkreader-inline-stroke: currentColor;"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
			/></svg
		>
		<p class="font-bold font-mono">hinryd</p>
	</div>
	<div>
		<!-- <button on:click={toggleDarkMode}>
			<svg
				class="w-10 h-10"
				data-darkreader-inline-stroke=""
				fill="none"
				stroke="currentColor"
				style="--darkreader-inline-stroke: currentColor;"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
				/></svg
			>
		</button> -->
		<button on:click={toggleMenu}>
			<svg
				class="w-10 h-10"
				data-darkreader-inline-stroke=""
				fill="none"
				stroke="currentColor"
				style="--darkreader-inline-stroke: currentColor;"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			>
		</button>
	</div>
</nav>

{#if showMenu}
	<div class="grid p-3 justify-items-stretch" transition:slide on:click={toggleMenu}>
		<a class="transition p-3 hover:(bg-gray-300 rounded-md)" href="/">Home</a>
		<a class="transition p-3 hover:(bg-gray-300 rounded-md)" href="/works">Works</a>
		<a class="transition p-3 hover:(bg-gray-300 rounded-md)" href="/posts">Posts</a>
	</div>
{/if}
