<script>
	import Card from './Card.svelte'
	import FeaturedCard from './FeaturedCard.svelte'
</script>

<section>
	<div class="boxed">
		<div class="auto-fit">
			<FeaturedCard />
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
		background: linear-gradient(white, #f0f1ff 40%);
		padding-block: 8rem 6rem;
	}
</style>
