<template>
    <footer>

      <section class="footer-inner">
          
          <section class="follow">
            
            <h2>Follow</h2>

            <ul>
              
              <li><a href="https://www.instagram.com/mortenhauge/" target="_blank">Instagram</a></li>
              <li><a href="https://twitter.com/mortenhauge" target="_blank">Twitter</a></li>

            </ul>

          </section>

          <section class="other">
            
            <h2>Explore</h2>

            <ul>
              
              <li><a href="http://morten-hauge.com" target="_blank">Portfolio</a></li>
              <li><a href="http://morten-hauge.com/playlists/" target="_blank">Spotify playlists</a></li>

            </ul>

          </section>

          <img src="../assets/logo.png" class="logo-footer" />

      </section>

    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>

footer
{
  width: 100%;
  height: auto;
  padding: 100px 0;
  background: var(--dark-beige-bg-color);
}

.footer-inner
{
  width: 90%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  grid-gap: 100px;
}

@media all and (max-width: 800px)
{
  .footer-inner
  {
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
}

.footer-inner h2
{
  font-family: futura-pt, sans-serif;
	font-weight: 500;
  text-transform: uppercase;
  font-size: 25px;
  line-height: 35px;
}

.footer-inner ul li
{
  list-style: none;
}

.footer-inner li a
{
  font-size: 25px;
  line-height: 35px;
  font-family: futura-pt, sans-serif;
	font-weight: 300;
  color: var(--callout-color);
}

.footer-inner li a:hover, .footer-inner li a:focus
{
  text-decoration: underline !important;
}

.logo-footer
{
  width: 200px;
  justify-self: right;
  align-self: center;
}

@media all and (max-width: 800px)
{
  .logo-footer
  {
    justify-self: left;
    margin: 20px 0 0 0;
  }
}

</style>