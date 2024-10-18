<template>
  <div class="section-padding overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" data-aos="fade-up">
          <div class="about-content-area">
            <div class="section-title-two">
              <span class="sub-title">Efficiency through Practice</span>
              <h3 class="title">Experience and Competence as a Package</h3>
              <p class="mt-30">
                EPRIS stands for practice-oriented expertise in energy
                management and sustainability. We offer well-thought-out
                solutions – from efficient energy procurement to consumption
                analysis and integrating your climate roadmap into your ESG
                reporting. With our integrated approach, we connect departments
                like purchasing, technology, and sustainability to create
                synergies and optimize management decisions.
              </p>
              <p class="mt-30">
                Our focus is on companies with high energy consumption in
                German-speaking countries. We combine strategic foresight with
                operational strength, and not only implement but also advise –
                with a focus on economic viability and efficiency.
              </p>
              <p class="mt-30">
                Our four service modules offer holistic solutions to energy
                challenges:
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-6" data-aos="fade-up">
          <div
            class="about-image-area about-two about-shape-animation right-0 mr-0"
          >
            <div class="about-image js-tilt">
              <img
                src="/images/about/b.png"
                alt="about image"
                loading="lazy"
              />
            </div>
            <ShapeWithAnimation
              addClassName="shape-1"
              data-depth="1"
              imgSrc="/images/shape-animation/video-shape-1.png"
            />
          </div>
        </div>
        <div
          class="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mt-0"
        >
          <div
            class="col mt-30"
            data-aos="fade-up"
            v-for="(feature, index) in serviceData.slice(0, 4)"
            :key="index"
          >
            <div class="icon-box text-center" :class="addClassName">
              <div class="icon">
                <img
                  :src="feature.iconSrc"
                  :alt="feature.title"
                  loading="lazy"
                />
              </div>
              <div class="content">
                <h3 class="title">{{ feature.title }}</h3>
                <div class="desc">
                  <p>{{ feature.text }}</p>
                </div>
                <NuxtLink :to="`/services/${feature.slug}`" class="link">
                  View Details
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <p class="mt-30">
          At EPRIS, you get tailor-made concepts. We accompany you from
          strategy development to practical implementation, always keeping the
          economic aspect in focus, and supporting you in achieving your energy
          management and sustainability goals.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import serviceData from "~/data/service.json";
export default {
  data() {
    return {
      serviceData,
    };
  },
};
</script>

<style scoped>
.icon img {
  width: 100px;
}
.icon-box .desc,
.icon-box .link {
  display: none;
  opacity: 0;
  transition: opacity 0.9s ease-in-out;
}

.icon-box .title {
  margin-bottom: 0;
  transition: margin-bottom 0.9s ease-in-out;
}

.icon-box:hover .desc,
.icon-box:hover .link {
  display: block;
  opacity: 1;
}

.icon-box:hover .title {
  margin-bottom: 15px;
}
</style>
