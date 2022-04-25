import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';

const app = createApp(App);
app.use(VueAxios, axios);
app.use(router);
const options = {
  confirmButtonColor: '#43342F',
  cancelButtonColor: '#CA3242'
};
app.use(VuePlyr, {
  plyr: {}
});
app.use(VueSweetalert2, options);
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});
app.mount('#app');
