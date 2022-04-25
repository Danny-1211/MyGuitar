<template>
  <div class="row justify-content-center">
    <div class="banner col-12 col-md-12">
      <div class="bannerText">
        <h2 class="text-white">感謝您的購買</h2>
        <button type="button" class="btn btn-lg px-3 py-2" @click="goHomepage">回首頁</button>
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
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
.banner{
  height: calc( 100vh - 58px);
  background-image: url('../assets/img/do-hoang-anh-Ovfhp4IrmuU-unsplash.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  opacity: 85%;
    .bannerText{
      position: absolute;
      top:50%;
      right:10%;
        h2{
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }
        button {
          text-align: center;
          font-size:2rem;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 100px;
          background-color:#627364;
          color:white;
          transition: all 1s 0s ease;
        }
        button:hover{
          transform: scale(1.2);
        }
    }
}
</style>
