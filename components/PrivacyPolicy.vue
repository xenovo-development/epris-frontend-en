<template>
  <div class="section-padding-t90-b100 overflow-hidden" id="contact">
    <div class="container shape-animate">
      <!-- Section Title Start -->
      <SectionTitle title="Privacy Policy" add-class-name="mb-30 text-center" />
      <!-- Section Title End -->
      <div
        class="row row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-1 mt-30"
      >
        <div class="impressum p-4">
          <div class="impressum-info">
            <h6>Privacy Policy</h6>
            <h6>As of: 09.09.2024</h6>
            <h6 class="mt-4">1. Responsible Entity</h6>
            <p>Epris GmbH</p>
            <p>Leonhardgasse 11/R01</p>
            <p>1030 Vienna</p>
            <p>office@epris.group</p>
            <p>+43 676 53 48 113</p>
            <h6 class="mt-4">2. Collection and Processing of Personal Data</h6>
            <p>
              We, Epris GmbH, collect, process, and use your personal data only
              with your consent or if another legal basis in accordance with the
              GDPR applies. This is done in compliance with data protection and
              civil law provisions. Only personal data necessary for the
              execution and processing of our consulting services or data you
              have voluntarily provided to us is collected.
            </p>
            <h6 class="mt-4">3. Your Rights</h6>
            <p>
              As a data subject, you have the right to access your stored
              personal data, its origin, recipients, and the purpose of data
              processing at any time. You also have the right to correction,
              data portability, objection, restriction of processing, and the
              blocking or deletion of incorrect or unlawfully processed data.
            </p>

            <h6 class="mt-4">4. Data Security</h6>
            <p>
              The protection of your personal data is ensured by appropriate
              organizational and technical measures. These measures primarily
              concern protection against unauthorized, unlawful, or accidental
              access, processing, loss, use, and manipulation.
            </p>

            <h6 class="mt-4">5. Use of Data</h6>
            <p>
              We will not use the data provided to us for purposes other than
              those covered by the consulting contract, your consent, or other
              provisions in accordance with the GDPR.
            </p>

            <h6 class="mt-4">6. Data Transfer to Third Parties</h6>
            <p>
              To fulfill your order, it may also be necessary to forward your
              data to third parties (e.g., service providers, authorities). Data
              will only be transferred based on the GDPR, especially for the
              fulfillment of your order or with your prior consent.
            </p>

            <h6 class="mt-4">7. Notification of Data Breaches</h6>
            <p>
              We strive to ensure that data breaches are identified at an early
              stage and, if necessary, reported to you and the relevant
              supervisory authority without delay.
            </p>

            <h6 class="mt-4">8. Data Retention</h6>
            <p>
              We will not retain data longer than necessary to fulfill our
              contractual or legal obligations and to defend against any
              potential liability claims.
            </p>

            <h6 class="mt-4">9. Cookies</h6>
            <p>
              This website uses "cookies" to make our offer more user-friendly,
              effective, and secure. A "cookie" is a small text file that our
              web server sends to the cookie file of the browser on your
              computer's hard drive. This enables our website to recognize you
              as a user when a connection is established between our web server
              and your browser.
            </p>

            <h6 class="mt-4">10. Google Maps</h6>
            <p>
              This website uses Google Maps, a map service provided by Google
              Inc. By using Google Maps, information about your use of this
              website (including your IP address) may be transferred to a Google
              server in the USA and stored there.
            </p>

            <h6 class="mt-4">11. Server Log Files</h6>
            <p>
              To optimize this website in terms of system performance, user
              friendliness, and the provision of useful information about our
              services, the provider of the website automatically collects and
              stores information in server log files that your browser
              automatically transmits to us.
            </p>

            <h6 class="mt-4">12. Newsletter</h6>
            <p>
              You have the option to subscribe to our newsletter with your
              consent. To do so, we process your name, email address, and
              possibly the company name for the purpose of sending the
              newsletter. You can revoke consent to receive the newsletter at
              any time via the link contained in the newsletter or by emailing
              office@epris.group.
            </p>

            <h6 class="mt-4">13. Our Contact Details</h6>
            <p>
              The protection of your data is especially important to us. You can
              contact us at any time for questions or to withdraw your consent
              using the contact details below.
            </p>
            <p>Epris GmbH</p>
            <p>Leonhardgasse 11/R01</p>
            <p>1030 Vienna</p>
            <p>office@epris.group</p>
            <p>+43 676 53 48 113</p>
          </div>
          <button @click="uploadPdf" class="btn btn-primary mt-4">
            Download as PDF
          </button>
        </div>
      </div>

      <shape-with-animation
        add-class-name="shape-1"
        data-depth="4"
        img-src="/images/shape-animation/video-shape-1.png"
      />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    SectionTitle: () => import("@/components/SectionTitle"),
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
  methods: {
    uploadPdf() {
      const link = document.createElement("a");
      link.href = "/pdf/EprisGmbHPrivacyPolicyAsOf09092024.pdf";
      link.download = "EprisGmbHPrivacyPolicyAsOf09092024.pdf";
      link.click();
    },
  },
};
</script>

<style scoped>
.impressum-info p {
  margin: 10px 0;
  font-size: 16px;
}

.impressum-info img {
  margin-right: 10px;
}
.text-center {
  text-align: center;
}
</style>
