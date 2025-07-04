<script setup>
import NavBar from './components/NavBar.vue'
import Banner from './components/BannerStart.vue'
import Produtos from './components/ProdutosSale.vue'
</script>

<template >
  <NavBar></NavBar>
  <section class="fundo-banner">
    <Banner></Banner>
  </section>
  <section class="fundo-produtos">
    <Produtos></Produtos>
  </section>
</template>

