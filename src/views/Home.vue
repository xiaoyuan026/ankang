<template>
  <div class="home">
    <MyHeader></MyHeader>
    <MySwiper></MySwiper>
    <router-view></router-view>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from '@/components/MyHeader.vue';
import MyFooter from '@/components/MyFooter.vue';
import MySwiper from '@/components/MySwiper.vue'

export default {
  name: 'home',
  data() {
    return {
      
    }
  },
  components: {
    MyHeader,
    MyFooter,
    MySwiper
  }
}
</script>
<style scoped>
.home {
  width:1250px;
  margin:0 auto
}
</style>