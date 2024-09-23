<template>
  <div class="testimonial-section section-padding-t90 section-padding-bottom">
    <div class="container">
      <div class="section-title text-center" data-aos="fade-up">
        <h2 class="title fz-32">Was unsere Kunden sagen</h2>
      </div>
      <div class="testimonial-slider" data-aos="fade-up">
        <swiper
          :slides-per-view="1"
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
      },

      referencesData: [
        {
          id: 1,
          text: "Frau Prinz übernahm eine Schlüsselrolle in unserem Ausschreibungsprojekt zur Energieversorgung des Blockheizkraftwerks der St. Martins Therme. Ihre umfassende Expertise im strategischen und operativen Energieeinkauf sowie ihr Verhandlungsgeschick waren entscheidend für den Erfolg.",
          texttwo:
            "Sie leitete den Ausschreibungsprozess von der Lieferantenauswahl bis zu den Endverhandlungen und der Vertragsvorbereitung. Dank ihrer detaillierten Preisspiegel und fundierten Empfehlungen konnten wir kosteneffiziente Entscheidungen treffen.",
          textthree:
            "Durch die enge Zusammenarbeit mit dem Management stellte Frau Prinz sicher, dass die Energieversorgung passgenau auf die Bedürfnisse der Therme abgestimmt wurde. Ihre Fähigkeit, technische und wirtschaftliche Anforderungen optimal zu integrieren, machte unsere Energieversorgung effizient und zukunftssicher.",
          imgSrc: "/images/references/martins.jpg",
          imgSrcLogo: "/images/references/martins-logo.png",
          company: "St. Martins Therme & Lodge",
          name: "Wolfgang Moser",
          position: "Director of Finance & Prokurist",
        },
        {
          id: 2,
          text: "Frau Prinz hat in unserem Projekt zur Optimierung der Energieversorgung der Therme Wien Herausragendes geleistet. Mit ihrem umfassenden Ansatz analysierte sie unsere Energiequellen – von der Photovoltaikanlage bis zu den Energielieferverträgen – und konzipierte maßgeschneiderte und innovative Maßnahmen zur Kostensenkung durch Spotpreismodelle.",
          texttwo:
            "Ihre profunde Marktkenntnis und Fähigkeit, kosteneffiziente Strategien zu entwickeln, waren für uns von großem Nutzen. Die Einführung flexibler Beschaffungsmodelle und Vertragsoptimierungen haben unsere Energieversorgung effizienter und wirtschaftlicher gemacht.",
          textthree:
            "Dank ihrer Unterstützung konnten wir nicht nur Kosten senken, sondern auch unsere Nachhaltigkeitsziele vorantreiben. Frau Prinz versteht es, komplexe energiewirtschaftliche Themen in greifbare und wirtschaftlich sinnvolle Konzepte zu übersetzen.",
          textfour:
            "Ich empfehle Epris und Sandra Prinz für Unternehmen, die strategische Vision und praxisnahe Umsetzung im Energiemanagement suchen.",
          imgSrc: "/images/references/therme2.jpg",
          imgSrcLogo: "/images/references/therme-logo.jpg",
          company: "Therme Wien",
          name: "Dr. Friedl",
          position: "Geschäftsführer Therme Wien",
        },
        // {
        //   id: 3,
        //   text: "Text",
        //   imgSrc: "/images/references/vamed.jpeg",
        //   imgSrcLogo: "/images/references/vamed-logo.png",
        //   company: "Vamed Vitality Word",
        //   name: "Name",
        //   position: "Positon",
        // },
      ],
    };
  },
};
</script>
