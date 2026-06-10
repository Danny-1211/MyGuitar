<template>
  <div class="container-fluid">
    <div class="row bg-primary" style="height:10vh;">
    </div>
    <div class="row pt-5 pb-2 mb-3 justify-content-center bg-primary">
      <div class=" col-12 col-md-12 col-lg-4 col-sm-12 pb-3">
        <h1 class="text-white">填寫聯絡資料</h1>
      </div>
    </div>
    <div class="row justify-content-around mb-3">
      <div class="col-lg-4 col-md-6 col-sm-12 d-flex px-3 ">
        <div class="stepHint border border-gray py-3 px-3 mx-2 text-white opacity-50" style=" width:10rem; height:3.5rem; background-color:#627364;">
          <p class="fw-bold">確認商品</p>
        </div>
        <div class="stepHint border border-gray py-3 px-3 mx-2 text-white " style=" width:10rem; height:3.5rem; background-color:#627364;">
          <p class="fw-bold">建立訂單</p>
        </div>
        <div class="stepHint border border-gray py-3 px-3 mx-2 text-white opacity-50" style=" width:10rem; height:3.5rem; background-color:#627364;">
          <p class="fw-bold">訂購完成</p>
        </div>
      </div>
    </div>
    <div class="row py-4 px-4 justify-content-center">
      <VeeForm ref="form" class="col-md-6 text-start" v-slot="{ errors }" @submit="onSubmit"> <!-- v-slot 把這裡面的方法取出來  -->
        <div class="mb-5">
          <label for="email" class="form-label fs-5 text-info mb-2">收件人信箱</label>
          <Field id="email" name="email" type="email" class="form-control text-info ps-2" :rules="validateEmail" :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" v-model="form.user.email"/>
          <ErrorMessage  name="email" class="invalid-feedback" />
        </div>
        <div class="mb-5">
          <label for="name" class="form-label fs-5 text-info mb-2">收件人姓名</label>
          <Field id="name" name="姓名" type="text" class="form-control text-info ps-2" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" :rules="isRequired" v-model="form.user.name"/>
          <ErrorMessage name="姓名" class="invalid-feedback"/>
        </div>
        <div class="mb-5">
          <label for="tel" class="form-label fs-5 text-info mb-2">收件人電話</label>
          <Field id="tel" name="電話" type="text" class="form-control text-info ps-2" :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" :rules="validatePhone" v-model="form.user.tel"/>
          <ErrorMessage name="電話" class="invalid-feedback"/>
        </div>
        <div class="mb-5">
          <label for="address" class="form-label fs-5 text-info mb-2">收件人地址</label>
          <Field id="address" name="地址" type="text" class="form-control text-info ps-2 " :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" :rules="isRequired" v-model="form.user.address"/>
          <ErrorMessage name="地址" class="invalid-feedback"/>
        </div>
        <div class="mb-5">
          <label for="message" class="form-label fs-5 text-info mb-2">留言</label>
          <textarea id="message" class="form-control text-info ps-2" cols="30" rows="10" v-model="form.user.message" style="height:6rem" ></textarea>
        </div>
        <div class="text-end"> <!-- 先把validate驗證錯誤的 error值(物件)轉成陣列判斷長度，陣列有東西代表驗證有錯誤-->
          <button type="submit" class="btn btn-lg px-3 py-2 text-center border border-info text-info" :disabled="Object.keys(errors).length > 0 || isSubmitting">送出訂單</button>
        </div>
      </VeeForm>
    </div>
  </div>
</template>

<script>
import { Field, Form as VeeForm, ErrorMessage } from 'vee-validate';
import emitter from '@/utils/emitter.js';
import swal from '@/utils/swal.js';
import { createOrder } from '@/controllers/OrderController';
import { isRequired, validateEmail, validatePhone } from '@/utils/validators.js';
export default {
  components: {
    Field,
    VeeForm,
    ErrorMessage
  },
  data () {
    return {
      isSubmitting: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
          message: ''
        }
      }
    };
  },
  methods: {
    isRequired,
    validateEmail,
    validatePhone,
    async addOrder () {
      this.isSubmitting = true;
      try {
        const result = await createOrder(this.form);
        emitter.emit('get-cart');
        this.$router.push(`/result/${result.orderId}`);
      } catch {
        swal.fire('', '訂單送出失敗，請稍後再試', 'error');
      } finally {
        this.isSubmitting = false;
      }
    },
    onSubmit () {
      this.addOrder();
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/stylesheets/views/form';
</style>
