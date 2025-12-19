<template>
  <AppSection>
    <template #title>
      Portfolio
    </template>
    <div class="portfolio">
      <div class="item">
        <div class="picture">
          <img src="@/public/images/type1.webp" alt="type1">
        </div>
      </div>
      <div class="item">
        <div class="picture">
          <img src="@/public/images/type2.webp" alt="type2">
        </div>
      </div>
      <div class="item">
        <div class="picture">
          <img src="@/public/images/type3.webp" alt="type3">
        </div>
      </div>
    </div>
  </AppSection>
</template>

<style lang="scss" scoped>
.portfolio {
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

.item {
  width: 100%;
}

.picture {
  @include aspect-ratio-modern(392, 300);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>