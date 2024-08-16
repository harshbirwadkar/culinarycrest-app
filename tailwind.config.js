/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'white-smoke': '#FAF2F2',
      'matterhorn': '#5C5353',
      'alabaster': '#F5F3EB',
      'sorrell-brown': '#967864',
      'medium-turquoise': '#43C5C1',
      'my_red': '#ca4754',
      'black-rgba': 'rgba(0, 0, 0, 0.4)',
      'white-rgba-0.5': 'rgba(255, 255, 255, 0.5)',
      'white-rgba-0.8': 'rgba(255, 255, 255, 0.8)',
      'mid-line-color': 'rgba(200, 193, 193, 0.49)',
      'inputbox-outline-color': 'rgba(197, 192, 174, 1)',
      'button2-color': 'rgba(152, 191, 90, 1)',
    },
    backgroundImage: {
      'hero-page-img': "url('https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/satay-aubergine-and-roasted-broccoli-53a1bb4c.jpg')"
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      font1: ['"IBM Plex Sans Condensed"', 'sans-serif'],
      font2: ['"Merriweather Sans"', 'sans-serif'],
      font3: ['"Playfair Display"', 'serif'],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

