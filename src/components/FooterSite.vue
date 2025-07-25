<script setup>
import logo from '@/assets/imagens/logo-semtexto.png'
</script>
<template>
  <div class="container pt-5">
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col d-flex align-items-center">
            <img :src="logo" alt="Logo Wings Of Love" style="width: 180px" class="text-white" />
          </div>
          <div class="col">
              <a href="#home" class="text-light d-block">Home</a>
              <a href="#sobreNos" class="text-light d-block">Sobre Nós</a>
              <a href="#perfumes" class="text-light d-block">Perfumes</a>
              <a href="#perguntas" class="text-light d-block">Perfumes</a>
          </div>
        </div>

      </div>
      <div class="col">
        <p class="text-light">CONTATOS.</p>
        <p class="text-danger mt-2 mb-0"> +55 11 94564876</p>
        <p class="text-danger"> +55 11 94564876</p>
        <p class="text-danger"> email@wmailcom.com.br</p>
      </div>
      <div class="col">
        <p class="text-light">REDES SOCIAIS.</p>
        <p class="text-light mt-2 mb-0"> +55 11 94564876</p>
        <p class="text-light"> +55 11 94564876</p>
        <p class="text-light"> email@wmailcom.com.br</p>
      </div>
      <div class="col">
        <p class="text-light">FORMAS DE PAGAMENTOS.</p>
        <p class="text-light mt-2 mb-0"> +55 11 94564876</p>
        <p class="text-light"> +55 11 94564876</p>
        <p class="text-light"> email@wmailcom.com.br</p>
      </div>
    </div>
  </div>
</template>
