
<script setup >
import logo from '@/assets/imagens/logo-semtexto.png'
</script>
<template>
  <BNavbar :toggleable="'lg'" variant="transparent" container fixed="top" class="blur">
    <BNavbarBrand href="#">
      <img :src="logo" alt="Logo Wings Of Love" style="width: 80px" class="text-white" />
    </BNavbarBrand>
    <BNavbarToggle target="nav-scroll" />
    <BCollapse id="nav-scroll" is-nav class="">
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <BNavItem href="#" class="fw-bold" :active="true">Home</BNavItem>
        <BNavItem href="#" class="fw-bold">Produtos</BNavItem>
        <BNavItem href="#" class="fw-bold">Contatos</BNavItem>
        <BNavItem href="#" class="fw-bold">Perguntas</BNavItem>
        <BNavItem href="#" class="fw-bold">Sobre Nós</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>
