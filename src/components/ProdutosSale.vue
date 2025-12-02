<script setup>

import searchHealtIcon from '@/assets/icons/searchHealt.vue'
import { ref } from 'vue';
import axios from 'axios'

const listaProdutos = ref([]);
const categoria = ref(null);
const pesquisa = ref(null);

const params = ref({
  categoria : categoria.value,
  pesquisa: pesquisa.value
})

const fetchLista = () => {

  params.value = {
    categoria : categoria.value,
    pesquisa: pesquisa.value
  }

  axios.post("http://localhost/dev/backendWings/processarLista.php", params.value ).then((event) => {
    listaProdutos.value = event.data
  })

}

const setCategoria = (event) => {
  categoria.value = event.target.value
}

fetchLista()

</script>
<template>
  <div class="container py-5">
    <div class="row mb-3">
      <div class="col">
        <h1 class="text-center text-muted fw-light MB-5">PERFUMES</h1>
      </div>
    </div>
    <div class="row ">
      <div class="col col-md-4">
        <BDropdown
          :text="'Categoria ' + (categoria != null ? categoria : '')"
          class="mt-2 p-0 text-muted"
          variant="light  w-100 rounded-0 btn-lg fw-bold"
          @click="setCategoria"
          size="lg"
        >
          <BDropdownItem  value="Cítricos">Cítricos</BDropdownItem>
          <BDropdownItem  value="Frutas">Frutas</BDropdownItem>
          <BDropdownItem  value="Vegetais">Vegetais</BDropdownItem>
          <BDropdownItem  value="Nozes">Nozes</BDropdownItem>
          <BDropdownItem  value="Flores">Flores</BDropdownItem>
          <BDropdownItem  value="Flores Brancas">Flores Brancas</BDropdownItem>
          <BDropdownItem  value="Plantas">Plantas</BDropdownItem>
          <BDropdownItem  value="Ervas">Ervas</BDropdownItem>
          <BDropdownItem  value="Fougéres">Fougéres</BDropdownItem>
          <BDropdownItem  value="Especiarias">Especiarias</BDropdownItem>
          <BDropdownItem  value="Doces">Doces</BDropdownItem>
          <BDropdownItem  value="Aromas Gourmets">Aromas Gourmets</BDropdownItem>
          <BDropdownItem  value="Madeira">Madeira</BDropdownItem>
          <BDropdownItem  value="Musgos">Musgos</BDropdownItem>
          <BDropdownItem  value="Resinas">Resinas</BDropdownItem>
          <BDropdownItem  value="Bálsamos">Bálsamos</BDropdownItem>
          <BDropdownItem  value="Musk">Musk</BDropdownItem>
          <BDropdownItem  value="Âmbares">Âmbares</BDropdownItem>
          <BDropdownItem  value="Animálicas">Animálicas</BDropdownItem>
          <BDropdownItem  value="Bebidas">Bebidas</BDropdownItem>
          <BDropdownItem  value="Naturais">Naturais</BDropdownItem>
          <BDropdownItem  value="Sintéticas">Sintéticas</BDropdownItem>
          <BDropdownItem  value="">Não categorizado</BDropdownItem>
        </BDropdown>
      </div>
      <div class="col">
        <BInputGroup class="mt-2 ">
          <template #prepend>
            <BInputGroupText class="border-0 rounded-0 bg-light"
              ><searchHealtIcon class="text-dark"
            /></BInputGroupText>
          </template>
          <input
            type="text"
            placeholder="Pesquisar"
            class="form-control form-control-lg border-white rounded-0"
            v-model="pesquisa"
          />
          <template #append>
            <BButton variant="light rounded-0 fw-bold border-0" @click="fetchLista">BUSCAR</BButton>
          </template>
        </BInputGroup>
      </div>
    </div>
    <div class="row  mt-4">
      <small class="d-block text-center text-danger fw-bold">*A Wings of Love Cosméticos não possui conexão de qualquer natureza com as marcas citadas abaixo, sendo elas, de propriedade das respectivas empresas.*</small>
    </div>
  </div>
  <div class="container">
    <div class="row mt-2">
      <div class="grid-perfumes mb-4 d-flex"
        v-for="(valueListaPerfumes , indexListaPerfumes ) in listaProdutos"
        :key="indexListaPerfumes"
      >
        <div class="card card-perfumes">
          <div class="card-header card-perfumes-header border-0 bg-white shadow mt-2 d-flex align-items-center justify-content-center" >
            <img :src="valueListaPerfumes.image" class="img-fluid img-card-perfume" :alt="valueListaPerfumes.nome_comercial" style="max-height: 100px;">
            <!-- <div class="d-block">
              <p style="font-size: 12px" class="text-muted d-none text-animation-notas fw-bold mb-0">Topo</p>
              <p style="font-size: 12px" class="text-dark d-none text-animation-notas mb-1">{{ valueListaPerfumes.NotasTopo }}</p>
              <p style="font-size: 12px" class="text-muted d-none text-animation-notas fw-bold mb-0">Coração</p>
              <p style="font-size: 12px" class="text-dark d-none text-animation-notas mb-1">{{ valueListaPerfumes.NotasTopo }}</p>
              <p style="font-size: 12px" class="text-muted d-none text-animation-notas fw-bold mb-0">Fundo</p>
              <p style="font-size: 12px" class="text-dark d-none text-animation-notas mb-0">{{ valueListaPerfumes.NotasTopo }}</p>
            </div> -->
          </div>
          <div class="card-body border-0 bg-transparent  card-perfumes-body">
            <p style="font-size: 14px" class="text-muted fw-bold text-animation mb-2 text-center">{{ valueListaPerfumes.nome_comercial }}</p>
            <small style="font-size: 12px" class="text-muted text-animation">{{ valueListaPerfumes.descricao }}</small>
          </div>
          <div class="card-footer p-0 border-0">
            <button class="btn btn-danger w-100 rounded-0 fw-bold shadow-sm border-0 btn-perfumes">
                VER NOTAS
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
