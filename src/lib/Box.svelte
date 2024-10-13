<script>
	export let icon = ''
	export let title = 'Design'
	export let text =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam perspiciatis esse tempore.'
	export let href = '/blog'
	export let linkText = 'Read More &raquo;'
</script>

<li class="card bg-white">
	<img class="icon" src={icon} alt="" width="56" height="56" />
	<a class="blue-900" {href}>
		<h3>{title}</h3>
	</a>
	<p>{text}</p>
	<a {href}>{@html linkText}</a>
</li>

<style>
	.card {
		position: relative;

		display: grid;
		grid-template-rows: auto auto 1fr auto;
		gap: 1.5rem;

		padding-block: 4rem 2rem;
		padding-inline: 2rem;

		border-radius: 1rem;
	}

	.icon {
		width: 56px;
		position: absolute;
		top: 0;
		translate: 2rem -50%;
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
