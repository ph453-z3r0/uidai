/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'uidai-blue': '#0066CC',
                'uidai-bg': '#F5F5F5',
                'uidai-text': '#1F2937',
                'uidai-border': '#E5E7EB',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
