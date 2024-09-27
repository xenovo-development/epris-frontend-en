<template>
  <div class="section-padding-t90 section-padding-bottom-200 overflow-hidden">
    <div class="container">
      <!-- Section Title Start -->
      <div class="section-title text-center" data-aos="fade-up">
        <h2 class="title">
          EPRIS: Wirtschaftliche Effizienz durch <br />
          integriertes Energiemanagement
        </h2>
        <p class="sub-title">
          EPRIS ist Ihr erfahrener Partner für Energiemanagement, das
          Kosteneffizienz und Nachhaltigkeit vereint. Mit über 20 Jahren
          Erfahrung optimieren wir alle energierelevanten Prozesse Ihres
          Unternehmens.
        </p>
      </div>
      <!-- Section Title End -->

      <!-- About Wrapper Start -->
      <div class="row">
        <!-- About Image Area Start -->
        <div class="col-xl-7 col-lg-6" data-aos="fade-up">
          <div class="about-image-area">
            <div class="about-image js-tilt">
              <img
                src="/images/about/agency_about_2.png"
                alt="about images"
                loading="lazy"
              />
            </div>
            <div class="about-image js-tilt">
              <img
                src="/images/about/agency_about_1.jpg"
                alt="about images"
                loading="lazy"
              />
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
              <span class="sub-title"
                >Energie: wirtschaftlich • effizient • nachhaltig</span
              >
              <h3 class="title">Erfahrung und Kompetenz in einem Paket</h3>
            </div>
            <!-- Section Title Two End -->

            <!-- Icon List Start -->
            <ul class="icon-list">
              <li>
                Wir analysieren und verbessern alle Bereiche, die mit Energie zu
                tun haben - von der Produktion bis zur Verwaltung
              </li>
              <li>
                Unser integrierter Ansatz vernetzt Einkauf, Technik und
                Nachhaltigkeit für maximale Synergien
              </li>
              <li>
                Wir entwickeln maßgeschneiderte Strategien zur Kostensenkung und
                Effizienzsteigerung
              </li>
              <li>
                Unser Expertenwissen zu aktuellen Marktentwicklungen,
                Regulatorien und Technologien sichert Ihren Wettbewerbsvorteil
              </li>
              <li>
                Wir begleiten Sie von der Konzeption bis zur praktischen
                Umsetzung Ihrer Energieprojekte
              </li>
            </ul>
            <!-- Icon List End -->

            <p>
              Vertrauen Sie auf EPRIS, um Ihr Energiemanagement zukunftssicher
              zu gestalten und Nachhaltigkeit als Erfolgsfaktor zu etablieren.
            </p>
            <NuxtLink
              to="/uber-epris"
              class="btn btn-primary btn-hover-secondary mt-4"
              >Über EPRIS</NuxtLink
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
