<template>
  <div class="container-fluid">
    <div class="row bg-primary" style=" height:10vh;">
    </div>
    <div class="row py-5 px-5 justify-content-center bg-primary" >
      <div class="col-12 col-sm-12 col-md-12 col-lg-5 ">
        <img :src="information.imageUrl" class="w-75 border" :alt="information.title">
      </div>
      <div class="col-12 col-sm-12 col-md-6" >
        <div class="row justify-content-center my-3 " >
          <div class="col-sm-12 col-md-12 col-lg-12 text-white" style="text-align:left;">
            <h1>{{ information.title }}</h1>
          </div>
        </div>
        <div class="row justify-content-center mb-4" >
          <div class="col-sm-12 col-md-12 col-lg-12 text-white" style="text-align:left;">
            <h3>售價: NT ${{ information.price }}</h3>
          </div>
        </div>
        <div class="row justify-content-center mb-4 ">
          <div class="col-sm-12 col-lg-12 col-md-12  my-5 text-white" style="line-height:2rem; text-align:left">
            <p>{{ information.description }}</p>
          </div>
        </div>
        <div class="row justify-content-start mb-4">
          <div class="col-sm-12 col-lg-6 col-md-12" style="text-align:left;">
            <div class="input-group input-group-md mb-3">
              <input type="number" class="form-control input-group-sm fs-5 ps-2 text-info" placeholder="請輸入數量" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="qty">
              <button type="button" class="btn btn-lg text-white px-3 py-2 fs-5 border border-white" @click="addCart(information, qty)">
                加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row py-2 justify-content-center border-top bg-primary" >  <!--挑選吉他-->
      <div class="col-12 col-sm-12 col-md-12 col-lg-2 mt-5 ">
        <h2 style="color:white">| 產品規格</h2>
      </div>
    </div>
    <div class="row py-5 justify-content-center bg-primary" >
      <div class="col-10 px-2 py-2 bg-info">
        <p class="content text-white">{{ information.content }}</p>
      </div>
    </div>
    <div class="row py-2 justify-content-center border-top bg-primary" >  <!--挑選吉他-->
      <div class="col-12 col-sm-12 col-md-12 col-lg-2 mt-5 ">
        <h2 style="color:white">| 點擊試聽</h2>
      </div>
    </div>
    <div class="row py-5 px-5 justify-content-center bg-primary">
      <vue-plyr>
        <div class="plyr__video-embed" ref="plyr">
          <iframe style="width:900px; height:500px;" :src="`${ information.vid }`" allowtransparency allowfullscreen allow="autoplay"></iframe>
        </div>
      </vue-plyr>
    </div>
    <div class="row justify-content-center bg-primary">
      <div class="col-12 col-sm-12 col-md-12 col-lg-2 mt-5 ">
        <h2 style="color:white">| 類似商品</h2>
      </div>
    </div>
    <div class="row justify-content-center px-5 py-4 bg-primary"> <!--card-->
      <div class="col-12 col-lg-3 col-md-3 col-sm-12 mb-2"  v-for=" item in sameProduct" :key="item.id">
        <router-link :to="`/productInfor/${ item.id }`" class="link text-primary text-decoration-none">
          <div class="card border-0 w-100 bg-primary position-relative">
            <div class="pic w-80 px-5 overflow-hidden">
              <img :src="item.imageUrl" class="card-img w-100" :alt="item.title">
            </div>
            <div class="over card-img-overlay position-absolute">
              <router-link :to="`/productInfor/${ item.id }`" class="link text-white text-decoration-none">了解更多</router-link>
            </div>
            <div class="card-body px-5 py-2 text-start mt-2 ">
              <h5 class="card-title mb-2 text-white">{{ item.title }}</h5>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <ApiLoading ref="load" />
</template>

<script>
import ApiLoading from '@/components/ApiLoading.vue';
import swal from '@/utils/swal.js';
import { mapActions } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import { getProductById, getSameProducts } from '@/controllers/ProductController';
import { addToCart } from '@/controllers/CartController';
import { withLoading } from '@/utils/useAsyncData.js';
import { showSuccessAlert, showFailAlert } from '@/utils/useAlert.js';
import { validateQuantity } from '@/utils/validators.js';
export default {
  components: {
    ApiLoading
  },
  data () {
    return {
      information: {},
      sameProduct: [],
      sameCategory: '',
      qty: 1,
      pageId: this.$route.params.id
    };
  },
  methods: {
    ...mapActions(useCartStore, ['fetchCart']),
    async getProductInformation (productId) {
      await withLoading(
        this.$refs.load,
        async () => {
          this.information = await getProductById(productId);
          this.sameCategory = this.information.category;
          await this.getSameProduct(this.sameCategory);
        },
        '商品載入失敗，請稍後再試'
      );
    },
    async addCart (item, qty) {
      if (validateQuantity(qty)) {
        try {
          await addToCart(item.id, qty);
          showSuccessAlert();
          await this.fetchCart();
        } catch {
          swal.fire('', '加入購物車失敗，請稍後再試', 'error');
        }
      } else {
        showFailAlert();
      }
      this.qty = 1;
    },
    async getSameProduct (sameCategory) {
      try {
        const products = await getSameProducts(sameCategory);
        this.sameProduct = products.filter(item => item.id !== this.$route.params.id);
      } catch {
        swal.fire('', '類似商品載入失敗', 'error');
      }
    }
  },
  beforeRouteUpdate (to) {
    this.pageId = to.params.id;
    this.getProductInformation(this.pageId);
  },
  mounted () {
    this.getProductInformation(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/views/product-information';
</style>
