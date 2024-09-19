<template>
  <div class="main-container">
    <TheHeader />
    <OffCanvasMobileMenu />
    <SearchPopup />
    <BreadcrumbOne
      activePageName="Kontakt"
      title="Kontakt"
      backgroundUrl="/images/bg/f.jpg"
      :style="{
        backgroundPosition: 'center calc(5% - 120px)',
        backgroundSize: 'cover',
      }"
    />
    <Contact />
    <ContactForm />
    <TheFooter />
  </div>
</template>
