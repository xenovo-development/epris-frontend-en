<template>
  <div class="testimonial-section section-padding-t90 section-padding-bottom">
    <div class="container">
      <div class="section-title text-center" data-aos="fade-up">
        <h2 class="title fz-32">What Our Clients Say</h2>
      </div>
      <div class="testimonial-slider" data-aos="fade-up">
        <swiper
          :slides-per-view="1"
          :space-between="30"
          :speed="1000"
          :loop="true"
          :centered-slides="true"
          :autoplay="swiperOptions.autoplay"
          :pagination="swiperOptions.pagination"
          :navigation="true"
        >
          <swiper-slide
            v-for="(references, index) in referencesData"
            :key="index"
          >
            <ReferencesItem :references="references" />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper/core"; // Import Navigation
SwiperCore.use([Pagination, Autoplay, Navigation]); // Use Navigation
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation"; // Import Navigation CSS

export default {
  components: {
    Swiper,
    SwiperSlide,
    ReferencesItem: () => import("@/components/ReferencesItem"),
  },

  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
      },
      referencesData: [
        {
          id: 1,
          text: '"Ms. Prinz played a key role in our energy supply tender project for the combined heat and power plant of St. Martins Therme. Her comprehensive expertise in strategic and operational energy procurement, along with her negotiation skills, were crucial to the success.',
          texttwo:
            "She led the tender process from supplier selection to final negotiations and contract preparation. Thanks to her detailed price comparisons and well-founded recommendations, we were able to make cost-effective decisions.",
          textthree:
            'By closely collaborating with management, Ms. Prinz ensured that the energy supply was tailored to the needs of the spa. Her ability to optimally integrate technical and economic requirements made our energy supply efficient and future-proof."',
          imgSrc: "/images/references/martins.jpg",
          imgLink: "https://www.stmartins.at/en",
          imgSrcLogo: "/images/references/martins-logo.png",
          company: "St. Martins Therme & Lodge",
          name: "Wolfgang Moser",
          position: "Director of Finance & Authorized Signatory",
        },
        {
          id: 2,
          text: '"Ms. Prinz has done outstanding work in our project to optimize the energy supply of Therme Wien. With her comprehensive approach, she analyzed our energy sources – from the photovoltaic system to energy supply contracts – and designed tailored and innovative measures to reduce costs through spot price models.',
          texttwo:
            "Her profound market knowledge and ability to develop cost-efficient strategies were of great benefit to us. The introduction of flexible procurement models and contract optimizations made our energy supply more efficient and economical.",
          textthree:
            "Thanks to her support, we were able not only to reduce costs but also to advance our sustainability goals. Ms. Prinz has a remarkable ability to translate complex energy market topics into practical and economically sound concepts.",
          textfour:
            'I highly recommend EPRIS and Sandra Prinz for companies seeking strategic vision and practical implementation in energy management."',
          imgSrc: "/images/references/therme2.jpg",
          imgLink: "https://www.thermewien.at/",
          imgSrcLogo: "/images/references/therme-logo.jpg",
          company: "Therme Wien",
          name: "Dr. Edmund Friedl",
          position: "Managing Director, Therme Wien",
        },
        {
          id: 3,
          text: '"As part of our "Living Sustainability" project, Ms. Prinz, as an external project manager at VAMED Vitality World, delivered outstanding work. With her expertise in integrated energy management, she led a six-person team and significantly contributed to embedding sustainability in our resorts.',
          texttwo:
            "Under her leadership, a comprehensive climate roadmap was developed, providing our facilities with a viable path to achieving the 2030 climate goals. Ms. Prinz placed particular emphasis on data quality, energy efficiency, and economic viability – aspects that are crucial for the energy consumption of our thermal and health resorts.",
          textthree:
            'Her ability to implement concepts that are both economically and ecologically sensible strengthens VAMED Vitality World’s position as a leading provider in wellness and sustainability. I fully recommend EPRIS and Sandra Prinz for projects that require in-depth expertise, strategic thinking, and operational excellence in integrated energy management."',
          imgSrc: "/images/references/vamed.png",
          imgLink: "https://www.vitality-world.com/de",
          imgSrcLogo: "/images/references/vamed-logo.png",
          company: "VAMED Vitality World",
          name: "Klaus Hofmann",
          position: "Managing Director, VAMED Vitality World",
        },
      ],
    };
  },
};
</script>

<style>
.swiper-button-next,
.swiper-button-prev {
  color: #4ec0ab;
}
@media (max-width: 768px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none;
  }
}
</style>
