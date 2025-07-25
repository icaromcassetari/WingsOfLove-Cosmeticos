
<script setup >
import logo from '@/assets/imagens/logo-semtexto.png'
</script>
<template>
  <BNavbar :toggleable="'lg'" variant="light" container fixed="top" >
    <BNavbarBrand href="#">
      <img :src="logo" alt="Logo Wings Of Love" style="width: 80px" class="text-white" />
    </BNavbarBrand>
    <BNavbarToggle target="nav-scroll" />
    <BCollapse id="nav-scroll" is-nav class="">
      <BNavbarNav class="ms-auto mb-lg-0" >
        <BNavItem href="#" :active="true">Home</BNavItem>
        <BNavItem href="#">Sobre Nós</BNavItem>
        <BNavItem href="#">Perfumes</BNavItem>
        <BNavItem href="#">Perguntas</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>
