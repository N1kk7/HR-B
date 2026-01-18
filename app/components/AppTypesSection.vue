<template>
  <AppSection>
    <template #title>
      <div ref="titleRef">Types of work</div>
    </template>
    <div class="types">
      <div class="type" :ref="setTypeRef">
        <div class="type_head">
          <h3>Tile installation</h3>
          <p>floors, kitchen backsplashes, and bathroom walls/floors</p>
        </div>

        <div class="picture">
          <img src="@/public/images/type1.webp" alt="type1" />
        </div>
      </div>
      <div class="type" :ref="setTypeRef">
        <div class="type_head">
          <h3>Kitchen cabinets</h3>
          <p>installation, assembly, and high-quality painting/refinishing</p>
        </div>

        <div class="picture">
          <img src="@/public/images/type2.webp" alt="type2" />
        </div>
      </div>
      <div class="type" :ref="setTypeRef">
        <div class="type_head">
          <h3>Wallpaper installation</h3>
          <p>all types of wall coverings, precise and clean finish</p>
        </div>

        <div class="picture">
          <img src="@/public/images/type3.webp" alt="type3" />
        </div>
      </div>
    </div>
  </AppSection>
</template>

<script setup>
import { ref, onMounted, nextTick, onBeforeUpdate } from "vue";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

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
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);
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
// .types {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   position: relative;
//   gap: 20px;

//   @media screen and (max-width: 1024px) {
//     grid-auto-flow: column;
//     grid-auto-columns: 70%;
//   }

//   @media screen and (max-width: 480px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// }

// .type {
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: space-between;
//   gap: 20px;

//   width: 100%;
//   height: auto;

//   &_head {
//     flex: 1;
//   }
  
// }
// .types {
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 20px;

//   @media (max-width: 1024px) {
//     display: flex;
//     gap: 20px;

//     overflow-x: auto;
//     scroll-snap-type: x mandatory;
//     scroll-behavior: smooth;

//     padding-right: calc((100% - 20px) / 2.3);
//   }
// }

// .type {
//   display: flex;
//   flex-direction: column;
//   gap: 20px;

//   @media (max-width: 1024px) {
//     flex: 0 0 calc((100% - 20px) / 2.3);
//     scroll-snap-align: start;
//     scroll-snap-stop: always;
//   }
// }

.types {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    display: flex;
    gap: 20px;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scroll-padding-inline: 0;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (max-width: 480px) {
    overflow-x: unset;
    scroll-snap-type: unset;
    scroll-behavior: unset;
    scroll-padding-inline: unset;
    scrollbar-width: unset;
    -ms-overflow-style: unset;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
  }

  @media screen and (max-width: 375px) {
    gap: 12px;
  }
}


.type {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1024px) {
    flex: 0 0 calc((100% - 20px) / 2.3);
    scroll-snap-align: start;
    gap: 16px;

    &_head, .picture {
      flex: 1;
    }

  }
  @media screen and (max-width: 768px) {
    flex: 0 0 calc((100% - 20px) / 1.5);
    gap: 12px;
    
  }

  @media screen and (max-width: 480px) {
    width: 100%;

    img {
      width: 100%;
      height: 336px;
    }

  }

  @media screen and (max-width: 375px) {
    img {
      height: 300px;
    }
  }

  
}




h3 {
  @include text(2.375rem, 150%, 300);
  color: var(--text-primary);
  white-space: nowrap;
  margin-bottom: 8px;
  @media screen and (max-width: 1024px) {
    padding-bottom: 8px;
    margin-bottom: 0;
  }
  @media screen and (max-width: 768px) {
    @include text(1.75rem, 150%, 300);
  }
  @media screen and (max-width: 480px) {
    @include text(1.75rem, 150%, 300);
  }
  @media screen and (max-width: 375px) {
    @include text(1.5rem, 150%, 300);
    padding-bottom: 4px;
  }
}

p {
  @include text(1.375rem, 150%, 300);
  color: var(--text-secondary);
  // margin-bottom: 24px;
  // @media screen and (max-width: 1024px) {
  //   margin-bottom: 18px;
  // }
  @media screen and (max-width: 768px) {
    @include text(1.0625rem, 150%, 300);
    margin-bottom: 16px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 0;
  }
  @media screen and (max-width: 375px) {
    @include text(0.9375rem, 150%, 300);
  }
}

.picture {
  @include aspect-ratio-modern(392, 300);
  flex: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
