<script context="module">
	export async function load({ fetch }) {
		const repos = await fetch('https://api.github.com/users/hinryd/repos?sort=pushed').then((res) =>
			res.json()
		);
		const pictures = await fetch(
			`https://api.unsplash.com/photos/random?count=${repos.length}&client_id=${
				import.meta.env.VITE_UNSPLASH_ACCESS_KEY
			}`
		).then((res) => res.json());
		return {
			props: {
				repos,
				pictures
			}
		};
	}
</script>

<script lang="ts">
	export let repos;
	export let pictures;
</script>

<main class="px-8">
	<div class="mx-auto max-w-4xl">
		<div class="flex justify-between">
			<h1 class="text-4xl font-bold underline underline-10 mb-10 underline-offset-7">Works</h1>
			<a class="" href="/"
				><svg
					class="w-10 h-10"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
					/></svg
				>back</a
			>
		</div>

		<div class="grid sm:grid-cols-2 gap-6">
			{#each repos as repo, i}
				<a
					class="flex flex-col items-center transition transform hover:(opacity-70 scale-105)"
					href={repo.html_url}
				>
					<div
						class="w-full h-60 bg-gray-200 rounded-4xl bg-cover bg-center border-5 border-white shadow-md"
						style="background-image: url({pictures[i].urls.small})"
					/>
					<p class="text-2xl">{repo.name}</p>
					<p class="font-bold px-5">{repo.description}</p>
				</a>
			{/each}
		</div>
	</div>
</main>
