<template>
  <AppSection>
    <template #title>
      Types of work
    </template>
    <div class="types">
      <div class="type">
        <h3>Tile installation</h3>
        <p>floors, kitchen backsplashes, and bathroom walls/floors</p>
        <div class="picture">
          <img src="@/public/images/type1.webp" alt="type1">
        </div>
      </div>
      <div class="type">
        <h3>Kitchen cabinets</h3>
        <p>installation, assembly, and high-quality painting/refinishing</p>
        <div class="picture">
          <img src="@/public/images/type2.webp" alt="type2">
        </div>
      </div>
      <div class="type">
        <h3>Wallpaper installation</h3>
        <p>all types of wall coverings, precise and clean finish</p>
        <div class="picture">
          <img src="@/public/images/type3.webp" alt="type3">
        </div>
      </div>
    </div>
  </AppSection>
</template>

<style lang="scss" scoped>
.types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.type {
  width: 100%;
}

h3 {
  @include text(38px, 150%, 300);
  color: var(--text-primary);
  padding-bottom: 20px;
  border-bottom: 1px solid var(--divider-color);
  margin-bottom: 20px;
}

p {
  @include text(22px, 150%, 300);
  color: var(--text-secondary);
  margin-bottom: 20px;
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