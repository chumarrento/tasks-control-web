import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                config.plugins?.push(vuetify());
            });
        },
    ],
    build: {
        transpile: ['vuetify'],
    },
})
