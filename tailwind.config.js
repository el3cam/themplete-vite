export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        're-xs': ['clamp(0.75rem, 1vw, 0.875rem)', { lineHeight: '1rem' }],
        're-sm': ['clamp(0.875rem, 1.2vw, 1rem)', { lineHeight: '1.25rem' }],
        're-base': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.5rem' }],
        're-md': ['clamp(1.125rem, 1.8vw, 1.25rem)', { lineHeight: '1.75rem' }],
        're-lg': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '2rem' }],
        're-xl': ['clamp(1.5rem, 2.5vw, 1.75rem)', { lineHeight: '2.25rem' }],
        're-2xl': ['clamp(1.75rem, 3vw, 2rem)', { lineHeight: '2.5rem' }],
        're-3xl': ['clamp(2rem, 3.5vw, 2.25rem)', { lineHeight: '2.75rem' }],
        're-4xl': ['clamp(2.25rem, 4vw, 2.5rem)', { lineHeight: '3rem' }],
        're-5xl': ['clamp(2.5rem, 4.5vw, 3rem)', { lineHeight: '1' }],
        're-6xl': ['clamp(3rem, 5vw, 3.75rem)', { lineHeight: '1' }],
        're-7xl': ['clamp(3.75rem, 6vw, 4.5rem)', { lineHeight: '1' }],
        're-8xl': ['clamp(4.5rem, 7vw, 6rem)', { lineHeight: '1' }],
        're-9xl': ['clamp(6rem, 8vw, 8rem)', { lineHeight: '1' }],
      },
    },
  },
  plugins: [],
}