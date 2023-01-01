import Inspector from "vite-plugin-vue-inspector"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        'nuxt-icon',
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build: {
        transpile: ['trpc-nuxt'],
    },
    typescript: {
        shim: false,
    },
    vite: {
        plugins: [
            Inspector({
                enabled: false,
                appendTo: "entry.mjs"

            })
        ]
    }
})
