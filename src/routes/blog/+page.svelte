<script>
	import Card from '$lib/Card.svelte'

	export let data
</script>

<section class="page-title">
	<div class="boxed">
		<h1>Blog</h1>

		<div class="auto-fit" style="margin-top: 3rem;">
			{#each data.posts as post}
				<Card
					title={post.title}
					text={post.body}
					href="/blog/{post.id}"
					src={'https://picsum.photos/200/200' + '?' + Math.random()}
				/>
			{/each}
		</div>
	</div>
</section>
