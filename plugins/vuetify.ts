import { createVuetify, ThemeDefinition } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

const darkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#1e293b',
        surface: '#1e293b',
        primary: '#7c3aed',
        'primary-darken': '#4c1d95',
    },
};

// #1e293b
export const vuetify = () =>
    createVuetify({
        ssr: true,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi,
            },
        },
        theme: {
            defaultTheme: 'darkTheme',
            variations: {
                colors: ['primary'],
                lighten: 5,
                darken: 5,
            },
            themes: {
                darkTheme
            }
        },
        defaults: {
            VTextField: {
                variant: 'underlined',
                color: 'primary',
                type: 'text',
            },
        },
    });

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(vuetify());
});
