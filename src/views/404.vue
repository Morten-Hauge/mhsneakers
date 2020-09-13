<template>
  <div id="404">
    
    <vue-headful title="404 - Page not found"/>

    <section class="hero">

			<section class="hero-text">

					<h2>404</h2>
					<h1>Page <br> not <br> found</h1>
			
				</section>

		</section>

    <Footer />

  </div>
</template>

<script>

import Footer from '../components/Footer'

export default {

  components: {
      Footer
  }
}
</script>

<style scoped>

.hero
{
	width: 100%;
	height: calc(100vh - 100px);
	background-image: url('../assets/hero_404.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: right bottom;
	position: relative;
}

@media all and (max-width: 800px)
{
	.hero
	{
		background-image: url('../assets/hero_404_mobile.jpg');
		background-position: center bottom;
		height: calc(100vh - 135px);
	}
	
}

.hero-text
{
	margin: auto;
	padding: 0;
	position: absolute;
	top: 15%;
	left: 10%;	
}

@media all and (max-width: 1300px)
{
	.hero-text
	{
		top: 10%;
	}
}

@media all and (max-width: 800px)
{
	.hero-text
	{
		top: 5%;
		left: 50%;
		transform: translateX(-50%);
	}
}

.hero-text::before
{
	content: '';
	position: absolute;
	width: 3px;
	top: 0;
	bottom: 0;
	left: 0;
	background: var(--text-on-dark);
	display: none;
}

.hero h2
{
	font-family: futura-pt, sans-serif;
	font-weight: 400;
	font-style: normal;
	color: var(--text-on-dark);
	font-size: 60px;
	line-height: 50px;
	letter-spacing: -2px;
}

@media all and (max-width: 800px)
{
	.hero h2
	{
		font-size: 40px;
		line-height: 30px;
	}
}

@media all and (min-width: 2000px)
{
	.hero h2
	{
		font-size: 90px;
		line-height: 70px;
	}
}

.hero h1
{
	font-family: futura-pt-bold, sans-serif;
	font-weight: 700;
	font-style: normal;
	text-transform: uppercase;
	letter-spacing: -5px;
	color: var(--text-on-dark);
	font-size: 100px;
	line-height: 80px;
	margin: 0 0 10px 0;
}

@media all and (max-width: 800px)
{
	.hero h1
	{
		font-size: 60px;
		line-height: 50px;
	}
}

@media all and (min-width: 2000px)
{
	.hero h1
	{
		font-size: 150px;
		line-height: 120px;
	}
}

</style>