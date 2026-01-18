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

<script setup></script>

<style scoped lang="scss">
.section {
  margin-bottom: 60px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 56px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 40px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 32px;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: 28px;
  }

  h2 {
    @include text(3rem, 150%, 300);
    color: var(--text-primary);
    margin-bottom: 30px;

    @media screen and (max-width: 1024px) {
      @include text(2.75rem, 150%, 300);
      margin-bottom: 24px;
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 20px;
      @include text(2.5rem, 150%, 300);
    }
    @media screen and (max-width: 480px) {
      margin-bottom: 18px;
      @include text(2.375rem, 150%, 300);
    }
    @media screen and (max-width: 375px) {
      margin-bottom: 16px;
      @include text(2rem, 150%, 300);
    }
  }
}
</style>
