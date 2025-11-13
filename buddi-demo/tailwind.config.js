/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        barclays: {
          cerulean: '#00aeef',
          ocean: '#0075c9',
          astronaut: '#003d73',
          midnight: '#011f3d',
          dusk: '#002f59',
          slate: '#4f637c',
          fog: '#8ba1be',
          sky: '#dff1ff',
          mist: '#f5f8fb',
          cloud: '#f0f4f8',
        },
      },
      fontFamily: {
        sans: ['"Inter var"', 'Inter', '"SF Pro Display"', '"SF Pro Text"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '20px',
        modal: '28px',
        shell: '44px',
        pill: '999px',
      },
      boxShadow: {
        card: '0 10px 35px rgba(1, 31, 61, 0.12)',
        buddi: '0 12px 30px rgba(0, 136, 204, 0.35)',
        shell: '0 35px 90px rgba(0, 23, 56, 0.35)',
        sheet: '0 -20px 40px rgba(4, 24, 54, 0.22)',
        chip: '0 4px 12px rgba(1, 31, 61, 0.15)',
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 2.6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease forwards',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.9 },
          '50%': { transform: 'scale(1.04)', opacity: 1 },
        },
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'barclays-hero': 'linear-gradient(135deg, #011f3d 0%, #003d73 45%, #00aeef 100%)',
        'barclays-sky': 'linear-gradient(180deg, #f5f8fb 0%, #ecf3fb 100%)',
      },
    },
  },
  plugins: [],
}
