<template>
  <div class="section-padding-t90-b100 overflow-hidden" id="contact">
    <div class="container shape-animate">
      <!-- Section Title Start -->
      <SectionTitle
        title="Integrierte Energieoptimierung: Kosten senken, Effizienz steigern, Nachhaltigkeit sichern"
        sub-title="Kontaktieren Sie uns, um zu erfahren, wie Sie durch gezielte Strategien Ihre Energiekosten senken und die Effizienz Ihres Unternehmens steigern können. "
        add-class-name="mb-30"
      />
      <!-- Section Title End -->

      <div
        class="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"
      >
        <!-- <div class="col mt-30" data-aos="fade-up">
                    <div class="contact-info">
                        <div class="icon">
                            <img class="svgInject" src="/images/svg/linea/linea-basic-map.svg" alt="Icon">
                        </div>
                        <div class="info">
                            <h4 class="title">Our Locations</h4>
                            <span class="info-text"> 110 W 34th St, NYC. <br> 67 Madison Avenue.</span>
                        </div>
                    </div>
                </div> -->

        <div class="col mt-30" data-aos="fade-up">
          <div class="contact-info">
            <div class="icon">
              <img
                class="svgInject"
                src="/images/svg/linea/linea-basic-message-txt.svg"
                alt="Icon"
              />
            </div>
            <div class="info">
              <h4 class="title">Direkter Kontakt – Praxiserprobte Lösungen</h4>
              <span class="info-text"><a href="tel:+436765348113">+43 676 53 48 113</a></span>
            </div>
          </div>
        </div>

        <div class="col mt-30" data-aos="fade-up">
          <div class="contact-info">
            <div class="icon">
              <img
                class="svgInject"
                src="/images/svg/linea/linea-basic-mail-open-text.svg"
                alt="Icon"
              />
            </div>
            <div class="info">
              <h4 class="title">Schriftliche Anfrage – Maßgeschneiderte Lösungen</h4>
              <span class="info-text">
                <a href="mailto:office@epris.group ">office@epris.group </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <shape-with-animation
        add-class-name="shape-1"
        data-depth="4"
        img-src="/images/shape-animation/video-shape-1.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SectionTitle: () => import("@/components/SectionTitle"),
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
};
</script>
<style scoped>
#contact{
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>