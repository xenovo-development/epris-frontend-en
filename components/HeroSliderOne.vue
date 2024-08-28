<template>
  <div class="intro-slider">
    <swiper
      :speed="1000"
      :loop="false"
      :navigation="swiperOptions.navigation"
      :effect="'fade'"
      :autoplay="swiperOptions.autoplay"
    >
      <swiper-slide v-for="(banner, index) in sliderData" :key="index">
        <div
          class="intro-section overlay bg-cover"
          :style="{ backgroundImage: `url(${banner.bgImgSrc})` }"
        >
          <div class="container">
            <div class="row row-cols-lg-1 row-cols-1">
              <div class="col align-self-center">
                <div
                  class="intro-content mt-xl-8 mt-lg-8 mt-md-8 mt-sm-8 mt-xs-8"
                >
                  <h2 class="title">{{ banner.heading }}</h2>
                  <div class="desc">
                    <p>
                      {{ banner.text }}
                    </p>
                  </div>
                  <NuxtLink
                    to="/about"
                    class="btn btn-primary btn-hover-secondary"
                    >Loslegen</NuxtLink
                  >
                  <NuxtLink
                    to="/about"
                    class="btn btn-outline-white btn-hover-primary"
                    >Mehr erfahren</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- pagination class -->
      <div class="home-slider-prev swiper-button-prev main-slider-nav">
        <i class="fa fa-angle-left"></i>
    </div>
    <div class="home-slider-next swiper-button-next main-slider-nav">
        <i class="fa fa-angle-right"></i>
    </div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, EffectFade, Autoplay } from "swiper/core";
SwiperCore.use([Navigation, EffectFade, Autoplay]);

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      swiperOptions: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
      },

      sliderData: [
        {
          id: 1,
          heading: "Energie: wirtschaftlich, effizient, nachhaltig",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsa beatae deserunt! Consequatur, pariatur assumenda!",
          bgImgSrc: "/images/hero-image/1.png",
        },
        {
          id: 2,
          heading: "Von Kosten zur strategischen Stärke!",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsa beatae deserunt! Consequatur, pariatur assumenda!",
          bgImgSrc: "/images/hero-image/2.png",
        },
        {
          id: 3,
          heading: "Energie: wirtschaftlich, effizient, nachhaltig",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsa beatae deserunt! Consequatur, pariatur assumenda!",
          bgImgSrc: "/images/hero-image/3.png",
        },
        {
          id: 4,
          heading: "Von Kosten zur strategischen Stärke!",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsa beatae deserunt! Consequatur, pariatur assumenda!",
          bgImgSrc: "/images/hero-image/4.png",
        },
        {
          id: 5,
          heading: "Energie: wirtschaftlich, effizient, nachhaltig",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ipsa beatae deserunt! Consequatur, pariatur assumenda!",
          bgImgSrc: "/images/hero-image/5.png",
        },
      ],
    };
  },
};
</script>
