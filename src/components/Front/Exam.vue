<template>
  <div class="frontpage">
    <div class="examheader">HHHHHHHHHHHHHeader</div>
    <div class="context">
      <div class="left-box">
        六级必过！
      </div>
      <div class="container">
        <div class="card" v-for="good in goodsList" :key="good.id">
          <h2>{{ good.goods_name }}</h2>

          <i class="fas fa-arrow-right"></i>
          <p>Start the examination.</p>
          <div class="pic"></div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="social">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-github"></i>
          </div>
          <button @click="goDisplay">
          </button>
        </div>
      </div>
      <div class="right-box">
        六级必过！
      </div>

    </div>

    <!-- <a href="https://dribbble.com/YancyMin" class="dr-url" target="_blank"><img class="dr"
                src="../../assets/images/46.png"
                alt=""></a> -->
    <!-- <a href="https://dribbble.com/YancyMin" class="dr-url" target="_blank"><img class="dr"
                src="https://cdn.dribbble.com/assets/logo-footer-hd-a05db77841b4b27c0bf23ec1378e97c988190dfe7d26e32e1faea7269f9e001b.png"
                alt=""></a> -->
  </div>
</template>





<script>
import BreadcrumbNav from "../common/BreadcrumbNav";

import {getGoodsListRequest,} from "network/goods";

export default {
  name: "List",
  components: {
    BreadcrumbNav
  },
  data() {
    return {
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 99
      },
      goodsList: [],
      total: 0,
    }
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      getGoodsListRequest(this.queryInfo).then(res => {
        let result = res.data;
        if (result.meta.status !== 200) {
          return this.alertMessage('获取商品数据失败', 'error');
        }
        this.goodsList = result.data.goods;
        this.total = result.data.total;
      });

    },
    goDisplay() {
      this.$router.push('/display');
    }
  }
}
</script>

<style lang="scss" scoped>
$bg-color: #E6E5E1;
$shdow-gray: #d3d3d5;
$orange: #DA4D1D;
$blue: #2b26c3;
$img-url1: "https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80";
$img-url2: "https://images.unsplash.com/photo-1528785198459-ec50485704c7?ixlib=rb-0.3.5&s=3a2fc3039516555bbb2e9cd2967bd321&auto=format&fit=crop&w=1537&q=80";
$img-url3: "https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80";
$img-url4: "https://images.unsplash.com/photo-1528785198459-ec50485704c7?ixlib=rb-0.3.5&s=3a2fc3039516555bbb2e9cd2967bd321&auto=format&fit=crop&w=1537&q=80";

$img-url: $img-url1, $img-url2, $img-url3, $img-url4;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

i {
  opacity: 0;
  font-size: 18px;
  color: #fff;
  will-change: transform;
  -webkit-transform: scale(0.1);
  transform: scale(0.1);
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

h2 {
  pointer-events: none;
}

body {
  background-color: $bg-color;
  width: 100vw;
  height: 100vh;
}
.el-cascader {
  width: 100%;
}

.frontpage {
  overflow: auto;
  width: 100%;
  height: 100%;
  background: #FFF;
  background-image: url("~assets/images/6663.jpg");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
}

.examheader {
  width: 98%;
  height: 15%;
  margin-left:1%;
  margin-right: 1%;
  margin-top: 1%;
  margin-bottom: 1%;
  font-size:50px;
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  box-shadow:inset 0 0 6px rgba(255, 255, 255, 0.2);
}
.context{
  display: flex;
}
.left-box{
  background-color: white;
  margin-left:1%;
  margin-right: 1%;
  width:23%;
  background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  box-shadow:inset 0 0 6px rgba(255, 255, 255, 0.2);
}
.right-box{
  background-color: white;
  margin-left:1%;
  margin-right: 1%;
  width:23%;
  background: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  box-shadow:inset 0 0 6px rgba(255, 255, 255, 0.2);
}
.container {
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #56585D;

  min-height: 500px;
  width: 50%;

  background: rgba(0, 0, 0, 0.3);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  border-radius: 20px;
  box-shadow:inset 0 0 6px rgba(255, 255, 255, 0.2);

  justify-content: center;
  align-items: center;
  flex-direction: column;

  .card {
    // boder-radius: 15px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    margin-top: 5%;
    margin-left: 10%;
    position: relative;
    width: 500px;
    height: 200px;
    background-color: #fff;
    overflow: hidden;
    margin-bottom: 4px;

    &:before {
      content: "";
      z-index: 99;
      position: absolute;
      top: -10px;
      left: 32px;
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 16px;
      background-color: $bg-color;
    }

    &:after {
      content: "";
      z-index: 99;
      position: absolute;
      bottom: -10px;
      left: 32px;
      display: block;
      width: 16px;
      height: 16px;
      border-radius: 16px;
      background-color: $bg-color;
    }

    ul {
      z-index: 99;
      position: absolute;
      left: 39px;
      top: 5px;
      list-style-type: none;

      li {
        width: 2px;
        height: 2px;
        border-radius: 2px;
        margin: 6px 0;
        background-color: $bg-color;
      }
    }

    h2 {
      z-index: 99;
      font-family: "Poppins", sans-serif;
      position: absolute;
      bottom: 0;
      right: 130px;
      font-size: 40px;
      font-weight: 700;
      color: #fff;
    }

    .fa-arrow-right {
      z-index: 100;
      position: absolute;
      right: 75px;
      bottom: 25px;
      font-size: 40px;
      cursor: pointer;
    }

    p {
      z-index: 99;
      position: absolute;
      top: 20px;
      right: 70px;
      color: #333;
      opacity: 0.7;
      font-size: 12px;
      letter-spacing: 1px;
      writing-mode: vertical-lr;
      -webkit-transition: all 0.2s ease;
      transition: all 0.2s ease;
    }

    .pic {
      z-index: 100;
      width: 400px;
      height: 200px;

      background-image: url(nth($img-url,random(length($img-url))));
      background-image: url(../../assets/images/46.png);

      background-size: 100% 100%;
      filter: grayscale(100%);
    }

    .social {
      position: absolute;
      left: 60px;
      top: 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-pack: distribute;
      justify-content: space-around;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      width: 180px;
      height: 64px;
      border-radius: 80px;
    }

    .social i:nth-of-type(1) {
      -webkit-transition-delay: 0.4s;
      transition-delay: 0.4s;
    }

    .social i:nth-of-type(2) {
      -webkit-transition-delay: 0.3s;
      transition-delay: 0.3s;
    }

    .social i:nth-of-type(3) {
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }

    .social i:nth-of-type(4) {
      -webkit-transition-delay: 0.1s;
      transition-delay: 0.1s;
    }

    &:hover i {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    button {
      position: absolute;
      right: 14px;
      bottom: 14px;
      width: 30px;
      height: 30px;
      background-color: $orange;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      outline: none;
      transition: all 0.3s ease;
      mix-blend-mode: hard-light;

      i {
        font-size: 3rem;
      }
    }

    &:hover button {
      transform: scale(16.5);
    }

    &:hover p {
      color: #fff;
    }

    &:hover .pic {
      filter: grayscale(0);

    }
  }

  .card2 {
    .pic {
      background-image: url($img-url2);
    }

    button {
      background-color: $blue;
    }
  }
}

.frontpage::-webkit-scrollbar {
  display: none;
}
.container::-webkit-scrollbar {
  display: none;
}

.dr {
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 100px;
}</style>

