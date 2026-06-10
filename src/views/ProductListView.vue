<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-sm-12">
        <div class="banner d-flex justify-content-center align-items-center">
          <div class="bannerText w-75 bg-black opacity-50 shadow text-white p-3">
            <h2 class="fs-1 mb-4">尋找自己的吉他</h2>
            <p>展開一段專屬於你的音樂旅程</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row px-5 mt-4 justify-content-center "> <!--category-->
      <div class="col-6 col-lg-3 col-sm-12 col-xs-12">
        <div class="col-12 col-lg-12 col-md-12 col-sm-12 mb-3 ">
          <h3 class="text-primary">目錄</h3>
        </div>
        <div class="col-12 col-lg-12 col-md-12 col-sm-12 mb-3">
          <select class=" selectCategory form-select px-2 py-2 fs-5 fw-bold" v-model="selected"  @change="getProduct(selected)">
            <option class="text-primary ps-2" v-for="item in category" :key=" item + 123" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 my-3 fw-bold">
        <h1 class="text-primary">{{ selected }}</h1>
      </div>
    </div>
    <div class="row  px-5 py-4 "> <!--card-->
      <div class="col-12 col-lg-3 col-md-4 px-2 py-2 "  v-for=" item in products" :key="item.id">
        <router-link :to="`/productInfor/${ item.id }`" class="link text-decoration-none">
          <div class="card border-0 w-100 position-relative">
            <div class="pic overflow-hidden">
              <img :src="item.imageUrl" class="card-img w-75" :alt="item.title">
            </div>
            <div class="over card-img-overlay position-absolute">
              <router-link :to="`/productInfor/${ item.id }`" class="link text-white text-decoration-none">了解更多</router-link>
            </div>
            <div class="card-body px-5 py-2 text-start mt-2 ">
              <h5 class="card-title mb-2">{{ item.title }}</h5>
              <p class="card-text">NT${{ item.price }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <ApiLoading ref="load"/>
</template>

<script>
import ApiLoading from '@/components/ApiLoading.vue';
import { getProducts, getAllProducts } from '@/controllers/ProductController';
import { withLoading } from '@/utils/useAsyncData.js';
export default {
  components: {
    ApiLoading
  },
  data () {
    return {
      category: [],
      products: [],
      selected: '全部商品'
    };
  },
  methods: {
    async getProduct (category) {
      await withLoading(
        this.$refs.load,
        async () => {
          this.products = await getProducts(category);
          if (!category || category === '全部商品') {
            this.$router.push('/productList');
          } else {
            this.selected = category;
            this.$router.push(`/productList/${this.selected}`);
          }
        },
        '商品載入失敗，請稍後再試'
      );
    }
  },
  async mounted () {
    const category = this.$route.params.category || '';
    await withLoading(
      this.$refs.load,
      async () => {
        const [products, allProducts] = await Promise.all([
          getProducts(category),
          getAllProducts()
        ]);
        this.products = products;
        if (category && category !== '全部商品') {
          this.selected = category;
          this.$router.push(`/productList/${category}`);
        } else {
          this.$router.push('/productList');
        }
        const totalCategory = allProducts.map(item => item.category);
        this.category = totalCategory.filter((item, i) => totalCategory.indexOf(item) === i);
        this.category.unshift('全部商品');
      },
      '資料載入失敗，請稍後再試'
    );
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/views/product-list';
</style>
