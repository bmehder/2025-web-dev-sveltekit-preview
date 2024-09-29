<script>
	import Card from './Card.svelte'
	import FeaturedCard from './FeaturedCard.svelte'
</script>

<section class="light-gradient">
	<div class="boxed">
		<div class="auto-fit">
			<FeaturedCard title="Check out our most popular courses!" />
			<Card src="/icons/icon-animation.svg" title="Animation" />
			<Card src="/icons/icon-business.svg" title="Business" />
			<Card src="/icons/icon-crypto.svg" title="Crypto" />
			<Card src="/icons/icon-design.svg" title="Design" />
			<Card src="/icons/icon-photography.svg" title="Photography" />
		</div>
	</div>
</section>

<style>
	section {
		padding-block: 8rem 6rem;
	}
</style>
