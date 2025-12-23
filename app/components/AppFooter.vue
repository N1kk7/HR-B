<template>
    <div class="footer">
        <div class="container">
            <div class="footer_wrapper">
                <img src="/images/logo.webp" alt="logo" ref="leftContent">
                

                <div class="footer_contacts" ref="rightContent">
                    <span class="author">
                        Anton Romanov
                    </span>
                    <a href="tel:+15082154267 ">+15082154267</a>
                    
                    <span>
                        HR.B.Construction24@gmail.com
                    </span>
                </div>



            </div>
        </div>
    </div>


</template>


<script setup>

    import {ref, onMounted} from 'vue';
    import gsap from 'gsap'
    import { ScrollTrigger } from 'gsap/ScrollTrigger'

    gsap.registerPlugin(ScrollTrigger);


    const rightContent = ref(null);
    const leftContent = ref(null);



    onMounted(() => {

        const isDesktop = window.innerWidth >= 480;


        if (isDesktop) {
            gsap.from(leftContent.value, {
                x: -100,
                opacity: 0,
                duration: 1,
                delay: 0.7,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: leftContent.value,
                    start: 'top 80%',
                    once: true
                }
            })

            gsap.from(rightContent.value, {
                x: 100,
                opacity: 0,
                duration: 1,
                delay: 0.7,
                ease: 'power4.out',
                scrollTrigger: {
                    trigger: rightContent.value,
                    start: 'top 80%',
                    once: true
                }
            })
        } else {
            gsap.from(rightContent.value, {
                y: 60,
                opacity: 0,
                duration: 1.7,
                delay: 0.6,
                ease: 'power3.out',
                stagger: 0.25,
                scrollTrigger: {
                    trigger: rightContent.value,
                    start: 'top 130%',
                    once: true
                }
            })

            gsap.from(leftContent.value, {
                y: 60,
                opacity: 0,
                duration: 1.7,
                delay: 0.6,
                ease: 'power3.out',
                stagger: 0.25,
                scrollTrigger: {
                    trigger: leftContent.value,
                    start: 'top 130%',
                    once: true
                }
            })

        }

       

        


    })


</script>


<style scoped lang="scss">

    .footer{
        width: 100%;
    }

    .footer_wrapper{
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-block: 40px;

        @media screen and (max-width: 480px) {

            &{
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;
                gap: 40px;

            }
        
        }


    }

    .footer_contacts{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        gap: 10px;

        span, a{
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

        .author{
            margin-bottom: 10px;
            font-weight: 400;
        }

        @media screen and (max-width: 480px) {

            align-items: flex-start;

            
        }


    }

    



</style>