<template>
  <div class="container">
    <div class="experience" id="industry" ref="experienceRef">
      <div class="experience_info" ref="infoRef">
        <div class="experience_title" ref="titleRef">Industry Experience</div>

        <div class="experience_text" ref="textRef">
          <p>
            The professional experience of HR&B Construction is shaped in part
            through working in collaboration with Arcart Furniture, a company
            operating in the high-end custom furniture and fine woodworking
            sector.
          </p>
          <p>
            This environment has set a strong standard for precision,
            coordination, and attention to detail that we carry into our
            everyday work.
          </p>
          <!-- <p>
            At HR&B Construction, we apply professional standards shaped through
            ongoing work on projects for Arcart Furniture, a company
            specializing in high-end custom furniture and fine woodworking.
          </p>
          <p>
            Our role includes detailed interior preparation and on-site support
            during custom furniture installation — work that requires precision,
            coordination, and consistency.
          </p>
          <p>
            This ongoing experience directly informs the level of quality,
            organization, and attention to detail we bring to every HR&B
            project.
          </p> -->
        </div>

        <div class="button_wrapper" ref="buttonRef">
          <NuxtLink 
            to="https://www.instagram.com/arcartfurniture?igsh=M25ld2Nham5uZWow" 
            class="experience_button"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.3 5.5C14.5 5.5 14.8 5.5 15.7 5.5C16.5 5.5 16.9 5.7 17.2 5.8C17.6 6 17.9 6.1 18.2 6.4C18.5 6.7 18.7 7 18.8 7.4C18.9 7.7 19 8.1 19.1 8.9C19.1 9.8 19.1 10 19.1 12.3C19.1 14.6 19.1 14.8 19.1 15.7C19.1 16.5 18.9 16.9 18.8 17.2C18.6 17.6 18.5 17.9 18.2 18.2C17.9 18.5 17.6 18.7 17.2 18.8C16.9 18.9 16.5 19 15.7 19.1C14.8 19.1 14.6 19.1 12.3 19.1C10 19.1 9.8 19.1 8.9 19.1C8.1 19.1 7.7 18.9 7.4 18.8C7 18.6 6.7 18.5 6.4 18.2C6.1 17.9 5.9 17.6 5.8 17.2C5.7 16.9 5.6 16.5 5.5 15.7C5.5 14.8 5.5 14.6 5.5 12.3C5.5 10 5.5 9.8 5.5 8.9C5.5 8.1 5.7 7.7 5.8 7.4C6 7 6.1 6.7 6.4 6.4C6.7 6.1 7 5.9 7.4 5.8C7.7 5.7 8.1 5.6 8.9 5.5C9.8 5.5 10.1 5.5 12.3 5.5ZM12.3 4C10 4 9.8 4 8.9 4C8 4 7.4 4.2 6.9 4.4C6.4 4.6 5.9 4.9 5.4 5.4C4.9 5.9 4.7 6.3 4.4 6.9C4.2 7.4 4.1 8 4 8.9C4 9.8 4 10.1 4 12.3C4 14.6 4 14.8 4 15.7C4 16.6 4.2 17.2 4.4 17.7C4.6 18.2 4.9 18.7 5.4 19.2C5.9 19.7 6.3 19.9 6.9 20.2C7.4 20.4 8 20.5 8.9 20.6C9.8 20.6 10.1 20.6 12.3 20.6C14.5 20.6 14.8 20.6 15.7 20.6C16.6 20.6 17.2 20.4 17.7 20.2C18.2 20 18.7 19.7 19.2 19.2C19.7 18.7 19.9 18.3 20.2 17.7C20.4 17.2 20.5 16.6 20.6 15.7C20.6 14.8 20.6 14.5 20.6 12.3C20.6 10.1 20.6 9.8 20.6 8.9C20.6 8 20.4 7.4 20.2 6.9C20 6.4 19.7 5.9 19.2 5.4C18.7 4.9 18.3 4.7 17.7 4.4C17.2 4.2 16.6 4.1 15.7 4C14.8 4 14.6 4 12.3 4Z"
                fill="black"
              />
              <path
                d="M12.3 8C9.9 8 8 9.9 8 12.3C8 14.7 9.9 16.6 12.3 16.6C14.7 16.6 16.6 14.7 16.6 12.3C16.6 9.9 14.7 8 12.3 8ZM12.3 15.1C10.8 15.1 9.5 13.9 9.5 12.3C9.5 10.8 10.7 9.5 12.3 9.5C13.8 9.5 15.1 10.7 15.1 12.3C15.1 13.8 13.8 15.1 12.3 15.1Z"
                fill="black"
              />
              <path
                d="M16.7 8.9C17.2523 8.9 17.7 8.45229 17.7 7.9C17.7 7.34772 17.2523 6.9 16.7 6.9C16.1477 6.9 15.7 7.34772 15.7 7.9C15.7 8.45229 16.1477 8.9 16.7 8.9Z"
                fill="black"
              />
            </svg>

            <span> Arcart Furniture </span>
          </NuxtLink>
        </div>
      </div>
      <div class="experience_media">
        <NuxtImg
          ref="leftImage"
          src="/images/screen1.webp"
          alt="screen"
          lazy
          priority
          quality="80"
        />
        <NuxtImg
          ref="rightImage"
          src="/images/screen2.webp"
          alt="screen"
          lazy
          priority
          quality="80"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const experienceRef = ref(null);
