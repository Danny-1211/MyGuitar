export default {
  methods: {
    noCartTip () {
      this.$swal.fire({
        title: '購物車無任何商品',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '前往購物!'
      }).then(result => {
        if (result.isConfirmed) {
          this.goProductList();
        }
      });
    },
    goProductList () {
      this.$router.push('/productList');
    }
  }
};
