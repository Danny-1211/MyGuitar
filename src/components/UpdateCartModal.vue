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
              <input type="number" id="inputnumber6" class="form-control" aria-describedby="passwordHelpInline" v-model="productTemp.qty">
            </div>
            <div class="col-auto">
              <span id="passwordHelpInline" class="form-text">
                只能輸入 0 ~ 20 數字
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
import AddFailMessageAlert from '@/utils/addFailMessageAlert.js';
import EditSuccessMessageAlert from '@/utils/editSuccessMessageAlert.js';
import emitter from '@/utils/emitter.js';
export default {
  mixins: [AddFailMessageAlert, EditSuccessMessageAlert],
  props: ['tempProduct'],
  data () {
    return {
      editModal: '',
      productTemp: this.tempProduct
    };
  },
  watch: {
    tempProduct: function () {
      if (this.productTemp.id !== this.tempProduct.id) {
        this.productTemp = this.tempProduct;
      }
    }
  },
  methods: {
    editCart (quality) {
      const confirm = /^[-+]?[0-9]+\.[0-9]+$/; // 浮點數正規表達
      if (!confirm.test(quality) && quality > 0 && quality <= 20) {
        const data = {
          product_id: this.productTemp.product_id,
          qty: quality
        };
        this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${this.productTemp.id}`, { data: data })
          .then(res => {
            this.editSucessShowAlert();
            this.getCart();
            emitter.emit('get-cart');
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.showAlert();
        this.productTemp.qty = this.tempProduct.qty;
      }
    },
    getCart () {
      this.$emit('get-cart');
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

<style lang="scss" scoped>
.btn {
  text-align: center;
  font-size:1rem;
}
</style>
