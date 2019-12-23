<template>
  <div class="con">
    <header>
      <van-nav-bar v-if="type==1" :title="pageTitle" />
      <van-nav-bar v-else :title="pageTitle" left-text="返回" left-arrow />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <!-- tabbar -->
      <van-tabbar active-color="#07c160" v-model="active" @change="tabbarChange()">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o" info="5">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
      </van-tabbar>
    </footer>

  </div>
</template>
<script>
import { Notify } from "vant";
export default {
  data() {
    return {
      active: 0,
      pageTitle: "tabbar01",
      type: 1,
      path_list: [
        "/home/tabbar01",
        "/home/tabbar02",
        "/home/tabbar03",
        "/home/tabbar04"
      ]
    };
  },
  watch: {
    $route(to, from) {
      console.log(to);
      this.pageTitle = to.name;
      this.type = to.meta.type;
    }
  },
  methods: {
    tabbarChange() {
      console.log(this.active);
      this.$router.push(this.path_list[this.active]);
    }
  }
};
</script>
<style scoped>
</style>

