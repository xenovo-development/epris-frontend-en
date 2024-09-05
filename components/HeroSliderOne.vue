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
                  <NuxtLink to="/uber-epris" class="btn btn-green-beggie"
                    >Loslegen</NuxtLink
                  >
                  <NuxtLink to="/uber-epris" class="btn btn-outline-beggie"
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
          heading: "Energie: wirtschaftlich • effizient • nachhaltig",
          text: "Unser umfassender Ansatz vereint Wirtschaftlichkeit, Effizienz und Nachhaltigkeit. Mit über 20 Jahren Erfahrung in der Energiewirtschaft entwickeln wir maßgeschneiderte Lösungen, die Ihr Unternehmen zukunftsfähig machen.",
          bgImgSrc: "/images/hero-image/1.png",
        },
        {
          id: 2,
          heading: "Integriertes Energiemanagement: Kosten senken, Effizienz steigern! ",
          text: "Durch die Vernetzung aller energierelevanten Unternehmensbereiche schaffen wir ein effektives Energiemanagement. Wir optimieren Ihre Prozesse abteilungsübergreifend und erzielen so nachhaltige Kosten Einsparungen und Effizienzsteigerungen.",
          bgImgSrc: "/images/hero-image/3.png",
        },
        {
          id: 3,
          heading: "Praxisorientierte Energieexpertise: Vom Konzept zur Umsetzung",
          text: "Mit unserer langjährigen Erfahrung aus führenden Positionen der Energiewirtschaft begleiten wir Sie von der Strategieentwicklung bis zur praktischen Implementierung. Wir bieten Ihnen durchdachte, wirtschaftlich tragfähige Lösungen für alle Aspekte Ihres Energiemanagements.",
          bgImgSrc: "/images/hero-image/4.png",
        },
        {
          id: 4,
          heading: "Synergien durch integriertes Energiemanagement: Wirtschaftlichkeit und Klimaziele im Einklang",
          text: "Wir verbinden Einkauf, Technik und ESG-Reporting zu einem abgestimmten Energiekonzept. So nutzen Sie Synergien, steigern Ihre betriebliche Effizienz und erfüllen gleichzeitig Ihre Nachhaltigkeitsziele.",
          bgImgSrc: "/images/hero-image/2.png",
        }
      ],
    };
  },
};
</script>
<style scoped>
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
