<!-- MyHeader.vue -->
<template>
  <div class="header">
    <div class="content">
      <!-- 1:图片 -->
      <img class="header_img" src="../../public/images/top.png" alt="图片加载失败" />
      <!-- 2:导航栏 -->
      <ul class="ul_nav">
        <li>
          <a href="/">•生态旅游发展综述</a>
        </li>
        <li>
          <a href="/">•领导简历</a>
        </li>
        <li>
          <a href="/">•全域旅游示范县创建材料</a>
        </li>
        <li>
          <a href="/">•综合目标考核情况</a>
        </li>
        <li>
          <a href="/">•主要做法和计划</a>
        </li>
        <li>
          <a href="/">•2019年总结和2020年计划</a>
        </li>
        <li>
          <a href="/">•著名景点介绍</a>
        </li>
        <li>
          <a href="/">•旅游线路</a>
        </li>
        <li>
          <a href="/">•查看详情</a>
        </li>
      </ul>
      <!-- 3:视频 -->
      <div id="container">
        <video id="v2" src="../../public/banner/video.mp4" poster="../../public/banner/img.jpg"></video>
        <a id="control">
          <img src="../../public/banner/play.png" alt />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// 引入js
import { MyPlay } from "../assets/MyHeader.js";

export default {
  name: "v-header",
  data() {
    return {};
  },
  mounted() {
    MyPlay()
  }
};
</script>

<style scoped>
/* 引入heder.css */
@import "../assets/base.css";
@import "../assets/MyHeader.css";
</style>
