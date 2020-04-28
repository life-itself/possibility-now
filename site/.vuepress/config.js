module.exports = {
  title: "Art / Earth / Tech",
  description: "",
  dest: "public",
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer")
    ]
  },
  // markdown: {
  //   linkify: true,
  //   typographer: true,
  //   breaks: true,
  //   html: true,
  //   toc: {
  //     includeLevel: [2, 3]
  //   },
  //   extendMarkdown: md => {
  //     md.use(require("markdown-it-footnote"));
  //   }
  // },
  themeConfig: {
    logo: "/assets/img/datopian-logo.svg",
    // don't want navbar item for this atm
    // repo: "https://github.com/datopian",
    // repoLabel: "GitHub",
    // docsRepo: "https://gitlab.com/datopian/core/datopian.com",
    docsDir: "site",
    // defaults to false, set to true to enable
    editLinks: true,
    smoothScroll: true,
    sidebar: 'auto',
    nav: [
      {
        text: "Offerings",
        items: [
          { text: "Datopian DMS", link: "/datopian-dms/" },
          { text: "Datopian Cloud", link: "/datopian-cloud/" },
          { text: "Data Engineering", link: "/data-engineering/" },
          { text: "Data Strategy", link: "/data-strategy/" }
        ]
      },
      {
        text: "Solutions",
        items: [
          { text: "Open Data for Governments", link: "/solutions/open-data-for-governments/" },
          { text: "Enterprise Internal Data Catalog", link: "/solutions/enterprise-internal-data-catalog/" },
          { text: "Fiscal Transparency for Governments", link: "/solutions/fiscal-transparency-for-governments/" }
        ]
      },
      {
        text: "About",
        items: [
          { text: "Vision", link: "/about/#our-vision" },
          { text: "Team", link: "/about/#team" },
          { text: "Culture", link: "/about/#culture" },
          { text: "Partners", link: "/about/#partners" },
          { text: "Clients", link: "/about/#clients" },
          { text: "Playbook", link: "https://playbook.datopian.com/" }
        ]
      },
      { text: "Blog", link: "/blog/" },
      { text: "Hire Us", link: "/contact/" }
    ]
  },
  // plugins: [
  //     [
  //       "@vuepress/plugin-google-analytics",
  //       {
  //         ga: "UA-144039037-1"
  //       }
  //   ],
  //   [
  //     "@vuepress/blog",
  //     {
  //       directories: [
  //         {
  //           // Unique ID of current classification
  //           id: "blog",
  //           // Target directory
  //           dirname: "blog",
  //           // Path of the `entry page` (or `list page`)
  //           path: "/blog/",
  //           itemPermalink: "/blog/:year/:month/:day/:slug",
  //           pagination: {
  //             lengthPerPage: 10
  //           }
  //         }
  //       ]
  //     }
  //   ]
  // ]
};
