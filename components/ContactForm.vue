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
            <h2 class="title fz-32">Use Our Contact Form</h2>
          </div>
          <!-- Section Title End -->
          <div class="contact-form">
            <form @submit.prevent="submitForm">
              <div class="row mtn-30">
                <div class="col-md-6 col-12 mt-30">
                  <input
                    type="text"
                    placeholder="First Name *"
                    v-model="formData.name"
                  />
                  <p v-if="errors.name" class="error">{{ errors.name }}</p>
                </div>
                <div class="col-md-6 col-12 mt-30">
                  <input
                    type="text"
                    placeholder="Last Name *"
                    v-model="formData.surname"
                  />
                  <p v-if="errors.surname" class="error">
                    {{ errors.surname }}
                  </p>
                </div>
                <div class="col-md-6 col-12 mt-30">
                  <input
                    type="text"
                    placeholder="Company Name"
                    v-model="formData.companyname"
                  />
                </div>
                <div class="col-md-6 col-12 mt-30">
                  <input
                    type="text"
                    placeholder="Your Position in the Company"
                    v-model="formData.position"
                  />
                </div>
                <div class="col-md-12 col-12 mt-30">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    v-model="formData.email"
                  />
                  <p v-if="errors.email" class="error">{{ errors.email }}</p>
                </div>
                <div class="col-md-12 col-12 mt-30">
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    v-model="formData.tel"
                    @input="onTelInput"
                  />
                  <p v-if="errors.tel" class="error">{{ errors.tel }}</p>
                </div>
                <div class="col-12 mt-30">
                  <textarea
                    v-model="formData.message"
                    placeholder="Please describe your request or requirements *"
                  ></textarea>
                  <p v-if="errors.message" class="error">
                    {{ errors.message }}
                  </p>
                </div>
                <div class="col-12 text-center mt-30">
                  <button class="btn btn-primary btn-hover-secondary">
                    Send Request
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
import Swal from "sweetalert2";

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
      visible: false,
    };
  },
  methods: {
    submitForm() {
      this.errors = {};

      if (!this.formData.name) {
        this.errors.name = "First name is required.";
      }
      if (!this.formData.surname) {
        this.errors.surname = "Last name is required.";
      }
      if (!this.validateEmail(this.formData.email)) {
        this.errors.email = "Please enter a valid email address.";
      }
      if (!this.formData.tel) {
        this.errors.tel = "Phone number is required.";
      }
      if (!this.formData.message) {
        this.errors.message = "Please describe your request.";
      }

      if (Object.keys(this.errors).length === 0) {
        this.sendFormData();
      }
    },
    validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
    },
    onTelInput(event) {
      const value = event.target.value.replace(/\D/g, "");
      this.formData.tel = value;
    },
    async sendFormData() {
      try {
        const response = await fetch(
          "https://dashboard.epris.group/api/contact-mail",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.formData),
          }
        );

        if (response.ok) {
          this.visible = true;
          Swal.fire({
            icon: "success",
            title: "Request Sent",
            text: "Your message was successfully sent.",
          });
          this.resetForm();
        } else {
          this.visible = false;
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "There was a problem sending your request.",
          });
        }
      } catch (error) {
        this.visible = false;
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "There was a problem sending your request.",
        });
      }
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
  },
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 12px;
}
</style>
