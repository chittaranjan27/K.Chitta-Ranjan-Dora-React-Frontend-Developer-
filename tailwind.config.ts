import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Add custom colors, fonts, spacing, etc. here
      colors: {
        primary: '#1E40AF', // example custom color
        secondary: '#FACC15',
      },
    },
  },
  plugins: [],
};

export default config;
