<template>
  <div class="portfolio">
    <div class="container">
      <div class="portfolio_section">
        <ClientOnly>
          <NuxtLink to="/" class="mobile_logo">
            <NuxtImg 
              src="/images/logo.webp"
              width="100"
              height="50"
              priority
              alt="logo"

            />
          </NuxtLink>
          <h1>Portfolio</h1>

          <div
            class="portfolio_items"
            v-for="(item, index) in portfolioData"
            :key="item.id"
          >
            <h2>{{ item.titleSection }}</h2>

            <div class="items_wrapper" :ref="(el) => setSectionRef(el, index)">
              <NuxtImg
                v-for="(img, i) in visibleImages(item)"
                :key="i"
                quality="80"
                alt="item"
                width="500"
                height="500"
                priority
                :src="img"
              />
            </div>

            <button
              v-if="hasMore(item) || item.expanded"
              @click="toggleHandler(item, index)"
              class="portfolio_btn"
            >
              {{ item.expanded ? "Show less" : "Show more" }}
            </button>
          </div>
        </ClientOnly>
      </div>
    </div>

    <AppContactForm />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from "vue";
import gsap from "gsap";

const portfolioData = ref([
  {
    id: 1,
    titleSection: "Wallpaper installation",
    pictureSection: [
      "/images/wallpaper1.webp",
      "/images/wallpaper2.webp",
      "/images/wallpaper3.webp",
      "/images/wallpaper4.webp",
      "/images/wallpaper5.webp",
      "/images/wallpaper6.webp",
    ],
    visibleRows: 1,
    expanded: false
  },
  {
    id: 2,
    titleSection: "Kitchen cabinets",
    pictureSection: [
      "/images/kitchen1.webp",
      "/images/kitchen2.webp",
      "/images/kitchen3.webp",
    ],
    visibleRows: 1,
    expanded: false
  },
  {
    id: 3,
    titleSection: "Tile installation",
    pictureSection: [
      "/images/tile1.webp",
      "/images/tile2.webp",
      "/images/tile3.webp",
    ],
    visibleRows: 1,
    expanded: false
  },
]);

const isDesktop = ref(true);

const cardsPerRow = computed(() => (isDesktop.value ? 3 : 2));

const sectionRefs = ref([]);

const setSectionRef = (el, index) => {
  if (el) sectionRefs.value[index] = el;
};

const visibleImages = (category) => {
  return category.pictureSection.slice(
    0,
    category.visibleRows * cardsPerRow.value,
  );
};

const hasMore = (category) => {
  return (
    category.visibleRows * cardsPerRow.value < category.pictureSection.length
  );
};
const toggleHandler = async (item, index) => {
  const wrapper = sectionRefs.value[index];
  if (!wrapper) return;

  if (!item.expanded) {
    const prevCount = item.visibleRows * cardsPerRow.value;

    item.visibleRows++;
    item.expanded = true;

    await nextTick();

    const cards = Array.from(wrapper.querySelectorAll("img"));
    const newCards = cards.slice(prevCount);

    gsap.fromTo(
      newCards,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.65,
        ease: "power3.out",
        stagger: 0.15,
      }
    );

  } else {
    const visibleCount = cardsPerRow.value;

    const cards = Array.from(wrapper.querySelectorAll("img"));
    const toHide = cards.slice(visibleCount);

    gsap.to(toHide, {
      y: -30,
      opacity: 0,
      duration: 0.45,
      ease: "power2.in",
      stagger: 0.08,
      onComplete: () => {
        item.visibleRows = 1;
        item.expanded = false;
      },
    });
  }
};

const updateSize = () => {
  isDesktop.value = window.innerWidth >= 1024;
};

onMounted(async () => {
  updateSize();
  window.addEventListener("resize", updateSize);

  await nextTick();

  const sectionEls = sectionRefs.value.filter(Boolean);

  gsap.from(sectionEls, {
    y: -40,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
    stagger: 0.2,
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSize);
});
</script>

<style lang="scss" scoped>
@use "@/assets/style/mixins.scss" as mixins;

.portfolio {
  width: 100%;
  height: auto;
  position: relative;

  .mobile_logo {
    display: none;

    @media screen and (max-width: 475px) {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 20px;

    }
    @media screen and (max-width: 375px) {
      margin-top: 18px;
    }
  }
  

  h1 {
    @include mixins.text(3rem, 150%, 300);
    margin: 40px 0 30px;
    color: var(--text-primary);

    @media screen and (max-width: 1024px) {
      font-size: 2.75rem;
      margin: 40px 0 24px;
    }

    @media screen and (max-width: 768px) {
      margin: 40px 0 22px;
    }

    @media screen and (max-width: 480px) {
      @include mixins.text(2.375rem, 130%, 300);
      margin: 32px 0 20px;
    }

    @media screen and (max-width: 375px) {
      @include mixins.text(2rem, 130%, 300);
      margin: 28px 0 16px;
    }
  }

  h2 {
    @include mixins.text(2.375rem, 150%, 300);
    margin-bottom: 20px;
    color: var(--text-primary);

    @media screen and (max-width: 1024px) {
      @include mixins.text(1.875rem, 150%, 300);
      margin-bottom: 18px;
    }

    @media screen and (max-width: 768px) {
      @include mixins.text(1.75rem, 150%, 300);
      margin-bottom: 16px;
    }

    @media screen and (max-width: 480px) {
      @include mixins.text(1.75rem, 150%, 300);
      margin-bottom: 14px;
    }

    @media screen and (max-width: 375px) {
      @include mixins.text(1.5rem, 150%, 300);
      margin-bottom: 12px;
    }
  }
}

.portfolio_section {
  min-height: 100dvh;
}

.portfolio_items {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 40px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 32px;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 28px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 24px;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: 20px;
  }
}

.items_wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    gap: 16px;
  }
  @media screen and (max-width: 375px) {
    gap: 14px;
  }
}

.portfolio_btn {
  @include mixins.defaultButton;
  margin: 30px auto 0;
  @media screen and (max-width: 1024px) {
    margin: 28px auto 0;
  }
  @media screen and (max-width: 768px) {
    margin: 24px auto 0;
  }
  @media screen and (max-width: 480px) {
    margin: 22px auto 0;
  }
  @media screen and (max-width: 375px) {
    margin: 20px auto 0;
  }

  
}
</style>
