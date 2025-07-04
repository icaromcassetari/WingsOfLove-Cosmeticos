<script setup>
// import produto1 from '@/assets/imagens/produto-hero1-not-fundo.png'
import logo from '@/assets/imagens/logo-semtexto.png'
// import { ref } from 'vue'

// const listPromos = ref([
//   {
//     title: 'Perfume 1',
//     image: produto1,
//     descricao: 'Qualidade a cada passada e muito mais tempo de duração.',
//     index: 0,
//   },
//   {
//     title: 'Perfume 2',
//     image: produto1,
//     descricao: 'Perfumes com hidratantes para não ressecar sua pele.',
//     index: 1,
//   },
//   {
//     title: 'Perfume 3',
//     image: produto1,
//     descricao: 'Perfumes citricos com Fragrância de frutas.',
//     index: 2,
//   },
//   {
//     title: 'Perfume 4',
//     image: produto1,
//     descricao: 'Fragrâncias doces e fortes para deixar seu perfume por onde passar.',
//     index: 3,
//   },
//   {
//     title: 'Perfume 5',
//     image: produto1,
//     descricao: 'Que tal uma mais leve e suave para o dia a dia.',
//     index: 4,
//   },
// ])
</script>
<template>
  <div class="container open-animation-top">
    <div class="row align-items-center h-100v">
      <div class="col-12 col-md-6 d-flex justify-content-center">
        <img :src="logo" alt="Logo Wings Of Love" class="img-fluid" />
      </div>
      <div class="col-12 col-md-6">
        <div class="container">
          <h1 class="text-muted text-center fw-bold" style="font-size: 6.35rem">
            Wings <span class="text-danger text-decoration">Of</span><br />Love
          </h1>
          <!-- <hr
            width="20%"
            class="border border-danger border-5 rounded ms-auto me-auto my-5 is-hr"
          /> -->
          <h4 class="text-white mt-5 fw-lighter">
            Sinta esse cheiro de
            <span class="text-danger text-decoration-underline fw-bold">AMOR</span> no ar.
            <br />
            E encontre a fragrâncias que mais combina com você.
          </h4>
          <button class="btn btn-danger fw-bold btn-lg mt-3 w-100 rounded-0 shadow">
            PEÇA JÁ O SEU
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
