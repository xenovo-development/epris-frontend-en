<template>
    <div class="main-container">
        <TheHeader />
        <OffCanvasMobileMenu />
        <SearchPopup />
        <HomepageSlider />
        <HomepageAbout />
        <HomepageServices :style="{backgroundColor: '#f8faff'}" />
        <HomepageBlog />
        <HomepageSubscription />
        <HomepageContact />
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


