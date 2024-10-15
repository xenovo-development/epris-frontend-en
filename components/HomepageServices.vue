<template>
  <div class="section-padding-t90-b100">
    <div class="container">
      <!-- Section Title Start -->
      <SectionTitle
        :title="'Economic and Efficient Solutions for <br> Energy and Sustainability'"
        sub-title="Our four service modules offer tailored concepts and practice-oriented solutions for your energy and sustainability challenges."
        add-class-name="mb-60"
      />
      <!-- Section Title End -->

      <div
        class="row row-cols-lg-2 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"
      >
        <div
          class="col mt-30"
          data-aos="fade-up"
          v-for="(feature, index) in serviceData.slice(0, 4)"
          :key="index"
        >
          <div class="icon-box text-center" :class="addClassName">
            <div class="icon">
              <img :src="feature.iconSrc" :alt="feature.title" loading="lazy" />
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
    </div>
  </div>
</template>

<script>
import serviceData from "~/data/service.json";
export default {
  props: ["addClassName"],

  components: {
    SectionTitle: () => import("@/components/SectionTitle"),
  },

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
