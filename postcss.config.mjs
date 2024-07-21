/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    "postcss-import": {}, // Line 1
    "postcss-nested": {}, // Line 2
    tailwindcss: {},
  },
};

export default config;
