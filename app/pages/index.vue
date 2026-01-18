<template>
  <div>
    <AppHeroSection />

    <AppTypesSection id="types" />

    <AppAboutSection id="about" />

    <AppReviewsSection id="reviews" />

    <AppPortfolioSection id="portfolio" />

    <AppExperienceSection id="experience" />
    
    <AppContactForm id="contact" />
  </div>
</template>



<script setup>
import App from '~/app.vue';



  useHead({
  title: 'Home page — HR&B Constructions',
  meta: [
    {
      name: 'HR&B Constructions',
      content: 'HR&B page description'
    }
  ]
})
</script>
