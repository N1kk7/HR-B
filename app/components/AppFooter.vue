<template>
  <div class="footer" ref="footerRef">
    <div class="container">
      <div class="footer_wrapper">
        <img
          src="/images/logo.webp"
          alt="logo"
          ref="leftRef"
          width="120"
          height="40"
        />

        <div class="footer_contacts" ref="rightRef">
          <span class="author"> Anton Romanov </span>
          <a href="tel:+15082154267 ">+15082154267</a>

          <span> HR.B.Construction24@gmail.com </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const footerRef = ref(null);
const leftRef = ref(null);
const rightRef = ref(null);

onMounted(() => {
  if (leftRef.value) {
    gsap.from(leftRef.value, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.value,
        start: "top 90%",
        once: true,
      },
    });
  }

  if (rightRef.value) {
    gsap.from(rightRef.value, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.value,
        start: "top 90%",
        once: true,
      },
    });
  }
});
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
}

.footer_wrapper {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 40px;

  @media screen and (max-width: 480px) {
    & {
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 40px;
    }
  }
}

.footer_contacts {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;

  span,
  a {
    color: var(--text-secondary);
    font-size: 20px;
    font-weight: 300;
    line-height: 150%;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }

    @media screen and (max-width: 480px) {
      font-size: clamp(16px, 5vw, 18px);
    }
  }

  .author {
    margin-bottom: 10px;
    font-weight: 400;
  }

  @media screen and (max-width: 480px) {
    align-items: flex-start;
  }
}
</style>
