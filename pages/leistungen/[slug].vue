<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <SearchPopup />
    <BreadcrumbOne
      :activePageName="service.title"
      :title="service.title"
      :backgroundUrl="service.bgImg"
    />

    <!-- service section start -->
    <section class="service-details-wrapper section-padding pb-125">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 mtn-40 order-2 order-lg-1">
            <div class="service-details-widget">
              <div
              class="service-single-widget mt-40"
              :style="{ backgroundColor: '#f8faff' }"
            >
              <h4 class="service-widget-title">Leistungen</h4>
              <ul class="service-list">
                <li v-for="(service, index) in serviceData" :key="index">
                  <i class="fas fa-check-circle"></i>
                  <nuxt-link :to="'/leistungen/' + service.slug">{{
                    service.title
                  }}</nuxt-link>
                </li>
              </ul>
            </div>
      
            </div>
          </div>
          <div class="col-lg-8 order-1 order-lg-2">
            <div class="service-details">
              <div class="service-details-thumb">
                <img :src="service.imgSrc" :alt="service.title" />
              </div>
              <h3 class="mt-4 mb-3">{{ service.title }}</h3>
              <p>{{ service.textOne }}</p>
              <div class="row">
                <div
                  class="col-sm-6"
                  v-for="(serviceItem, index) in serviceItems"
                  :key="index"
                >
                  <div class="service-details-content mt-30">
                    <h4>{{ serviceItem.name }}</h4>
                    <p>{{ serviceItem.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- service section end -->

    <TheFooter />
  </div>
</template>

<script>
import serviceData from "~/data/service.json";

export default {
  data() {
    return {
      serviceData,
      slug: this.$route.params.slug,
    };
  },
  computed: {
    service() {
      return this.serviceData.find((service) => service.slug === this.slug);
    },
    serviceItems() {
      return [
        {
          name: this.service.keyOne,
          text: this.service.keyOneText,
        },
        {
          name: this.service.keyTwo,
          text: this.service.keyTwoText,
        },
        {
          name: this.service.keyThree,
          text: this.service.keyThreeText,
        },
        ...(this.service.keyFour
          ? [
              {
                name: this.service.keyFour,
                text: this.service.keyFourText,
              },
            ]
          : []),
        ...(this.service.keyFive
          ? [
              {
                name: this.service.keyFive,
                text: this.service.keyFiveText,
              },
            ]
          : []),
        ...(this.service.keySix
          ? [
              {
                name: this.service.keySix,
                text: this.service.keySixText,
              },
            ]
          : []),
      ];
    },
  },
};
</script>
