<template>
  <div id="Detail">
    <transition name="fade">
      <load v-if="isLoading"></load>
    </transition>
    <nav-bar class="detail-nav" >
      <div slot="left">
        <img src="@/assets/img/detail/return.png" alt="" @click="comeback" />
      </div>
      <ul slot="center" ref="nav">
        <li
          v-for="(item, index) in title"
          :key="index"
          @click="active(index)"
          :class="{ active: clickpage == index }"
          
        >
          {{ item }}
        </li>
      </ul>
    </nav-bar>
    <scroll
      class="content"
      :pull-up-load="true"
      ref="scroll"
      :probe-type="3"
      @scroll="scrollinit"
    >
      <div class="banner" v-if="ok">
        <detail-swiper :banner="banner"></detail-swiper>
      </div>
      <detail-title :goods="goods"></detail-title>
      <detail-shop-info :shopinfo="shopinfo"></detail-shop-info>
      <detail-base :shopbase="shopbase" @imgload="imgload"></detail-base>
      <detail-goods-params
        :goodsparams="goodsparams"
        ref="params"
      ></detail-goods-params>
      <detail-comment-info
        :commentInfo="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <detail-recommend
        :recommend="recommend"
        ref="recommend"
      ></detail-recommend>
    </scroll>
  </div>
</template>

<script>
import {
  getdetail,
  Goods,
  ShopInfo,
  GoodsParams,
  getrecommend,
} from "@/network/detail";

import NavBar from "@/components/common/navbar/NavBar";
import Scroll from "@/components/common/scroll/Scroll";

import DetailTitle from "./ChildComps/DetailTitle";
import DetailSwiper from "./ChildComps/DetailSwiper";
import DetailShopInfo from "./ChildComps/DetailShopInfo";
import DetailBase from "./ChildComps/DetailBase";
import DetailGoodsParams from "./ChildComps/DetailGoodsParmas";
import DetailCommentInfo from "./ChildComps/DetailCommentInfo";
import DetailRecommend from "./ChildComps/Detailrecommend";
import Load from "@/components/content/loading/Load";
export default {
  name: "Detail",
  data() {
    return {
      ok: false,
      title: ["商品", "参数", "评论", "推荐"],
      clickpage: 0,
      cupage:0,
      isLoading: true,
      isactive:false,
      banner: [],
      goods: {},
      shopinfo: {},
      shopbase: {},
      goodsparams: {},
      commentInfo: {},
      recommend: [],
      titletheight: [],
    };
  },
  created() {
    getdetail(this.$route.params.id).then((res) => {
      const data = res.result;
      const data_shopinfo = data.shopInfo;
      this.banner = res.result.itemInfo.topImages;
      this.ok = true;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shopinfo = new ShopInfo(data_shopinfo);
      this.shopbase = data.detailInfo.detailImage[0];
      this.goodsparams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
      setTimeout(() => {
        this.isLoading = false;
      }, 800);
      // console.log(this.commentInfo);
    });
    getrecommend(this.$route.params.id).then((res) => {
      this.recommend = res.data.list;
    });
  },
  components: {
    NavBar,
    DetailSwiper,
    DetailTitle,
    DetailShopInfo,
    DetailBase,
    DetailGoodsParams,
    DetailCommentInfo,
    DetailRecommend,
    Scroll,
    Load,
 
  },
  methods: {
    comeback() {
      this.$router.go(-1);
    },
    active(index) {
      this.clickpage = index;
      this.$refs.scroll.scrollTO(0, this.titletheight[index] * -1, 600);
    },
    // scrollinit(postition) {
    //   console.log(postition.y);
    // },
    imgload() {
      // if(count===length){
      //   this.$refs.scroll.finishPullUp();
      //   this.$refs.scroll.refresh
      //   this.imgloadok = true
      // }
      this.titletheight = [];
      this.titletheight.push(0);
      this.titletheight.push(this.$refs.params.$el.offsetTop);
      this.titletheight.push(this.$refs.comment.$el.offsetTop);
      this.titletheight.push(this.$refs.recommend.$el.offsetTop);
      // console.log(this.titletheight);
    },
    scrollinit(postition) {
      for(let i =0;i<this.titletheight.length;i++)
      { 
        if(i==this.titletheight.length-1&&postition.y <this.titletheight[i]*-1){
          this.cupage = i
          return
        }
        if(postition.y <this.titletheight[i]*-1&&postition.y >this.titletheight[i+1]*-1){
           this.cupage = i
        }
    //  console.log(this.cupage);
    //  console.log(this.$refs.nav);
      }
    },
  },
};
</script>

<style scoped>
#Detail {
  height: 100vh;
  height: calc(100vh - var(--vh-offset, 0px));
  position: relative;
}
.content {
  overflow: hidden;
  position: absolute;
  z-index: 1;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: white;
  /* opacity: 0.8; */
}
.detail-nav ul {
  display: flex;
}
.detail-nav li {
  line-height: 44px;
  font-size: 14px;
  flex: 1;
}
.left img {
  vertical-align: middle;
}
.active {
  color: var(--color-tint);
}
.banner {
  height: 360px;
}
</style>