<template>
  <div class="container-fluid">
    <div class="row bg-primary" style="height:10vh;">
    </div>
    <div class="row pt-5 pb-2 mb-3 justify-content-center bg-primary">
      <div class=" col-12 col-md-12 col-lg-4 col-sm-12 pb-3">
        <h1 class="text-white">填寫聯絡資料</h1>
      </div>
    </div>
    <div class="row justify-content-center mb-3">
      <div class="col-lg-4 col-md-4 col-sm-12 px-3">
        <div class="progress" style="height: 30px;">
          <div class="progress-bar bg-info" role="progressbar" style="width:50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">2. 填寫聯絡資料</div>
        </div>
      </div>
    </div>
    <div class="row py-4 px-4 justify-content-center">
      <Form ref="form" class="col-md-6 text-start" v-slot="{ errors }" @submit="onSubmit"> <!-- v-slot 把這裡面的方法取出來  -->
        <div class="mb-5">
          <label for="email" class="form-label text-info mb-2">收件人信箱</label>
          <Field id="email" name="email" type="email" class="form-control text-info ps-2" :rules="validateEmail" :class="{ 'is-invalid': errors['email'] }" placeholder="請輸入 Email" v-model="form.user.email"/>
          <ErrorMessage  name="email" class="invalid-feedback" />
        </div>
        <div class="mb-5">
          <label for="name" class="form-label text-info mb-2">收件人姓名</label>
          <Field id="name" name="姓名" type="text" class="form-control text-info ps-2" :class="{ 'is-invalid': errors['姓名'] }" placeholder="請輸入姓名" :rules="isRequired" v-model="form.user.name"/>
          <ErrorMessage name="姓名" class="invalid-feedback"/>
        </div>
        <div class="mb-5">
          <label for="tel" class="form-label text-info mb-2">收件人電話</label>
          <Field id="tel" name="電話" type="text" class="form-control text-info ps-2" :class="{ 'is-invalid': errors['電話'] }" placeholder="請輸入電話" :rules="validatePhone" v-model="form.user.tel"/>
          <ErrorMessage name="電話" class="invalid-feedback"/>
        </div>
        <div class="mb-5">
          <label for="address" class="form-label text-info mb-2">收件人地址</label>
          <Field id="address" name="地址" type="text" class="form-control text-info ps-2 " :class="{ 'is-invalid': errors['地址'] }" placeholder="請輸入地址" :rules="isRequired" v-model="form.user.address"/>
          <ErrorMessage name="地址" class="invalid-feedback"/>
        </div>
        <div class="mb-5">
          <label for="message" class="form-label text-info mb-2">留言</label>
          <textarea id="message" class="form-control text-info ps-2" cols="30" rows="10" v-model="form.user.message" style="height:6rem" ></textarea>
        </div>
        <div class="text-end"> <!-- 先把validate驗證錯誤的 error值(物件)轉成陣列判斷長度，陣列有東西代表驗證有錯誤-->
          <button type="submit" class="btn btn-lg px-3 py-2 " :disabled="Object.keys(errors).length > 0">送出訂單</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from 'vee-validate';
import emitter from '@/utils/emitter.js';
export default {
  components: {
    Field,
    Form,
    ErrorMessage
  },
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    };
  },
  methods: {
    isRequired (value) {
      if (!value) {
        return '此欄位為必填';
      }
      return true;
    },
    validateEmail (value) { // 取自官網 確認 email 格式
      if (!value) {
        return '此欄位為必填';
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return '必須是 email 格式';
      }
      return true;
    },
    validatePhone (value) {
      if (!value) {
        return '此欄位為必填';
      }
      const tel = /^((\d{2,3}-?|\(\d{2,3}\))\d{3,4}-?\d{4})|(09\d{2}(\d{6}|-\d{3}-\d{3}))$/;
      if (!tel.test(value) || value.toString().length > 10) {
        return '無效的電話號碼或手機號碼';
      }
      return true;
    },
    addOrder () {
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, { data: this.form })
        .then(res => {
          const orderId = res.data.orderId;
          emitter.emit('get-cart');
          this.$router.push(`/result/${orderId}`);
        })
        .catch(err => {
          console.log(err);
        });
    },
    onSubmit () {
      this.addOrder();
    }
  }
};
</script>

<style lang="scss" scoped>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
.form-label{
  font-size: 1.5rem;
}
.form-control{
  height:2.5rem;
}
button{
  text-align: center;
  font-size:1rem;
  color:#627364;
  border: 1px solid #627364;
}
button:hover{
  background-color: #51423C;
  color:white;
}
</style>
