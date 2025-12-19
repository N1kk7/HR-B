// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url' 

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { 
          name: 'viewport', 
          content: 'width=device-width, initial-scale=1' 
        }
      ]
    }
  },
  nitro: {
    compressPublicAssets: true,
  },
  css: ['@/assets/style/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/style/mixins.scss" as *;'
        }
      }
    }
  },
  alias: {
    '@': fileURLToPath(new URL('.', import.meta.url))
  }

})
