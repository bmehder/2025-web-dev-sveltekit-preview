<script>
	export let data
</script>

<section>
	<div class="boxed flow">
		<img src="https://picsum.photos/800/600" alt="placeholder" />
		<h1>{data.post.title}</h1>

		<p>{data.post.body}</p>
	</div>
</section>

<style>
	section {
		padding-block: 2rem;
	}

	h1 {
		text-transform: capitalize;
	}
</style>
