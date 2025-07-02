<script setup>
import NavBar from './components/NavBar.vue'
import Banner from './components/BannerStart.vue'
import Produtos from './components/ProdutosSale.vue'
</script>

<template >
  <NavBar v-b-color-mode="'dark'"></NavBar>
  <section v-b-color-mode="'dark'" class="fundo-banner">
    <Banner></Banner>
  </section>
  <section v-b-color-mode="'dark'" class="fundo-produtos">
    <Produtos></Produtos>
  </section>
</template>