const leftImage = ref(null);
const rightImage = ref(null);
const desktopSize = ref(true);
const titleRef = ref(null);
const textRef = ref(null);
const buttonRef = ref(null);

const updateSize = () => {
  desktopSize.value = window.innerWidth >= 768;
};

onMounted(async () => {
  updateSize();
  window.addEventListener("resize", updateSize);

  await nextTick();

  const leftEl = leftImage.value?.$el;
  const rightEl = rightImage.value?.$el;

  if (!leftEl || !rightEl) return;

  if (titleRef.value)
    gsap.from(titleRef.value, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: experienceRef.value,
        start: "top 55%",
        once: true,
      },
    });

  if (textRef.value)
    gsap.from(textRef.value, {
      y: -30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: experienceRef.value,
        start: "top 55%",
        once: true,
      },
    });

  if (buttonRef.value)
    gsap.from(buttonRef.value, {
      y: -20,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      ease: "power3.out",
      scrollTrigger: {
        trigger: experienceRef.value,
        start: "top 55%",
        once: true,
      },
    });

  const leftAnim = desktopSize.value
    ? { y: -100, rotationY: -15, x: 0 }
    : { x: -100, rotationY: -15, y: 0 };

  const rightAnim = desktopSize.value
    ? { y: 100, rotationY: 15, x: 0 }
    : { x: 100, rotationY: 15, y: 0 };

  gsap.from(leftEl, {
    ...leftAnim,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: experienceRef.value,
      start: desktopSize.value ? "top 60%" : "top 30%",
      once: true,
    },
  });

  gsap.from(rightEl, {
    ...rightAnim,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: experienceRef.value,
      start: desktopSize.value ? "top 60%" : "top 30%",
      once: true,
    },
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateSize);
  if (typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.getAll().forEach((st) => st.kill());
  }
});
</script>

<style lang="scss">
@use "@/assets/style/mixins.scss" as mixins;

.experience {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
  position: relative;
  gap: 123px;

  &_title {
    font-family: "Roboto", sans-serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;

    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 2.375rem;
    }

    @media screen and (max-width: 375px) {
      font-size: 2rem;
    }
  }

  &_info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;
    gap: 30px;
    @media screen and (max-width: 1024px) {
      flex: 1;
      gap: 24px;
    }
    @media screen and (max-width: 768px) {
      gap: 20px;
    }
    @media screen and (max-width: 480px) {
      gap: 18px;
    }
    @media screen and (max-width: 375px) {
      gap: 16px;
    }
  }
  &_text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;

    p {
      font-family: "Roboto", sans-serif;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 300;
      line-height: 150%;

      @media screen and (max-width: 1024px) {
        font-size: 1.0625rem;
      }

      @media screen and (max-width: 768px) {
        font-size: 1rem;
      }

      @media screen and (max-width: 480px) {
        font-size: 0.9375rem;
      }

      @media screen and (max-width: 375px) {
        font-size: 0.875rem;
      }
    }
    @media screen and (max-width: 768px) {
      gap: 12px;
    }
    @media screen and (max-width: 480px) {
      gap: 8px;
    }
  }

  .button_wrapper {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      @include mixins.defaultButton;
    }
  }

  &_media {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: max-content;
    height: 100%;
    gap: 20px;
    perspective: 1200px;

    @media screen and (max-width: 1024px) {
      flex: 1;
      height: auto;
    }
    @media screen and (max-width: 768px) {
      margin: 0 auto;
    }
    @media screen and (max-width: 480px) {
      gap: 15px;
    }
  }

  img {
    width: 200px;
    height: 100%;
    transform-style: preserve-3d;
    @media screen and (max-width: 1024px) {
      flex: 1;
      width: 23vw;
      height: auto;
    }

    @media screen and (max-width: 768px) {
      width: 180px;
      height: 380px;
    }

    @media screen and (max-width: 480px) {
      width: 140px;
      height: 300px;
    }
    @media screen and (max-width: 375px) {
      width: 125px;
      height: 250px;
    }
  }

  @media screen and (max-width: 1250px) {
    gap: 80px;
  }

  @media screen and (max-width: 1150px) {
    gap: 20px;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: stretch;
    align-self: stretch;
    gap: 16px;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
  @media screen and (max-width: 480px) {
    gap: 32px;
  }
  @media screen and (max-width: 375px) {
    gap: 28px;
  }
}
</style>
