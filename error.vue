<template>
  <div class="error-page">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <div class="error-page-image mb-50">
            <img
              src="/images/others/404.png"
              alt="Not Found Image"
              loading="lazy"
            />
          </div>
          <h1 class="error-page-title" v-if="error.statusCode === 404">
            Huch! Seite nicht gefunden!
          </h1>
          <h1 class="error-page-title" v-else>Es ist ein Fehler aufgetreten</h1>
          <div class="error-page-button mt-50">
            <nuxt-link class="btn btn-404 btn-hover-primary" to="/">
              Zurück zur Startseite
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>

<style scoped>
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom, #fff3df, #fff); 
  color: #fff3df;
  text-align: center;
}

.error-image img {
  max-width: 100%;
  height: auto;
}
.error-page-title {
  color: #162d2b;
}
.btn-404 {
  background-color: #162d2b;
  border: 2px solid #162d2b; 
  color: #fff3df;
}

.btn-404:hover {
  background-color: #fff3df;
  border: 2px solid #162d2b; 
  color: #162d2b;
}
</style>
