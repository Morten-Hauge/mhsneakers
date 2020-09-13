<template>
    <div id="hero">

		<section class="hero">

			<section class="hero-text">

					<h2>Hello.</h2>
					<h1>I paint <br> sneakers</h1>
					<h3 lang="zh">定制运动鞋</h3>
			
				</section>

		</section>

	</div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>

<style scoped>

.hero
{
	width: 100%;
	height: calc(100vh - 100px);
	background-image: url('../assets/hero_index.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: right bottom;
	position: relative;
}

@media all and (max-width: 800px)
{
	.hero
	{
		background-image: url('../assets/hero_index_mobile.jpg');
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
	text-shadow: 0 0 20px #000;
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
		top: 10%;
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

.hero h3
{
	font-family: futura-pt, sans-serif;
	font-weight: 400;
	font-style: normal;
	color: var(--text-on-dark);
	font-size: 30px;
	line-height: 30px;
}

@media all and (max-width: 800px)
{
	.hero h3
	{
		font-size: 20px;
		line-height: 5px;
	}
}

@media all and (min-width: 2000px)
{
	.hero h3
	{
		font-size: 50px;
		line-height: 40px;
	}
}

</style>