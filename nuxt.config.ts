import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: {
            api: process.env.NUXT_PUBLIC_API_URL,
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        '@vue-macros/nuxt',
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore'],
            },
        ],
        async (options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                config.plugins?.push(vuetify());
            });
        },
    ],
    imports: {
        dirs: ['stores'],
    },
    build: {
        transpile: ['vuetify'],
    },
});
