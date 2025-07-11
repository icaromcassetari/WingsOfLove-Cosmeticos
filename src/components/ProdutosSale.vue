<script setup>
import searchHealtIcon from '@/assets/icons/searchHealt.vue'
import Aventus from "@/assets/imagens/perfumes/Aventus.jpg"
import MillionElixir from "@/assets/imagens/perfumes/1MillionElixir.jpg"
import Verde from "@/assets/imagens/perfumes/Verde.jpg"
import BrancoPrata from "@/assets/imagens/perfumes/brancoPrata.jpg"
import TobaccoVanille from "@/assets/imagens/perfumes/TobaccoVanille.jpg"
import InvictusVictory from "@/assets/imagens/perfumes/InvictusVictory.png"

import { ref } from 'vue'

const listaPerfumes = ref([
  {
    nameReal: 'Aventus Creed',
    nome: 'CRI Ventus M.',
    descricao:
      'Aventus de Creed é um perfume Chipre Frutado Masculino. Aventus foi lançada em 2010. Aventus foi criado por Jean-Christophe Hérault e Erwin Creed.',
    Genero: 'Masculino',
    NotasTopo: 'Bergamota, Groselha Preta, Maçã, Limão e Pimenta Rosa',
    NotasCoracao: 'Abacaxi, Patchouli e Jasmim Marroquino',
    NotasFundo: 'Vidoeiro, Almíscar, Musgo de Carvalho, Ambroxan e Cedro',
    image : Aventus
  },
  {
    nameReal: '1 Million Elixir',
    nome: 'PR 1 MILHÃO ELIXIR M.',
    descricao:
      '1 Million Elixir de Rabanne é um perfume Amadeirado Aromático Masculino. Esta é uma nova fragrância. 1 Million Elixir foi lançada em 2022.',
    Genero: 'Masculino',
    NotasTopo: 'Maçã e Davana',
    NotasCoracao: 'Rosa Damascena, Cedro e Osmanthus',
    NotasFundo: 'Absoluto de Baunilha, Fava Tonka e Patchouli',
    image : MillionElixir
  },
  {
    nameReal: 'King',
    nome: 'BHA KING BARAR M.',
    descricao:
      'King de Bharara é um perfume Aromático Masculino. King foi lançada em 2021.',
    Genero: 'Masculino',
    NotasTopo: 'Laranja, Limão e Bergamota',
    NotasCoracao: 'Notas Frutadas',
    NotasFundo: 'Baunilha, Almíscar Branco e Âmbar',
    image: Verde
  },
  {
    nameReal: 'Godolphin',
    nome: 'MAR GODIFI M.',
    descricao:
      'King de Bharara é um perfume Aromático Masculino. King foi lançada em 2021.',
    Genero: 'Masculino',
    NotasTopo: 'Notas Frutadas, Açafrão, Mate, Tomilho, Cipreste e Notas Verdes',
    NotasCoracao: 'Rosa, Raíz de Orris e Jasmim',
    NotasFundo: 'Couro, Âmbar, Cedro da Virgínia, Vetiver, Almíscar e Baunilha',
    image : BrancoPrata
  },
  {
    nameReal: 'Tobacco Vanille',
    nome: 'TFC TABACO VANILA',
    descricao:
      'Tobacco Vanille de Tom Ford é um perfume Oriental Especiado Compartilhável. Tobacco Vanille foi lançada em 2007. O perfumista que assina esta fragrância é Olivier Gillotin.',
    Genero: 'Unissex',
    NotasTopo: 'Folha de Tabaco e Notas Especiadas',
    NotasCoracao: 'Baunilha, Cacau, Fava Tonka e Flor de Tabaco',
    NotasFundo: 'Frutas Secas e Notas Amadeiradas',
    image : TobaccoVanille
  },
  {
    nameReal: 'Invictus Victory',
    nome: 'INVENC VICTOR M.',
    descricao:
      'Invictus Victory de Rabanne é um perfume Oriental Masculino. Invictus Victory foi lançada em 2021.',
    Genero: 'Masculino',
    NotasTopo: 'Pimenta Rosa e Limão',
    NotasCoracao: 'Olíbano e Lavanda',
    NotasFundo: 'Baunilha, Fava Tonka e Âmbar',
    image: InvictusVictory
  },
  {
    nameReal: '1 Million Elixir',
    nome: 'PR 1 MILHÃO ELIXIR M.',
    descricao:
      '1 Million Elixir de Rabanne é um perfume Amadeirado Aromático Masculino. Esta é uma nova fragrância. 1 Million Elixir foi lançada em 2022.',
    Genero: 'Masculino',
    NotasTopo: 'Maçã e Davana',
    NotasCoracao: 'Rosa Damascena, Cedro e Osmanthus',
    NotasFundo: 'Absoluto de Baunilha, Fava Tonka e Patchouli',
    image : MillionElixir
  },
  {
    nameReal: 'King',
    nome: 'BHA KING BARAR M.',
    descricao:
      'King de Bharara é um perfume Aromático Masculino. King foi lançada em 2021.',
    Genero: 'Masculino',
    NotasTopo: 'Laranja, Limão e Bergamota',
    NotasCoracao: 'Notas Frutadas',
    NotasFundo: 'Baunilha, Almíscar Branco e Âmbar',
    image: Verde
  },

])
</script>
<template>
  <div class="container">
    <div class="row mb-3">
      <div class="col">
        <h1 class="text-center text-white fw-light">PERFUMES</h1>
      </div>
    </div>
    <div class="row ">
      <div class="col col-md-2">
        <BDropdown
          text="CATEGORIAS"
          class="mt-2 p-0 text-muted"
          variant="danger shadow  w-100 rounded-0 btn-lg fw-bold"
        >
          <BDropdownItem>Cítricos</BDropdownItem>
          <BDropdownItem>Frutas, Vegetais e Nozes</BDropdownItem>
          <BDropdownItem>Flores</BDropdownItem>
          <BDropdownItem>Flores Brancas</BDropdownItem>
          <BDropdownItem>Plantas, Ervas e Fougéres</BDropdownItem>
          <BDropdownItem>Especiarias</BDropdownItem>
          <BDropdownItem>Doces e Aromas Gourmets</BDropdownItem>
          <BDropdownItem>Madeira & Musgos</BDropdownItem>
          <BDropdownItem>Resinas & Bálsamos</BDropdownItem>
          <BDropdownItem>Musk, Âmbares e Animálicas</BDropdownItem>
          <BDropdownItem>Bebidas</BDropdownItem>
          <BDropdownItem>Naturais & Sintéticas</BDropdownItem>
          <BDropdownItem>Não categorizado</BDropdownItem>
        </BDropdown>
      </div>
      <div class="col-12 col-md-10">
        <BInputGroup class="mt-2 shadow">
          <template #prepend>
            <BInputGroupText class="border-0 rounded-0 bg-danger"
              ><searchHealtIcon class="text-white"
            /></BInputGroupText>
          </template>
          <input
            type="text"
            placeholder="Pesquisar"
            class="form-control form-control-lg border-white rounded-0"
          />
          <template #append>
            <BButton variant="danger rounded-0 fw-bold border-0">BUSCAR</BButton>
          </template>
        </BInputGroup>
      </div>
    </div>
    <div class="row mb-4 mt-4">
      <small class="d-block text-center text-dark fw-bold">*A Wings of Love Cosméticos não possui conexão de qualquer natureza com as marcas citadas abaixo, sendo elas, de propriedade das respectivas empresas.*</small>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-6 col-md-3 grid-perfumes mb-4 d-flex"
        v-for="(valueListaPerfumes , indexListaPerfumes ) in listaPerfumes"
        :key="indexListaPerfumes"
      >
        <div class="card card-perfumes border-0 rounded-0 p-3 w-100 ">
          <div class="card-header card-perfumes-header border-0 bg-white shadow d-flex align-items-center justify-content-center">
            <img :src="valueListaPerfumes.image" class="img-fluid img-card-perfume" :alt="valueListaPerfumes.nome" style="max-height: 100px;">
          </div>
          <div class="card-body border-0 bg-transparent  card-perfumes-body">
            <p style="font-size: 14px" class="text-muted fw-bold text-animation mb-2 text-center">{{ valueListaPerfumes.nome }}</p>
            <small style="font-size: 12px" class="text-muted text-animation">{{ valueListaPerfumes.descricao }}</small>

            <p style="font-size: 12px" class="text-danger d-none text-animation-notas fw-bold mb-2">NOTAS</p>
            <p style="font-size: 12px" class="text-muted d-none text-animation-notas fw-bold mb-0">Topo</p>
            <p style="font-size: 12px" class="text-dark d-none text-animation-notas">{{ valueListaPerfumes.NotasTopo }}</p>
            <p style="font-size: 12px" class="text-muted d-none text-animation-notas fw-bold mb-0">Coração</p>
            <p style="font-size: 12px" class="text-dark d-none text-animation-notas">{{ valueListaPerfumes.NotasTopo }}</p>
            <p style="font-size: 12px" class="text-muted d-none text-animation-notas fw-bold mb-0">Fundo</p>
            <p style="font-size: 12px" class="text-dark d-none text-animation-notas">{{ valueListaPerfumes.NotasTopo }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
