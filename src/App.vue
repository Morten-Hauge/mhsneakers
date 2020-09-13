<template>
  <div id="app">
    
    <Header />

	<router-view-transition transition="fade" mode="out-in" />

	<Footer />

  </div>
</template>

<script>
	
import Header from './components/Header.vue'


export default
{
	components: 
	{
		Header
	}
		
}
	
</script>

<style>
*
{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

*, *:before, *:after
{
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

a, a:visited
{
	text-decoration: none !important;
	color: var(--text-color);
}

:root
{
	--callout-color: #6F0044; 
	--dark-gray-color: #26272B;
	--text-color: #171A21;
	--beige-bg-color: #FFFCF8;
	--dark-beige-bg-color: #FFF3E3;
	--text-on-dark: #FFFCF8;
	--max-width: 1800px;
}

body
{
	font-family: futura-pt, sans-serif;
	color: var(--text-color);
	background: var(--beige-bg-color);
}

.fade-enter, .fade-leave-to
{
	opacity: 0;
	transform: translateY(2em);
}

.fade-enter-active, .fade-leave-active
{
	transition: all ease .5s;
}

</style>
