<template>
  <div class="container-fluid" >
    <div class="offcanvas-header" >
      <h3 class="offcanvas-title text-info" id="offcanvasExampleLabel">購物車</h3>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body" >
      <template v-if="cartList.total !== 0">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">商品名</th>
              <th scope="col">數量</th>
              <th scope="col">價格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cartList.carts" :key="item.id">
              <td class="col-5">{{ item.product.title }}</td>
              <td class="col-3">{{ item.qty }}</td>
              <td>{{ item.product.price }}</td>
              <td><button type="button" class="btn btn-sm btn-danger" @click="deleteCart (item)"><img src="../assets/img/delete_white_24dp.svg" alt="刪除單個商品"></button></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" class="text-end text-success">總計</td>
              <td class="text-end">{{ Math.round(cartList.final_total) }}</td>
            </tr>
          </tfoot>
        </table>
        <div class="row">
          <div class="col">
            <button type="button" class="goBtn btn-outline btn-lg px-3 py-2" data-bs-dismiss="offcanvas" @click="goOrder">結帳去</button>
          </div>
        </div>
      </template>
      <div class="nothinginTheCart" v-else>
        <p class="text-info">購物車無任何商品</p>
        <button type="button" class=" goBtn btn-outline btn-lg px-3 py-2" data-bs-dismiss="offcanvas" @click="goProduct">前往購物</button>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/utils/emitter.js';
export default {
  data () {
    return {
      cartList: []
    };
  },
  methods: {
    goProduct () {
      this.$router.push('/productList');
    },
    goOrder () {
      this.$router.push('/order');
    },
    getCartList () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then(res => {
          this.cartList = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteCart (item) {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`)
        .then(res => {
          emitter.emit('get-cart');
          emitter.emit('delete-cart');
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted () {
    this.getCartList();
    emitter.on('get-cart', () => {
      this.getCartList();
    });
    emitter.on('delete-cart', () => {
      this.getCartList();
    });
  }
};
</script>

<style lang="scss">
.goBtn{
  text-align: center;
  font-size:1.5rem;
  transition:all 1s 0s ;
  border: 1px solid #627364;
  text-decoration: none;
  color:#627364;
}
.goOrderBtn:hover{
  background-color: #51423C;
  color:white;
}
</style>
