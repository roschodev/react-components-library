module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'discord-gray': '#2f3136',
        'discord-blue': '#7289da',
        'discord-green': '#43b581',
        'discord-red': '#f04747',
      },
      spacing: {
        'sidebar-width': '250px',
      },
    },
  },
  plugins: [],
}