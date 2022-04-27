<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-sm-12">
        <div class="banner">
          <div class="bannerText text-white">
            <h2>尋找自己的吉他</h2>
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
        <router-link :to="`/productInfor/${ item.id }`" class="link">
          <div class="card border-0  w-100 ">
            <div class="pic border-info">
              <img :src="item.imageUrl" class="card-img w-75" :alt="item.title">
            </div>
            <div class=" over card-img-overlay">
              <router-link :to="`/productInfor/${ item.id }`" class="link text-white">了解更多</router-link>
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
export default {
  components: {
    ApiLoading
  },
  data () {
    return {
      category: [],
      products: [],
      quality: 0,
      productId: '',
      selected: '全部商品'
    };
  },
  methods: {
    getProduct (category) {
      this.$refs.load.doAjax();
      if (!category || category === '全部商品') {
        this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`)
          .then(res => {
            this.products = res.data.products;
            this.$router.push('/productList');
            this.$refs.load.timeIsOut();
          })
          .catch(err => {
            console.log(err);
            this.$refs.load.timeIsOut();
          });
      } else {
        this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${category}`)
          .then(res => {
            this.products = res.data.products;
            this.selected = category;
            this.$router.push(`/productList/${this.selected}`);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    getCategory () {
      let tempCategory = [];
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`)
        .then(res => {
          tempCategory = res.data.products;
          let totalCategory = [];
          totalCategory = tempCategory.map((item) => {
            return item.category;
          });
          this.category = totalCategory.filter((item, i) => {
            return totalCategory.indexOf(item) === i;
          });
          this.category.unshift('全部商品');
        })
        .catch(err => {
          console.log(err);
        });
    },
    addCart (item, quality) {
      this.tempData = item;
      this.quality = quality;
      const write = {
        product_id: this.tempData.id,
        qty: this.quality
      };
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data: write })
        .then(res => {
          this.openModal();
        })
        .catch(err => {
          console.log(err);
        });
    },
    goProductInformation (productId) {
      this.$router.push(`/productInformation/:${productId}`);
    }
  },
  mounted () {
    this.getProduct(!this.$route.params.category ? '' : this.$route.params.category);
    this.getCategory();
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
  height: 60vh;
  background-image: url('../assets/img/kari-shea-YCQFgqOzLmU-unsplash.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
    .bannerText{
      width:70%;
      background-color: black;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      opacity: 50%;
    }
    h2{
      font-size: 3rem;
      margin-bottom: 1.5rem;
    }
}
.selectCategory{
  border: solid 2px #51423C;
}
.card{
  position: relative;
}
.over{
  position: absolute;
  top:30%;
  font-size:2rem;
  display: none;
  z-index:1;
  .link{
    text-decoration: none;
  }
}
.pic{
  overflow: hidden;
    img{
      transition: all 1s 0s ease;
    }
}
.card:hover .card-img{
  filter: contrast(50%);
  transform: scale(1.1);
}
.card:hover .over{
  display: inline-block;
}
a{
  text-decoration: none;
}
</style>
