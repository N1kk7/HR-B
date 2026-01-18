<template>
  <AppSection>
    <template #title>
      <div ref="titleRef" id="about">About HR&B</div>
    </template>

    <div class="about" ref="aboutRef">
      <div class="about_info" ref="infoRef">
        <div class="location" ref="locationRef">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.3283 14.4353 9.65339 14.3097 9.95671C14.1841 10.26 13.9999 10.5356 13.7678 10.7678C13.5356 10.9999 13.26 11.1841 12.9567 11.3097C12.6534 11.4353 12.3283 11.5 12 11.5ZM12 2C10.1435 2 8.36301 2.7375 7.05025 4.05025C5.7375 5.36301 5 7.14348 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 7.14348 18.2625 5.36301 16.9497 4.05025C15.637 2.7375 13.8565 2 12 2Z"
              fill="black"
            />
          </svg>
          <span> Massachusetts · Licensed & Insured </span>
        </div>
        <div class="text_wrapper" ref="textRef">
          <p>
            HR&B is a Massachusetts-based construction and woodworking company
            specializing in interior renovations, finish carpentry, and custom
            woodwork. We focus on creating well built, thoughtfully finished
            spaces where structure, craftsmanship, and detail work together.
          </p>
          <p>
            Our work goes beyond building individual elements. We prepare and
            refine spaces so that every component fits properly and functions as
            intended. From framing, leveling, and finish preparation to final
            installation, we bring projects to a complete and cohesive result.
            We maintain a hands on approach throughout the process, ensuring
            consistency, precision, and a high standard of execution.
          </p>
          <p>
            Whether collaborating with other craftsmen or managing a project
            from start to finish, we prioritise coordination, clear
            communication, and long-term quality.
          </p>
        </div>
        <div class="list_wrapper" ref="listRef">
          <div class="item">
            <div class="item_title">Areas of Expertise</div>
            <ul class="item_list">
              <li>Interior renovations & finish work</li>
              <li>Space preparation for custom cabinetry and built-ins</li>
            </ul>
          </div>
          <div class="item">
            <div class="item_title">Our Approach</div>
            <ul class="item_list">
              <li>Thoughtful planning and clear communication</li>
              <li>Precise, hands-on craftsmanship</li>
            </ul>
          </div>
        </div>
      </div>

      <div class="about_media" ref="mediaRef">
        <NuxtImg
          src="/images/about.webp"
          quality="80"
          priority
          lazy
          alt="about"
          sizes="(max-width: 480px) 480px, (max-width: 1024px) 1024px, 1200px"
        />
      </div>
    </div>
  </AppSection>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const titleRef = ref(null);
const aboutRef = ref(null);
const infoRef = ref(null);
const textRef = ref(null);
const listRef = ref(null);
const mediaRef = ref(null);

const isDesktop = ref(true);
const updateSize = () => (isDesktop.value = window.innerWidth >= 1024);

onMounted(() => {
  updateSize();
  window.addEventListener("resize", updateSize);

  nextTick(() => {
    if (!aboutRef.value) return;
    gsap.from([titleRef.value, infoRef.value], {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: aboutRef.value,
        start: "top 80%",
      },
    });

    gsap.from([...textRef.value.children, ...listRef.value.children], {
      opacity: 0,
      x: -30,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.15,
      scrollTrigger: {
        trigger: aboutRef.value,
        start: "top 75%",
      },
    });

    gsap.from(mediaRef.value, {
      opacity: 0,
      x: 100,
      y: isDesktop.value ? 0 : 5,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: aboutRef.value,
        start: isDesktop.value ? "top 70%" : "top 25%",
      },
    });
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", updateSize);
  ScrollTrigger.getAll().forEach((st) => st.kill());
});
</script>

<style lang="scss" scoped>
.about {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;

  h2 {
    margin-bottom: 20px;
  }

  .location {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;

    svg {
      width: 24px;
      height: 24px;
    }

    span {
      font-family: "Roboto", sans-serif;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 150%;
      @media screen and (max-width: 1024px) {
        font-size: 0.875rem;
      }
      @media screen and (max-width: 768px) {
        font-size: 0.8125rem;
      }
      @media screen and (max-width: 480px) {
        font-size: 0.75rem;
      }
    }
  }

  &_info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;

    @media screen and (max-width: 1024px) {
      flex: 1;
      gap: 16px;
    }
    @media screen and (max-width: 768px) {
      gap: 14px;
    }
    @media screen and (max-width: 375px) {
      gap: 12px;
    }
  }

  &_media {
    width: 100%;
    height: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      @media screen and (max-width: 768px) {
        height: 490px;
      }

      @media screen and (max-width: 480px) {
        width: 100%;
        height: 490px;
      }
      @media screen and (max-width: 375px) {
        width: 100%;
        height: 400px;
      }
    }

    @media screen and (max-width: 1024px) {
      flex: 1;
      height: -webkit-fill-available;
    }
    @media screen and (max-width: 768px) {
      height: fit-content;
    }
  }

  .text_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    width: 100%;
    height: fit-content;

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
    @media screen and (max-width: 1024px) {
      gap: 14px;
    }
    @media screen and (max-width: 768px) {
      gap: 12px;
    }
    @media screen and (max-width: 480px) {
      gap: 8px;
    }
    @media screen and (max-width: 375px) {
      gap: 4px;
    }
  }

  .list_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 12px;
    position: relative;
    width: 100%;
    height: auto;
    gap: 20px;

    @media screen and (max-width: 1024px) {
      margin-top: 8px;
    }
    @media screen and (max-width: 768px) {
      margin-top: 10px;
      justify-content: flex-start;
    }
    @media screen and (max-width: 480px) {
      margin-top: 8px;
    }
  }

  .item {
    flex: 1;
    width: 100%;
    height: auto;

    &_title {
      font-family: "Roboto", sans-serif;
      font-size: 1.25rem;
      font-style: normal;
      line-height: 150%;
      font-weight: 400;
      color: var(--text-primary);
      @media screen and (max-width: 1024px) {
        font-size: 1.125rem;
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

    &_list {
      margin-top: 16px;
      list-style-type: disc;
      padding-left: 15px;
      height: auto;
      width: 100%;

      li {
        font-family: "Roboto", sans-serif;
        font-size: 1.25rem;
        font-style: normal;
        line-height: 150%;
        font-weight: 300;
        color: var(--text-secondary);

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
      @media screen and (max-width: 1024px) {
        margin-top: 14px;
      }
      @media screen and (max-width: 768px) {
        margin-top: 12px;
        width: 100%;
      }
    }
    @media screen and (max-width: 768px) {
      flex: unset;
      width: 40vw;
    }
  }

  @media screen and (max-width: 1024px) {
    & {
      display: flex;
      justify-content: space-between;
      position: relative;
      align-items: center;
      gap: 16px;
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
