<template>
  <div class="container-fluid">
    <div class="row bg-primary"  style="height:10vh;">
    </div>
    <div class="row pt-5 mb-3 pb-3 justify-content-center bg-primary" style=" border-bottom:solid 1px white;"> <!--熱門商品-->
      <div class="col-12 col-md-12 col-lg-4 col-sm-12 pb-3">
        <h1 class="text-white">訂購成功!</h1>
      </div>
    </div>
    <div class="row justify-content-around mb-3">
      <div class="col-lg-4 col-md-6 col-sm-12 d-flex px-3  ">
        <div class="stepHint border border-gray py-3 px-3 mx-2 text-white opacity-50" style=" width:10rem; height:3.5rem; background-color:#627364;">
          <p class="fw-bold">確認商品</p>
        </div>
        <div class="stepHint border border-gray py-3 px-3 mx-2 text-white opacity-50" style=" width:10rem; height:3.5rem; background-color:#627364;">
          <p class="fw-bold">建立訂單</p>
        </div>
        <div class="stepHint border border-gray py-3 px-3 mx-2 text-white" style=" width:10rem; height:3.5rem; background-color:#627364;">
          <p class="fw-bold">訂購完成</p>
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
      <div class="userMessage col-10 text-start border-top border-info pt-4">
        <h5 class="text-success">訂購人</h5>
        <p>姓名: {{ user.name }}</p>
        <p>電話: {{ user.tel }}</p>
        <p>信箱: {{ user.email }}</p>
        <p>地址: {{ user.address }}</p>
        <p>留言: {{ user.message?user.message:'無' }}</p>
      </div>
    </div>
    <div class="row justify-content-center mt-2">
      <div class="userMessage col-10 text-start border-top border-info pt-4">
        <h5 class="text-success">訂購商品明細</h5>
        <ResultTable :cart-product="orderProductForTable" :cart-total="orderData.total" />
      </div>
    </div>
    <div class="row justify-content-end my-3">
      <div class="col-5">
        <button class="btn btn-lg px-3 py-2 text-center border border-info text-info" type="button" @click="payOrder($route.params.orderId)">確認付款</button>
      </div>
    </div>
  </div>
  <ApiLoading ref="load" />
</template>

<script>
import ResultTable from '@/components/ResultTable.vue';
import ApiLoading from '@/components/ApiLoading.vue';
import swal from '@/utils/swal.js';
import { getOrderById, payOrder as submitPayment } from '@/controllers/OrderController';
import { withLoading } from '@/utils/useAsyncData.js';
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
    async getOrderInformation (orderId) {
      await withLoading(
        this.$refs.load,
        async () => {
          const order = await getOrderById(orderId);
          this.orderData = order;
          this.user = order.user;
          this.orderProductForTable = order.products;
        },
        '訂單載入失敗，請稍後再試'
      );
    },
    async payOrder (orderId) {
      try {
        await submitPayment(orderId);
        this.$router.push('/success');
      } catch {
        swal.fire('', '付款失敗，請稍後再試', 'error');
      }
    }
  },
  mounted () {
    this.getOrderInformation(this.$route.params.orderId);
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/views/result';
</style>
