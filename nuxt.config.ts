import { defineNuxtConfig } from 'nuxt/config'
import Inspector from "vite-plugin-vue-inspector"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    modules: [
        '@vueuse/nuxt',
        'nuxt-icon',      
        '@sidebase/nuxt-auth',  
    ],
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },    
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    build: {
        transpile: ['trpc-nuxt'],
    },
    extends: [
        '@sidebase/nuxt-prisma'
      ],
    vite: {
        plugins: [
            Inspector({
                enabled: false,
                appendTo: "entry.mjs"

            })
        ]
    },
    auth: {
        origin: process.env.ORIGIN,
        enableGlobalAppMiddleware: true,
      },
    typescript: {
        shim: false,
        strict: true,
    },
})
