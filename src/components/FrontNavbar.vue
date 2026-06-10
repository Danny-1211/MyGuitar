<template>
  <div class="container-fluid">
    <div class="row justify-content-center ">
      <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-secondary opacity-75 fs-6 px-3">
        <router-link to="/" class="navbar-brand fs-2 mx-4  text-white ">MyGuitar</router-link>
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
              <button type="button" class=" btn btn-sm position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" role="button" aria-controls="offcanvasExample"  @click="closeHam" >
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
import ShowCart from '@/components/ShowCart.vue';
import Collapse from 'bootstrap/js/dist/collapse';
import { mapState, mapActions } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
export default {
  components: {
    ShowCart
  },
  computed: {
    ...mapState(useCartStore, ['cartList'])
  },
  methods: {
    ...mapActions(useCartStore, ['fetchCart']),
    closeHam () {
      this.collapse?.hide();
    },
    toggleHam () {
      this.collapse?.toggle();
    }
  },
  async mounted () {
    await this.fetchCart();
    this.collapse = new Collapse(this.$refs.collapse, { toggle: false });
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/stylesheets/components/front-navbar';
</style>
