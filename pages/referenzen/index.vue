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
        backgroundPosition: 'center 25%', 
        backgroundSize: 'cover',
      }"
    />
    <References />
    <TheFooter />
  </div>
</template>
