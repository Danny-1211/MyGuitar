<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="edit">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">修改數量</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">選擇數量</label>
            </div>
            <div class="col-auto">
              <input type="number" id="inputnumber6" class="form-control" min="1" max="20" aria-describedby="passwordHelpInline" v-model="productTemp.qty">
            </div>
            <div class="col-auto">
              <span id="passwordHelpInline" class="form-text">
                只能輸入 1 ~ 20 數字
              </span>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-sm px-3 py-2" data-bs-dismiss="modal">取消</button>
          <button type="button" class="btn btn-sm btn-primary text-white px-3 py-2" data-bs-dismiss="modal" @click="editCart(productTemp.qty)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal.js';
import swal from '@/utils/swal.js';
import { updateCartItem } from '@/controllers/CartController';
import { showFailAlert, showEditSuccessAlert } from '@/utils/useAlert.js';
import { validateQuantity } from '@/utils/validators.js';
import { mapActions } from 'pinia';
import { useCartStore } from '@/stores/cartStore';
export default {
  props: {
    tempProduct: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      editModal: '',
      productTemp: JSON.parse(JSON.stringify(this.tempProduct))
    };
  },
  watch: {
    tempProduct (newVal) {
      this.productTemp = JSON.parse(JSON.stringify(newVal));
    }
  },
  methods: {
    ...mapActions(useCartStore, ['fetchCart']),
    async editCart (quality) {
      if (validateQuantity(quality)) {
        try {
          await updateCartItem(this.productTemp.id, this.productTemp.product_id, quality);
          showEditSuccessAlert();
          await this.fetchCart();
        } catch {
          swal.fire('', '修改失敗，請稍後再試', 'error');
        }
      } else {
        showFailAlert();
        this.productTemp.qty = this.tempProduct.qty;
      }
    },
    openModal () {
      this.editModal.show();
    },
    hideModal () {
      this.editModal.hide();
    }
  },
  mounted () {
    this.productTemp = this.tempProduct;
    this.editModal = new Modal(this.$refs.edit);
  }
};
</script>
