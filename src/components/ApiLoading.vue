<template>
  <div class="vld-parent">
    <loading :active="isLoading" :can-cancel="true"  :is-full-page="true" :color="'#43342F'">
      <div class="loadingio-spinner-spin-nwqkzohoq6o"><div class="ldio-6grgxnrkcz">
        <div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div>
      </div></div>
    </loading>
  </div>
</template>

<script>
// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
export default {
  data () {
    return {
      isLoading: false
    };
  },
  components: {
    Loading
  },
  methods: {
    doAjax () {
      this.isLoading = true;
    },
    timeIsOut () {
      this.isLoading = false;
    }
  }
};
</script>
