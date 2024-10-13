<script>
	import Card from '$lib/Card.svelte'

	export let data
</script>

<section class="bg-blue-900 white">
	<div class="boxed space">
		<h1>Blog</h1>
	</div>
</section>

<section class="cards">
	<div class="boxed space auto-fit">
		{#each data.posts as post}
			<Card item={post} />
		{/each}
	</div>
</section>

<style>
	.cards {
		padding-top: 3rem;
	}
</style>
