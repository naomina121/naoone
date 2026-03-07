const eslintPluginAstro = require("eslint-plugin-astro");
module.exports = [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs["flat/recommended"], // In CommonJS, the `flat/` prefix is required.
  {
    rules: {
      // override/add rules settings here, such as:
      "astro/no-set-html-directive": "error",
      "astro/no-unsafe-inline-scripts": "error",
      "astro/no-set-text-directive": "error",
      "astro/no-unused-css-selector": "warn",
    },
  },
];
