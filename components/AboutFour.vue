<template>
  <div
    class="section-padding-top section-padding-bottom-180 overflow-hidden"
    style="padding-bottom: 300px; padding-top: 150px"
  >
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
          <div class="about-image-area">
            <div class="about-image js-tilt">
                <img :src="content[currentIndex].image" alt="image" />
            </div>

            <!-- Animation Shape Start -->
            <ShapeWithAnimation
              addClassName="shape-1"
              data-depth="1"
              imgSrc="/images/shape-animation/about-shape-1.png"
            />
          </div>
          <div class="slider-controls">
            <i class="fa-solid fa-arrow-left" @click="slideContent('left')"></i>
            <i class="fa-solid fa-arrow-right" @click="slideContent('right')"></i>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
          <div class="about-content-area about-four">
            <div class="section-title-two">
                <span class="sub-title">{{ content[currentIndex].subTitle }}</span>
                <h3 class="title">{{ content[currentIndex].title }}</h3>
              </div>
              <p>{{ content[currentIndex].text }}</p>

            <NuxtLink to="/" class="btn btn-primary btn-hover-secondary mt-30"
              >Get Started</NuxtLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
  data() {
    return {
      currentIndex: 0, // Başlangıç indeksi
      content: [
        {
          image: "/images/about/agency_about_1.jpg",
          subTitle: "Our solutions begin with brand research",
          title: "We’ve worked alongside plenty of brands & startups",
          text: "Our team of designers and developers are perfectionists who love what they do – we thrive off pushing the boundaries of our clients’ expectations and our own capabilities.",
        },
        {
          image: "/images/about/agency_about_2.png",
          subTitle: "We create innovative solutions",
          title: "Our innovations have helped numerous companies succeed",
          text: "From concept to creation, we provide end-to-end services that empower businesses to achieve their goals.",
        },
        // Diğer içerikler burada eklenebilir
      ],
    };
  },
  methods: {
    slideContent(direction) {
      if (direction === 'left') {
        this.currentIndex = (this.currentIndex - 1 + this.content.length) % this.content.length;
      } else if (direction === 'right') {
        this.currentIndex = (this.currentIndex + 1) % this.content.length;
      }
    },
  },
};

</script>
<style scoped>
.slider-controls i {
    font-size: 34px; 
    cursor: pointer; 
    margin: 0 10px; 
    margin-top: 30px;
    margin-left: 20px;
  }
  
</style>