module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./screen/**/*.{html,js}",
    "./src/**/*.{html,js}",
    "./auth/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
}
