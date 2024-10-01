<script>
	export let data
</script>

<article>
	<section class="page-title">
		<div class="boxed">
			<h1>{data.post.title}</h1>
		</div>
	</section>

	<section>
		<div class="boxed flow">
			<img
				src="https://picsum.photos/800/600"
				alt="placeholder"
				width="800"
				height="600"
			/>
			<p>{data.post.body}</p>
		</div>
	</section>
</article>

<style>
	/* TEMP Style */
	h1 {
		text-transform: capitalize;
	}
</style>
