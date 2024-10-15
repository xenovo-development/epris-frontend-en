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
                  <h2 class="title" v-html="banner.heading"></h2>
                  <div class="desc">
                    <p class="mt-4">
                      {{ banner.text }}
                    </p>
                  </div>
                  <NuxtLink to="#about" class="btn btn-green-beggie"
                    >Get Started</NuxtLink
                  >
                  <NuxtLink :to="banner.button" class="btn btn-outline-beggie"
                    >Learn More</NuxtLink
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
          delay: 9000,
          disableOnInteraction: false,
        },
      },

      sliderData: [
        {
          id: 1,
          heading: "Energy: <br/> Economic • Efficient • Sustainable",
          text: "Our comprehensive approach combines economy, efficiency, and sustainability. With over 20 years of experience in the energy industry, we develop customized solutions that make your company future-proof.",
          bgImgSrc: "/images/slider/1.png",
          button: "/services/energy-data-optimization",
        },
        {
          id: 2,
          heading:
            "Integrated Energy Management: Reduce Costs, Increase Efficiency!",
          text: "By connecting all energy-relevant areas of the company, we create an effective energy management system. We optimize your processes across departments and achieve sustainable cost savings.",
          bgImgSrc: "/images/slider/3.png",
          button: "/services/strategic-energy-management",
        },
        {
          id: 3,
          heading:
            "Practical Energy Expertise: From Concept to Implementation",
          text: "With our many years of experience, we accompany you from strategy development to practical implementation. We offer well-thought-out, economically viable solutions for all aspects of your energy management.",
          bgImgSrc: "/images/slider/4.png",
          button: "/services/energy-procurement",
        },
        {
          id: 4,
          heading: "Synergies through <br/> Integrated Energy Management.",
          text: "We connect procurement, technology, and ESG reporting into a coordinated energy concept. This way, you can leverage synergies, increase operational efficiency, and meet your sustainability goals.",
          bgImgSrc: "/images/slider/2.png",
          button: "/services/climate-roadmap",
        },
      ],
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 1700px) {
  .intro-content {
    margin-left: 50px;
  }
}

.btn-outline-beggie {
  color: #fff3df;
  border-color: #fff3df;
  background-color: transparent;
}
.btn-outline-beggie:hover {
  color: #fff3df;
  border-color: #1b9970;
  background-color: #1b9970;
}
.btn-green-beggie {
  color: #fff3df;
  border-color: #1b9970;
  background-color: #1b9970;
}
.btn-green-beggie:hover {
  color: #fff3df;
  border-color: #fff3df;
  background-color: transparent;
}
</style>
