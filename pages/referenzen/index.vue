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
        backgroundPosition: 'center calc(5% - 130px)',
        backgroundSize: 'cover',
      }"
    />
    <References />
    <TheFooter />
  </div>
</template>
