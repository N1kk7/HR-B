<template>
  <div
    class="app_header"
    ref="headerRef"
    style="opacity: 0"
    :class="currentPath ? 'white_bg' : ''"
  >
    <div class="container">
      <div class="header_content">
        <a class="tablet_tel" href="tel:+15082154267">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="var(--btn-color)"
              stroke="none"
            >
              <path
                d="M757 5109 c-102 -24 -353 -196 -499 -342 -109 -109 -190 -269 -231
          -457 -31 -140 -30 -434 2 -613 208 -1182 1283 -2543 2576 -3264 560 -312 1160
          -473 1582 -424 336 39 524 150 738 436 185 247 220 351 180 524 -24 99 -58
          151 -179 269 -192 186 -377 334 -611 488 -255 167 -320 194 -475 194 -95 0
          -176 -18 -248 -54 -67 -34 -208 -145 -336 -266 -122 -115 -168 -141 -268 -148
          -114 -8 -169 18 -393 187 -352 266 -700 613 -957 956 -169 226 -194 279 -186
          393 7 100 33 146 148 268 198 211 286 341 311 463 17 82 7 243 -20 313 -27 71
          -156 277 -281 450 -180 248 -448 541 -537 587 -91 46 -221 62 -316 40z"
              />
            </g>
          </svg>

          <span> +15082154267 </span>
        </a>

        <img
          class="header_logo"
          src="/images/logo_white.webp"
          alt="logo"
          width="120"
          height="40"
        />

        <nav class="nav_wrapper">
          <ul class="nav_items">
            <li class="nav_item">
              <NuxtLink to="/#types">Types of work</NuxtLink>
              <!-- <a href="#types">Types of work</a> -->
            </li>
            <li class="nav_item">
              <NuxtLink to="/#about">About HR&B</NuxtLink>
              <!-- <a href="#about">About HR&B</a> -->
            </li>
            <li class="nav_item">
              <NuxtLink to="/#reviews">Client Reviews</NuxtLink>
              <!-- <a href="#reviews"> Client Reviews </a> -->
            </li>
            <li class="nav_item">
              <NuxtLink to="/#portfolio">Portfolio</NuxtLink>
              <!-- <a href="#portfolio"> Portfolio </a> -->
            </li>
            <li class="nav_item">
              <NuxtLink to="/#industry">Industry Expertise</NuxtLink>
            </li>
          </ul>
        </nav>

        <a class="tel_content" href="tel:+15082154267">
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 512.000000 512.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
              fill="var(--btn-color)"
              stroke="none"
            >
              <path
                d="M757 5109 c-102 -24 -353 -196 -499 -342 -109 -109 -190 -269 -231
          -457 -31 -140 -30 -434 2 -613 208 -1182 1283 -2543 2576 -3264 560 -312 1160
          -473 1582 -424 336 39 524 150 738 436 185 247 220 351 180 524 -24 99 -58
          151 -179 269 -192 186 -377 334 -611 488 -255 167 -320 194 -475 194 -95 0
          -176 -18 -248 -54 -67 -34 -208 -145 -336 -266 -122 -115 -168 -141 -268 -148
          -114 -8 -169 18 -393 187 -352 266 -700 613 -957 956 -169 226 -194 279 -186
          393 7 100 33 146 148 268 198 211 286 341 311 463 17 82 7 243 -20 313 -27 71
          -156 277 -281 450 -180 248 -448 541 -537 587 -91 46 -221 62 -316 40z"
              />
            </g>
          </svg>

          <span> +15082154267 </span>
        </a>

        <button
          class="burger_btn"
          @click="burgerMenuHandler"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
          >
            <path
              d="M33.25 9.1875C33.9749 9.1875 34.5625 9.77513 34.5625 10.5C34.5625 11.2249 33.9749 11.8125 33.25 11.8125H8.75C8.02513 11.8125 7.4375 11.2249 7.4375 10.5C7.4375 9.77513 8.02513 9.1875 8.75 9.1875H33.25Z"
              fill="none"
            />
            <path
              d="M33.25 19.6875C33.9749 19.6875 34.5625 20.2751 34.5625 21C34.5625 21.7249 33.9749 22.3125 33.25 22.3125H22.75C22.0251 22.3125 21.4375 21.7249 21.4375 21C21.4375 20.2751 22.0251 19.6875 22.75 19.6875H33.25Z"
              fill="none"
            />
            <path
              d="M33.25 30.1875C33.9749 30.1875 34.5625 30.7751 34.5625 31.5C34.5625 32.2249 33.9749 32.8125 33.25 32.8125H8.75C8.02513 32.8125 7.4375 32.2249 7.4375 31.5C7.4375 30.7751 8.02513 30.1875 8.75 30.1875H33.25Z"
              fill="none"
            />
            <path
              d="M33.25 9.1875C33.9749 9.1875 34.5625 9.77513 34.5625 10.5C34.5625 11.2249 33.9749 11.8125 33.25 11.8125H8.75C8.02513 11.8125 7.4375 11.2249 7.4375 10.5C7.4375 9.77513 8.02513 9.1875 8.75 9.1875H33.25Z"
              stroke="none"
              stroke-linecap="round"
            />
            <path
              d="M33.25 19.6875C33.9749 19.6875 34.5625 20.2751 34.5625 21C34.5625 21.7249 33.9749 22.3125 33.25 22.3125H22.75C22.0251 22.3125 21.4375 21.7249 21.4375 21C21.4375 20.2751 22.0251 19.6875 22.75 19.6875H33.25Z"
              stroke="none"
              stroke-linecap="round"
            />
            <path
              d="M33.25 30.1875C33.9749 30.1875 34.5625 30.7751 34.5625 31.5C34.5625 32.2249 33.9749 32.8125 33.25 32.8125H8.75C8.02513 32.8125 7.4375 32.2249 7.4375 31.5C7.4375 30.7751 8.02513 30.1875 8.75 30.1875H33.25Z"
              stroke="none"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <nav
          class="mobile_menu"
          :class="burgerState ? 'mobile_menu_active' : ''"
        >
          <button
            @click="burgerMenuHandler"
            class="close_btn"
            aria-label="Close menu"
          >
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
              <NuxtLink to="/#types">Types of work</NuxtLink>
              <!-- <a href="#types">Types of work</a> -->
            </li>
            <li @click="burgerMenuHandler">
              <NuxtLink to="/#about">About HR&B</NuxtLink>
              <!-- <a href="#about">About HR&k</a> -->
            </li>
            <li @click="burgerMenuHandler">
              <NuxtLink to="/#reviews">Client Reviews</NuxtLink>
              <!-- <a href="#reviews"> Client Reviews </a> -->
            </li>
            <li @click="burgerMenuHandler">
              <NuxtLink to="/#portfolio"> Portfolio </NuxtLink>
              <!-- <a href="#portfolio"> Portfolio </a> -->
            </li>
            <li @click="burgerMenuHandler">
              <NuxtLink to="/#industry"> Industry Expertise </NuxtLink>
              <!-- <a href="#industry"> Industry Expertise </a> -->
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
// import { gsap } from "gsap";

