<script setup>
import NavBar from './components/NavBar.vue'
import Banner from './components/BannerStart.vue'
import Produtos from './components/ProdutosSale.vue'
import SobreNos from './components/SobreNos.vue'
import PerguntasFrequentes from './components/PerguntasFrequentes.vue'
import FooterSite from './components/FooterSite.vue'
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('@/assets/js/paint.js')
}
</script>

<template >
  <NavBar></NavBar>
  <section class="fundo-banner">
    <Banner></Banner>
  </section>
   <section class="fundo-sobrenos">
    <SobreNos></SobreNos>
  </section>
  <section class="fundo-produtos pb-5">
    <Produtos></Produtos>
  </section>
  <section class="fundo-produtos pb-5">
    <PerguntasFrequentes></PerguntasFrequentes>
  </section>
  <section class="bg-dark pb-2">
    <FooterSite></FooterSite>
  </section>

</template>

