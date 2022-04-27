<template>
  <div class="container-fluid">
    <div class="row "> <!--banner-->
      <div class="col-12 col-md-12">
        <div class="banner ">
          <div class="bannerText">
            <h1 class="text-primary">找到屬於自己的吉他吧!</h1>
            <button type="button" class=" goProduct btn btn-lg px-4 py-3 bg-info text-white" @click="goProductList">前往逛逛</button>
          </div>
        </div>
      </div>
    </div>
    <div class="introduction my-6 bg-primary"> <!--about me-->
      <div class="introTitle text-white">
        <p>關於</p>
        <p class="title">MyGuitar</p>
      </div>
      <div class="introGraph text-white">
        <p>喜歡彈吉他的人總是有一個夢想，想要在自己家的置物間充滿各式各樣的吉他，依照心情享受每把吉他不一樣的美妙音色</p>
        <p>MyGuitar 是一間木吉他專賣店，擁有全世界各式各樣的木吉他供你選擇，從平價到奢華應有盡有</p>
      </div>
      <div class="introFooter text-white">
        <p>快帶上你的吉他<br>展開一段你的音樂旅程吧!</p>
      </div>
    </div>
    <div class="row px-2 py-3 bg-primary"> <!--熱門商品-->
      <div class="col-12 col-md-6 col-lg-4">
        <h2 class="text-white">| 熱門商品</h2>
      </div>
    </div>
    <div class="row justify-content-center px-5 py-5  bg-primary"> <!--商品按鈕-->
      <div class="col-12 col-lg-5 col-md-6">
        <router-link to="/productList/Martin">
          <div class=" item card text-white bg-primary border-0 opacity-75 ">
            <img src="../assets/img/gabriel-gurrola-2UuhMZEChdc-unsplash.jpg" class="card-img w-100" alt="Martin">
            <div class="card-img-overlay justify-content-center   d-flex align-items-center">
              <router-link to="/productList/Martin">夢想- <br> Martin</router-link>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-12 col-lg-5 col-md-6">
        <router-link to="/productList/Dowina">
          <div class=" item card text-white bg-primary border-0 opacity-75">
            <img src="../assets/img/Dollarphotoclub_67587098-1536x1017.jpg" class="card-img w-100" alt="Dowina">
            <div class="card-img-overlay justify-content-center d-flex align-items-center">
              <router-link to="/productList/Dowina">優雅- <br> Dowina</router-link>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-12 col-lg-5 col-md-6">
        <router-link to="/productList/Eastman">
          <div class=" item card text-white bg-primary border-0 opacity-75">
            <img src="../assets/img/eastman.jpg" class="card-img w-100" alt="Eastman">
            <div class="card-img-overlay justify-content-center d-flex align-items-center">
              <router-link to="/productList/Eastman">實惠- <br> Eastman</router-link>
            </div>
          </div>
        </router-link>
      </div>
      <div class="col-12 col-lg-5 col-md-6">
        <router-link to="/productList/Pre-war">
          <div class=" item card text-white bg-primary border-0 opacity-75">
            <img src="../assets/img/pre-war.jpg" class="card-img w-100" alt="Pre-war">
            <div class="card-img-overlay justify-content-center d-flex align-items-center">
              <router-link to="/productList/Pre-war">復古- <br> Pre-war</router-link>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="row px-2 py-4 bg-primary">  <!--挑選吉他-->
      <div class="col-12 col-md-6 col-lg-4 ">
        <h2 class="text-white">| 如何挑選</h2>
      </div>
    </div>
    <div class="row justify-content-around px-5 py-5 bg-primary"> <!--文章-->
      <div class="col-12 col-md-3" v-for="item in articleData" :key="item.id">
        <div class="article" :style="{ backgroundImage: 'url(' + item.image + ')' }" >
          <router-link :to="`/articleList/${ item.id }`">{{ item.title }}</router-link>
        </div>
      </div>
    </div>
    <div class="row px-2 py-3 justify-content-center bg-primary" > <!--品牌理念-->
      <div class="col-12 col-md-12 col-lg-2 my-2">
        <h2 style="color:white">理念堅持</h2>
      </div>
    </div>
    <div class="row justify-content-center bg-primary">
      <div class="col-6 col-sm-12 col-lg-6 col-md-6 mt-3">
        <img src="../assets/img/raquel-moss-QRjWwQTa0Xo-unsplash.jpg" alt="guitar" class="guitar">
      </div>
      <div class="col-sm-12 col-lg-6 col-md-6 text-start mt-1 px-5 py-5 border-top"> <!--理念1-->
        <h3 class="my-3 fw-bold text-white ">原廠進貨品質優良</h3>
        <p class="text-white">品質好的樂器才有美妙的音色，無論對於初學者或是高手擁有好的樂器才有良好的演奏體驗。</p>
        <p class="text-white">——堅持原廠製作的吉他，確保樂器品質是我們的堅持</p>
      </div>
    </div>
    <div class="row justify-content-center bg-primary" > <!--理念2-->
      <div class="col-sm-12 col-lg-6 col-md-6 text-start mt-1 px-5 py-5 border-top">
        <h3 class="my-3 fw-bold text-white">出貨前調整</h3>
        <p class="text-white">為每位購買吉他的消費者，依照使用者習慣對吉他進行調整。</p>
        <p class="text-white">——每位吉他手都有自己對於吉他的堅持，出貨前依照吉他手的習慣進行調整提供最佳體驗</p>
      </div>
      <div class="col-6 col-sm-12 col-lg-6 col-md-6 mt-3">
        <img src="../assets/img/fix.jpg" alt="fix" class="guitar">
      </div>
    </div>
    <div class="row  pt-2 bg-primary"> <!--折扣碼-->
      <div class="col-12 col-md-12">
        <div class="coupon">
          <h2 class="text-white fs-2"> 輸入折扣碼 ，即可享受 95 折 <br> 折扣碼: MyGuiTar555</h2>
        </div>
      </div>
    </div>
  </div>
  <ApiLoading ref="load" />
