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
  themeConfig: {
    logo: "https://old.artearthtech.com/images/aet-logo-02.svg",
    docsDir: "site",
    editLinks: true,
    smoothScroll: true,
  }
};
