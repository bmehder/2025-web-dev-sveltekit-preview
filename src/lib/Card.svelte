<script>
	export let src = ''
	export let title = 'Design'
	export let text =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam perspiciatis esse tempore.'
	export let href = '/'
	export let linkText = 'Get Started'
</script>

<div class="block course">
	<img {src} alt="" width="56" height="56" />
	<h3>{title}</h3>
	<p>{text}</p>
	<a {href}>{linkText}</a>
</div>

<style>
	.block {
		padding-block: 4rem 3rem;
		padding-inline: 2rem;
		border-radius: 1rem;
	}

	.course {
		position: relative;
		background: white;
		display: grid;
		gap: 1.5rem;
		grid-template-rows: auto 1fr auto;
	}

	img {
		position: absolute;
		top: 0;
		translate: 2rem -50%;
	}

	h3 {
		font-size: 1.25rem;
	}

	p {
		font-size: 1.125rem;
		margin: 0;
	}

	a {
		font-size: 1.125rem;
		font-weight: 700;
	}
</style>
