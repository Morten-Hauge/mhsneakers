<template>
  <div id="home">
    
    <vue-headful title="MH Sneakers"/>

    <Hero />

    <ImageGrid />

    <Footer />
  
  </div>
</template>

<script>

import Hero from '../components/Hero.vue'
import ImageGrid from '../components/ImageGrid.vue'
import Footer from '../components/Footer.vue'

export default {

  components: {
    Hero,
    ImageGrid,
    Footer
  }
}
</script>
