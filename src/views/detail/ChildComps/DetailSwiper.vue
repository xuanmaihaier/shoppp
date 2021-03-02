<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item, index) in banner" :key="index">
      <img :src="item" alt=""  />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
export default {
  name: "DetailSwiper",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        loop: false,
        // 懒加载
        lazyLoading: true,
        // lazyLoadingInPrevNext : true,
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // },
      },
    };
  },
  props: {
    banner: Array,
  },
  methods: {
    isautoplayinit() {
      this.isautoplay = this.banner.length > 1;
    },
   
  },
  
};
</script>

<style scoped>
.banner .swiper-container {
  position: relative;
  width: 100%;
  height: 100%;
}
.banner .swiper-container .swiper-slide {
  width: 100%;
  line-height: 200px;
  color: #000;
  font-size: 16px;
  text-align: center;
}
.banner .swiper-container .swiper-slide img {
  width: 100%;
}
</style>