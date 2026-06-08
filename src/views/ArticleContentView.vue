<template>
  <div class="container-fluid">
    <div class="row bg-primary" style="height:20vh;">
    </div>
    <div class="row">
      <div class="col-10 col-sm-12 col-lg-12 col-md-12 mt-4">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb text-info">
            <li class="breadcrumb-item"><router-link to="/" class="text-decoration-none">首頁</router-link></li>
            <li class="breadcrumb-item"><router-link to="/articleList" class="text-decoration-none">文章列表</router-link></li>
            <li class="breadcrumb-item active" aria-current="page">{{ article.title }}</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 ">
        <img :src="article.image" class="w-100" :alt="article.title">
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 col-sm-12 col-md-10 col-lg-10 mt-5 px-2 text-start border-bottom">
        <h1>{{ article.title }}</h1>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 col-sm-10 col-md-10 col-lg-10  text-start px-2 mt-2">
        <p>作者: {{ article.author }}</p>
        <p>發布日期: {{ article.create_at ? new Date(article.create_at * 1000).toLocaleDateString() : '未知日期' }}</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 col-sm-10 col-md-10 col-lg-10  text-start px-2 py-2 mt-5 bg-warning" >
        <h2>{{ article.content }}</h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 col-sm-10 col-md-10 col-lg-10  text-start px-2 py-2 bg-warning" >
        <p>{{ article.text1 }}</p>
        <p>{{ article.text2 }}</p>
        <p>{{ article.text3 }}</p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 col-sm-10 col-md-10 col-lg-10  text-start px-2 mt-5">
        <h5>此文章內容引用自<a class="text-success text-decoration-none" :href="article.articleLink">此文</a></h5>
      </div>
    </div>
    <div class="row justify-content-around">
      <div class="col-10 col-sm-10 col-md-10 col-lg-10 px-2 my-5">
        <router-link class="link px-4 py-3 text-info text-center fs-5 text-decoration-none" to='/productList'>前往購物</router-link>
        <router-link class="link px-4 py-3 text-info text-center fs-5 text-decoration-none" to='/articleList'>其他文章</router-link>
      </div>
    </div>
  </div>
  <ApiLoading  ref="load" />
</template>

<script>
import ApiLoading from '@/components/ApiLoading.vue';
import { getArticleById } from '@/controllers/ArticleController';
import { withLoading } from '@/utils/useAsyncData.js';
export default {
  components: {
    ApiLoading
  },
  data () {
    return {
      article: []
    };
  },
  methods: {
    async getArticle (id) {
      await withLoading(
        this.$refs.load,
        async () => { this.article = await getArticleById(id); },
        '文章載入失敗，請稍後再試'
      );
    }
  },
  mounted () {
    this.getArticle(this.$route.params.articleContent);
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/views/article-content';
</style>
