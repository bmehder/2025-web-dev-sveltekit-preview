<script>
	export let icon = ''
	export let src = ''
	export let title = 'Design'
	export let text =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam perspiciatis esse tempore.'
	export let href = '/'
	export let linkText = 'Learn More &raquo;'
</script>

<div class="block">
	{#if icon}
		<img class="icon" src={icon} alt="" width="56" height="56" />
	{/if}
	{#if src}
		<a class="title" {href}><img class="featured-image" {src} alt="" /></a>
	{/if}
	<a class="title" {href}><h3>{title}</h3></a>
	<p>{text}</p>
	<a {href}>{@html linkText}</a>
</div>

<style>
	.block {
		position: relative;

		display: grid;
		grid-template-rows: auto auto 1fr auto;
		gap: 1.5rem;

		padding-block: 4rem 3rem;
		padding-inline: 2rem;

		background: white;
		border-radius: 1rem;
	}

	.icon {
		position: absolute;
		top: 0;
		translate: 2rem -50%;
	}

	.featured-image {
		width: 100%;
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

	.title {
		color: var(--color-blue-900);
	}
</style>
