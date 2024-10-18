<template>
  <div class="section-padding-t90 section-padding-bottom-200 overflow-hidden" id="about">
    <div class="container">
      <!-- Section Title Start -->
      <div class="section-title text-center" data-aos="fade-up">
        <h2 class="title">
          EPRIS: Economic Efficiency through <br />
          Integrated Energy Management
        </h2>
        <p class="sub-title">
          EPRIS is your experienced partner for energy management that combines
          cost efficiency and sustainability. With over 20 years of experience,
          we optimize all energy-related processes in your company.
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
              src="/images/about/b.png"
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
        <!-- About Image Area End -->

        <!-- About Start -->
        <div class="col-xl-5 col-lg-6" data-aos="fade-up">
          <div class="about-content-area about-one">
            <!-- Section Title Two Start -->
            <div class="section-title-two">
              <span class="sub-title"
                >Energy: economical • efficient • sustainable</span
              >
              <h3 class="title">Experience and Expertise in One Package</h3>
            </div>
            <!-- Section Title Two End -->

            <!-- Icon List Start -->
            <ul class="icon-list">
              <li>
                We analyze and improve all areas related to energy – from
                production to administration
              </li>
              <li>
                Our integrated approach connects procurement, technology, and
                sustainability for maximum synergies
              </li>
              <li>
                We develop customized strategies for cost reduction and
                efficiency enhancement
              </li>
              <li>
                Our expert knowledge on current market trends, regulations, and
                technologies ensures your competitive advantage
              </li>
              <li>
                We accompany you from concept to practical implementation of
                your energy projects
              </li>
            </ul>
            <!-- Icon List End -->

            <p>
              Trust EPRIS to make your energy management future-proof and to
              establish sustainability as a key success factor.
            </p>
            <NuxtLink
              to="/about-epris"
              class="btn btn-primary btn-hover-secondary mt-4"
              >About EPRIS</NuxtLink
            >
          </div>
        </div>
        <!-- About End -->
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
