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
        "secondary": "#35327c",
        "light": "#EFFCF8",
        "dark": "#545479",
        "danger": "#FF9B82",
        "warning": "#ED9660",
        "success": "#CDEE8F"
      },
      maxWidth: {
        "10xl": "1440px"
      },
      boxShadow: {
        menu: '0px 159px 95px rgba(13,12,34,0.01), 0px 71px 71px rgba(13,12,34,0.02), 0px 18px 39px rgba(13,12,34,0.02), 0px 0px 0px rgba(13,12,34,0.02)',
      },
    },
  },
  plugins: [],
  "darkMode": "class"
}
export default config
