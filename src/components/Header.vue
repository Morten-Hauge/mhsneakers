<template>
    <header>
		
		<router-link to="/" onclick="this.blur();"><img src="../assets/logo.png" class="logo" /></router-link>

		<nav>
		
			<ul class="menu">
				
				<li><router-link to="/" onclick="this.blur();">Sneakers</router-link></li>
				<li><router-link to="/about" onclick="this.blur();">About</router-link></li>
				
			</ul>
		
		</nav>

	</header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

header
{
	width: 100%;
	background: var(--beige-bg-color);
	padding: 30px 0 30px 0;
	display: grid;
	grid-template-columns: auto 1fr;
    font-family: futura-pt, sans-serif;
	align-items: center;
}

@media all and (max-width: 800px)
{
	header
	{
		text-align: center;
		grid-template-columns: 1fr;
	}
}

.logo
{
	width: 200px;
	height: auto;
	margin: 0 0 0 40px;
}

.logo:focus
{
	outline: 3px solid var(--callout-color);
}

@media all and (max-width: 800px)
{
	.logo
	{
		margin: 0 auto 20px auto;
		width: 150px;
	}	
}

/************************************************************************************** MENU */

nav
{
	margin-left: auto;
}

@media all and (max-width: 800px)
{
	nav
	{
		margin: 0 auto;	
	}
}

.menu
{
	margin: 0 20px 0 0;	
}

.menu li
{
	display: inline;
	position: relative;
}
	
.menu li a
{
	color: var(--callout-color);
	padding: 18px 25px 15px 25px;
	font-size: 20px;
	font-weight: 300;
	line-height: 30px;
	text-transform: uppercase;
	letter-spacing: 2px;
	cursor: pointer !important;
	text-decoration: none;
	margin: 0 0 0 20px;
	border-radius: 5px;
	outline: 1px solid var(--beige-bg-color);
	transition: all ease .5s;
}
	
.menu li a:hover, .menu li a:focus
{
	cursor: pointer;	
	outline: 1px solid var(--callout-color);
	-webkit-transform: translateZ(0);
}

@media all and (max-width: 800px)
{
	.menu li a:hover
	{
		outline: 1px solid var(--beige-bg-color);
	}
}

.menu li a:active
{
	outline: none;
}

.menu li .router-link-exact-active::after
{
	content: '';
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: var(--callout-color);
	position: absolute;
	bottom: -15px;
	left: calc(50% + 5px);
	transition: all ease .5s;
}

@media all and (max-width: 800px)
{
	.menu li .router-link-exact-active::after
	{
		left: calc(50% - 5px);
	}
}

@media all and (max-width: 800px)
{
	.menu li 
	{
		display: inline-block;
		margin: 0 20px 0 20px;
	}
	
	.menu li a
	{
		font-size: 1rem;
		line-height: 1rem;
		padding: 15px 15px 15px 15px;
		margin: 0;
		
	}
	
	.menu li a:hover
	{	
		outline: 1px solid var(--beige-bg-color);
	}
}

</style>