<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <SearchPopup />
    <BreadcrumbOne
      activePageName="Impressum"
      title="Impressum"
      backgroundUrl="/images/bg/f.jpg"
      :style="{
        backgroundPosition: 'center calc(5% - 50px)',
        backgroundSize: 'cover',
      }"
    />
    <CallToActionFour />

    <TheFooter />
  </div>
</template>
