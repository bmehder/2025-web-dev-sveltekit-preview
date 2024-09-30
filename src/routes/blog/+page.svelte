<script>
	import Card from '$lib/Card.svelte'
	export let data
</script>

<section class="dark">
	<div class="boxed">
		<h1>Blog</h1>
	</div>
</section>

<section>
	<div class="boxed">
		<div class="auto-fit">
			{#each data.posts as post}
				<Card
					title={post.title}
					text={post.body}
					href="/blog/{post.id}"
					src="https://picsum.photos/200/200"
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		padding-block: 3rem;
		background-color: var(--color-blue-900);
	}
</style>
