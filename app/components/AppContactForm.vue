<template>
  <div class="container">
    <div class="contact" ref="contactRef" id="contact">
      <div class="contact_title" ref="titleRef">
        Let’s make your dream space a reality
      </div>
      <div class="contact_description" ref="descRef">
        Tell us about your project, and let’s bring your vision to life.
      </div>

      <div class="contact_form" ref="formRef">
        <input type="text" placeholder="Your name" class="contact_input" v-model="userName"/>
        <input type="text" placeholder="Email or phone" class="contact_input" v-model="email"/>
        <ClientOnly>
          <textarea
            class="contact_textarea"
            v-model="message"
            placeholder="Briefly describe your project"
            :class="message.length >= 35 ? 'textarea_active' : ''"
          >
          </textarea>
        </ClientOnly>

        <button class="contact_button" ref="buttonRef" @click="handleSubmit">Get in touch</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactRef = ref(null);
const titleRef = ref(null);
const descRef = ref(null);
const formRef = ref(null);
const buttonRef = ref(null);
const userName = ref("");
const email = ref("");
const message = ref("");

const sendEmailData = async () => {
  const { error } = await $fetch("/api/send-form", {
    method: "POST",
    body: {
      name: userName.value,
      email: email.value,
      message: message.value,
      // recaptchaToken: token.value,
    },
  });

  if (error.value) {
    alert("Something went wrong.");
  } else {
    alert("Message sent successfully.");
    userName.value = "";
    email.value = "";
    message.value = "";
    // acceptTerms.value = false;
    // token.value = "";
    // isVerified.value = false;
  }
};

const handleSubmit = () => {
  const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (userName.value.trim().length < 1) {
    alert("Please enter valid name.");
    return;
  }

  if (!emailRegEx.test(email.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (message.value.trim().length < 5) {
    alert("Message area should have at least 5 characters.");
    return;
  }

  // if (!isVerified.value) {
  //   alert("Please complete the reCAPTCHA.");
  //   return;
  // }

  // if (!acceptTerms.value) {
  //   alert("You must accept the terms.");
  //   return;
  // }

  sendEmailData();
};

onMounted(async () => {
  await nextTick();

  gsap.from([titleRef.value, descRef.value], {
    y: -50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: contactRef.value,
      start: "top 80%",
      once: true,
    },
  });

  await nextTick();

  const inputs = formRef.value.querySelectorAll(
    "input, contact_textarea, contact_button",
  );

  gsap.from(inputs, {
    y: -30,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.15,
    scrollTrigger: {
      trigger: contactRef.value,
      start: "top 75%",
      once: true,
    },
  });
  if (buttonRef.value) {
    gsap.from(buttonRef.value, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: contactRef.value,
        start: "top 75%",
        once: true,
      },
    });
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/style/mixins.scss" as mixins;

.contact {
  width: 100%;
  height: auto;
  margin-top: 100px;
  margin-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  &_title {
    font-family: "Roboto", sans-serif;
    font-size: 3rem;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
    margin-bottom: 8px;

    @media screen and (max-width: 1024px) {
      font-size: 2.75rem;
      margin-bottom: 4px;
    }

    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media screen and (max-width: 650px) {
      width: 100%;
    }

    @media screen and (max-width: 480px) {
      font-size: 2.375rem;
      line-height: 130%;
    }

    @media screen and (max-width: 375px) {
      font-size: 2rem;
    }
  }

  &_description {
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;

    @media screen and (max-width: 1024px) {
      font-size: 1.0625rem;
    }
    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
    @media screen and (max-width: 650px) {
      width: 100%;
    }

    @media screen and (max-width: 480px) {
      font-size: 0.9375rem;
    }

    @media screen and (max-width: 375px) {
      font-size: 0.75rem;
    }
  }

  &_form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 400px;
    height: auto;
    position: relative;
    gap: 20px;

    button {
      width: 100% !important;
      margin-top: 20px;
      @include mixins.defaultButton;

      @media screen and (max-width: 1024px) {
        margin-top: 12px;
      }
      @media screen and (max-width: 768px) {
        margin-top: 8px;
      }
      @media screen and (max-width: 480px) {
        margin-top: 2px;
      }
    }

    @media screen and (max-width: 1024px) {
      margin-top: 32px;
    }

    @media screen and (max-width: 768px) {
      margin-top: 28px;
    }

    @media screen and (max-width: 480px) {
      margin-top: 24px;
      width: 100%;
      gap: 22px;
    }

    @media screen and (max-width: 375px) {
      margin-top: 20px;
    }
  }

  input,
  .textarea_elem,
  textarea {
    width: 100%;
    height: auto;
    background: transparent;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0;
    padding: 8px;
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    line-height: 150%;
    color: var(--text-primary);

    @media screen and (max-width: 1024px) {
      // font-size: 0.875rem;
    }
    @media screen and (max-width: 768px) {
      // font-size: 0.8125rem;
    }

    @media screen and (max-width: 480px) {
      // font-size: 0.75rem;
      padding: 6px;
    }
  }
  input::placeholder,
  textarea::placeholder {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
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

  textarea {
    resize: none;
    height: 36px;
    transition: all ease 0.3s;
  }

  .contact_form .textarea_active {
    height: 220px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: all ease 0.3s;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 80px;
    margin-bottom: 100px;
  }

  @media screen and (max-width: 768px) {
    margin-top: 75px;
    margin-bottom: 90px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 55px;
    margin-bottom: 65px;
  }

  @media screen and (max-width: 375px) {
    margin-top: 50px;
    margin-bottom: 55px;
  }
}
</style>
