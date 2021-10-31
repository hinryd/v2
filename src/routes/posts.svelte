<script context="module">
	export async function load({ fetch }) {
		const posts = await fetch('https://dev.to/api/articles?username=hinryd').then((res) =>
			res.json()
		);
		const pictures = await fetch(
			`https://api.unsplash.com/photos/random?count=${posts.length}&client_id=${
				import.meta.env.VITE_UNSPLASH_ACCESS_KEY
			}`
		).then((res) => res.json());
		return {
			props: {
				posts,
				pictures
			}
		};
	}
</script>

<script lang="ts">
	export let posts;
	export let pictures;
</script>

<main class="px-8">
	<div class="mx-auto max-w-4xl">
		<div class="flex justify-between">
			<h1 class="text-4xl font-bold underline underline-10 mb-10 underline-offset-7">Posts</h1>
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
						d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
					/></svg
				></a
			>
		</div>
		<div class="grid sm:grid-cols-2 gap-6">
			{#each posts as post, i}
				<a
					class="flex flex-col items-center transition transform"
					w-hover="opacity-70 scale-105"
					href={post.url}
				>
					<div
						class="w-full h-60 bg-gray-200 rounded-4xl bg-cover bg-center border-5 border-white shadow-md"
						style="background-image: url({pictures[i].urls.small})"
					/>
					<p class="text-2xl">{post.title}</p>
				</a>
			{/each}
		</div>
	</div>
</main>
