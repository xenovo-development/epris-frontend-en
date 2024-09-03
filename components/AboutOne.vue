<template>
  <div class="section-padding-t90 section-padding-bottom-200 overflow-hidden">
    <div class="container">
      <!-- Section Title Start -->
      <div class="section-title text-center" data-aos="fade-up">
        <h2 class="title">
          EPRIS – Ihr Experte für Energiemanagement und Nachhaltigkeit
        </h2>
        <p class="sub-title">
          EPRIS ist Ihr erfahrener Partner für effizientes Energiemanagement und
          nachhaltige Lösungen im DACH-Raum. Mit über 20 Jahren Erfahrung in der
          Branche kombinieren wir Wirtschaftlichkeit, Effizienz und
          Nachhaltigkeit.
        </p>
      </div>

      <!-- Section Title End -->

      <!-- About Wrapper Start -->
      <div class="row">
        <!-- About Image Area Start -->
        <div class="col-xl-7 col-lg-6" data-aos="fade-up">
          <div class="about-image-area">
            <div class="about-image js-tilt">
              <img src="/images/about/agency_about_2.png" alt="images" />
            </div>
            <div class="about-image js-tilt">
              <img src="/images/about/agency_about_1.jpg" alt="images" />
            </div>

            <!-- Animation Shape Start -->
            <ShapeWithAnimation
              addClassName="shape-1"
              dataDepth="1"
              imgSrc="/images/shape-animation/about-shape-1.png"
            />
            <!-- Animation Shape End -->
          </div>
        </div>
        <!-- About Image Area Start -->

        <!-- About Start -->
        <div class="col-xl-5 col-lg-6" data-aos="fade-up">
          <div class="about-content-area about-one">
            <!-- Section Title Two Start -->
            <div class="section-title-two">
              <span class="sub-title">Energie: wirtschaftlich • effizient • nachhaltig</span>
              <h3 class="title">Erfahrung und Kompetenz in einem Paket</h3>
            </div>
            <!-- Section Title Two End -->

            <p>
              Als erfahrenes Unternehmen im Energiemanagement entwickeln wir
              durchdachte Strategien, die Ihrem Unternehmen helfen,
              Energieeffizienz zu steigern und nachhaltige Ziele zu erreichen.
              Unser praxisorientierter Ansatz sichert Ihnen konkrete Erfolge und
              langfristige Vorteile.
            </p>
            <p>
              EPRIS ist Ihr erfahrener Partner für effizientes Energiemanagement
              und nachhaltige Lösungen im DACH-Raum.
            </p>
            <p>
              Mit langjähriger Erfahrung in Schlüsselpositionen der
              Energiewirtschaft entwickeln wir maßgeschneiderte Strategien, die
              Wirtschaftlichkeit, Effizienz und Nachhaltigkeit optimal vereinen.
              Unser praxisorientierter Ansatz sichert messbare Erfolge für
              mittelständische und große Unternehmen – von der Planung bis zur
              Umsetzung.
            </p>
            <NuxtLink
              to="/uber-epris"
              class="btn btn-primary btn-hover-secondary mt-4"
              >Über Epris</NuxtLink
            >
          </div>
        </div>
        <!-- About Start -->
      </div>
      <!-- About Wrapper End -->
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
};
</script>
