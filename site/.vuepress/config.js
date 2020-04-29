const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: ["./site/.vuepress/theme/**/*.*", "./!(node_modules)/**/*.md", "./*.md"],
  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

module.exports = {
  title: "Possibility Now! A different future is possible",
  description: "In this moment of crisis, a space of possibility is opening up. Let's sustain and grow it!",
  head: [
    ['link', { rel: "icon", href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌻</text></svg>"}],
    ['link', { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,400i,500,700&display=swap" }],
    ['meta', {property: "og:image", content: "https://possibilitynow.org/img/possibilitynow.png" }]
  ],
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
