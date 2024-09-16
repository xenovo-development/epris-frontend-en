<template>
  <div class="section-padding overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" data-aos="fade-up">
          <div class="about-content-area">
            <div class="section-title-two">
              <span class="sub-title">Effizienz durch Praxis</span>
              <h3 class="title">Erfahrung und Kompetenz als Paket</h3>
              <p class="mt-30">
                EPRIS steht für praxisorientierte Expertise im Energiemanagement
                und in der Nachhaltigkeit. Wir bieten durchdachte Lösungen – von
                effizienter Energiebeschaffung über Verbrauchsanalysen bis zur
                Integration Ihres Klimafahrplans in Ihre ESG-Berichterstattung.
                Mit unserem integrativen Ansatz vernetzen wir Abteilungen wie
                Einkauf, Technik und Nachhaltigkeit, um Synergien zu schaffen
                und Managemententscheidungen zu optimieren.
              </p>
              <p class="mt-30">
                Unser Fokus liegt auf Unternehmen mit hohem Energieverbrauch im
                deutschsprachigen Raum. Wir kombinieren strategische Weitsicht
                mit operativer Stärke und setzen nicht nur um, sondern beraten
                auch – mit Fokus auf Wirtschaftlichkeit und Effizienz.
              </p>
              <p class="mt-30">
                Unsere vier Leistungsmodule bieten ganzheitliche Lösungen für
                Energieherausforderungen:
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up">
          <div
            class="about-image-area about-two about-shape-animation right-0 mr-0"
          >
            <div class="about-image js-tilt">
              <img src="/images/about/agency_about_2.png" alt="image" />
            </div>
            <div class="about-image js-tilt">
              <img src="/images/about/agency_about_1.jpg" alt="image" />
            </div>
            <ShapeWithAnimation
              addClassName="shape-1"
              data-depth="1"
              imgSrc="/images/shape-animation/video-shape-1.png"
            />
          </div>
        </div>
        <div
          class="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mt-30"
        >
          <div
            class="col mt-30"
            data-aos="fade-up"
            v-for="(feature, index) in serviceData.slice(0, 4)"
            :key="index"
          >
            <div class="icon-box text-center" :class="addClassName">
              <div class="icon">
                <img :src="feature.iconSrc" :alt="feature.title" />
              </div>
              <div class="content">
                <h3 class="title">{{ feature.title }}</h3>
                <div class="desc">
                  <p>{{ feature.text }}</p>
                </div>
                <NuxtLink :to="`/leistungen/${feature.slug}`" class="link">
                  Details ansehen
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-30">
          Bei EPRIS erhalten Sie individuell zugeschnittene Konzepte. Wir
          begleiten von der Strategieentwicklung bis zur praktischen Umsetzung,
          behalten dabei den wirtschaftlichen Aspekt fest im Blick und
          unterstützen Sie bei der Erreichung Ihrer Energiemanagement- und
          Nachhaltigkeitsziele.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import serviceData from "~/data/service.json";
export default {
  data() {
    return {
      serviceData,
    };
  },
};
</script>
<style scoped>
.icon img {
  width: 100px;
}
.icon-box .desc,
.icon-box .link {
  display: none;
  opacity: 0;
  transition: opacity 0.9s ease-in-out;
}

.icon-box .title {
  margin-bottom: 0;
  transition: margin-bottom 0.9s ease-in-out;
}

.icon-box:hover .desc,
.icon-box:hover .link {
  display: block;
  opacity: 1;
}

.icon-box:hover .title {
  margin-bottom: 15px;
}
</style>
