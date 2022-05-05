<template>
  <div class="container-fluid">
    <div class="row ">
      <div class="col-12 col-md-12 col-lg-12 col-sm-12 ">
        <div class="banner ">
          <div class="bannerText text-white">
            <h1 class="py-2">不知道怎麼選?!</h1>
            <h2 class="py-2">進來看看吧!</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-5 px-5 bg-primary justify-content-center" v-for="item in articleData" :key="item+132">
      <div class="col-12 col-sm-12 col-md-12 col-lg-6 px-5">
        <img :src="item.image" :alt="item.title"  class="w-100 border">
      </div>
      <div class="articleText  px-5 col-12 col-sm-12 col-md-8 col-lg-5 text-white text-start" >
        <div class="row mb-5" >
          <div class="col-sm-12 col-md-12 col-lg-12">
            <h2>{{ item.title }}</h2>
          </div>
        </div>
        <div class="row mb-5" >
          <div class="desc col-sm-12 col-md-12 col-lg-12">
            <p>{{ item.description }}</p>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-sm-12 col-lg-4 col-md-12 ">
            <p>{{ new Date().toLocaleDateString() }}</p>
          </div>
        </div>
        <div class="row  my-5">
          <div class="col-sm-12 col-lg-4 col-md-12 ">
            <router-link  :to="`/articleList/${item.id}`">繼續閱讀</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ApiLoading ref="load" />
</template>

<script>
import ApiLoading from '@/components/ApiLoading.vue';
export default {
  components: {
    ApiLoading
  },
  data () {
    return {
      articleData: []
    };
  },
  methods: {
    getArticle () {
      this.$refs.load.doAjax();
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles`)
        .then(res => {
          this.articleData = res.data.articles;
          this.$refs.load.timeIsOut();
        })
        .catch(err => {
          console.log(err);
          this.$refs.load.timeIsOut();
        });
    }
  },
  mounted () {
    this.getArticle();
  }
};
</script>

<style lang="scss" scoped>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
.banner{
  height: 50vh;
  background-image: url('../assets/img/nii-a_sjYst1xJo-unsplash.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  .bannerText{
    width:70%;
  }
}
.articleText{
  padding-right:1rem;
  padding-top: 1rem;
  a{
    text-decoration: none;
    font-size:1.5rem;
    transition: all 1s 0s ease;
    color:white;
  }
  a:hover{
    color:#627364;
  }
}
</style>
