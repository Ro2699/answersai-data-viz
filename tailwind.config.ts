import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: true,
  },
  theme: {
    extend: {
      colors: {
        primary: '#646cff',
        accent: '#4ade80', // Green accent for ring, buttons, etc.
        muted: '#2c2c2e',
        background: '#0f0f0f',
        card: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      boxShadow: {
        'lg-accent': '0 4px 6px -1px rgba(74, 222, 128, 0.1), 0 2px 4px -1px rgba(74, 222, 128, 0.06)',
      },
      ringColor: {
        accent: '#4ade80',
      },
    },
  },
  plugins: [],
}

export default config
