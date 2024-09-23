<template>
  <div class="static-testimonial mb-30">
    <div class="row">
      <div class="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
        <div class="about-image-area">
          <div class="about-image">
            <img :src="references.imgSrc" :alt="references.name" />
            <div class="custom-object-1">
              <img src="/images/references/y-daire.png" alt="image" />
            </div>
            <div class="custom-object-2">
              <img :src="references.imgSrcLogo" :alt="references.name" />
            </div>
          </div>

          <!-- Animation Shape Start -->
          <ShapeWithAnimation
            addClassName="shape-1"
            data-depth="1"
            imgSrc="/images/shape-animation/about-shape-1.png"
          />
        </div>
      </div>

      <div class="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
        <div class="about-content-area about-four">
          <div class="section-title-two">
            <span class="sub-title">{{ references.company }}</span>
          </div>
          <p>{{ references.text }}</p>
          <p>{{ references.texttwo }}</p>
          <p>{{ references.textthree }}</p>
          <p>{{ references.textfour }}</p>
          <div class="author-info mt-4">
            <div class="cite">
              <h6 class="name">{{ references.name }}</h6>
              <span class="position">{{ references.position }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["references"],
  components: {
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
  data() {
    return {
      currentIndex: 0,
      hoverLeft: false,
      hoverRight: false,
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

.what-customer-say {
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-left: 50px;
  color: #162d2b;
}
.about-image {
  position: relative;
  width: 400px;
}
.custom-object-1 {
  position: absolute;
  top: -30px;
  right: -20px;
}

.custom-object-1 img {
  width: 80px;
}
.custom-object-2 {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.custom-object-2 img {
  width: 150px;
}
</style>
