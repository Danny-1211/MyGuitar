import { defineStore } from 'pinia';
import { getCart } from '@/controllers/CartController';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartData: { carts: [], final_total: 0 }
  }),
  getters: {
    cartList: (state) => state.cartData.carts || []
  },
  actions: {
    async fetchCart () {
      try {
        this.cartData = await getCart();
      } catch {
      }
    }
  }
});
