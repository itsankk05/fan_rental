const { defineConfig } = require("vite");
const config = require("./src/villas");
const react = require("@vitejs/plugin-react-swc");

module.exports = defineConfig({
  plugins: [react()],
});
