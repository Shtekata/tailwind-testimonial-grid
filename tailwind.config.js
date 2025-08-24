// console.log('TAILWIND CONFIG IS LOADED')
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      spacing: {
        180: 'var(--spacing-180)',
      },
    },
  },
}
