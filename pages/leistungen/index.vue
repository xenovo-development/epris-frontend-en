<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <SearchPopup />
    <BreadcrumbOne
      activePageName="Leistungen"
      title="Leistungen"
      backgroundUrl="/images/bg/services-bg.jpg"
      :style="{
        backgroundPosition: 'center 85%', 
        backgroundSize: 'cover',
      }"
    />
    <Service />
    <TheFooter />
  </div>
</template>
