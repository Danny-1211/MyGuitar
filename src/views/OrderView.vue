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
        <img src="../assets/img/arrow_back_ios_white_24dp.svg" alt="" srcset="">
        <button class="goProductbtn btn btn-lg px-3 py-2" type="button" id="continue" @click="goProductList()">繼續選購</button>
      </div>
    </div>
    </div>
    <div class="row justify-content-center mb-3">
      <div class="col-lg-4 col-md-4 col-sm-12 px-3">
        <div class="progress" style="height: 30px;">
          <div class="progress-bar bg-info" role="progressbar" style="width:25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">1. 確認購物車</div>
        </div>
      </div>
    </div>
    <div class="row"> <!--cartTable-->
      <cartTable :get-cart="cartData" @delete-cart="deleteCart" @get-cart-order="getCartList" />
    </div>
    <div class="row justify-content-center pt-5 px-5">
      <div class="col-12 col-sm-12 col-lg-5 col-md-10">
        <div class="input-group input-group-lg">
          <input type="text" class="form-control text-info ps-2" v-model="couponInput" placeholder="試試 MyGuiTar555" aria-label="coupon" aria-describedby="button-addon2">
          <button class="actionBtn btn btn-outline" type="button button-outline px-3 py-2" id="button-addon2" @click="useCoupon(couponInput)">送出</button>
        </div>
        <label class="form-check-label" id="couponCheck" v-if="couponCheck">
          <p class="text-success">{{ couponCheck.message }}</p>
        </label>
        <label class="form-check-label" id="couponCheck" v-else>
          <p class="text-danger">請輸入優惠碼:MyGuiTar555</p>
          <p class="text-danger">p.s. 請確認商品後，再輸入優惠碼</p>
        </label>
      </div>
    </div>
    <div class="row justify-content-end ">
      <div class="col-12 col-sm-12 col-md-12 col-lg-3">
        <div class="next justify-content-start">
          <button type="button" class="actionBtn btn btn-lg px-3 py-2 mx-2" :disabled="clearAllCartBoolean === false" @click="openDeleteAllTip">清空購物車</button>
          <button type="button" class="btn btn-lg btn-primary px-3 py-2 mx-2" @click="goForm()">下一步</button>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-sm-12 col-lg-12 col-md-12">
        <div class="notification p-5 bg-warning">
          <div class="buy">
            <h3>訂購須知</h3>
            <p>* 請確認所填寫的資料是否正確，下單後無法修改</p>
            <p>* 本店商品統一付款後5個工作日內出貨(不含假日)</p>
            <p>* 若為訂製商品，則不受前項須知限制</p>
            <p>* 本店目前只支援信用卡付款</p>
          </div>
          <div class="back">
            <h3>退(換)/貨(款)須知</h3>
            <p>* 依《消費者保護法》規定，消費者享有商品簽收翌日起算7天之鑑賞期，欲退購者請於7日內提出</p>
            <p>* 若商品為客製化等訂製商品 (客製化吉他或其它配件) ，不接受其退貨</p>
            <p>* 商品本身具瑕疵或品質不良，且非人為因素損壞者，經判定無誤後可全額退款，不須負擔運費</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DeleteAllCartMessage ref="deleteall" @delete-all="deleteAllCart" />
  <ApiLoading ref="load" />
</template>

<script>
import cartTable from '@/components/CartTable.vue';
import ApiLoading from '@/components/ApiLoading.vue';
import DeleteAllCartMessage from '@/components/DeleteAllCartMessage.vue';
import NoCartCantGoFromAlert from '@/utils/noCartCantGoFromAlert.js';
import emitter from '@/utils/emitter.js';
export default {
  mixins: [NoCartCantGoFromAlert],
  components: {
    cartTable,
    ApiLoading,
    DeleteAllCartMessage
  },
  data () {
    return {
      cartData: [],
      couponInput: '',
      couponCheck: '',
      clearAllCartBoolean: false
    };
  },
  methods: {
    goProductList () {
      this.$router.push('/productList');
    },
    goForm () {
      if (this.cartData.carts.length === 0) {
        this.openNoCartTip();
      } else {
        this.$router.push('/form');
      }
    },
    getCartList () {
      this.$refs.load.doAjax();
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then(res => {
          this.cartData = res.data.data;
          if (this.cartData.carts.length !== 0) {
            this.clearAllCartBoolean = true;
          } else {
            this.clearAllCartBoolean = false;
          }
          this.$refs.load.timeIsOut();
        })
        .catch(err => {
          console.log(err);
          this.$refs.load.timeIsOut();
        });
    },
    deleteCart (item) {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`)
        .then(res => {
          this.getCartList();
          emitter.emit('get-cart');
        })
        .catch(err => {
          console.log(err);
        });
    },
    deleteAllCart () {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then(res => {
          this.getCartList();
          emitter.emit('get-cart');
        })
        .catch(err => {
          console.log(err);
        });
    },
    useCoupon (couponInput) {
      const data = {
        code: couponInput
      };
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/coupon`, { data: data })
        .then(res => {
          this.$refs.load.doAjax();
          this.couponCheck = res.data;
          this.getCartList();
          emitter.emit('get-cart');
        })
        .catch(err => {
          console.log(err);
        });
    },
    openDeleteAllTip () {
      this.$refs.deleteall.tip();
    },
    openNoCartTip () {
      this.noCartTip();
    }
  },
  mounted () {
    this.getCartList();
    emitter.on('delete-cart', () => {
      this.getCartList();
    });
  },
  unmounted () {
    emitter.off('delete-cart');
  }
};
</script>

<style lang="scss" scoped>
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
.goProductbtn {
  text-align: center;
  font-size:1.5rem;
  color:#627364;
  transition:all 1s 0s ;
}
.goProductbtn:hover{
  background-color: #51423C;
  color:white;
}
.actionBtn{
  text-align: center;
  font-size:1.5rem;
  color:#627364;
  transition:all 1s 0s ;
  border: 1px solid #627364;
}
.actionBtn:hover{
  background-color: #51423C;
  color:white;
}
.next{
  display:flex;
  justify-content: center;
  padding:1.5rem;
}
.notification{
  text-align: left;
    .buy{
      margin-bottom: 1rem;
    }
    h3{
      margin-bottom: 1rem;
    }
}
#continue{
  color:white;
}
#continue:hover{
  background-color: #627364;
}
</style>
