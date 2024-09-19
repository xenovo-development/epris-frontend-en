<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <SearchPopup />
    <BreadcrumbOne
      activePageName="Referenzen"
      title="Referenzen"
      backgroundUrl="/images/bg/references-bg.jpg"
      :style="{
        backgroundPosition: 'center calc(5% - 100px)',
        backgroundSize: 'cover',
      }"
    />
    <ReferencesTwo />
    <TheFooter />
  </div>
</template>
