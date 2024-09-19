<template>
  <div class="static2-testimonial mb-30">
    <div class="testimonial-image">
      <img :src="references.imgSrcLogo" :alt="references.name"/>
    </div>
    <div class="testimonial-content">
      <p>"{{ references.text }}"</p>
    </div>
    <div class="author-info">
      <div class="cite">
        <h6 class="name">{{ references.name }}</h6>
        <span class="position">{{ references.position }}</span>
        <h6 class="company">{{ references.company }}</h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["references"],
};
</script>
