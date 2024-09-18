<template>
  <div class="footer-section" :style="{ backgroundColor: '#162d2b' }">
    <div class="container">
      <div class="row section-padding pt-0 mtn-30">
        <div class="col-md-4 col-sm-6 col-12 mt-30">
          <div class="footer-widget">
            <div class="footer-logo">
              <NuxtLink to="/">
                <img :src="footerData.footerAboutWidget.logoSrc" alt="Logo" />
              </NuxtLink>
            </div>
            <div class="footer-widget-content">
              <div class="content">
                <a href="tel:+436765348113">{{
                  footerData.footerAboutWidget.telephone
                }}</a>
                <a href="mailto:office@epris.group">{{
                  footerData.footerAboutWidget.email
                }}</a>
              </div>
              <div class="footer-social-inline">
                <a
                  :href="footerData.footerAboutWidget.linkedinUrl"
                  target="_blank"
                >
                  <img
                    class="svgInject"
                    src="/images/icon/linkedin-2.png"
                    alt="Icon"
                    width="35"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-6 mt-30">
          <div class="footer-widget">
            <h4 class="footer-widget-title">
              {{ footerData.footerLinkTitleOne }}
            </h4>
            <div class="footer-widget-content">
              <ul>
                <li v-for="(nav, index) in footerData.navListOne" :key="index">
                  <NuxtLink :to="nav.navUrl">{{ nav.navTitle }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-6 mt-30">
          <div class="footer-widget">
            <h4 class="footer-widget-title">
              {{ footerData.footerLinkTitleTwo }}
            </h4>
            <div class="footer-widget-content">
              <ul>
                <li v-for="(nav, index) in footerData.navListTwo" :key="index">
                  <NuxtLink :to="nav.navUrl">{{ nav.navTitle }}</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mt-30">
          <div class="footer-widget">
            <h4 class="footer-widget-title">
              {{ footerData.footerLinkTitleFour }}
            </h4>
            <div class="footer-widget-content">
              <ul>
                <li v-for="(nav, index) in footerData.navListFour" :key="index">
                  <nuxt-link
                    :to="getPdfLink(nav.navTitle, nav.navUrl)"
                    :target="isPdf(nav.navTitle) ? '_blank' : '_self'"
                  >
                    {{ nav.navTitle }}
                  </nuxt-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <p class="copyright">&copy; {{ currentYear }} EPRIS.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import footerData from "~/data/footer.json";

export default {
  data() {
    return {
      footerData,
      currentYear: ref(new Date().getFullYear()),
    };
  },
  methods: {
    getPdfLink(title, navUrl) {
      if (title === "AGB") {
        return "/pdf/AllgemeineGeschäftsbedingungenEPRIS09092024.pdf";
      } else if (title === "Datenschutzerklärung") {
        return "/pdf/EprisGmbHDatenschutzerklärungStand09092024.pdf";
      }
      return navUrl;
    },
    isPdf(title) {
      return title === "AGB" || title === "Datenschutzerklärung";
    },
  },
  mounted() {
    this.currentYear = new Date().getFullYear();
  },
};
</script>
