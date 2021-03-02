<template>
  <!-- 主页 -->
  <div id="Home">
    <!-- nav -->
    <nav-bar class="home-nav">
      <div slot="center">主页</div>
    </nav-bar>
    <tab-control
      ref="tabcontrol1"
      :title="['流行', '新款', '精选']"
      @checkindex="checkindex"
      v-show="tabstrick"
      class="tabcontrols"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="scrollinit"
      :pull-up-load="true"
      @pullingUp="pullingUp"
    >
      <!-- 轮播图 -->
      <div class="banner" v-if="ok">
        <home-swiper
          :banner="banner"
          @swiperload.once="swiperload"
        ></home-swiper>
      </div>
      <!-- ul -->
      <div class="ul-list">
        <ui-list :recommend="recommend"></ui-list>
      </div>
      <!-- 图片视图 -->
      <feature-view></feature-view>
      <!-- table选择框 -->
        <tab-control
          ref="tabcontrol2"
          :title="['流行', '新款', '精选']"
          @checkindex="checkindex"
        ></tab-control>
      <!-- 商品 -->
      <good-list :goods="showitem"></good-list>
      <!-- 回到顶部 -->
    </scroll>
    <back-top @click.native="topClick" v-show="showtop"></back-top>
  </div>

  <!-- <h2>主页</h2> -->
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

import HomeSwiper from "./ChildComps/HomeSwiper";

import UiList from "@/components/content/uilist/UilList";
import FeatureView from "@/components/content/featureview/FeatureView";
import TabControl from "@/components/content/tabcontrol/TabControl";
import GoodList from "@/components/content/goods/GoodList";
import BackTop from "@/components/content/backtop/BackTop";

import { getHomeMultidata, getHomeGoods } from "@/network/home";
import { debounce } from "@/common/utils";
export default {
  name: "Home",
  data() {
    return {
      ok: false,
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      probeType: 0,
      tabheight: 0,
      activeheight:0,
      showtop: false,
      tabstrick: false,
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      checkpage: "pop",
    };
  },
  methods: {
    checkindex(index) {
      switch (index) {
        case 0:
          this.checkpage = "pop";
          break;
        case 1:
          this.checkpage = "new";
          break;
        case 2:
          this, (this.checkpage = "sell");
          break;
      }
      this.$refs.tabcontrol1.currentpage=index
      this.$refs.tabcontrol2.currentpage=index
      this.$refs.scroll.scrollTO(0,-this.tabheight,600)
    },
    swiperload() {
      this.tabheight = this.$refs.tabcontrol2.$el.offsetTop;
    },
    topClick() {
      this.$refs.scroll.scrollTO(0, 0);
    },
    scrollinit(postition) {
      this.tabstrick = -postition.y > this.tabheight;
      this.showtop = -postition.y > 1000;
    },
    pullingUp() {
      this.getHomeGoodsinit(this.checkpage);
      // console.log("加载更多");
      this.$refs.scroll.finishPullUp();
    },
    getHomeMultidatainit() {
      getHomeMultidata().then((res) => {
        this.banner = res.data.banner;
        this.dKeyword = res.data.dKeyword;
        this.keywords = res.data.keywords;
        this.recommend = res.data.recommend;
        this.ok = true;
        // console.log(this.recommend);
      });
    },
    getHomeGoodsinit(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // console.log(this.goods);
      });
    },
  },
  computed: {
    showitem() {
      return this.goods[this.checkpage].list;
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    UiList,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
  },
  created() {
    this.getHomeMultidatainit();
    this.getHomeGoodsinit("pop");
    this.getHomeGoodsinit("new");
    this.getHomeGoodsinit("sell");
  },
  mounted() {
    var debounceimg = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("itemimageload", () => {
      debounceimg();
    });
  },
  activated(){
    // console.log(this.activeheight);
    this.$refs.scroll.refresh()
    this.$refs.scroll.scrollTO(0,this.activeheight,0)
  },
  deactivated(){
     this.activeheight =  this.$refs.scroll.scroll.y

  }
};
</script>

<style scoped>
#Home {
  height: 100vh;
  height: calc(100vh - var(--vh-offset, 0px));
  position: relative;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
  z-index: 1;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  font-weight: 700;
}
.ul-list {
  padding-top: 16px;
  padding-bottom: 8px;
  border-bottom: 10px solid #eee;
}
.tabcontrols {
  top: 0;
  position: sticky;
  z-index: 10;
}
</style>