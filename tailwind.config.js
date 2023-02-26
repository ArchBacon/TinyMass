/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./assets/**/*.js",
        "./templates/**/*.twig",
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'chewy': ['Chewy', 'cursive'],
            'montserrat': ['Montserrat', 'sans-serif'],
            'quantico': ['Quantico', 'sans-serif'],
        },
        extend: {
            spacing: {
                '50px': '3.125rem',
            },
            fontSize: {
                '32px': ['2rem', '2.375rem'],
            },
        },
    },
    plugins: [],
}
