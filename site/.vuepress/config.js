const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./.vuepress/theme/**/*.*", "./!(node_modules)/**/*.md", "./*.md"],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  title: "Art / Earth / Tech",
  description: "",
  dest: "public",
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require('autoprefixer'),
      ...process.env.NODE_ENV === 'production'
        ? [purgecss, require('cssnano')]
        : []
    ]
  },
  themeConfig: {
    logo: "https://old.artearthtech.com/images/aet-logo-02.svg",
    docsDir: "site",
    editLinks: true,
    smoothScroll: true,
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-102022428-4'
      }
    ]
  ]
};
