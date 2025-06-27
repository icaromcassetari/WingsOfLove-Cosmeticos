
<script setup >
import { BNavbar, BNavbarItem } from 'buefy'
import logo from '../assets/imagens/logo-semtexto.png'
</script>
<template>
  <b-navbar :type="'is-dark'" spaced mobile-burger fixed-top>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img :src="logo" alt="Logo Wings Of Love" />
      </b-navbar-item>
    </template>
    <template #end>
      <b-navbar-item href="#">Produtos</b-navbar-item>
      <b-navbar-item href="#">Sobre Nós</b-navbar-item>
      <b-navbar-item href="#">Contatos</b-navbar-item>
      <b-navbar-item href="#">Perguntas Frequentes</b-navbar-item>
    </template>
  </b-navbar>
</template>
