<template>
  <div class="row justify-content-center">
    <div class="banner col-12 col-md-12 position-relative">
      <div class="bannerText position-absolute top-50 end-10">
        <h2 class="text-white fs-1 mb-4">感謝您的購買</h2>
        <button type="button" class="fs-2 btn btn-lg px-3 py-2 text-center text-white rounded-pill shadow bg-info" @click="goHomepage">回首頁</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHomepage () {
      this.$router.push('/');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/views/success';
</style>
