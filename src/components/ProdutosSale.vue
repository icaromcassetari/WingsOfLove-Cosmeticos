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

const currentPage = ref(1)
const rows = ref(0)
const perPage = ref(20)
const listaTemp = ref([])

const fetchLista = () => {

  params.value = {
    categoria : categoria.value,
    pesquisa: pesquisa.value
  }

  axios.post("http://localhost/dev/backendWings/processarLista.php", params.value ).then((event) => {

    rows.value = event.data.total
    listaTemp.value =  event.data.data
    listaTemp.value = Object.values(listaTemp.value);
    var totalblocks = Math.ceil(rows.value / perPage.value)

    for(var i = 1; i <= totalblocks; i++){
      listaProdutos.value[i] = listaTemp.value.splice(0,perPage.value)
    }
  })

}

const getLista = () => {
  return listaProdutos.value[currentPage.value]
}


fetchLista()

</script>
<template>
  <div class="container">
    <div class="row mb-2">
      <div class="col">
        <h1 class="text-center text-dark fw-light mt-5">PRODUTOS</h1>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <p class="d-block text-center text-dark m-0 bg-danger-subtle rounded p-1">*A Wings of Love Cosméticos não possui conexão de qualquer natureza com as marcas citadas abaixo, sendo elas, de propriedade das respectivas empresas.*</p>
      </div>
    </div>
    <div class="row mb-4">
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

  </div>
  <div class="container">
    <div class="row">
      <div class="grid-perfumes mb-4 d-flex"
        v-for="(valueListaPerfumes , indexListaPerfumes ) in getLista()"
        :key="indexListaPerfumes"
      >
        <div class="card card-perfumes shadow">
          <div class="card-header bg-white d-flex align-items-center justify-content-center p-4 rounded-0 border-secondary" >
            <img :src="valueListaPerfumes.image" class="img-fluid img-card-perfume" :alt="valueListaPerfumes.nome_comercial" style="max-height: 110px;">
          </div>
          <div class="card-body bg-transparent ">
            <p style="font-size: 14px" class="text-dark fw-bold text-animation mb-3 text-center">{{ valueListaPerfumes.nome_comercial }}</p>
            <small style="font-size: 13px" class="text-dark text-animation">{{ valueListaPerfumes.descricao }}</small>
          </div>
          <div class="card-footer bg-transparent border-muted p-2">
            <button class="w-100 btn-perfumes border-0 btn rounded-0 btn-sm shadow-sm">
                DETALHES
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col d-flex justify-content-end">
        <BPagination
          v-model="currentPage"
          pills
          :total-rows="rows"
          :per-page="perPage"
          size="lg"
          first-class='dark'
        />
      </div>
    </div>
  </div>



</template>
