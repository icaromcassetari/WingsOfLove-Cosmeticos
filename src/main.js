import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createBootstrap } from 'bootstrap-vue-next'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

const app = createApp(App)
app.use(createBootstrap())
app.provide('$listaPerfumes', [
  {
    nameReal: 'Aventus Creed',
    nome: 'CRI Ventus M.',
    descricao:
      'Aventus de Creed é um perfume Chipre Frutado Masculino. Aventus foi lançada em 2010. Aventus foi criado por Jean-Christophe Hérault e Erwin Creed. As notas de topo são: Bergamota, Groselha Preta, Maçã, Limão e Pimenta Rosa. As notas de coração são: Abacaxi, Patchouli e Jasmim Marroquino. As notas de fundo são: Vidoeiro, Almíscar, Musgo de Carvalho, Ambroxan e Cedro.',
    Genero: 'Masculino',
    NotasTopo: 'Bergamota, Groselha Preta, Maçã, Limão e Pimenta Rosa',
    NotasCoracao: 'Abacaxi, Patchouli e Jasmim Marroquino',
    NotasFundo: 'Vidoeiro, Almíscar, Musgo de Carvalho, Ambroxan e Cedro',
  },
])
app.mount('#app')
