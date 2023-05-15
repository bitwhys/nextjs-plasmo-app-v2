const { mauve, mauveDark, plum, plumDark, red, redDark, mint, mintDark } = require('@radix-ui/colors')

const radixToTailwind = radixColorObject => {
  const captureScaleRegEx = new RegExp(/(\d{1,2})/)
  const color = {}
  for (const [token, value] of Object.entries(radixColorObject)) {
    const match = token.match(captureScaleRegEx)
    if (match) {
      Object.assign(color, { [match[1]]: value })
    }
  }
  return color
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: 'hsl(var(--canvas))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--background))',
        muted: 'hsl(var(--background))',
        'muted-foreground': 'hsl(var(--background))',
        accent: 'hsl(var(--background))',
        'accent-foreground': 'hsl(var(--background))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
