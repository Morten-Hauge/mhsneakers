<template>
    <div class="thumb-link">

		<router-link :to="/sneaker/ + Sneakers.id">

			<div class="thumb_image_container">
				<div class="thumb_image_overlay">
					<div class="thumb_image_overlay_text">
						<div>
							<h2>{{Sneakers.title}}</h2>
							<h3>{{Sneakers.model}}</h3>rere
						</div>
					</div>
				</div>

				<div class="thumb_image" :style="{ 'background-image': 'url(' + require('../assets/' + Sneakers.thumb) + ')' }"></div>

			</div>

			<section class="mobile-text">

				<h2>{{Sneakers.title}}</h2>
				<h3>{{Sneakers.model}}</h3>

			</section>

		</router-link>
		
	</div>
</template>

<script>
export default {
  name: 'ThumbLink',
  props: {
	Sneakers:{
		type: Object
	}
  }
}
</script>

<style scoped>

.thumb_image_container
{
	width: 100%;
	padding-top: 56.25%;
	overflow: hidden;
	position: relative;
}

.thumb_image
{
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: center center;
	overflow: hidden;
	transition: all ease .5s;
	position: absolute;
	top: 0;
	left: 0;
}

.thumb_image_container:hover .thumb_image, .thumb_image_container:hover .thumb_image_overlay_text
{
	transform: scale(1.05);
}

@media all and (max-width: 800px)
{
	.thumb_image_container:hover .thumb_image, .thumb_image_container:hover .thumb_image_overlay_text
	{
		transform: none;
	}
}

.thumb-link a:focus .thumb_image, .thumb-link a:focus .thumb_image_overlay_text
{
	transform: scale(1.05);
}

.thumb_image_overlay
{
	width: 100%;
	height: 100%;
	background: rgba(0,0,0,.7);
	position: absolute;
	top: 0;
	left: 0;
	z-index: 10;
	opacity: 0;
	transition: all ease .5s;
	text-align: center;
}

.thumb_image_container:hover .thumb_image_overlay
{
	opacity: 1;
}

@media all and (max-width: 800px)
{
	.thumb_image_container:hover .thumb_image_overlay
	{
		display: none;
	}
}

.thumb-link a:focus .thumb_image_overlay
{
	opacity: 1;
}

.thumb_image_overlay_text
{
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all ease .9s;
}

.thumb_image_overlay h2
{
	font-family: futura-pt-bold, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 50px;
	color: var(--text-on-dark);
}

@media all and (min-width: 1500px)
{
	.thumb_image_overlay h2
	{
		font-size: 90px;
	}
}

@media all and (max-width: 800px)
{
	.thumb_image_overlay h2
	{
		font-size: 30px;
	}
}

.thumb_image_overlay h3
{
	font-family: futura-pt, sans-serif;
	font-weight: 500;
	font-style: normal;
	font-size: 25px;
	color: var(--text-on-dark);
}

@media all and (min-width: 1500px)
{
	.thumb_image_overlay h3
	{
		font-size: 45px;
	}
}

.mobile-text
{
	margin: 10px 0 0 0;
	display: none;
}

@media all and (max-width: 800px)
{
	.mobile-text
	{
		display: block;
	}	
}

.mobile-text h2
{
	font-family: futura-pt-bold, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 35px;
	line-height: 40px;
	letter-spacing: -1px !important;
}

.mobile-text h3
{
	font-family: futura-pt, sans-serif;
	font-weight: 500;
	font-style: normal;
	font-size: 18px;
	line-height: 18px;
}

</style>