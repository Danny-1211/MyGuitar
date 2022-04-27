<template>
  <div class="container-fluid">
    <div class="row bg-primary"  style="height:10vh;">
    </div>
    <div class="row pt-5 mb-3 pb-3 justify-content-center bg-primary" style=" border-bottom:solid 1px white;"> <!--熱門商品-->
      <div class="col-12 col-md-12 col-lg-4 col-sm-12 pb-3">
        <h1 class="text-white">訂購成功!</h1>
      </div>
    </div>
    <div class="row justify-content-center mb-3">
      <div class="col-lg-4 col-md-4 col-sm-12 px-3">
        <div class="progress " style="height: 30px;">
          <div class="progress-bar bg-info" role="progressbar" style="width:75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">3. 訂購完成</div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center ">
      <div class="col-8 py-3 bg-warning">
        <h3>訂單資訊</h3>
      </div>
    </div>
    <div class="row justify-content-center mt-2">
      <div class="col-8">
        <p>訂單編號: {{ orderData.id }}</p>
      </div>
    </div>
    <div class="row justify-content-center my-2">
      <div class="userMessage col-10">
        <h5 class="text-success">訂購人</h5>
        <p>姓名: {{ user.name }}</p>
        <p>電話: {{ user.tel }}</p>
        <p>信箱: {{ user.email }}</p>
        <p>地址: {{ user.address }}</p>
        <p>留言: {{ user.message?user.message:'無' }}</p>
      </div>
    </div>
    <div class="row justify-content-center mt-2">
      <div class="userMessage col-10">
        <h5 class="text-success">訂購商品明細</h5>
        <ResultTable :cart-product="orderProductForTable" :cart-total="orderData.total" />
      </div>
    </div>
    <div class="row justify-content-end my-3">
      <div class="col-5">
        <button class="btn btn-lg px-3 py-2" type="button" @click="payOrder(this.$route.params.orderId)">確認付款</button>
      </div>
    </div>
  </div>
  <ApiLoading ref="load" />
</template>

<script>
import ResultTable from '@/components/ResultTable.vue';
import emitter from '@/utils/emitter.js';
import ApiLoading from '@/components/ApiLoading.vue';
export default {
  components: {
    ResultTable,
    ApiLoading
  },
  data () {
    return {
      orderData: [],
      user: {},
      orderProductForTable: {}
    };
  },
  methods: {
    goHeadPage () {
      this.$router.push('/');
    },
    getOrderInformation (orderId) {
      this.$refs.load.doAjax();
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${orderId}`)
        .then(res => {
          this.orderData = res.data.order;
          this.user = res.data.order.user;
          this.orderProductForTable = res.data.order.products;
          this.$refs.load.timeIsOut();
        })
        .catch(err => {
          console.log(err);
          this.$refs.load.timeIsOut();
        });
    },
    payOrder (orderId) {
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${orderId}`)
        .then(res => {
          emitter.emit('get-cart');
          this.$router.push('/success');
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted () {
    this.getOrderInformation(this.$route.params.orderId);
  }
};
</script>

<style lang="scss" scoped>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
.orderTip{
  h3{
    margin-bottom: 1.5rem;
  }
}
.userMessage{
  text-align:left;
  border-top:1px #627364 solid;
    h5{
      padding-top:1.5rem;
    }
    p{
      padding-top:1.5rem;
    }
}
button{
  text-align: center;
  font-size:1rem;
  color:#627364;
  border: 1px solid #627364;
}
button:hover{
  background-color: #51423C;
  color:white;
}
</style>
