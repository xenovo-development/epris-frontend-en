export default defineNuxtConfig({
    css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/scss/style.scss", '@fortawesome/fontawesome-free/css/all.min.css'],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./assets/scss/_variables.scss";'
                },
            },
        },
    },
    app: {
        head: {
            title: 'Epris - Von Kosten zur strategischen Stärke!',
            meta: [
                { name: 'description', content: 'Your website description' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
            ]
        }
    },
    ssr: false,
    generate: {
        dir: 'dist'  
    }
});
