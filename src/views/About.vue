<template>
  <div id="about">
    
    <vue-headful title="About"/>

    <section class="hero-about"></section>

    <section class="about-content">
      
      <section class="about-content-inner">

        <h1>Hello</h1>

        <p>
        
          My name is Morten Hauge. By day, I make interactive stuff for screens. By night, I like to draw and paint on paper, canvas and sneakers – while listening to Hip Hop and K-POP.

          <br><br>

          Check out more of my art on <a href="https://www.instagram.com/mortenhauge/" target="_blank">Instagram</a>.

        </p>

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

.hero-about
{
	width: 100%;
	height: calc(100vh - 100px);
	background-image: url('../assets/hero_about.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: right bottom;
	position: relative;
}

@media all and (max-width: 800px)
{
  .hero-about
  {
    background-image: url('../assets/hero_about_mobile.jpg');
    background-position: center bottom;
    height: 60vh;
  }
}

.about-content
{
  width: 100%;
  background: var(--beige-bg-color);
  color: var(--text-color);
  padding: 100px 0;
}

@media all and (max-width: 800px)
{
  .about-content
  {
    padding: 50px 0;
  }
}

.about-content-inner
{
  width: 50%;
  margin: 0 auto;
}

.about-content-inner h1
{
	font-size: 60px;
	text-transform: uppercase;
	font-family: futura-pt-bold, sans-serif;
	font-weight: 700;
	font-style: normal;
	display: block;
}

@media all and (max-width: 800px)
{
  .about-content-inner h1
  {
    font-size: 40px;
  }
}

.about-content-inner p
{
  font-family: proxima-nova, sans-serif;
  font-weight: 300;
  font-style: normal; 
  font-size: 30px;
  line-height: 42px;
}

@media all and (max-width: 800px)
{
  .about-content-inner
  {
    width: 90%;
  }
}

@media all and (max-width: 800px)
{
  .about-content-inner p
  {
    font-size: 20px;
    line-height: 30px;
  }
}

.about-content-inner a
{
  color: var(--callout-color);
}

.about-content-inner a:hover
{
  text-decoration: underline !important;
}

</style>