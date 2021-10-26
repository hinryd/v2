<script lang="ts">
	let currentYear = new Date().getFullYear();
</script>

<footer class="flex flex-col justify-center text-center w-screen bg-gray-200 h-30 mt-10 p-8">
	<p>Made with love and <a class="underline" href="https://kit.svelte.dev/">SvelteKit</a></p>
	<p>Henry Li © {currentYear}</p>
</footer>
