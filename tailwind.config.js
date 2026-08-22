/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nexus: {
          blue: "#155EEF",
          "blue-hover": "#004EEB",
          "blue-secondary": "#3B82F6",
          "blue-light": "#EAF2FF",
          "blue-50": "#F4F8FF",
          navy: "#071A33",
          "navy-light": "#0D2342",
          "navy-card": "#0F2B52",
          bg: "#F7F9FC",
          text: "#101828",
          muted: "#667085",
          border: "#E4E7EC"
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'nexus-sm': '0 2px 8px -2px rgba(16, 24, 40, 0.05), 0 1px 4px -1px rgba(16, 24, 40, 0.03)',
        'nexus-card': '0 12px 32px -8px rgba(16, 24, 40, 0.06), 0 4px 12px -2px rgba(16, 24, 40, 0.03)',
        'nexus-hover': '0 20px 40px -12px rgba(21, 94, 239, 0.15), 0 8px 16px -4px rgba(16, 24, 40, 0.04)',
        'nexus-glow': '0 0 40px rgba(21, 94, 239, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'gradient': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        gradientShift: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        }
      }
    },
  },
  plugins: [],
}