</template>

<script>
import ApiLoading from '@/components/ApiLoading.vue';
export default {
  components: {
    ApiLoading
  },
  data () {
    return {
      articleData: [],
      bgcImg: 'background-image: url'
    };
  },
  methods: {
    goProductList () {
      this.$router.push('/productList');
    },
    getArticle () {
      this.$refs.load.doAjax();
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles`)
        .then(res => {
          this.articleData = res.data.articles;
          this.$refs.load.timeIsOut();
        })
        .catch(err => {
          console.log(err);
          this.$refs.load.timeIsOut();
        });
    }
  },
  mounted () {
    this.getArticle();
  }
};
</script>

<style lang="scss" scoped>
*{
  padding:0;
  box-sizing: border-box;
  margin: 0 ;
}
.container-fluid{
  .banner{
    height: 70vh;
    background-image: url('../assets/img/banner3.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 85%;
    position: relative;
      .bannerText{
        position: absolute;
        top:40%;
        right:10%;
        left:10%;
        h1{
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
        }
        .goProduct {
          text-align: center;
          font-size:2rem;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 100px;
          transition: all 1s 0s ease;
        }
        .goProduct:hover{
          transform: scale(1.2);
        }
      }
  }
  .introduction{
    padding:2.5rem;
      .introTitle{
        display: flex;
        justify-content: center;
        font-size:3rem;
        margin-bottom:1.5rem;
        .title{
          margin-left:1.5rem;
          font-family: 'Comforter Brush', cursive;
        }
      }
      .introGraph{
        font-size:1rem;
        line-height: 2rem;
        margin-bottom:1.5rem;
      }
      .introFooter{
        font-size:2rem;
      }
  }
  .item{
    height:45vh;
    display:flex;
    align-items: center;
    justify-content: center;
      a{
        font-size:2.5rem;
        color:white;
        text-decoration: none;
      }
      a:hover{
        color:#627364;
        transform: scale(1.2);
        transition: all 1s 0s ease;
      }
  }
  .article{
    height:45vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, .6);
    background-blend-mode: multiply;
    display:flex;
    align-items: center;
    justify-content: center;
      a{
        font-size:1.5rem;
        color:white;
        text-decoration: none;
      }
      a:hover{
        color:#627364;
        transform: scale(1.2);
        transition: all 1s 0s ease;
      }
  }
  .coupon{
    height:35vh;
    background-image: url('../assets/img/de-an-sun-b57RqS-nQ1c-unsplash.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, .6);
    background-blend-mode: multiply;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .guitar{
    width:200px;
    height:200px;
    overflow: hidden;
    border-radius: 50%;
    object-fit: cover;
  }
  h2{
    font-size:2.5rem;
  }
}
</style>
