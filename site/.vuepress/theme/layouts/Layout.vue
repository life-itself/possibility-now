<template>
  <div class="w-full py-10 px-0">
    <Navbar class="nav-bar" v-if="shouldShowNavbar" />
    <div class="inner-container pb-16">
      <Home />
      <Directory v-if="$page.frontmatter.layout === 'directory'" />
    </div>
  </div>
</template>

<script>
import Home from "../components/Home.vue";
import Navbar from "../components/Navbar.vue";
import Directory from "../components/Directory.vue";

export default {
  components: {
    Home,
    Navbar,
    Directory
  },
  data() {
    return {
    };
  },
  computed: {
  shouldShowNavbar() {
    const { themeConfig } = this.$site;
    const { frontmatter } = this.$page;
    if (frontmatter.navbar === false || themeConfig.navbar === false) {
      return false;
    }
    return (
      this.$title ||
      themeConfig.logo ||
      themeConfig.repo ||
      themeConfig.nav ||
      this.$themeLocaleConfig.nav
    );
  },
  pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      const layoutClass = this.$page.frontmatter.layout;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar
        },
        layoutClass,
        userPageClass
      ];
    },
  }
};
</script>
