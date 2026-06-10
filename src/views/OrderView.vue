<template>
  <div class="container-fluid">
    <div class="row bg-primary" style="height:10vh;">
    </div>
    <div class="row pt-5 mb-3 pb-1 justify-content-between bg-primary" style="border-bottom:solid 1px white;">
      <div class="col-12 col-md-12 col-lg-4 col-sm-12">
        <h2 style="color:white">確認購物車</h2>
      </div>
    <div class="col-12 col-md-12 col-lg-4 col-sm-12">
      <div class="buttonG">
        <img src="../assets/img/arrow_back_ios_white_24dp.svg" alt="arrow">
        <button class="goProductbtn fs-4 btn btn-lg px-3 py-2 text-center text-info" type="button" id="continue" @click="goProductList()">繼續選購</button>
      </div>
    </div>
    </div>
    <div class="row justify-content-around mb-3">
      <div class=" col-lg-4 col-md-6 col-sm-12 d-flex px-3  ">
        <div class="stepHint border border-gray py-3 px-3 mx-2 text-white" style=" width:10rem; height:3.5rem; background-color:#627364;">
          <p class="fw-bold">確認商品</p>
        </div>
        <div class="stepHint border border-gray py-3 px-3 mx-2 text-white opacity-50" style=" width:10rem; height:3.5rem; background-color:#627364;">
          <p class="fw-bold">建立訂單</p>
        </div>
        <div class="stepHint border border-gray py-3 px-3 mx-2 text-white opacity-50" style=" width:10rem; height:3.5rem; background-color:#627364;">
          <p class="fw-bold">訂購完成</p>
        </div>
      </div>
    </div>
    <div class="row"> <!--cartTable-->
      <CartTable :cart-data="cartData" />
    </div>
    <div class="row justify-content-center pt-5 px-5">
      <div class="col-12 col-sm-12 col-lg-5 col-md-10">
        <div class="input-group input-group-lg">
          <input type="text" class="form-control text-info ps-2" v-model="couponInput" placeholder="試試 MyGuiTar555" aria-label="coupon" aria-describedby="button-addon2">
          <button class="actionBtn btn btn-outline px-3 py-2 text-center text-info border border-info" type="button" id="button-addon2" @click="useCoupon(couponInput)">送出</button>
        </div>
        <label class="form-check-label" id="couponCheck"  v-if="couponBoolean">
          <p class="text-danger">請輸入優惠碼:MyGuiTar555</p>
          <p class="text-danger">p.s. 請確認商品後，再輸入優惠碼</p>
        </label>
        <label class="form-check-label" id="couponCheck" v-if="rightCoupon">
          <p class="text-success" >{{ couponCheck.message }}</p>
        </label>
        <label class="form-check-label" id="couponCheck"  v-if="errorCouponMessage">
          <p class="text-danger">無此優惠卷，試試 MyGuiTar555 </p>
        </label>
      </div>
    </div>
    <div class="row justify-content-end ">
      <div class="col-12 col-sm-12 col-md-12 col-lg-4">
        <div class="next d-flex justify-content-center p-4">
          <button type="button" class="actionBtn btn btn-lg px-3 py-2 mx-2 text-center text-info border border-info" :disabled="clearAllCartBoolean === false" @click="confirmClearAll">清空購物車</button>
          <button type="button" class="btn btn-lg btn-primary px-3 py-2 mx-2" @click="goForm()">下一步</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-12 col-lg-12 col-md-12">
        <div class="notification p-5 bg-warning text-start">
          <div class="buy mb-4">
            <h3 class="mb-3">訂購須知</h3>
            <p>* 請確認所填寫的資料是否正確，下單後無法修改</p>
            <p>* 本店商品統一付款後5個工作日內出貨(不含假日)</p>
            <p>* 若為訂製商品，則不受前項須知限制</p>
            <p>* 本店目前只支援信用卡付款</p>
          </div>
          <div class="back">
            <h3 class="mb-3">退(換)/貨(款)須知</h3>
            <p>* 依《消費者保護法》規定，消費者享有商品簽收翌日起算7天之鑑賞期，欲退購者請於7日內提出</p>
            <p>* 若商品為客製化等訂製商品 (客製化吉他或其它配件) ，不接受其退貨</p>
            <p>* 商品本身具瑕疵或品質不良，且非人為因素損壞者，經判定無誤後可全額退款，不須負擔運費</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ApiLoading ref="load" />
</template>

<script>
import CartTable from '@/components/CartTable.vue';
import ApiLoading from '@/components/ApiLoading.vue';
import swal from '@/utils/swal.js';
import { mapState, mapActions } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
import { deleteAllCart as clearAllCart, applyCoupon } from '@/controllers/CartController';
import { withLoading } from '@/utils/useAsyncData.js';
import { showNoCartAlert, showConfirm } from '@/utils/useAlert.js';
export default {
  components: {
    CartTable,
    ApiLoading
  },
  data () {
    return {
      couponInput: '',
      couponCheck: '',
      couponBoolean: true,
      errorCouponMessage: false,
      rightCoupon: false
    };
  },
  computed: {
    ...mapState(useCartStore, ['cartData']),
    clearAllCartBoolean () {
      return this.cartData.carts.length !== 0;
    }
  },
  methods: {
    ...mapActions(useCartStore, ['fetchCart']),
    async loadCart () {
      await withLoading(this.$refs.load, () => this.fetchCart(), '購物車載入失敗，請稍後再試');
    },
    goProductList () {
      this.$router.push('/productList');
    },
    goForm () {
      if (this.cartData.carts.length === 0) {
        showNoCartAlert();
      } else {
        this.$router.push('/form');
      }
    },
    confirmClearAll () {
      showConfirm('刪除全部購物車', '購物車全刪除!', () => this.deleteAllCart());
    },
    async deleteAllCart () {
      try {
        await clearAllCart();
        await this.loadCart();
      } catch {
        swal.fire('', '清空購物車失敗，請稍後再試', 'error');
      }
    },
    async useCoupon (couponInput) {
      try {
        this.couponCheck = await applyCoupon(couponInput);
        this.couponBoolean = false;
        this.rightCoupon = true;
        await this.loadCart();
      } catch {
        this.errorCouponMessage = true;
        this.couponBoolean = false;
        this.rightCoupon = false;
      }
    }
  },
  mounted () {
    this.loadCart();
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/views/order';
</style>
