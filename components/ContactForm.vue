<template>
  <div
    class="contact-form-section section-padding-t90-b100"
    :style="{ backgroundColor: '#f8faff' }"
  >
    <div class="container">
      <div class="row">
        <div class="offset-lg-2 col-lg-8">
          <!-- Section Title Start -->
          <div class="section-title text-center" data-aos="fade-up">
            <h2 class="title fz-32">
              Nutzen Sie unser Kontaktformular
            </h2>
            <p class="sub-title">
              Teilen Sie uns Ihre Anforderungen mit. <br>
              Gemeinsam entwickeln wir Strategien, <br>
              die auf Ihre Bedürfnisse abgestimmt sind.
            </p>
          </div>
          <!-- Section Title End -->
          <div class="contact-form">
            <form @submit.prevent="submitForm">
              <div class="row mtn-30">
                <div class="col-md-6 col-12 mt-30">
                  <input
                    type="text"
                    placeholder="Vorname *"
                    v-model="formData.name"
                  />
                  <p v-if="errors.name" class="error">{{ errors.name }}</p>
                </div>
                <div class="col-md-6 col-12 mt-30">
                  <input
                    type="text"
                    placeholder="Nachname *"
                    v-model="formData.surname"
                  />
                  <p v-if="errors.surname" class="error">
                    {{ errors.surname }}
                  </p>
                </div>
                <div class="col-md-6 col-12 mt-30">
                  <input
                    type="text"
                    placeholder="Firmenname"
                    v-model="formData.companyname"
                  />
                </div>
                <div class="col-md-6 col-12 mt-30">
                  <input
                    type="text"
                    placeholder="Ihre Position im Unternehmen"
                    v-model="formData.position"
                  />
                </div>
                <div class="col-md-12 col-12 mt-30">
                  <input
                    type="email"
                    placeholder="E-Mail Adresse *"
                    v-model="formData.email"
                  />
                  <p v-if="errors.email" class="error">{{ errors.email }}</p>
                </div>
                <div class="col-md-12 col-12 mt-30">
                  <input
                    type="tel"
                    placeholder="Telefonnummer *"
                    v-model="formData.tel"
                    @input="onTelInput"
                  />
                  <p v-if="errors.tel" class="error">{{ errors.tel }}</p>
                </div>
                <div class="col-12 mt-30">
                  <textarea
                    v-model="formData.message"
                    placeholder="Bitte beschreiben Sie Ihr Anliegen oder Ihre Anforderungen *"
                  ></textarea>
                  <p v-if="errors.message" class="error">
                    {{ errors.message }}
                  </p>
                </div>
                <div class="col-12 text-center mt-30">
                  <button class="btn btn-primary btn-hover-secondary">
                    Anfrage senden
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        surname: "",
        companyname: "",
        position: "",
        email: "",
        tel: "",
        message: "",
      },
      errors: {},
    };
  },
  methods: {
    submitForm() {
      this.errors = {};
      if (!this.formData.name) {
        this.errors.name = "Vorname ist erforderlich.";
      }
      if (!this.formData.surname) {
        this.errors.surname = "Nachname ist erforderlich.";
      }
      if (!this.validateEmail(this.formData.email)) {
        this.errors.email = "Bitte geben Sie eine gültige E-Mail Adresse ein.";
      }
      if (!this.formData.tel) {
        this.errors.tel = "Telefonnummer ist erforderlich.";
      }
      if (!this.formData.message) {
        this.errors.message = "Bitte beschreiben Sie Ihr Anliegen.";
      }

      if (Object.keys(this.errors).length === 0) {
        console.log("Form data submitted:", this.formData);
        this.resetForm();
      }
    },
    validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    },
    resetForm() {
      this.formData = {
        name: "",
        surname: "",
        companyname: "",
        position: "",
        email: "",
        tel: "",
        message: "",
      };
    },
    onTelInput(event) {
      const value = event.target.value.replace(/\D/g, "");
      this.formData.tel = value;
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 12px;
}
</style>
