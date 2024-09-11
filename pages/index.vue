<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <HeroSliderOne />
        <AboutOne />
        <FeatureOne :style="{backgroundColor: '#f8faff'}" />
        <!-- <SuccessStory /> -->
        <!-- <PortfolioGallery /> -->
        <BlogSectionOne />
        <Newsletter />
        <!-- <TestimonialSectionOne :style="{backgroundColor: '#f8faff'}" /> -->
        <CallToActionOneHome />
        <TheFooter />
    </div>
</template>

<script>
    export default {
        head() {
            return {
                title: 'Corporate Business'
            }
        },
    };
</script>


