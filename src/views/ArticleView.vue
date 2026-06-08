<template>
  <div class="container-fluid">
    <div class="row ">
      <div class="col-12 col-md-12 col-lg-12 col-sm-12 ">
        <div class="banner d-flex align-items-center justify-content-center">
          <div class="bannerText w-75 text-white">
            <h1 class="py-2">不知道怎麼選?!</h1>
            <h2 class="py-2">進來看看吧!</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-5 px-5 bg-primary justify-content-center" v-for="item in articleData" :key="item.id">
      <div class="col-12 col-sm-12 col-md-12 col-lg-6 px-5">
        <img :src="item.image" :alt="item.title"  class="w-100 border">
      </div>
      <div class="articleText col-12 col-sm-12 col-md-8 col-lg-5 text-white text-start pe-5 pt-3">
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
            <router-link :to="`/articleList/${item.id}`" class="text-decoration-none text-white fs-5">繼續閱讀</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ApiLoading ref="load" />
</template>

<script>
import ApiLoading from '@/components/ApiLoading.vue';
import { getArticles } from '@/controllers/ArticleController';
import { withLoading } from '@/utils/useAsyncData.js';
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
    async getArticle () {
      await withLoading(
        this.$refs.load,
        async () => { this.articleData = await getArticles(); },
        '文章載入失敗，請稍後再試'
      );
    }
  },
  mounted () {
    this.getArticle();
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/views/article';
</style>
