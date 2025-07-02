<script setup>
import searchHealtIcon from '@/assets/icons/searchHealt.vue'
</script>
<template>
  <div class="container">
    <div class="row mb-5">
      <div class="col col-md-2 mt-5">
        <BDropdown
          text="Categorias"
          class="mt-2 p-0"
          variant="outline-light shadow  w-100 rounded-0 btn-lg"
        >
          <BDropdownItem>First Action</BDropdownItem>
          <BDropdownItem>Second Action</BDropdownItem>
          <BDropdownItem>Third Action</BDropdownItem>
        </BDropdown>
        <!-- <div class="">
          <BButtonGroup size="md" aria-label="Produtos" class="" vertical>
            <BButton variant="trasnparent fw-bold text-start my-2 active border-0"
              >Cítricos</BButton
            >
            <BButton variant="trasnparent fw-bold text-start border-0 my-2"
              >Frutas, Vegetais e Nozes</BButton
            >
            <BButton variant="trasnparent fw-bold text-start border-0 my-2 ">Flores</BButton>
            <BButton variant="trasnparent fw-bold text-start border-0 my-2 "
              >Flores Brancas</BButton
            >
            <BButton variant="trasnparent fw-bold text-start border-0 my-2 "
              >Plantas, Ervas e Fougéres</BButton
            >
            <BButton variant="trasnparent fw-bold text-start border-0 my-2 ">Especiarias</BButton>
            <BButton variant="trasnparent fw-bold text-start border-0 my-2 "
              >Doces e Aromas Gourmets</BButton
            >
            <BButton variant="trasnparent fw-bold text-start border-0 my-2 "
              >Madeira & Musgos</BButton
            >
            <BButton variant="trasnparent fw-bold text-start border-0 my-2 "
              >Resinas & Bálsamos</BButton
            >
            <BButton variant="trasnparent fw-bold text-start border-0 my-2 "
              >Musk, Âmbares e Animálicas</BButton
            >
            <BButton variant="trasnparent fw-bold text-start border-0 my-2 ">Bebidas</BButton>
            <BButton variant="trasnparent fw-bold text-start border-0 my-2 "
              >Naturais & Sintéticas</BButton
            >
            <BButton variant="trasnparent fw-bold text-start border-0 mt-2 "
              >Não categorizado</BButton
            >
          </BButtonGroup>
        </div> -->
      </div>

      <div class="col mt-5">
        <BInputGroup class="mt-2">
          <template #prepend>
            <BInputGroupText class="bg-transparent border-white rounded-0"
              ><searchHealtIcon class="text-white"
            /></BInputGroupText>
          </template>
          <input
            type="text"
            placeholder="Pesquisar"
            class="form-control form-control-lg border-white bg-transparent rounded-0"
          />
        </BInputGroup>
      </div>
    </div>
    <div class="row v-100h"></div>
  </div>
</template>
