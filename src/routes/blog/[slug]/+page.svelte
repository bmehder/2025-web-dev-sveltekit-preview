<script>
	export let data
</script>

<article>
	<section class="bg-blue-900 white">
		<div class="boxed space">
			<h1>{data.post.title}</h1>
		</div>
	</section>

	<section>
		<div class="boxed space flow">
			<img
				src={'https://picsum.photos/800/600?' + Math.random()}
				alt="placeholder"
				width="800"
				height="600"
			/>
			<p>{data.post.body}</p>
		</div>
	</section>
</article>

<style>
	img {
		max-width: 65ch;
	}

	/* TEMP Style */
	h1 {
		text-transform: capitalize;
	}
</style>
