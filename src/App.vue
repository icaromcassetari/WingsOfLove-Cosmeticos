<script setup>
import NavBar from './components/NavBar.vue'
import Banner from './components/BannerStart.vue'
import Produtos from './components/ProdutosSale.vue'
import SobreNos from './components/SobreNos.vue'
</script>

<template >
  <NavBar></NavBar>
  <section class="fundo-banner">
    <Banner></Banner>
  </section>
  <section class="fundo-produtos pb-5">
    <Produtos></Produtos>
  </section>
  <section class="fundo-contato">
    <SobreNos></SobreNos>
  </section>
</template>

