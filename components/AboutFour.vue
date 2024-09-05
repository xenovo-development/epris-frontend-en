<template>
  <div
    class="section-padding-top section-padding-bottom-180 overflow-hidden"
    style="padding-bottom: 300px; padding-top: 150px"
  >
    <div class="container">
      <div class="row">
        <h3 class="what-customer-say">
          Was unsere Kunden <br />
          sagen
        </h3>
        <div class="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
          <div class="about-image-area">
            <div class="about-image">
              <img :src="content[currentIndex].image" alt="image" />
              <!-- <div class="custom-object-1">
                <img :src="content[currentIndex].logo" alt="image" />
              </div> -->
              <div class="custom-object-2">
                <img :src="content[currentIndex].logo" alt="image" />
              </div>
              <div class="slider-controls-left">
                <i
                  class="fa-solid fa-arrow-left"
                  @click="slideContent('left')"
                ></i>
              </div>
              <div class="slider-controls-right">
                <i
                  class="fa-solid fa-arrow-right"
                  @click="slideContent('right')"
                ></i>
              </div>
            </div>

            <!-- Animation Shape Start -->
            <ShapeWithAnimation
              addClassName="shape-1"
              data-depth="1"
              imgSrc="/images/shape-animation/about-shape-1.png"
            />
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-12" data-aos="fade-up">
          <div class="about-content-area about-four">
            <div class="section-title-two">
              <span class="sub-title">{{
                content[currentIndex].subTitle
              }}</span>
            </div>
            <p>{{ content[currentIndex].text }}</p>
            <p>{{ content[currentIndex].texttwo }}</p>
            <p>{{ content[currentIndex].textthree }}</p>
            <p>{{ content[currentIndex].textfour }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ShapeWithAnimation: () => import("@/components/ShapeWithAnimation"),
  },
  data() {
    return {
      currentIndex: 0,
      content: [
        {
          image: "/images/referenzen/martins.jpg",
          logo: "/images/referenzen/martins-logo.png",
          subTitle: "St. Martins Therme & Lodge",
          text: "Im Rahmen unseres Projekts zur Ausschreibung der Energieversorgung für das Blockheizkraftwerk (BHKW) in der St. Martins Therme hat Frau Prinz von Epris GmbH eine zentrale Rolle übernommen. Ihre umfassenden Kenntnisse im Energiemanagement und ihre Fähigkeit, komplexe Verhandlungen zu führen, waren entscheidend für den Projekterfolg.",
          texttwo:
            "Frau Prinz leitete den gesamten Ausschreibungsprozess, von der Verhandlung mit verschiedenen Energielieferanten bis zur Erstellung einer Shortlist potenzieller Partner. Sie führte die Endverhandlungen und bereitete alle relevanten Verträge und Dokumentationen vor. Ihre detaillierten Preisspiegel und stichhaltigen Managementempfehlungen halfen uns, wohlüberlegte Entscheidungen zu treffen, die sowohl kosteneffizient als auch zukunftssicher sind.",
          textthree:
            "Durch ihre enge Zusammenarbeit mit mir als Director of Finance, unserem Geschäftsführer und dem Leiter der Technik, konnte Frau Prinz sicherstellen, dass alle Aspekte der Energieversorgung optimal auf die Bedürfnisse der Therme abgestimmt sind. Ihre Fähigkeit, technische und wirtschaftliche Anforderungen zu integrieren, hat maßgeblich dazu beigetragen, unsere Energieversorgung effizienter und nachhaltiger zu gestalten.",
          textfour:
            "Für Unternehmen, die nach einer Expertin suchen, die strategische Planung mit praktischer Umsetzung im Energiemanagement verbindet, ist Epris unter der Leitung von Sandra Prinz eine hervorragende Wahl. Ihre profunde Expertise in der Durchführung komplexer Energieprojekte macht sie zu einer wertvollen Partnerin für jedes Unternehmen, das seine Energieversorgung optimieren möchte.",
        },
        {
          image: "https://dummyimage.com/500x640/000/fff.png",
          logo: "https://dummyimage.com/150x66/ffffff/000000.png",
          subTitle: "Lorem ipsum dolar",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet maximus nulla. Donec in justo sed leo aliquam consectetur ut sed metus. Cras posuere enim mauris, sed porta nunc pharetra et. Vivamus ut odio vel ipsum rutrum luctus in sed neque. Nunc at lobortis ipsum, non feugiat neque. Praesent velit ipsum, venenatis quis imperdiet id, auctor non ante.",
          texttwo:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet maximus nulla. Donec in justo sed leo aliquam consectetur ut sed metus. Cras posuere enim mauris, sed porta nunc pharetra et. Vivamus ut odio vel ipsum rutrum luctus in sed neque. Nunc at lobortis ipsum, non feugiat neque. Praesent velit ipsum, venenatis quis imperdiet id, auctor non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostr.",
          textthree:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet maximus nulla. Donec in justo sed leo aliquam consectetur ut sed metus. Cras posuere enim mauris, sed porta nunc pharetra et. Vivamus ut odio vel ipsum rutrum luctus in sed neque. Nunc at lobortis ipsum, non feugiat neque. Praesent velit ipsum, venenatis quis imperdiet id, auctor non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostr.",
          textfour:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet maximus nulla. Donec in justo sed leo aliquam consectetur ut sed metus. Cras posuere enim mauris, sed porta nunc pharetra et. Vivamus ut odio vel ipsum rutrum luctus in sed neque. Nunc at lobortis ipsum, non feugiat neque. Praesent velit ipsum, venenatis quis imperdiet id, auctor non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostr.",
        },
      ],
    };
  },
  methods: {
    slideContent(direction) {
      if (direction === "left") {
        this.currentIndex =
          (this.currentIndex - 1 + this.content.length) % this.content.length;
      } else if (direction === "right") {
        this.currentIndex = (this.currentIndex + 1) % this.content.length;
      }
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap");

.what-customer-say {
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-left: 50px;
  color: #162d2b;
}
.slider-controls-left {
  font-size: 34px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 20px;
  position: absolute;
}
.slider-controls-right {
  font-size: 34px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 80px;
  position: absolute;
}

.about-image {
  position: relative;
  width: 500px;
}

.custom-object-1,
.custom-object-2 {
  position: absolute;
}

.custom-object-1 {
  top: 20px;
  left: 20px;
}

.custom-object-2 {
  bottom: 20px;
  right: 20px;
}
.custom-object-2 img {
  width: 150px;
}
</style>
