<template>
  <div class="row justify-content-center pt-2 bg-white">
    <div class="col-12 col-sm-12 col-lg-12 col-md-12">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">商品名</th>
            <th scope="col">數量</th>
            <th scope="col">價格</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartProductData" :key="item+123456">
            <td >{{ item.product.title }}</td>
            <td class="col-2">{{ item.qty }}</td>
            <td>{{Math.round( item.final_total )}}</td>
            <td class="text-success" v-if="item.coupon">已套用優惠卷</td>
            <td class="text-danger" v-else>未套用優惠卷</td>
          </tr>
        </tbody>
        <tfoot >
          <tr>
            <td colspan="3" class="text-end text-success">總計</td>
            <td class="text-end">{{ Math.round(total) }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cartProduct', 'cartTotal'],
  data () {
    return {
      cartProductData: this.cartProduct,
      checkHaveCoupon: 0,
      total: 0
    };
  },
  watch: {
    cartProduct: function () {
      if (this.cartProduct !== this.cartProductData) {
        this.cartProductData = this.cartProduct;
      }
    },
    cartTotal: function () {
      if (this.cartTotal !== this.total) {
        this.total = this.cartTotal;
      }
    }
  },
  mounted () {
  }
};
</script>

<style lang="scss" scoped>
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
</style>
