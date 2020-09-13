<template>
    <div id="image-grid">

		<section class="image-grid">
			
			<ThumbLink v-for="sneaker in Sneakers" :Sneakers="sneaker" v-bind:key="sneaker.id" />
			
		</section>

	</div>
</template>

<script>

import ThumbLink from '../components/ThumbLink.vue'
import Sneakers from '../data/Sneakers.json'

export default {
  name: 'ImageGrid',
  components:
  {
	ThumbLink
  },
  data() {
	return{
		Sneakers
	}
  }
}
</script>

<style scoped>

.image-grid
{
	width: 100%;
	background: var(--beige-bg-color);
	font-size: 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 0;
	align-items: center;
}

@media all and (max-width: 800px)
{
	.image-grid
	{
		width: 90%;
		margin: 0 auto;
		padding: 40px 0 100px 0;
		grid-template-columns: 1fr;
		grid-gap: 40px;
	}
}

</style>