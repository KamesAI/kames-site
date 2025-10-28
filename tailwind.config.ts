import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        foreground: '#ffffff',
        secondaryText: '#151515',
        brandGradientStart: '#FFB300',
        brandGradientMid: '#FF6D00',
        brandGradientEnd: '#F538A0',
      },
      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [],
}

export default config
