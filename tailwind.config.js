/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        ink: '#111417',
        inklight: '#1B2024',
        linen: '#E7E8E5',
        paper: '#D5D8D4',
        steel: '#37464F',
        steeldark: '#1E272D',
        rust: '#C1452A',
        rustdark: '#912F1B',
        amber: '#D6892E',
        stone: '#565B5D',
      },
      fontFamily: {
        display: ['Oswald', 'Arial Narrow', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(17,20,23,0.55)',
        card: '0 12px 30px -14px rgba(17,20,23,0.40)',
      },
      borderRadius: {
        '2xl': '0.75rem',
        '3xl': '1.1rem',
      },
    },
  },
  plugins: [],
};
