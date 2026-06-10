<template>
  <div class="container-fluid" >
    <div class="offcanvas-header" >
      <h3 class="offcanvas-title text-info" id="offcanvasExampleLabel">購物車</h3>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body" >
      <template v-if="cartData.carts && cartData.carts.length !== 0">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">商品名</th>
              <th scope="col">數量</th>
              <th scope="col">價格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartData.carts" :key="item.id">
              <td class="col-5">{{ item.product.title }}</td>
              <td class="col-3">{{ item.qty }}</td>
              <td>{{ item.product.price }}</td>
              <td><button type="button" class="btn btn-sm btn-danger" @click="deleteCart (item)"><img src="../assets/img/delete_white_24dp.svg" alt="刪除單個商品"></button></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end text-success">總計</td>
              <td class="text-end">{{ Math.round(cartData.final_total) }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="row">
          <div class="col">
            <button type="button" class="goBtn btn btn-lg px-3 py-2 text-center text-decoration-none fs-5" data-bs-dismiss="offcanvas" @click="goOrder">結帳去</button>
          </div>
        </div>
      </template>
      <div class="nothinginTheCart" v-else>
        <p class="text-info">購物車無任何商品</p>
        <button type="button" class="goBtn btn btn-lg px-3 py-2 text-center text-decoration-none fs-5" data-bs-dismiss="offcanvas" @click="goProduct">前往購物</button>
      </div>
    </div>
  </div>
</template>

<script>
import { deleteCartItem } from '@/controllers/CartController';
import { mapState, mapActions } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
export default {
  computed: {
    ...mapState(useCartStore, ['cartData'])
  },
  methods: {
    ...mapActions(useCartStore, ['fetchCart']),
    goProduct () {
      this.$router.push('/productList');
    },
    goOrder () {
      this.$router.push('/order');
    },
    async deleteCart (item) {
      try {
        await deleteCartItem(item.id);
        await this.fetchCart();
      } catch (err) {
        this.$swal('', '刪除失敗，請稍後再試', 'error');
      }
    }
  },
  async mounted () {
    await this.fetchCart();
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/show-cart';
</style>
