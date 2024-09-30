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
              <form @submit.prevent="subscribe">
                <input
                  type="email"
                  placeholder="Ihre Emailadresse"
                  v-model="email"
                  required
                />
                <button
                  class="btn btn-primary btn-hover-secondary"
                  type="submit"
                >
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
import Swal from "sweetalert2";

export default {
  components: {
    SectionTitle: () => import("@/components/SectionTitle"),
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async subscribe() {
      if (!this.validateEmail(this.email)) {
        Swal.fire({
          icon: "error",
          title: "Ungültige E-Mail",
          text: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        });
        return;
      }

      try {
        const response = await fetch(
          "https://dashboard.epris.group/api/subscription",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: this.email }),
          }
        );

        if (response.ok) {
          Swal.fire({
            icon: "success",
            title: "Abonnement erfolgreich",
            text: "Vielen Dank für Ihr Abonnement!",
          });
          this.email = ""; // Formu sıfırla
        } else {
          Swal.fire({
            icon: "error",
            title: "Fehler",
            text: "Es gab ein Problem bei der Anmeldung.",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Fehler",
          text: "Es gab ein Problem bei der Verbindung mit dem Server.",
        });
      }
    },
    validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    },
  },
};
</script>
