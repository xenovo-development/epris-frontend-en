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
              title="Stay Informed: Energy Expertise"
              sub-title="Leave your email address to be notified as soon as a new expert article on the latest trends and developments is published."
              add-class-name="color-light"
            />

            <!-- Newsletter Form Start -->
            <div class="newsletter-form">
              <form @submit.prevent="subscribe">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  v-model="email"
                  required
                />
                <button
                  class="btn btn-primary btn-hover-secondary"
                  type="submit"
                >
                  Subscribe
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
          title: "Invalid Email",
          text: "Please enter a valid email address.",
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
            title: "Subscription Successful",
            text: "Thank you for subscribing!",
          });
          this.email = ""; // Reset the form
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "There was a problem with your subscription.",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "There was a problem connecting to the server.",
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
