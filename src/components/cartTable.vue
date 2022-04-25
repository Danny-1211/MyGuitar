<template>
  <div class="container-fluid">
    <div class="row justify-content-center pt-5 bg-white">
      <div class="col-10 col-sm-10 col-lg-10 col-md-10" >
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
              <td><button type="button" class="btn btn-danger"   @click="openTip(item)" ><img src="../assets/img/delete_white_24dp.svg" alt="刪除單個商品" srcset=""></button></td>
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
  </div>
  <UpdateModal ref="edit" :temp-product="SingleProductForModal" @get-cart="getCartOrderEmit" />
  <DeleteSureMessageAlert ref="sureDelete" :item="SingleProductForModal" @delete-cart="deleteCartEmit (SingleProductForModal)" />
</template>

<script>
import UpdateModal from '@/components/UpdateCartModal.vue';
import DeleteSureMessageAlert from '@/components/DeleteSureMessageAlert.vue';
export default {
  emits: ['deleteCartEmit', 'getCartOrderEmit'],
  props: ['getCart'],
  components: {
    UpdateModal,
    DeleteSureMessageAlert
  },
  data () {
    return {
      cartData: this.getCart,
      SingleProductForModal: { imagesUrl: [] } // 給修改 modal 跟刪除 tip 所使用，用來存 CartTable 的每一筆產品資訊
    };
  },
  watch: {
    getCart: function () {
      if (this.cartData !== this.getCart) {
        this.cartData = this.getCart;
      }
    }
  },
  methods: {
    deleteCartEmit (item) {
      this.$emit('delete-cart', item);
    },
    openTip (item) {
      this.SingleProductForModal = { ...item };
      this.$refs.sureDelete.tip();
    },
    getCartOrderEmit () {
      this.$emit('get-cart-order');
    },
    openModal (item) {
      this.SingleProductForModal = { ...item };
      this.$refs.edit.openModal();
    }
  },
  mounted () {
    this.cartData = this.getCart;
  }
};
</script>

<style lang="scss" scoped>
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
button{
  text-align: center;
  transition:all 1s 0s ;
}
button:hover{
  background-color: #51423C;
  color:white;
}
</style>
