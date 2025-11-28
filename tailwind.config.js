import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],
    theme: {
        extend: {
        fontFamily: {
            sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        },
        colors: {
        primary: {
                50:  "#edf4fa",
                100: "#d6e4f1",
                200: "#adc9e3",
                300: "#84add4",
                400: "#5b92c6",
                500: "#1e4b75",
                600: "#1a4268",
                700: "#153756",
                800: "#102b43",
                900: "#0b1f31",
            },

        },
        wordSpacing: {
                tighter: '-0.05em',
                superwide: '0.5em',
            },
        borderRadius: {
            xl: '1rem',
        },
        },
    },

    plugins: [forms],
};
