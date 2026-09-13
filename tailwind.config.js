// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#1A191C", // Warm Titanium Charcoal base
        card: "#232227", // Elevated Silver Beige card fill
        cardHover: "#2A2930", // Hover card fill
        silverBorder: "#36353F", // Metallic silver border
        primaryText: "#F5F5F7", // Apple Titanium Silver white
        secondaryText: "#A1A1AA", // Muted warm silver beige
        accentGold: "#F59E0B",
        accentIndigo: "#6366F1",
        accentCyan: "#38BDF8",
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'blob': 'blob 10s infinite ease-in-out',
        'fade-in': 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(40px, -60px) scale(1.12)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.92)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      },
    },
  },
  plugins: [],
};