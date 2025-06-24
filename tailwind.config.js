import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.{js,ts,jsx,tsx}',
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: [...defaultTheme.fontFamily.sans],
            },
        },
    },
    darkMode: "class",
    plugins: [heroui()],
};
