<!-- MySwiper.vue -->
<template>
  <div class="carousel">
    <!-- 展示窗口 -->
    <div class="show_box" id="myscroll">
      <!-- 轮播图片 -->
      <ul>
        <li v-for="(img,i) of ulImages" :key="i">
          <router-link :to="img.to" :title="img.title">
            <img :src="img.src" alt />
            <p style="color:black">{{img.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// 引入MySwiper.is
import { MySwiper } from '../assets/MySwiper.js';
export default {
  name: "my-swiper",
  data() {
    return {
      // 当前窗口宽度
      // innerWidth:window.innerWidth,
      ulImages: [
        {
          src: require("../../public/gds_img/01.jpg"),
          title: "2019年度全市文广工作先进集体",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/02.jpg"),
          title: "2019年度全市文广工作先进单位",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/03.jpg"),
          title: "陕西省旅游示范县奖牌",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/04.jpg"),
          title: "陕西旅游名片百强榜十大旅游强县",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/05.jpg"),
          title: "肖云茹题字",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/06.jpg"),
          title: "柳溪峡",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/07.jpg"),
          title: "后柳全景",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/08.jpg"),
          title: "人间佳境",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/09.jpg"),
          title: "鸳鸯瀑布",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/10.jpg"),
          title: "流泉",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/11.jpg"),
          title: "篝火晚会",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/12.jpg"),
          title: "后柳水乡屋抱树",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/13.jpg"),
          title: "清泉水岸",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/14.jpg"),
          title: "西城门",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/15.jpg"),
          title: "小桥流水",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/16.jpg"),
          title: "天台寺遗址",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/17.jpg"),
          title: "凉亭走廊",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/18.jpg"),
          title: "美丽乡村",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/19.jpg"),
          title: "锅底潭",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/20.jpg"),
          title: "石泉县后柳院子",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/21.jpg"),
          title: "他乡风情",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/22.jpg"),
          title: "飞瀑流泉",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/23.jpg"),
          title: "中坝峡谷茶座",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/24.jpg"),
          title: "儿童游乐园",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/25.jpg"),
          title: "一叶扁舟",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/26.jpg"),
          title: "农家乐",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/27.jpg"),
          title: "燕栖湖风光",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/28.jpg"),
          title: "东城门",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/29.jpg"),
          title: "大会议室",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/30.jpg"),
          title: "乐享标间",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/31.jpg"),
          title: "鬼谷岭山道",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/32.jpg"),
          title: "洞内栖息的珍稀动物——大足鼠耳蝠",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/33.jpg"),
          title: "绳子崖探险道",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/34.jpg"),
          title: "天然盆景",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/35.jpg"),
          title: "石山风景",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/36.jpg"),
          title: "一枝独秀",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/37.jpg"),
          title: "户外探索",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/38.jpg"),
          title: "回归自然",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/39.jpg"),
          title: "阖家团聚",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/40.jpg"),
          title: "风水秀丽",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/41.jpg"),
          title: "独有情怀 ",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/42.jpg"),
          title: "美好留存",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/43.jpg"),
          title: "山水相间",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/44.jpg"),
          title: "凉亭休憩",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/45.jpg"),
          title: "团结就是力量",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/46.jpg"),
          title: "驻足眺望",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/47.jpg"),
          title: "阳光明媚",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/48.jpg"),
          title: "天然氧吧",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/49.jpg"),
          title: "摩天大楼",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/50.jpg"),
          title: "激流勇进",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/51.jpg"),
          title: "马到成功",
          // 跳转其他页面
          to: "javascript:;"
        },
        {
          src: require("../../public/gds_img/52.jpg"),
          title: "江南会堂",
          // 跳转其他页面
          to: "javascript:;"
        }
      ]
    };
  },
  methods: {
    
  },
  created() {
    // 添加resize事件,当浏览器窗口变化时,自动获得新窗口宽度
    // window.addEventListener("resize", () => {
    //   this.innerWidth = window.innerWidth;
    // });
  },
  computed: {
    
  },
  mounted() {
    MySwiper()
  }
};
</script>

<style scoped>
@import "../assets/base.css";
/* 引入MySwiper.css */
@import "../assets/MySwiper.css";
</style>


