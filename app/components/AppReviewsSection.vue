<template>
  <AppSection>
    <template #title>
      <div ref="titleRef">Client Reviews</div>
    </template>
    <div class="reviews">
      <div
        class="review"
        v-for="(review, i) in reviews"
        :key="i"
        :ref="setReviewRef"
      >
        <p>{{ review }}</p>
      </div>
    </div>
  </AppSection>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUpdate } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  "Anton did a fantastic job renovating our bathroom. The tiling is perfect, and he finished everything on time. Highly recommend!",
  "We hired Anton to repaint our kitchen and install cabinets. The quality of his work is excellent, very neat and professional.",
  "Our basement renovation was smooth thanks to Anton. He explained every step, kept the place clean, and delivered exactly what we wanted.",
  "I appreciate how reliable Anton is. He came when he said he would, worked quickly, and the results look great.",
  "Anton is very detail-oriented. He fixed small issues without us even asking. We are very happy with the results and will call him again.",
  "We assigned several tasks to be done from scratch — everything was completed quickly, accurately, and with extra attention to details we hadn’t even considered. Excellent service.",
];

const titleRef = ref(null);
const reviewRefs = ref([]);

const setReviewRef = (el) => {
  if (el) {
    reviewRefs.value.push(el);
  }
};

onBeforeUpdate(() => {
  reviewRefs.value = [];
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
      start: "top 80%",
      once: true,
    },
  });

  if (isDesktop) {
    gsap.from(reviewRefs.value, {
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.25,
      ease: "power3.out",
      scrollTrigger: {
        trigger: reviewRefs.value[0],
        start: "top 85%",
        once: true,
      },
    });
  } else {
    reviewRefs.value.forEach((el) => {
      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
      });
    });
  }
});
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
  @include text(20px, 150%, 300);
  color: var(--text-secondary);
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    @include text(18px, 150%, 300);
  }
  @media screen and (max-width: 480px) {
    @include text(16px, 150%, 300);
  }
  @media screen and (max-width: 375) {
    @include text(14px, 150%, 300);
  }
}
</style>
