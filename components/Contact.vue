<template>
  <div class="section-padding-t90-b100 overflow-hidden" id="contact">
    <div class="container shape-animate">
      <!-- Section Title Start -->
      <SectionTitle
        title="Integrated Energy Optimization: Reduce Costs, Increase Efficiency, Ensure Sustainability"
        sub-title="Contact us to learn how targeted strategies can reduce your energy costs and increase the efficiency of your business."
        add-class-name="mb-30"
      />
      <!-- Section Title End -->

      <div
        class="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"
      >
        <div class="col mt-30" data-aos="fade-up">
          <div class="contact-info">
            <div class="icon">
              <img
                class="svgInject"
                src="/images/icon/phone.png"
                alt="Phone Icon"
                loading="lazy"
              />
            </div>
            <div class="info">
              <h4 class="title">Feel free to call us:</h4>
              <span class="info-text"
                ><a href="tel:+17868456001">+17868456001</a></span
              >
            </div>
          </div>
        </div>

        <div class="col mt-30" data-aos="fade-up">
          <div class="contact-info">
            <div class="icon">
              <img
                class="svgInject"
                src="/images/icon/mail.png"
                alt="Mail Icon"
                loading="lazy"
              />
            </div>
            <div class="info">
              <h4 class="title">Send your message to:</h4>
              <span class="info-text">
                <a href="mailto:info@epris-group.com ">info@epris-group.com</a>
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
