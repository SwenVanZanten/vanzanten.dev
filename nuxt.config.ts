// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,

    modules: [
        '@nuxtjs/tailwindcss'
    ],

    app: {
        head: {
            title: 'vanzanten.dev',
            meta: [
                { name: 'description', content: 'company website of vanzanten.dev' }
            ],
            link: [
                { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
                { rel: 'icon', sizes: '32x32', href: '/favicon-32x32.png', type: 'image/png' },
                { rel: 'icon', sizes: '16x16', href: '/favicon-16x16.png', type: 'image/png' },
                { rel: 'manifest', href: '/site.webmanifest' }
            ]
        }
    }
})
