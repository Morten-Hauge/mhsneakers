<template>
    <div id="sneaker">

		<vue-headful v-bind:title="'MH Sneakers – ' + sneaker.title" />

		<section class="sneaker_hero" :style="{ 'background-image': 'url(' + require('../assets/' + sneaker.hero) + ')' }"></section>

		<section class="content">

			<h1>{{sneaker.title}}</h1>
			<h2>{{sneaker.model}}</h2>

			<span class="client-label">Client</span>
			
			<span class="client">{{sneaker.for}}</span>

			<span class="concept-label">Concept</span>

			<span class="concept">{{sneaker.concept}}</span>

			<section class="photo_grid" v-lazy-container="{ selector: 'img' }">

				<a class="image" data-fancybox="gallery" v-bind:href="require('../assets/' + image[0])" v-for="image in sneaker.images" v-bind:key="image[0]" v-bind:class="image[1]">
					<img  v-bind:data-src="require('../assets/' + image[0])" class="item"  v-bind:alt="image[2]" />
				</a>
			</section>
		
		</section>

		<Footer />

	</div>
</template>

<script>

import Sneakers from '../data/Sneakers.json'
import Footer from '@/components/Footer.vue'

require('@fancyapps/fancybox/dist/jquery.fancybox.js');
require('@fancyapps/fancybox/dist/jquery.fancybox.min.css');

export default {
	name: 'Sneaker',
	components: {
		Footer
  },
  data() {
    return {
      SneakerId: this.$route.params.id
    };
  },
  computed: {
    sneaker() {
		return Sneakers.find(
			sneaker => sneaker.id === this.SneakerId
		);
	}
  }
};

</script>

<style scoped>

.sneaker_hero
{
	width: 100%;
	height: 70vh;
	background-size: cover;
	background-position: center center;
}

@media all and (max-width: 1000px)
{
	.sneaker_hero
	{
		height: 50vh;
	}
}

.content
{
	width: 90%;
	max-width: var(--max-width);
	height: auto;
	margin: 0 auto;
	padding: 80px 0 100px 0;
	background: var(--beige-bg-color);
}

.content h1
{
	font-family: futura-pt-bold, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 80px;
	line-height: 80px;
	color: var(--text-color);
}

@media all and (max-width: 800px)
{
	.content h1
	{
		font-size: 40px;
		line-height: 40px;
		margin: 0 0 10px 0;
	}
}

.content h2
{
	font-family: futura-pt, sans-serif;
	font-weight: 500;
	font-style: normal;
	font-size: 40px;
	color: var(--text-color);
	margin: 0 0 30px 0;
}

@media all and (max-width: 800px)
{
	.content h2
	{
		font-size: 20px;
		line-height: 20px;
	}
}

.client-label, .concept-label
{
	font-size: 25px;
	text-transform: uppercase;
	font-family: futura-pt-bold, sans-serif;
	font-weight: 700;
	font-style: normal;
	display: block;
}

.client, .concept
{
	display:block;
	width: 50%;;
	font-size: 25px;
	line-height: 35px;
	font-family: proxima-nova, sans-serif;
	font-weight: 300;
	font-style: normal;
}

@media all and (max-width: 800px)
{
	.client, .concept
	{
		font-size: 20px;
		line-height: 30px;
		margin: 5px 0 0 0;
	}
}

.concept-label
{
	margin: 20px 0 0 0;
}

@media all and (max-width: 800px)
{
	.client, .concept
	{
		width: 100%;
	}
}

.content p
{
	font-family: proxima-nova, sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 20px;
	line-height: 35px;
	margin: 20px 0 0 0;
	width: 70%;
}

.photo_grid
{
	width: 100%;
	height: auto;
	margin: 80px auto 0 auto;
	text-align: center;
	
	display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    align-items: center;
}

.photo_grid a img{
	display: block;
}

.item
{	
	width: 100%;
	height: auto;
}

.span1
{
	grid-column: span 1;
}

.span2
{
	grid-column: span 2;
}

.span3
{
	grid-column: span 3;
}

@media all and (max-width: 800px)
{
	.photo_grid
	{
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	}
	
	.item
	{
		margin: 0 0 20px;
	}
	
	.span1, .span2, .span3
	{
		grid-column: span 2;
	}
}

.photo_grid a:focus
{
	outline: 3px solid var(--callout-color);
}

</style>