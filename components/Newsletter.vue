<template>
  <div
    class="section-padding-t110-b120 newsletter-section bg-cover overflow-hidden"
    data-overlay="0.7"
    :style="{ backgroundImage: `url('/images/bg/newsletter.jpg')` }"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12">
          <div class="newsletter-content">
            <SectionTitle
              title="Bleiben Sie informiert: Fachwissen rund um Energie"
              sub-title="Hinterlassen Sie Ihre E-Mail-Adresse, um benachrichtigt zu werden, sobald ein neuer Fachartikel über die neuesten Trends und Entwicklungen veröffentlicht wird."
              add-class-name="color-light"
            />

            <!-- Newsletter Form Start -->
            <div class="newsletter-form">
              <form>
                <input type="email" placeholder="Ente your email" name="mail" />
                <button class="btn btn-primary btn-hover-secondary">
                    Abonnieren
                </button>
              </form>
            </div>
            <!-- Newsletter Form End -->
          </div>
        </div>
      </div>
    </div>

    <ShapeWithAnimation
      add-class-name="shape-1"
      data-depth="1"
      img-src="/images/shape-animation/newsletter-shape.png"
    />
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
