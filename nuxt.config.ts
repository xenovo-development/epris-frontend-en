export default defineNuxtConfig({
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/scss/style.scss",
    "@/assets/css/fontawesome.min.css",
    "@fortawesome/fontawesome-free/css/all.min.css",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "./assets/scss/_variables.scss";',
        },
      },
    },
  },
  app: {
    head: {
      title: "EPRIS - Energy: Economic • Efficient • Sustainable",
      meta: [
        {
          name: "description",
          content:
            "EPRIS offers energy-efficient and sustainable solutions for companies to reduce operating costs and protect the environment.",
        },
        {
          name: "keywords",
          content:
            "energy, efficiency, sustainability, economic, green energy, EPRIS",
        },
        { name: "author", content: "EPRIS GmbH" },
        { name: "robots", content: "index, follow" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },

        // Open Graph (OG) meta tags
        {
          property: "og:title",
          content: "EPRIS - Energy: Economic • Efficient • Sustainable",
        },
        {
          property: "og:description",
          content:
            "Energy-efficient and sustainable solutions for a better future.",
        },
        { property: "og:image", content: "/images/logo/epris_group_logo.jpeg" },
        { property: "og:url", content: "https://www.epris.group" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "en_US" },

        // Twitter Card meta tags
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "EPRIS - Energy: Economic • Efficient • Sustainable",
        },
        {
          name: "twitter:description",
          content:
            "Energy-efficient and sustainable solutions for companies.",
        },
        {
          name: "twitter:image",
          content: "/images/logo/epris_group_logo.jpeg",
        },
        { name: "twitter:site", content: "@EPRIS" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.png" },
        { rel: "canonical", href: "https://www.epris.group" },
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "EPRIS GmbH",
            url: "https://www.epris.group",
            logo: "https://www.epris.group/images/logo/beige-logo.png",
            sameAs: ["https://www.linkedin.com/company/epris-group"],
          }),
        },
      ],
    },
  },
  ssr: false,
  generate: {
    dir: "dist",
  },
});
