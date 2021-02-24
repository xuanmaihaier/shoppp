<template>
  <!-- 主页 -->
  <div class="Home">
    <!-- nav -->
    <nav-bar class="home-nav">
      <div slot="center">主页</div>
    </nav-bar>
    <!-- 轮播图 -->
    <div class="banner" v-if="ok">
      <home-swiper :banner="banner"></home-swiper>
    </div>
    <!-- ul -->
    <div class="ul-list">
      <ui-list :recommend="recommend"></ui-list>
    </div>
    <!-- 图片视图 -->
    <feature-view></feature-view>
  </div>

  <!-- <h2>主页</h2> -->
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import { getHomeMultidata } from "@/network/home";
import HomeSwiper from "./ChildComps/HomeSwiper";
import UiList from "@/components/content/mainTable/UilList";
import FeatureView from "@/components/content/mainTable/FeatureView"
export default {
  name: "Home",
  data() {
    return {
      ok: false,
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    UiList,
    FeatureView,
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banner = res.data.banner;
      this.dKeyword = res.data.dKeyword;
      this.keywords = res.data.keywords;
      this.recommend = res.data.recommend;
      this.ok = true;
       console.log(this.recommend);
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
  font-weight: 700;
}
.ul-list{
  padding-top: 16px;
  padding-bottom: 8px;
  border-bottom: 10px solid #eee;
}
</style>