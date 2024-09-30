<script>
	import Card from './Card.svelte'
	import FeaturedCard from './FeaturedCard.svelte'
</script>

<section class="light-gradient">
	<div class="boxed">
		<div class="auto-fit">
			<FeaturedCard title="Check out our most popular categories!" />
			<Card icon="/icons/icon-animation.svg" title="Animation" />
			<Card icon="/icons/icon-business.svg" title="Business" />
			<Card icon="/icons/icon-programming.svg" title="Programming" />
			<Card icon="/icons/icon-design.svg" title="Design" />
			<Card icon="/icons/icon-photography.svg" title="Photography" />
		</div>
	</div>
</section>

<style>
	section {
		padding-block: 8rem 6rem;
	}
</style>
