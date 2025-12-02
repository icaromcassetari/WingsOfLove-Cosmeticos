import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVueNextResolver } from 'bootstrap-vue-next'
import Icons from 'unplugin-icons/vite'
import dsv from '@rollup/plugin-dsv'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dsv(),
    Components({
      resolvers: [BootstrapVueNextResolver()],
    }),
    Icons({
      compiler: 'vue3',
    }),

    // vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
