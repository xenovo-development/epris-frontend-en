<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <SearchPopup />
    <BreadcrumbOne
      activePageName="References"
      title="References"
      backgroundUrl="/images/bg/references-bg.png"
      :style="{
        backgroundPosition: 'center 25%', 
        backgroundSize: 'cover',
      }"
    />
    <References />
    <TheFooter />
  </div>
</template>