import { ref, onMounted, watch, computed } from "vue";
import { useRoute } from "vue-router";
import gsap from "gsap";


const burgerState = ref(false);

const headerRef = ref(null);

const route = useRoute();

const currentPath = computed(() => route.path === "/portfolio");

const burgerMenuHandler = () => {
  burgerState.value = !burgerState.value;
  document.body.style.overflow = burgerState.value ? "hidden" : "auto";
};

onMounted(async () => {
  // const { gsap } = await import("gsap");
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
  const el = headerRef.value;
  if (!el) return;

  ((el.style.top = "-100%"), (el.style.opacity = 0));

  tl.to(el, {
    opacity: 1,
    duration: 0.7,
    top: 0,
    delay: 0.7,
    ease: "power4.out",
  });
});
</script>

<style lang="scss">
.white_bg {
  position: relative;
  .nav_item,
  .tel_content,
  .tablet_tel {
    color: var(--text-primary);
  }

  .tablet_tel {
    border: 1px solid black;
  }

  .header_logo {
    content: url("/images/logo.webp");
  }

  .burger_btn svg {
    stroke: black;
    fill: black;
  }
}
// .app_header {
//   width: 100%;
//   height: fit-content;
//   margin-top: 40px;
//   position: absolute;
//   top: 0;
//   left: 0;
//   background: transparent;
//   z-index: 50;
// }

// .header_content {
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// }

// .header_logo {
//   @media screen and (max-width: 768px) {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     width: clamp(80px, 20vw, 120px);
//   }

//   @media screen and (max-width: 480px) {
//     display: none;
//   }
// }

// .nav_wrapper {
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// }

// .nav_items {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex: 1;
//   gap: 60px;

//   @media screen and (max-width: 1024px) {
//     gap: clamp(15px, 3vw, 55px);
//   }
// }

// .nav_item {
//   font-family: "Roboto", sans-serif;
//   font-size: 20px;
//   font-weight: 400;
//   line-height: 150%;
//   color: var(--bg-color);
//   transition: all ease 0.3s;
//   cursor: pointer;
//   padding: 10px;

//   @media screen and (min-width: 1024px) {
//     &:hover {
//       color: var(--btn-hover);
//       transition: all ease 0.3s;
//     }
//   }

//   @media screen and (max-width: 1024px) {
//     &:active {
//       color: var(--btn-hover);
//       transition: all ease 0.3s;
//     }
//   }
// }

// .tel_content,
// .tablet_tel {
//   font-size: 20px;
//   font-weight: 500;
//   line-height: 150%;
//   font-family: "Roboto", sans-serif;
//   color: var(--bg-color);
//   padding: 10px;
// }

// .tel_content {
//   @media screen and (max-width: 768px) {
//     display: none;
//   }
// }

// .tablet_tel {
//   display: none;
//   @media screen and (max-width: 768px) {
//     display: block;
//   }
// }

// .burger_btn {
//   display: none;
//   @media screen and (max-width: 768px) {
//     display: block;
//   }
// }

// .mobile_menu {
//   position: fixed;
//   background: var(--bg-color);
//   padding: 42px 32px 40px;
//   transition: all ease 0.3s;
//   top: 0;
//   right: -100%;

//   .close_btn {
//     position: absolute;
//     top: 12px;
//     right: 12px;
//     cursor: pointer;
//   }

//   ul {
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: flex-start;
//     gap: 24px;

//     li {
//       font-size: 1rem;
//       color: var(--text-primary);
//       font-weight: 400;
//       line-height: 150%;
//       font-family: "Roboto", sans-serif;
//       padding: 10px;
//       cursor: pointer;
//     }
//   }
// }

// .mobile_menu_active {
//   right: 0;
//   transition: all ease 0.3s;
// }
</style>
