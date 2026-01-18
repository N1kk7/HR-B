<template>
  <AppSection>
    <template #title>
      <div ref="titleRef">Portfolio</div>
    </template>
    <div class="portfolio">
  

      <div class="card_wrapper" ref="containerRef">
        <NuxtImg
          v-for="(item, i) in finalImgArray"
          quality="80"
          alt="item"
          width="500"
          height="500"
          priority
          :src="item.picture"
          :key="i"
          
        />
      </div>

      <div class="portfolio_btn">
        <NuxtLink to="/portfolio"> View all </NuxtLink>
      </div>
    </div>
  </AppSection>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titleRef = ref(null);

const desktopSize = ref(false);

const containerRef = ref(null);
const slides = [
  {
    id: 0,
    picture: "/images/carusel1.webp",
    width: 600,
    height: 400,
  },
  {
    id: 1,
    picture: "/images/carusel2.webp",
    width: 600,
    height: 400,
  },
  {
    id: 2,
    picture: "/images/carusel3.webp",
    width: 600,
    height: 400,
  },
  {
    id: 3,
    picture: "/images/carusel4.webp",
    width: 600,
    height: 400,
  },
  {
    id: 4,
    picture: "/images/carusel5.webp",
    width: 600,
    height: 400,
  },
  {
    id: 5,
    picture: "/images/carusel6.webp",
    width: 600,
    height: 400,
  },
];

const finalImgArray = computed(() =>
  desktopSize.value
    ? slides.slice(0, 3)
    : slides.slice(0, 2)
);


watch(desktopSize, (newValue) => {
  finalImgArray.value = newValue
    ? slides.slice(0, 3)
    : slides.slice(0, 2);
});

 const updateSize = () => {
    desktopSize.value = window.innerWidth >= 768;
  };

onMounted(async () => {
  desktopSize.value = window.innerWidth >= 768
 

  window.addEventListener("resize", updateSize);

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

  gsap.from(containerRef.value, {
    y: 80,
    opacity: 0,
    duration: 0.8,
    // stagger: 0.25,
    scrollTrigger: {
      trigger: containerRef.value,
      start: "top 80%",
      once: true,
    },
  });
});

onBeforeUnmount(() => {
 window.removeEventListener("resize", updateSize);
})
</script>



<style lang="scss" scoped>
@use "@/assets/style/mixins.scss" as mixins;
.item {
  width: 100%;
}

.picture {
  @include aspect-ratio-modern(392, 523);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.card_wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  position: relative;
  gap: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 480px) {
      aspect-ratio: 1 / 1;
    }
  }

  @media screen and (max-width: 1024px) {
    gap: 15px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

// swiper-slide {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// swiper-container::part(button-prev),
// swiper-container::part(button-next) {
//   width: 48px;
//   height: 48px;
//   background: rgba(255, 255, 255, 0.5);
//   color: transparent;

//   background-image: url("/images/arrow.svg");
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: 20px 23px;
// }

// swiper-container::part(button-prev) {
//   left: 0;
// }

// swiper-container::part(button-next) {
//   right: 0;
//   transform: rotate(180deg);
// }

// swiper-container::part(button-prev) svg,
// swiper-container::part(button-next) svg {
//   display: none;
// }

.portfolio_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  a {
    @include mixins.defaultButton;
  }
}
</style>



    // <!-- <ClientOnly>
    //     <swiper-container navigation="true" ref="containerRef">
    //       <swiper-slide
    //         v-for="(slide, id) in slides"
    //         :key="id"
    //         style="background-color: rgb(32, 233, 70); color: white"
    //       >
    //         <div class="item">
    //           <div class="picture">
    //              <NuxtImg
    //                 v-if="desktopSize"
    //                 :src="slide.picture"
    //                 :width="slide.width"
    //                 :height="slide.height"
    //                 format="webp"
    //                 quality="80"
    //                 priority
    //                 :alt="slide.id"
    //               />
    //              <NuxtImg
    //                 v-else
    //                 :src="slide.picture"
    //                 :alt="slide.id"
    //                 :width="slide.width"
    //                 :height="slide.height"
    //                 format="webp"
    //                 quality="75"
    //                 lazy
    //               />
    //           </div>
    //         </div>
    //       </swiper-slide>
    //     </swiper-container>
    //   </ClientOnly> -->