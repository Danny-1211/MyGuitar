<template>
  <div class="container-fluid">
    <div class="row bg-primary" style=" height:10vh;">
    </div>
    <div class="row py-5 px-5 justify-content-center bg-primary" >
      <div class="col-12 col-sm-12 col-md-12 col-lg-5 ">
        <img v-bind:src="information.imageUrl" class="w-75 border" :alt="information.title">
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
              <input type="number" class="form-control input-group-sm fs-5 ps-2 text-info" placeholder="請輸入數量" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="quality">
              <button type="button" class="btn btn-lg text-white px-3 py-2" @click="addCart(information,quality)">
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
          <iframe style="width:900px; height:500px;" v-bind:src="`${ information.vid }`" allowtransparency allowfullscreen allow="autoplay"></iframe>
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
        <router-link :to="`/productInfor/${ item.id }`" class="link text-primary">
          <div class="card border-0 w-100 bg-primary">
            <div class="pic w-80 px-5">
              <img :src="item.imageUrl" class="card-img w-100" :alt="item.title">
            </div>
            <div class=" over card-img-overlay">
              <router-link :to="`/productInfor/${ item.id }`" class="link text-white">了解更多</router-link>
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
import AddSuccessMessageAlert from '@/utils/AddSuccessMessageAlert.js';
import AddFailMessageAlert from '@/utils/AddFailMessageAlert.js';
import ApiLoading from '@/components/ApiLoading.vue';
import emitter from '@/utils/emitter.js';
export default {
  mixins: [AddFailMessageAlert, AddSuccessMessageAlert],
  components: {
    ApiLoading
  },
  data () {
    return {
      information: [],
      sameProduct: [],
      sameCategory: '',
      quality: 1,
      pageId: this.$route.params.id,
      mp3Name: ''
    };
  },
  methods: {
    getProductInformation (productId) {
      this.$refs.load.doAjax();
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${productId}`)
        .then(res => {
          this.information = res.data.product;
          this.mp3Name = this.information.vid;
          this.sameCategory = this.information.category;
          this.getSameProduct(this.sameCategory);
        })
        .catch(err => {
          console.log(err);
        });
    },
    addCart (item, quality) {
      this.tempData = item;
      const confirm = /^[-+]?[0-9]+\.[0-9]+$/; // 浮點數正規表達
      if (!confirm.test(quality) && quality > 0 && quality <= 20) {
        const write = {
          product_id: this.tempData.id,
          qty: this.quality
        };
        this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data: write })
          .then(res => {
            this.showSuccessAlert();
            emitter.emit('get-cart');
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.showAlert();
      }
      this.quality = 1;
    },
    getSameProduct (sameCategory) {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${sameCategory}`)
        .then(res => {
          this.sameProduct = res.data.products;
          this.sameProduct = this.sameProduct.filter(item => { // 不要抓到目前的產品，只要抓到同一個目錄的其他產品
            return item.id !== this.$route.params.id;
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  watch: {
    $route (to) {
      this.pageId = to.params.id;
      this.getProductInformation(this.pageId);
    }
  },
  mounted () {
    this.getProductInformation(this.$route.params.id);
  }
};
</script>

<style lang="scss" scoped>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
  max-width: 100%;
}
button{
  font-size:1.5rem;
  border:1px solid white;
}
button:hover{
  background-color: #627364;
}
.content{
  white-space: pre-wrap;
}
.card{
  position: relative;
}
.over{
  position: absolute;
  top:40%;
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
</style>
