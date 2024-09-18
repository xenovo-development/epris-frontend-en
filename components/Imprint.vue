<template>
  <div class="section-padding-t90-b100 overflow-hidden" id="contact">
    <div class="container shape-animate">
      <!-- Section Title Start -->
      <SectionTitle title="Impressum" add-class-name="mb-30 text-center" />
      <!-- Section Title End -->
      <div
        class="row row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-1 mt-30"
      >
        <div class="impressum p-4">
          <h4 class="mb-4">Epris GmbH</h4>
          <div class="impressum-info">
            <p class="mt-4">
              <img
                class="svgInject"
                src="/images/icon/location.png"
                alt="Icon"
                width="20"
              />
              Leonhardgasse 11/R01 1030 Wien
            </p>
            <p>
              <img
                class="svgInject"
                src="/images/icon/mail.png"
                alt="Icon"
                width="20"
              />
              <a href="mailto:office@epris.group">office@epris.group</a>
            </p>
            <p>
              <img
                class="svgInject"
                src="/images/icon/phone.png"
                alt="Icon"
                width="20"
              />
              <a href="tel:+436765348113">+43 676 53 48 113</a>
            </p>
            <p>
              <img
                class="svgInject"
                src="/images/icon/web.png"
                alt="Icon"
                width="20"
              />
              <a href="https://www.epris.group/">www.epris.group</a>
            </p>
            <p>
              <img
                class="svgInject"
                src="/images/icon/document.png"
                alt="Icon"
                width="15"
              />
              FN xxxxx, Handelsgericht Wien
            </p>
            <p>
              <img
                class="svgInject"
                src="/images/icon/document.png"
                alt="Icon"
                width="15"
              />
              UID: ATU xxxxxx
            </p>
            <p class="mt-5">
              Unternehmensberatung einschließlich der Unternehmensorganisation
              (§ 94 Z 74 GewO). Sitz: Wien
            </p>
            <p>
              Geschäftsführung: Mag. Sandra Prinz (alleinvertretungsberechtigt)
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
