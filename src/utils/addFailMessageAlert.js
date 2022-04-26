export default {
  methods: {
    showAlert () {
      this.$swal('', '請勿輸入非整數或 超過 0~20', 'error');
    }
  }
};
