<script setup>
import searchHealtIcon from '@/assets/icons/searchHealt.vue'
import { ref } from 'vue'

// const listaPerfumes = ref([
//   {
//     nameReal: 'Aventus Creed',
//     nome: 'CRI Ventus M.',
//     descricao:
//       'Aventus de Creed é um perfume Chipre Frutado Masculino. Aventus foi lançada em 2010. Aventus foi criado por Jean-Christophe Hérault e Erwin Creed. As notas de topo são: Bergamota, Groselha Preta, Maçã, Limão e Pimenta Rosa. As notas de coração são: Abacaxi, Patchouli e Jasmim Marroquino. As notas de fundo são: Vidoeiro, Almíscar, Musgo de Carvalho, Ambroxan e Cedro.',
//     Genero: 'Masculino',
//     NotasTopo: 'Bergamota, Groselha Preta, Maçã, Limão e Pimenta Rosa',
//     NotasCoracao: 'Abacaxi, Patchouli e Jasmim Marroquino',
//     NotasFundo: 'Vidoeiro, Almíscar, Musgo de Carvalho, Ambroxan e Cedro',
//   },
// ])
</script>
<template>
  <div class="container h-100v">
    <div class="row mb-5">
      <div class="col">
        <h1 class="text-center text-muted fw-bold">Proutos</h1>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col col-md-2">
        <BDropdown
          text="Categorias"
          class="mt-2 p-0 text-muted"
          variant="light shadow  w-100 rounded-0 btn-lg"
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
      <div class="col">
        <BInputGroup class="mt-2 shadow">
          <template #prepend>
            <BInputGroupText class="border-white rounded-0 bg-secondary"
              ><searchHealtIcon class="text-white"
            /></BInputGroupText>
          </template>
          <input
            type="text"
            placeholder="Pesquisar"
            class="form-control form-control-lg border-white rounded-0"
          />
          <template #append>
            <BButton variant="secondary rounded-0 fw-bold border-0">BUSCAR</BButton>
          </template>
        </BInputGroup>
      </div>
    </div>
    <div class="row v-100h"></div>
  </div>
</template>
