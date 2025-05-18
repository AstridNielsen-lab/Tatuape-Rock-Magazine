/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        accent: 'hsl(var(--color-accent) / <alpha-value>)',
        highlight: 'hsl(var(--color-highlight) / <alpha-value>)',
        dark: 'hsl(var(--color-dark) / <alpha-value>)',
        light: 'hsl(var(--color-light) / <alpha-value>)',
        success: 'hsl(var(--color-success) / <alpha-value>)',
        warning: 'hsl(var(--color-warning) / <alpha-value>)',
        error: 'hsl(var(--color-error) / <alpha-value>)',
      },
      fontFamily: {
        heading: ['Verdana', 'Arial', 'sans-serif'],
        subheading: ['Tahoma', 'Verdana', 'sans-serif'],
        body: ['Verdana', 'system-ui', 'sans-serif'],
      },
      animation: {
        'record-spin': 'spin 6s linear infinite',
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};