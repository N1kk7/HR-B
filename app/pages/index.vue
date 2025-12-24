<template>
  <div>
    <AppHeroSection />

    <AppTypesSection id="types" />

    <AppReviewsSection id="reviews" />

    <AppPortfolioSection id="portfolio" />
  </div>
</template>



<script setup>


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
