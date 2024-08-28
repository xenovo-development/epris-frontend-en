<template>
  <div class="section-padding-t90 section-padding-bottom-200 overflow-hidden">
    <div class="container">
      <!-- Section Title Start -->
      <div class="section-title text-center" data-aos="fade-up">
        <h2 class="title">Lorem ipsum dolor sit amet consectetur.</h2>
        <p class="sub-title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ipsum
          voluptate, rem a harum blanditiis.
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
              <span class="sub-title">Lorem ipsum dolor sit amet.</span>
              <h3 class="title">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h3>
            </div>
            <!-- Section Title Two End -->

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              consectetur veniam, ipsum ducimus sunt expedita eligendi id. Quasi
              assumenda soluta laboriosam eum accusantium.
            </p>
            <NuxtLink
              to="/about"
              class="btn btn-primary btn-hover-secondary mt-4"
              >Über uns</NuxtLink
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
