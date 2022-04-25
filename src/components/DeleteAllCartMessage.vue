<template>
  <div></div>
</template>

<script>
export default {
  methods: {
    tip () {
      this.$swal.fire({
        title: '你確定?',
        text: '刪除全部購物車',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: '對，刪除!',
        cancelButtonText: '取消'
      }).then(result => {
        if (result.isConfirmed) {
          this.$swal.fire(
            '刪除!',
            '購物車全刪除!',
            'success'
          );
          this.deleteAll();
        }
      });
    },
    deleteAll () {
      this.$emit('delete-all');
    }
  }
};
</script>
