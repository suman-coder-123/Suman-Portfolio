/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: 'rgb(var(--canvas) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          900: 'rgb(var(--ink-900) / <alpha-value>)',
          800: 'rgb(var(--ink-800) / <alpha-value>)',
          700: 'rgb(var(--ink-700) / <alpha-value>)',
          600: 'rgb(var(--ink-600) / <alpha-value>)',
          500: 'rgb(var(--ink-500) / <alpha-value>)',
          400: 'rgb(var(--ink-400) / <alpha-value>)',
          300: 'rgb(var(--ink-300) / <alpha-value>)',
          200: 'rgb(var(--ink-200) / <alpha-value>)',
        },
        navy: {
          DEFAULT: '#0B1B33',
          800: '#102544',
          900: '#081426',
        },
        brand: {
          50: '#EEF4FF',
          100: '#DCE8FF',
          200: '#BFD4FF',
          300: '#93B4FF',
          400: '#5B8DEF',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
          800: '#1E3A8A',
          900: '#0B1B3B',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope Variable', 'Manrope', 'Inter', 'ui-sans-serif', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10, 15, 26, 0.04), 0 10px 30px -18px rgba(10, 15, 26, 0.18)',
        lift: '0 2px 4px rgba(10, 15, 26, 0.04), 0 28px 60px -32px rgba(10, 15, 26, 0.35)',
        card: '0 1px 1px rgba(10, 15, 26, 0.03), 0 12px 36px -24px rgba(10, 15, 26, 0.22)',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.8)', opacity: '0' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.22, 1, 0.36, 1) infinite',
        float: 'float 7s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
