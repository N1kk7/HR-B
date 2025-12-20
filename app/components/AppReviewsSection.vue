<template>
  <AppSection>
    <template #title>
      Client Reviews
    </template>
    <div class="reviews">
      <div class="review" v-for="(review, i) in reviews" :key="i">
        <p>{{ review }}</p>
      </div>
    </div>
  </AppSection>
</template>

<script setup>
const reviews = [
    'Anton did a fantastic job renovating our bathroom. The tiling is perfect, and he finished everything on time. Highly recommend!',
    'We hired Anton to repaint our kitchen and install cabinets. The quality of his work is excellent, very neat and professional.',
    'Our basement renovation was smooth thanks to Anton. He explained every step, kept the place clean, and delivered exactly what we wanted.',
    'I appreciate how reliable Anton is. He came when he said he would, worked quickly, and the results look great.',
    'Anton is very detail-oriented. He fixed small issues without us even asking. We are very happy with the results and will call him again.',
    'We assigned several tasks to be done from scratch — everything was completed quickly, accurately, and with extra attention to details we hadn’t even considered. Excellent service.'
]
</script>

<style lang="scss" scoped>
.reviews {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.review {
  width: 100%;
  display: flex;
  padding: 32px 19px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border: 1px solid var(--divider-color);
}

p {
  @include text(22px, 150%, 300);
  color: var(--text-secondary);
  margin-bottom: 20px;
}
</style>