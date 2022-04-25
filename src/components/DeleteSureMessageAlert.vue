<template>
  <div></div>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      product: this.item
    };
  },
  watch: {
    item: function () {
      if (this.item.id !== this.product.id) {
        this.product = this.item;
      }
    }
  },
  methods: {
    tip () {
      this.$swal.fire({
        title: '你確定?',
        text: '將此商品刪除',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '對，刪除!',
        cancelButtonText: '取消'
      }).then(result => {
        if (result.isConfirmed) {
          this.$swal.fire(
            '刪除!',
            '此商品已被刪除',
            'success'
          );
          this.getCart();
        }
      });
    },
    getCart () {
      this.$emit('delete-cart', this.item);
    }
  },
  mounted () {
    this.product = this.item;
  }
};
</script>
