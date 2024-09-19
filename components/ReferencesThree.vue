<template>
  <div class="testimonial-section section-padding-t90 section-padding-bottom">
    <div class="container-fulid">
      <div class="section-title text-center" data-aos="fade-up">
        <h2 class="title fz-32">Was unsere Kunden sagen</h2>
        <p class="sub-title">
          Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor
          sit amet.
        </p>
      </div>
      <div class="testimonial-slider" data-aos="fade-up">
        <swiper
          :slides-per-view="3"
          :space-between="30"
          :speed="1000"
          :loop="true"
          :centered-slides="true"
          :pagination="swiperOptions.pagination"
        >
          <swiper-slide
            v-for="(references, index) in referencesData"
            :key="index"
          >
            <ReferencesItem :references="references" />
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination text-center"></div>
      </div>
    </div>
  </div>
</template>
<script>
import SwiperCore, { Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/vue";
SwiperCore.use([Pagination]);

import "swiper/css";

export default {
  components: {
    Swiper,
    SwiperSlide,
    ReferencesItemTwo: () => import("@/components/ReferencesItemTwo"),
  },

  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      },

      referencesData: [
        {
          id: 1,
          text: "Im Rahmen unseres Projekts zur Ausschreibung der Energieversorgung für das Blockheizkraftwerk (BHKW) in der St. Martins Therme hat Frau Prinz von Epris GmbH eine zentrale Rolle übernommen. Ihre umfassenden Kenntnisse im Energiemanagement und ihre Fähigkeit, komplexe Verhandlungen zu führen, waren entscheidend für den Projekterfolg.",
          imgSrc: "/images/references/martins.jpg",
          imgSrcLogo: "/images/references/martins-logo.png",
          company: "St. Martins Therme & Lodge",
          name: "Wolfgang Moser",
          position: "Director of Finance & Prokurist",
        },
        {
          id: 2,
          text: "In unserem Projekt zur Energieversorgungsoptimierung der Therme Wien hat Frau Prinz von Epris GmbH Außerordentliches geleistet. Mit ihrem ganzheitlichen Ansatz im Energiemanagement analysierte sie unsere bestehenden Energiequellen - von der Photovoltaikanlage über Fernwärme bis hin zu den aktuellen Energielieferverträgen.",
          imgSrc: "/images/references/therme2.jpg",
          imgSrcLogo: "/images/references/therme-logo.jpg",
          company: "Therme Wien",
          name: "Dr. Friedl",
          position: "Geschäftsführer Therme Wien",
        },
        {
          id: 3,
          text: "Text",
          imgSrc: "/images/references/vamed.jpeg",
          imgSrcLogo: "/images/references/vamed-logo.png",
          company: "Vamed Vitality Word",
          name: "Name",
          position: "Positon",
        },
      ],
    };
  },
};
</script>
