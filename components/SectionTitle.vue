<template>
    <div class="section-title text-center" :class="addClassName" data-aos="fade-up">
        <h2 v-html="title" class="title"></h2>
        <p class="sub-title">{{ subTitle }}</p>
    </div>
</template>

<script>
    export default {
        name: 'SectionTitle',

        props: ["title", "subTitle", "addClassName"]
    };
</script>