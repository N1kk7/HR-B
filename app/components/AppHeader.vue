<template>
  <div class="app_header" ref="headerRef" style="opacity: 0">
    <div class="container">
      <div class="header_content">
        <a class="tablet_tel" href="tel:+15082154267">+15082154267</a>

        <img class="header_logo" src="/images/logo.webp" alt="logo" />

        <nav class="nav_wrapper">
          <ul class="nav_items">
            <li class="nav_item">
              <a href="#types">Types of work</a>
            </li>
            <li class="nav_item">
              <a href="#reviews"> Client Reviews </a>
            </li>
            <li class="nav_item">
              <a href="#portfolio"> Portfolio </a>
            </li>
          </ul>
        </nav>

        <a class="tel_content" href="tel:+15082154267">+15082154267</a>

        <button class="burger_btn" @click="burgerMenuHandler">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M33.25 9.1875C33.9749 9.1875 34.5625 9.77513 34.5625 10.5C34.5625 11.2249 33.9749 11.8125 33.25 11.8125H8.75C8.02513 11.8125 7.4375 11.2249 7.4375 10.5C7.4375 9.77513 8.02513 9.1875 8.75 9.1875H33.25Z"
              fill="#FFD036"
            />
            <path
              d="M33.25 19.6875C33.9749 19.6875 34.5625 20.2751 34.5625 21C34.5625 21.7249 33.9749 22.3125 33.25 22.3125H22.75C22.0251 22.3125 21.4375 21.7249 21.4375 21C21.4375 20.2751 22.0251 19.6875 22.75 19.6875H33.25Z"
              fill="#FFD036"
            />
            <path
              d="M33.25 30.1875C33.9749 30.1875 34.5625 30.7751 34.5625 31.5C34.5625 32.2249 33.9749 32.8125 33.25 32.8125H8.75C8.02513 32.8125 7.4375 32.2249 7.4375 31.5C7.4375 30.7751 8.02513 30.1875 8.75 30.1875H33.25Z"
              fill="#FFD036"
            />
            <path
              d="M33.25 9.1875C33.9749 9.1875 34.5625 9.77513 34.5625 10.5C34.5625 11.2249 33.9749 11.8125 33.25 11.8125H8.75C8.02513 11.8125 7.4375 11.2249 7.4375 10.5C7.4375 9.77513 8.02513 9.1875 8.75 9.1875H33.25Z"
              stroke="#FFD036"
              stroke-linecap="round"
            />
            <path
              d="M33.25 19.6875C33.9749 19.6875 34.5625 20.2751 34.5625 21C34.5625 21.7249 33.9749 22.3125 33.25 22.3125H22.75C22.0251 22.3125 21.4375 21.7249 21.4375 21C21.4375 20.2751 22.0251 19.6875 22.75 19.6875H33.25Z"
              stroke="#FFD036"
              stroke-linecap="round"
            />
            <path
              d="M33.25 30.1875C33.9749 30.1875 34.5625 30.7751 34.5625 31.5C34.5625 32.2249 33.9749 32.8125 33.25 32.8125H8.75C8.02513 32.8125 7.4375 32.2249 7.4375 31.5C7.4375 30.7751 8.02513 30.1875 8.75 30.1875H33.25Z"
              stroke="#FFD036"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <nav
          class="mobile_menu"
          :class="burgerState ? 'mobile_menu_active' : ''"
        >
          <button @click="burgerMenuHandler" class="close_btn" aria-label="Close menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M5.86683 17.4167L4.5835 16.1333L9.71683 11L4.5835 5.86667L5.86683 4.58333L11.0002 9.71667L16.1335 4.58333L17.4168 5.86667L12.2835 11L17.4168 16.1333L16.1335 17.4167L11.0002 12.2833L5.86683 17.4167Z"
                fill="black"
              />
            </svg>
          </button>
          <ul>
            <li @click="burgerMenuHandler">
              <a href="#types">Types of work</a>
            </li>
            <li @click="burgerMenuHandler">
              <a href="#reviews"> Client Reviews </a>
            </li>
            <li @click="burgerMenuHandler">
              <a href="#portfolio"> Portfolio </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import gsap from "gsap";

import { ref, onMounted } from "vue";

const burgerState = ref(false);

const headerRef = ref(null);

const burgerMenuHandler = () => {
  burgerState.value = !burgerState.value;
  document.body.style.overflow = burgerState.value ? "hidden" : "auto";
};

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: "back.out(1.1)" } });
  const el = headerRef.value;
  if (!el) return;

  (el.style.top = "-100%"), (el.style.opacity = 0);

  tl.to(el, {
    opacity: 1,
    duration: 0.5,
    top: 0,
    delay: 0,
    ease: "power4.out",
  });
});
</script>

<style lang="scss">
.app_header {
  width: 100%;
  height: fit-content;
  margin-top: 40px;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 50;
}

.header_content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header_logo {
  @media screen and (max-width: 768px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: clamp(80px, 20vw, 120px);
  }

  @media screen and (max-width: 480px) {
    display: none;
  }
}

.nav_wrapper {
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.nav_items {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  gap: 60px;

  @media screen and (max-width: 1024px) {
    gap: clamp(15px, 3vw, 55px);
  }
}

.nav_item {
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  color: var(--bg-color);
  transition: all ease 0.3s;
  cursor: pointer;
  padding: 10px;

  @media screen and (min-width: 1024px) {
    &:hover {
      color: var(--btn-hover);
      transition: all ease 0.3s;
    }
  }

  @media screen and (max-width: 1024px) {
    &:active {
      color: var(--btn-hover);
      transition: all ease 0.3s;
    }
  }
}

.tel_content,
.tablet_tel {
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
  font-family: "Roboto", sans-serif;
  color: var(--bg-color);
  padding: 10px;
}

.tel_content {
  @media screen and (max-width: 768px) {
    display: none;
  }
}

.tablet_tel {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
}

.burger_btn {
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
}

.mobile_menu {
  position: fixed;
  background: var(--bg-color);
  padding: 42px 32px 40px;
  transition: all ease 0.3s;
  top: 0;
  right: -100%;

  .close_btn {
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
  }

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;

    li {
      font-size: 1rem;
      color: var(--text-primary);
      font-weight: 400;
      line-height: 150%;
      font-family: "Roboto", sans-serif;
      padding: 10px;
      cursor: pointer;
    }
  }
}

.mobile_menu_active {
  right: 0;
  transition: all ease 0.3s;
}
</style>
