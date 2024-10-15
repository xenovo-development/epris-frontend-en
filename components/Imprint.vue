<template>
  <div class="section-padding-t90-b100 overflow-hidden" id="contact">
    <div class="container shape-animate">
      <!-- Section Title Start -->
      <SectionTitle title="Imprint" add-class-name="mb-30 text-center" />
      <!-- Section Title End -->
      <div
        class="row row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-1 mt-30"
      >
        <div class="impressum p-4">
          <h4 class="mb-4">EPRIS GmbH</h4>
          <div class="impressum-info">
            <p class="mt-4">
              <img
                class="svgInject"
                src="/images/icon/location.png"
                alt="Location Icon"
                width="20"
                loading="lazy"
              />
              Leonhardgasse 11/R01 1030 Vienna
            </p>
            <p>
              <img
                class="svgInject"
                src="/images/icon/mail.png"
                alt="Mail Icon"
                width="20"
                loading="lazy"
              />
              <a href="mailto:office@epris.group">office@epris.group</a>
            </p>
            <p>
              <img
                class="svgInject"
                src="/images/icon/phone.png"
                alt="Phone Icon"
                width="20"
                loading="lazy"
              />
              <a href="tel:+436765348113">+43 676 53 48 113</a>
            </p>
            <p>
              <img
                class="svgInject"
                src="/images/icon/web.png"
                alt="Web Icon"
                width="20"
                loading="lazy"
              />
              <nuxt-link to="/">www.epris.group</nuxt-link>
            </p>
            <p>
              <img
                class="svgInject"
                src="/images/icon/document.png"
                alt="Document Icon"
                width="15"
                loading="lazy"
              />
              FN 634540y, Commercial Court of Vienna
            </p>
            <p>
              <img
                class="svgInject"
                src="/images/icon/document.png"
                alt="Document Icon"
                width="15"
                loading="lazy"
              />
              VAT ID: ATU 81146449
            </p>
            <p class="mt-5">
              Business consulting including business organization (§ 94 Z 74
              GewO). Registered office: Vienna
            </p>
            <p>
              Managing Director: Mag. Sandra Prinz (sole authorized
              representative)
            </p>
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
.impressum-info p {
  margin: 10px 0;
  font-size: 16px;
}

.impressum-info img {
  margin-right: 10px;
}
.text-center {
  text-align: center;
}
</style>
