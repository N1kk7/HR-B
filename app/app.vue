<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>



<script setup>

import { onMounted } from 'vue'

useHead({
  link: [
    {
      rel: 'preload',
      as: 'font',
      href: './assets/fonts/Roboto-Light.woff2',
      type: 'font/woff2',
      crossorigin: 'anonymous'
    },
    {
      rel: 'preload',
      as: 'font',
      href: './assets/fonts/Roboto-Regular.woff2',
      type: 'font/woff2',
      crossorigin: 'anonymous'
    }
  ],
   style: [
    {
      children: `
        .hero { width: 100%; height: 600px; }
        .hero_img { transform: scale(1.15); opacity: 0.7; }
        .header_content { display: flex; justify-content: space-between; }
      `
    }
  ]
})

onMounted(async () => {
  await import('@/assets/style/main.scss')
})

</script>
