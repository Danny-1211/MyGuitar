<template>
  <div class="container-fluid">
    <div class="banner col-12 col-md-12">
      <div class="bannerText justify-content-center">
        <h1>404</h1>
        <h2>完蛋!找不到網頁哩</h2>
        <router-link to="/" class="btn btn-lg btn-outline">返回首頁</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
.banner{
  height: calc( 100vh - 58px);
  background-image: url('../assets/img/error.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  opacity: 85%;
    .bannerText{
      position: absolute;
      top:50%;
      left:30%;
      right:30%;
      line-height: 5.5rem;
    }
    a:hover{
      transition: 2s 0s ease;
      color:#43342F;
    }
}
</style>
