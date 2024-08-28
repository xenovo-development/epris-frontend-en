<template>
  <div class="section-padding-t90-b100">
    <div class="container">
      <!-- Section Title Start -->
      <SectionTitle
        title="Lorem ipsum dolor sit amet consectetur."
        sub-title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque ipsum
          voluptate, rem a harum blanditiis."
        add-class-name="mb-60"
      />
      <!-- Section Title End -->

      <div
        class="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mtn-30"
      >
        <div
          class="col mt-30"
          data-aos="fade-up"
          v-for="(feature, index) in serviceData.slice(0, 3)"
          :key="index"
        >
          <div class="icon-box text-center" :class="addClassName">
            <div class="icon">
              <img :src="feature.iconSrc" :alt="feature.title" />
            </div>
            <div class="content">
              <h3 class="title">{{ feature.title }}</h3>
              <div class="desc">
                <p>{{ feature.text }}</p>
              </div>
              <NuxtLink :to="`/service/${feature.slug}`" class="link"
                >Details ansehen</NuxtLink
              >
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
