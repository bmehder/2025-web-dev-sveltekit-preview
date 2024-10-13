<script>
	export let item
</script>

<div class="card">
	<a href="/blog/{item.id}"
		><img
			src={'https://picsum.photos/600/600?' + Math.random()}
			width="400"
			height="400"
			alt=""
		/></a
	>
	<div class="card-text flow">
		<h2><a href="/blog/{item.id}">{item.title}</a></h2>
		<p>{item.body}</p>
		<a href="/blog/{item.id}">Read more &raquo;</a>
	</div>
</div>

<style>
	.card {
		border: 1px solid var(--gray);
	}

	.card-text {
		padding: 2rem;
	}

	h2 {
		text-transform: capitalize;
	}

	a {
		display: inline-block;
	}
</style>
