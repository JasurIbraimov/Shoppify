import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#00C9A7",
        "secondary": "#4B31A1",
        "light": "#EFFCF8",
        "dark": "#545479",
        "danger": "#FF9B82",
        "warning": "#ED9660",
        "success": "#CDEE8F"
      },
      maxWidth: {
        "10xl": "1680px"
      },
    },
  },
  plugins: [],
  "darkMode": "class"
}
export default config
