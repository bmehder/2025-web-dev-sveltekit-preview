<script>
	export let icon = ''
	export let src = ''
	export let alt = ''
	export let title = 'Design'
	export let text =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam perspiciatis esse tempore.'
	export let href = '/blog'
	export let linkText = 'Read More &raquo;'
</script>

<div class="card bg-white">
	{#if icon}
		<img class="icon" src={icon} alt="" width="56" height="56" />
		<div class="spacer"></div>
	{/if}
	{#if src}
		<a class="blue-900" {href}>
			<img class="width-100" {src} {alt} />
		</a>
	{/if}
	<a class="blue-900" {href}>
		<h3>{title}</h3>
	</a>
	<p>{text}</p>
	<a {href}>{@html linkText}</a>
</div>

<style>
	.card {
		position: relative;

		display: grid;
		grid-template-rows: auto auto 1fr auto;
		gap: 1.5rem;

		padding: 2rem;

		border-radius: 1rem;
	}

	.icon {
		position: absolute;
		top: 0;
		translate: 2rem -50%;
	}

	.spacer {
		height: 0.5rem;
	}

	.width-100 {
		width: 100%;
	}

	h3 {
		font-size: 1.25rem;
		text-transform: capitalize;
	}

	p {
		font-size: 1.125rem;
	}

	a {
		font-size: 1.125rem;
		font-weight: 700;
	}
</style>
