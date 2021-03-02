<template>
  <div id="app">
    <keep-alive exclude="Detail">
    <router-view />
    </keep-alive>
    <main-tab-bar v-show="this.$route.path.indexOf('detail')==-1"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "@/components/content/mainTable/MainTabBar";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
