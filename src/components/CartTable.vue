<template>
  <div class="container-fluid">
    <div class="row justify-content-center pt-5 bg-white"  v-if="cartData.final_total !== 0">
      <div class="col-10 col-sm-10 col-lg-10 col-md-10">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">商品名</th>
              <th scope="col">數量</th>
              <th scope="col">價格</th>
              <th scope="col">狀態</th>
            </tr>
          </thead>
          <tbody >
            <tr v-for="item in cartData.carts" :key="item.id">
              <td>{{ item.product.title }}</td>
              <td class="col-2">{{item.qty}}</td>
              <td>{{ item.product.price }}</td>
              <td><button type="button" class="btn btn-sm px-2 py-1 text-info" @click="openModal(item)">修改</button></td>
              <td><button type="button" class="btn btn-danger" @click="confirmDelete(item)"><img src="../assets/img/delete_white_24dp.svg" alt="刪除單個商品" srcset=""></button></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end text-success">總計</td>
              <td class="text-end">{{ Math.round(cartData.final_total) }}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <div class="row justify-content-center pt-5 bg-white" v-else>
      <div class="col-10 col-sm-12 col-lg-10 col-md-10">
        <p class="fw-bold text-info mb-2">購物車無任何商品</p>
        <div class="mb-3">
          <img src="../assets/img/undraw_shopping_app_flsj.svg" alt="shopping" class="w-25">
        </div>
        <button type="button" class="btn btn-outline-info  px-3 py-2 " @click="goProduct">前往購物</button>
      </div>
    </div>
  </div>
  <UpdateModal ref="edit" :temp-product="selectedItem" @get-cart="getCartOrderEmit" />
</template>

<script>
import UpdateModal from '@/components/UpdateCartModal.vue';
import { showConfirm } from '@/utils/useAlert.js';
export default {
  emits: ['delete-cart', 'get-cart-order'],
  props: {
    cartData: {
      type: Object,
      required: true
    }
  },
  components: {
    UpdateModal
  },
  data () {
    return {
      selectedItem: { imagesUrl: [] }
    };
  },
  methods: {
    confirmDelete (item) {
      this.selectedItem = { ...item };
      showConfirm('將此商品刪除', '此商品已被刪除', () => {
        this.$emit('delete-cart', item);
      });
    },
    goProduct () {
      this.$router.push('/productList');
    },
    getCartOrderEmit () {
      this.$emit('get-cart-order');
    },
    openModal (item) {
      this.selectedItem = { ...item };
      this.$refs.edit.openModal();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/components/cart-table';
</style>
