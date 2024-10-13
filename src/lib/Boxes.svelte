<script>
	import FeaturedBox from '$lib/FeaturedBox.svelte'
	import Box from '$lib/Box.svelte'
</script>

<section class="bg-gradient-light">
	<div class="boxed">
		<ul class="auto-fit">
			<FeaturedBox title="Check out our most popular categories!" />
			<Box title="Animation" icon="/icons/icon-animation.svg" />
			<Box title="Business" icon="/icons/icon-business.svg" />
			<Box title="Programming" icon="/icons/icon-programming.svg" />
			<Box title="Design" icon="/icons/icon-design.svg" />
			<Box title="Photography" icon="/icons/icon-photography.svg" />
		</ul>
	</div>
</section>

<style>
	section {
		padding-block: 8rem 6rem;
	}
</style>
