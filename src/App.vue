<template>
  <FrontNavbar/>
  <router-view/>
  <FooterPage/>
</template>

<script>
import FrontNavbar from '@/components/FrontNavbar.vue';
import FooterPage from '@/components/FooterPage.vue';
export default {
  components: {
    FrontNavbar,
    FooterPage
  },
  watch: {
    $route (to) {
      const nowTitle = to.meta.title || 'MyGuitar';
      document.title = nowTitle;
    }
  }
};
</script>

<style lang="scss">
@import "./assets/stylesheets/all";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
