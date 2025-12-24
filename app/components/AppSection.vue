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
  margin-bottom: 70px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 64px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 56px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 52px;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: 48px;
  }

  h2 {
    @include text(48px, 150%, 300);
    color: var(--text-primary);
    margin-bottom: 60px;

    @media screen and (max-width: 1024px) {
      margin-bottom: 48px;
    }
    @media screen and (max-width: 768px) {
      margin-bottom: 44px;
      @include text(44px, 150%, 300);
    }
    @media screen and (max-width: 480px) {
      margin-bottom: 36px;
      @include text(36px, 150%, 300);
    }
    @media screen and (max-width: 420px) {
      margin-bottom: 32px;
      @include text(30px, 150%, 300);
    }
  }
}
</style>
