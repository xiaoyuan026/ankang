<!-- MyFooter.vue -->
<template>
  <div class="footer">
    <div class="footer_foot">
      <div class="footer_father">
        <div class="footer_left">
          <div>建设与维护:&nbsp;陕西省《网上陕西》编辑部</div>
          <div>电子信箱:&nbsp;w87298388@163.com</div>
        </div>
        <div class="footer_right">
          <div>办公地址:&nbsp;陕西省人民政府机关大院</div>
          <div>咨询电话:&nbsp;029--87298388</div>
        </div>
      </div>
      <div class="footer_three">陕IP备05008609号</div>
      <div class="footer_four">特别声明:&nbsp;转载使用本站内容，需经本站同意，否则视为侵权，违者必究。</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-footer"
};
</script>

<style scoped>
/* 引入footer.css */
@import "../assets/base.css";
@import "../assets/MyFooter.css";
</style>
