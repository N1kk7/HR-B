<template>
  <div class="container">
    <section class="section">
      <h2>
          <slot name="title" />
      </h2>

      <slot />
    </section>
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .section{
    h2 {
      @include text(48px, 150%, 300);
      color: var(--text-primary);
      margin-bottom: 60px;
    }
  }
</style>