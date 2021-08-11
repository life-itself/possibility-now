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
    ['link', {rel: "stylesheet", href: "https://sibforms.com/forms/end-form/build/sib-styles.css"}]
  ],
  dest: "public",
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require('autoprefixer'),
      // ...process.env.NODE_ENV === 'production'
      //   ? [purgecss, require('cssnano')]
      //   : []
    ]
  },
  themeConfig: {
    logo: "/img/possibility-now-logo.svg",
    docsDir: "site",
    editLinks: true,
    smoothScroll: true,
    nav: [ 
      { 
      text: "Futures", 
      items: [
        { text: "Futures", link: "/futures/" },
        { text: "Directory", link: "/directory/" },
        ]
      }
    ]
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-102022428-4'
      }
    ],
    [
      '@limdongjin/vuepress-plugin-simple-seo', 
      {
      default_image: '/img/possibilitynow.png',
      root_url: 'https://possibilitynow.org',
      default_site_name: 'Possibility Now! A different future is possible.',
      description: "In this moment of crisis, a space of possibility is opening up. Let's sustain and grow it!"
      }
    ]
  ]
};
