<template>
  <div class="container-fluid">
    <div class="row ">
      <nav class="navbar navbar-expand-lg  fixed-top  navbar-dark bg-secondary  opacity-75 fs-6 ">
        <router-link to="/" class="navbar-brand mx-4  text-white ">MyGuitar</router-link>
        <button class="navbar-toggler " type="button" @click="toggleHam" >
          <span class="navbar-toggler-icon" ></span>
        </button>
        <div class="collapse navbar-collapse "  ref="collapse">
          <ul class="navbar-nav ms-auto  bg-secondary">
            <li class="nav-item  py-1  px-2 link-success ">
              <router-link to="/" class="nav-link text-white" @click="closeHam">首頁</router-link>
            </li>
            <li class="nav-item  py-1 px-2">
              <router-link to="/productList" class="nav-link text-white"  @click="closeHam">吉他</router-link>
            </li>
            <li class="nav-item py-1 px-2">
              <router-link to="/articleList" class="nav-link  text-white"  @click="closeHam">如何挑選</router-link>
            </li>
            <li class="nav-item py-1 px-2">
              <router-link to="/order" class="nav-link  text-white"  @click="closeHam">購物車</router-link>
            </li>
            <li class="nav-item py-2 px-2">
              <button class=" btn btn-sm position-relative" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"  @click="closeHam" >
                <img src="../assets/img/shopping_cart_white_24dp.svg" alt="cart" class="w-100">
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{ cartList.length }}<span class="visually-hidden">unread messages</span>
                </span>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" >
      <ShowCart />
    </div>
  </div>
</template>

<script>
import emitter from '@/utils/emitter.js';
import ShowCart from '@/components/ShowCart.vue';
import Collapse from 'bootstrap/js/dist/collapse';
export default {
  components: {
    ShowCart
  },
  data () {
    return {
      cartList: []
    };
  },
  methods: {
    data () {
      return {
        navbar: '',
        collapse: ''
      };
    },
    getCartList () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then(res => {
          this.cartList = res.data.data.carts;
        })
        .catch(err => {
          console.log(err);
        });
    },
    closeHam () {
      this.collapse.hide();
    },
    toggleHam () {
      this.collapse.toggle();
    }
  },
  mounted () {
    this.getCartList();
    emitter.on('get-cart', () => {
      this.getCartList();
    });
    this.collapse = new Collapse(this.$refs.collapse, { toggle: false });
  }
};
</script>
<style lang="scss" scoped>
*{
  padding:0;
  margin:0;
  box-sizing:border-box;
}
.navbar{
  height:10vh;
  padding:20px;
}
.navbar-brand{
  font-family: 'Comforter Brush', cursive;
  font-size:2rem;
}
</style>
