<template>
  <AppSection>
    <template #title>
      <div ref="titleRef">Types of work</div>
    </template>
    <div class="types">
      <div class="type" :ref="setTypeRef">
        <h3>Tile installation</h3>
        <p>floors, kitchen backsplashes, and bathroom walls/floors</p>
        <div class="picture">
          <img src="@/public/images/type1.webp" alt="type1" />
        </div>
      </div>
      <div class="type" :ref="setTypeRef">
        <h3>Kitchen cabinets</h3>
        <p>installation, assembly, and high-quality painting/refinishing</p>
        <div class="picture">
          <img src="@/public/images/type2.webp" alt="type2" />
        </div>
      </div>
      <div class="type" :ref="setTypeRef">
        <h3>Wallpaper installation</h3>
        <p>all types of wall coverings, precise and clean finish</p>
        <div class="picture">
          <img src="@/public/images/type3.webp" alt="type3" />
        </div>
      </div>
    </div>
  </AppSection>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUpdate } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const titleRef = ref(null);
const typeRefs = ref([]);

const setTypeRef = (el) => {
  if (el) {
    typeRefs.value.push(el);
  }
};

onBeforeUpdate(() => {
  typeRefs.value = [];
});

onMounted(async () => {
  const isDesktop = window.innerWidth >= 1024;

  await nextTick();

  gsap.from(titleRef.value, {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
      trigger: titleRef.value,
      start: "top 70%",
      once: true,
    },
  });

  if (isDesktop) {
    gsap.from(typeRefs.value, {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: typeRefs.value[0],
        start: "top 75%",
        once: true,
      },
    });
  } else {
    typeRefs.value.forEach((el) => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          once: true,
        },
      });
    });
  }
});
</script>

<style lang="scss" scoped>
.types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  // @media screen and (max-width: 1200px) {
  //   grid-template-columns: repeat(2, 1fr);
  // }

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.type {
  width: 100%;
}

h3 {
  // 38px
  @include text(clamp(30px, 3vw, 38px), 150%, 300);
  color: var(--text-primary);
  padding-bottom: 20px;
  white-space: nowrap;
  border-bottom: 1px solid var(--divider-color);
  margin-bottom: 20px;
  @media screen and (max-width: 1024px) {
    padding-bottom: 16px;
    margin-bottom: 16px;
  }
  @media screen and (max-width: 768px) {
    @include text(36px, 150%, 300);
  }
  @media screen and (max-width: 480px) {
    @include text(28px, 150%, 300);
  }
  @media screen and (max-width: 375px) {
    @include text(22px, 150%, 300);
  }
}

p {
  @include text(22px, 150%, 300);
  color: var(--text-secondary);
  margin-bottom: 24px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 18px;
  }
  @media screen and (max-width: 768px) {
    @include text(20px, 150%, 300);
    margin-bottom: 16px;
  }
  @media screen and (max-width: 480px) {
    @include text(18px, 150%, 300);
    margin-bottom: 12px;
  }
  @media screen and (max-width: 375px) {
    @include text(16px, 150%, 300);
  }
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
